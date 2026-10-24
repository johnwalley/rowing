import { expect, test } from "vitest";

import {
  clubs,
  eventsOf,
  namesOf,
  unlisted,
  type City,
  type EventKey,
} from "./clubs";
import { events as races } from "./results";

// A name in the results qualifies for a club page once it has raced in this
// many years, or in an event's latest year.
const MIN_YEARS = 5;

const EVENTS: EventKey[] = ["eights", "lents", "mays", "torpids", "town"];

const yearOf = (year: string) => parseInt(year, 10);

const racesIn = (event: EventKey) =>
  races.filter((race) => race.short.toLowerCase() === event);

/** Every name that raced in `event`, with the years it raced. */
function namesRaced(event: EventKey): Map<string, Set<number>> {
  const years = new Map<string, Set<number>>();

  for (const race of racesIn(event)) {
    for (const crew of race.crews) {
      if (!crew.club) continue;
      const raced = years.get(crew.club) ?? new Set<number>();
      raced.add(yearOf(race.year));
      years.set(crew.club, raced);
    }
  }

  return years;
}

/** The names that raced in `event`'s latest year, in either category. */
function namesRacingNow(event: EventKey): Set<string> {
  const names = new Set<string>();

  for (const gender of ["Men", "Women"]) {
    const inGender = racesIn(event).filter((race) => race.gender === gender);
    const latest = Math.max(...inGender.map((race) => yearOf(race.year)));

    for (const race of inGender) {
      if (yearOf(race.year) !== latest) continue;
      for (const crew of race.crews) if (crew.club) names.add(crew.club);
    }
  }

  return names;
}

test("every name that qualifies for a club page has a club", () => {
  const problems: string[] = [];

  for (const event of EVENTS) {
    const now = namesRacingNow(event);
    const owned = new Set(
      clubs
        .filter((club) => eventsOf(club).includes(event))
        .flatMap((club) => namesOf(club)),
    );

    for (const [name, years] of namesRaced(event)) {
      const qualifies = years.size >= MIN_YEARS || now.has(name);
      if (qualifies && !owned.has(name) && !unlisted[event]?.includes(name)) {
        problems.push(`${event}: "${name}" raced in ${years.size} years`);
      }
    }
  }

  // A new or renamed club needs an entry in `clubs`, or one in `unlisted` if
  // it deliberately has no page.
  expect(problems).toEqual([]);
});

test("every name in the club list raced", () => {
  const problems: string[] = [];
  const raced = new Map(EVENTS.map((event) => [event, namesRaced(event)]));

  for (const club of clubs) {
    for (const name of namesOf(club)) {
      if (!eventsOf(club).some((event) => raced.get(event)!.has(name))) {
        problems.push(`${club.slug}: "${name}" in ${eventsOf(club)}`);
      }
    }
  }

  for (const event of EVENTS) {
    for (const name of unlisted[event] ?? []) {
      if (!raced.get(event)!.has(name)) {
        problems.push(`unlisted in ${event}: "${name}"`);
      }
    }
  }

  expect(problems).toEqual([]);
});

test("a name is only one club's own in an event", () => {
  const problems: string[] = [];

  for (const event of EVENTS) {
    const owners = new Map<string, string[]>();

    for (const club of clubs.filter((club) => eventsOf(club).includes(event))) {
      // Joint crews belong to every partner.
      for (const name of [club.short, ...(club.formerly ?? [])]) {
        owners.set(name, [...(owners.get(name) ?? []), club.slug]);
      }
    }

    for (const [name, slugs] of owners) {
      if (slugs.length > 1) {
        problems.push(`${event}: "${name}" belongs to ${slugs.join(" and ")}`);
      }
    }
  }

  expect(problems).toEqual([]);
});

test("no two clubs in a city share a slug", () => {
  for (const city of ["Cambridge", "Oxford"] as City[]) {
    const slugs = clubs
      .filter((club) => club.city === city)
      .map((club) => club.slug);

    expect(slugs.filter((slug, i) => slugs.indexOf(slug) !== i)).toEqual([]);
  }
});
