import { expect, test } from "vitest";

import {
  getClubHistory,
  getSectionRecords,
  isCurrent,
  type ClubHistory,
  type CrewYear,
} from "./club-history";
import { clubs } from "./clubs";
import { events } from "./results";

const signed = (n: number | null) =>
  n === null ? "?" : n > 0 ? `+${n}` : `${n}`;

const crewYears = (list: CrewYear[], show: (entry: CrewYear) => string) =>
  list.length > 0 ? list.map(show).join(", ") : "none";

/**
 * What a club page shows, section by section: its records and the lines its
 * crews are charted on. Diffs of this pin down which club pages a change to
 * the results, the club list or the records moved.
 */
function summarise(history: ClubHistory): string {
  const { club } = history;
  const lines = [
    `${club.name} (${club.city}, ${club.slug})`,
    `current: ${isCurrent(history)}`,
  ];

  for (const section of history.sections) {
    const records = getSectionRecords(section);
    const crewLines = new Set(
      section.races.flatMap((race) => race.crews.map((crew) => crew.line)),
    );

    lines.push(
      "",
      `${section.event} ${section.gender}: ${records.firstYear} to ${records.lastYear}, ${section.races.length} races`,
      `  lines: ${[...crewLines].join(", ")}`,
      `  headships: ${crewYears(records.headships, ({ year }) => year)}`,
      `  blades: ${records.blades}, spoons: ${records.spoons}`,
      `  highest: ${records.highest.position}, ${crewYears(records.highest.races, ({ year, crew }) => `${crew.name} ${year}`)}`,
      `  rises: ${crewYears(records.rises, ({ year, crew }) => `${crew.name} ${year} ${signed(crew.gain)}`)}`,
      `  falls: ${crewYears(records.falls, ({ year, crew }) => `${crew.name} ${year} ${signed(crew.gain)}`)}`,
      `  latest: ${records.current.map((crew) => `${crew.name} ${crew.start} → ${crew.finish ?? "withdrew"}`).join(", ") || "didn't race"}`,
    );
  }

  return lines.join("\n") + "\n";
}

test.each(clubs.map((club) => [`${club.city} ${club.slug}`, club] as const))(
  "%s club page records",
  async (_, club) => {
    await expect(summarise(getClubHistory(club, events))).toMatchFileSnapshot(
      `./__snapshots__/clubs/${club.city.toLowerCase()}/${club.slug}.txt`,
    );
  },
);
