import { eventsOf, namesOf, type Club, type EventKey } from "./clubs";
import { crewResults, type CrewResult } from "./crews";
import type { ProcessedEvent } from "./types";

export type Gender = "men" | "women";

const genders: Gender[] = ["men", "women"];

/** A club's crew in one race. */
export type ClubCrew = CrewResult & {
  /**
   * Identifies the crew from year to year. A rename carries it on (New Hall I
   * and Murray Edwards I share one); clubs that raced alongside each other
   * before merging (1st and 3rd Trinity) keep their own.
   */
  line: string;
};

export type ClubRace = {
  /** As the results give it: "2025", or "1827 February March" in a year with two races. */
  year: string;
  /** Crews in each division on the first day, head division first. */
  divisions: number[];
  /** The club's crews, in starting order. */
  crews: ClubCrew[];
};

export type ClubSection = {
  event: EventKey;
  gender: Gender;
  /** Every year the event and category raced, whether or not the club did. */
  years: string[];
  /** The races the club took part in, oldest first. */
  races: ClubRace[];
};

export type ClubHistory = {
  club: Club;
  /** Sections the club raced in, in `eventsOf` order, men before women. */
  sections: ClubSection[];
};

/** A crew in a particular race, for the records. */
export type CrewYear = { year: string; crew: ClubCrew };

export type SectionRecords = {
  firstYear: string;
  lastYear: string;
  headships: CrewYear[];
  blades: number;
  spoons: number;
  /** The best finish any crew achieved, and the races it came in. */
  highest: { position: number; races: CrewYear[] };
  /** The biggest gains and losses in a single year, biggest first. */
  rises: CrewYear[];
  falls: CrewYear[];
  /** The club's crews in the latest year, or none if it didn't race. */
  current: ClubCrew[];
};

/**
 * "1827" for "1827 February March": the leading year, which URLs and year
 * pickers use.
 */
export const yearOf = (year: string) => parseInt(year, 10);

const racesIn = (races: ProcessedEvent[], event: EventKey, gender: Gender) =>
  races.filter(
    (race) =>
      race.short.toLowerCase() === event &&
      race.gender.toLowerCase() === gender,
  );

// A former name is a rename, carrying the club's lines on, when no race has it
// alongside another of the club's own names.
function renamesOf(club: Club, races: ProcessedEvent[]): Set<string> {
  const own = [club.short, ...(club.formerly ?? [])];
  const renames = new Set(club.formerly ?? []);

  for (const race of races) {
    const names = new Set(race.crews.map((crew) => crew.club));
    const present = own.filter((name) => names.has(name));
    if (present.length > 1) present.forEach((name) => renames.delete(name));
  }

  return renames;
}

function getSection(
  club: Club,
  races: ProcessedEvent[],
  event: EventKey,
  gender: Gender,
  renames: Set<string>,
): ClubSection {
  const names = new Set(namesOf(club));
  const section = racesIn(races, event, gender);
  const clubRaces: ClubRace[] = [];

  for (const race of section) {
    const crews = crewResults(race)
      .filter((crew) => names.has(crew.club))
      .map((crew) => ({
        ...crew,
        line: `${renames.has(crew.club) ? club.short : crew.club} ${crew.number}`,
      }));

    if (crews.length > 0) {
      clubRaces.push({ year: race.year, divisions: race.div_size[0], crews });
    }
  }

  const years = [
    ...new Set(section.map((race) => race.year.split(" ")[0])),
  ].sort();

  return { event, gender, years, races: clubRaces };
}

/**
 * A club's races, under all its names, in each of its events (see
 * `eventsOf`). `races` is every race, in year order: the `events` that
 * `results.ts` exports.
 */
export function getClubHistory(
  club: Club,
  races: ProcessedEvent[],
): ClubHistory {
  const events = eventsOf(club);
  const ownRaces = races.filter((race) =>
    events.includes(race.short.toLowerCase() as EventKey),
  );
  const renames = renamesOf(club, ownRaces);

  return {
    club,
    sections: events
      .flatMap((event) =>
        genders.map((gender) =>
          getSection(club, ownRaces, event, gender, renames),
        ),
      )
      .filter((section) => section.races.length > 0),
  };
}

/** The latest of a section's years: the event's, not necessarily the club's. */
export const latestYear = (section: ClubSection) =>
  section.years[section.years.length - 1];

const byYearDesc = (a: CrewYear, b: CrewYear) =>
  yearOf(b.year) - yearOf(a.year);

export function getSectionRecords(section: ClubSection): SectionRecords {
  const all: CrewYear[] = section.races.flatMap((race) =>
    race.crews.map((crew) => ({ year: race.year, crew })),
  );
  const finished = all.filter(({ crew }) => crew.finish !== null);
  const position = Math.min(...finished.map(({ crew }) => crew.finish!));

  // Ties go to the most recent year.
  const moves = finished.filter(({ crew }) => crew.gain !== 0).sort(byYearDesc);
  const rises = moves
    .filter(({ crew }) => crew.gain! > 0)
    .sort((a, b) => b.crew.gain! - a.crew.gain!)
    .slice(0, 3);
  const falls = moves
    .filter(({ crew }) => crew.gain! < 0)
    .sort((a, b) => a.crew.gain! - b.crew.gain!)
    .slice(0, 3);

  const latest = latestYear(section);
  const current = section.races
    .filter((race) => yearOf(race.year) === yearOf(latest))
    .flatMap((race) => race.crews);

  return {
    firstYear: section.races[0].year,
    lastYear: section.races[section.races.length - 1].year,
    headships: all.filter(({ crew }) => crew.head).sort(byYearDesc),
    blades: all.filter(({ crew }) => crew.blades).length,
    spoons: all.filter(({ crew }) => crew.spoons).length,
    highest: {
      position,
      races: finished
        .filter(({ crew }) => crew.finish === position)
        .sort(byYearDesc),
    },
    rises,
    falls,
    current,
  };
}

/**
 * Whether a club still races: in any of the last three years one of its
 * events ran, so missing a year or two doesn't retire it.
 */
export const isCurrent = (history: ClubHistory) =>
  history.sections.some((section) => {
    const recent = [...new Set(section.years.map(yearOf))].slice(-3);
    const last = yearOf(section.races[section.races.length - 1].year);
    return last >= recent[0];
  });
