import { events as processed } from "bumps-results-tools/results";
import { genderOf, keyOf } from "bumps-results-tools/sets";
import type { ProcessedEvent } from "bumps-results-tools/types";

import {
  chartPath,
  events,
  genders,
  raceTitle,
  type Gender,
  type RaceLink,
  type ResultsSummary,
  type EventKey,
} from "@/lib/utils";

// Every race, processed from the tools' TG files when the site builds, by
// event and category, oldest file first. A `ProcessedEvent` is also the
// chart's `Event`, so races go straight to react-bumps-chart.
export const results = Object.fromEntries(
  events.map((event) => [
    event,
    Object.fromEntries(
      genders.map((gender) => [
        gender,
        processed.filter(
          (race) => keyOf(race) === event && genderOf(race) === gender,
        ),
      ]),
    ),
  ]),
) as Record<EventKey, Record<Gender, ProcessedEvent[]>>;

// Some historical entries store compound year strings such as
// "1827 February March" (two races in one season). The leading 4-digit year is
// the canonical key used by URLs and pickers, so collapse to that. See `yearOf`
// in @/lib/utils.
const leadYear = (year: string): string => year.split(" ")[0];

/** A year's races, in order: one, or two in the early mays/men years. */
export const racesIn = (event: EventKey, gender: Gender, year: string) =>
  results[event][gender].filter((race) => leadYear(race.year) === year);

/**
 * What tells a year's races apart: "May" for "1838 May". A year with one race
 * has none, so each label is empty.
 */
export const raceLabelsIn = (event: EventKey, gender: Gender, year: string) => {
  const races = racesIn(event, gender, year);
  return races.length > 1
    ? races.map((race) => race.year.slice(year.length + 1))
    : [];
};

/**
 * The races either side of a chart page's, for its previous and next links. A
 * year with two races is two steps. A year with no results yet (the current
 * year, before they're posted) comes after the last race.
 */
export function raceNeighbours(
  event: EventKey,
  gender: Gender,
  year: string,
  race: number,
): { previous: RaceLink | null; next: RaceLink | null } {
  const steps: { year: string; race: number }[] = [];

  for (const { year: raw } of results[event][gender]) {
    const lead = leadYear(raw);
    const last = steps.at(-1);
    steps.push({ year: lead, race: last?.year === lead ? last.race + 1 : 1 });
  }

  const link = (step: (typeof steps)[number] | undefined): RaceLink | null => {
    if (!step) return null;
    const label = raceLabelsIn(event, gender, step.year)[step.race - 1];
    return {
      path: chartPath(event, gender, step.year, step.race),
      title: raceTitle(event, step.year, label),
    };
  };

  const index = steps.findIndex(
    (step) => step.year === year && step.race === race,
  );

  return index === -1
    ? { previous: link(steps.at(-1)), next: null }
    : { previous: link(steps[index - 1]), next: link(steps[index + 1]) };
}

/**
 * The chart page of the race whose year is `year` as the results give it:
 * "1838 May" is the second race of 1838, at "/charts/mays/men/1838/2".
 */
export function raceChartPath(event: EventKey, gender: Gender, year: string) {
  const lead = leadYear(year);
  const race = racesIn(event, gender, lead).findIndex((r) => r.year === year);
  return chartPath(event, gender, lead, race + 1);
}

// The per-event/gender summary of available years, derived at build time from
// the source results above so it can never drift from the actual data. For each
// event: `men`/`women` are the sorted unique years for that gender, `all` is
// their union, and `split` lists years that held more than one race (the early
// compound-year seasons).
export const summary: ResultsSummary = Object.fromEntries(
  events.map((event) => {
    const all = new Set<string>();
    const split = new Set<string>();
    const byGender = {} as Record<Gender, string[]>;

    for (const gender of genders) {
      const counts = new Map<string, number>();
      for (const result of results[event][gender]) {
        const year = leadYear(result.year);
        counts.set(year, (counts.get(year) ?? 0) + 1);
      }
      byGender[gender] = [...counts.keys()].sort();
      for (const [year, count] of counts) {
        all.add(year);
        if (count > 1) split.add(year);
      }
    }

    return [
      event,
      { ...byGender, all: [...all].sort(), split: [...split].sort() },
    ];
  }),
) as ResultsSummary;
