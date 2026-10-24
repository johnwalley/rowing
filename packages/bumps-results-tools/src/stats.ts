import { desc, from } from "arquero";

import { range, updateStats } from "./utils";

import { clubOf, type EventKey } from "./clubs";
import type { ProcessedEvent } from "./types";

type StatCounter<Label = unknown> = { total: number; labels: Label[] };

export type EventInfo = { gender: string; year: string };

/** The name a crew's results count under: its club's, if it has one. */
const creditedTo = (event: ProcessedEvent, name: string) =>
  clubOf(event.short.toLowerCase() as EventKey, name)?.short ?? name;

/**
 * The crew that finished head, as its index in `event.crews`: the best-placed
 * 1st boat that didn't withdraw. Undefined in an incomplete event, or one
 * flagged `skip_headship` (the early Mays, raced several times a year).
 */
export function headOf(event: ProcessedEvent): number | undefined {
  if (!event.full_set || event.flags.includes("skip_headship")) {
    return undefined;
  }

  let best: { index: number; finish: number } | undefined;

  event.crews.forEach((crew, index) => {
    if (crew.number !== 1 || crew.gain === null) return;
    const finish = index - crew.gain;
    if (!best || finish < best.finish) best = { index, finish };
  });

  return best?.index;
}

/**
 * The crew at head after each day's racing, as its index in `event.crews`.
 * Undefined on a day the head division didn't race.
 */
function dailyHeads(event: ProcessedEvent): (number | undefined)[] {
  const heads: (number | undefined)[] = Array(event.days).fill(undefined);

  event.crews.forEach((_, start) => {
    let pos = start;

    for (const day of range(0, event.days)) {
      const move = event.move[day][pos];
      if (move === null || move === undefined) break;
      pos -= move;
      if (pos === 0 && event.completed[day][0]) heads[day] = start;
    }
  });

  return heads;
}

/**
 * Computes and aggregates statistics from an array of bumping events.
 *
 * @remarks
 * This function iterates through each event to process day-by-day performance data, crew movements,
 * withdrawals, and other race metrics. It aggregates the results overall (in the `all` property) and per club
 * (in the `club` property). For each event, the function tracks various details such as:
 * - Daily adjusted positions based on moves, withdrawals, and skipped days.
 * - Set gain values for crews.
 * - Attainment of blades.
 * - Crew counts per event and per club.
 * - Headship counts (see {@link headOf}).
 *
 * If the `combine` flag is set to true, each name is credited to the club it belongs to (see `clubOf`).
 *
 * @param events - An array of Event objects containing bumping event data.
 * @param combine - A boolean flag indicating whether to credit former names to their clubs (default is false).
 *
 * @returns An object containing:
 * - An optional `set` representing the event set identifier.
 * - An optional `years` array reflecting the involved years.
 * - A `club` record that maps each club name to its detailed statistics, including:
 *   - `day`: A record of day-level performance counts.
 *   - `set`: A record of set-level gain counts.
 *   - `blades`: An array recording instances where blades were earned.
 *   - `crews`: A record of crew counts per event.
 *   - `headships`: Headships of the club's 1st boats, under `"1"`.
 *   - `years`: An array of years the club participated.
 *   - `count`: The total number of events involving the club.
 *   - `withdrew`: An object capturing withdrawal statistics.
 * - An `all` object summarizing the overall statistics across all events, structured similarly to each club's statistics.
 *  */
export function getStats(events: ProcessedEvent[], combine = false) {
  const stats: {
    set?: string;
    years?: string[];
    club: Record<
      string,
      {
        day: Record<string, StatCounter>;
        set: Record<string, StatCounter>;
        blades: unknown[];
        crews: Record<string, StatCounter>;
        headships: Record<string, StatCounter<EventInfo>>;
        years: string[];
        count: number;
        withdrew: StatCounter;
      }
    >;
    all: {
      day: Record<string, StatCounter>;
      set: Record<string, StatCounter>;
      blades: unknown[];
      crews: Record<string, StatCounter>;
      clubs: Record<string, StatCounter>;
      headships: Record<string, StatCounter>;
      years: string[];
      count: number;
      withdrew: StatCounter;
    };
  } = {
    club: {},
    all: {
      day: {},
      set: {},
      blades: [],
      crews: {},
      clubs: {},
      headships: {},
      years: [],
      count: 0,
      withdrew: { total: 0, labels: [] },
    },
  };

  for (const event of events) {
    const eventInfo: EventInfo = { gender: event.gender, year: event.year };
    const overallStats = stats.all;
    const clubCount: Record<string, StatCounter> = {};
    const names: string[] = [];

    // Statistics count only events that raced every day.
    if (!event.full_set) {
      continue;
    }

    if (!("set" in stats)) {
      stats.set = event.set;
    }

    if (!("years" in stats)) {
      stats.years = [];
    }

    const missing = [];
    let skip = 0;

    for (const day of range(0, event.days)) {
      const withdrawn = [];
      const virtual = [];

      for (const num of range(0, event.crews.length - skip)) {
        if (event.move[day][num] === null) {
          withdrawn.push(num);
          skip += 1;
        }

        if (event.skip[day][num]) {
          virtual.push([num, num - event.move[day][num]!]);
        }
      }

      missing.push({ withdrawn: withdrawn, virtual: virtual });
    }

    for (const num of range(0, event.crews.length)) {
      let pos = num;
      const crew = event.crews[num];

      const clubName = combine ? creditedTo(event, crew.club) : crew.club;
      names.push(clubName);

      if (clubName.length === 0) {
        continue;
      }

      if (!(clubName in stats.club)) {
        stats.club[clubName] = {
          day: {},
          set: {},
          blades: [],
          crews: {},
          headships: {},
          years: [],
          count: 0,
          withdrew: { total: 0, labels: [] },
        };

        updateStats(stats.club[clubName], "withdrew", 0);
      }

      const club = stats.club[clubName];
      updateStats(clubCount, clubName, 1);
      club.count += 1;

      if (!club.years.includes(event.year)) {
        club.years.push(event.year);
      }

      let gained = 0;

      for (const day of range(0, event.days)) {
        const crewInfo = {
          club: clubName,
          number: crew.number,
          gender: event.gender,
          day: day,
          year: event.year,
        };

        let m = event.move[day][pos];

        if (m === null) {
          updateStats(overallStats, "withdrew", 1, crewInfo);
          updateStats(club, "withdrew", 1, crewInfo);
          break;
        }

        let divHead = 0;
        let div = 0;

        while (div < event.div_size[day].length - 1) {
          if (pos < divHead + event.div_size[day][div]) {
            break;
          }

          divHead += event.div_size[day][div];
          div += 1;
        }

        let divRaced = event.completed[day][div];

        if (!divRaced && div > 0 && pos === divHead) {
          divRaced = event.completed[day][div - 1];
        }

        // Add stats if the crew didn't skip this day
        if (!event.skip[day][num] && divRaced) {
          let adjust = 0;

          if (missing[day] === undefined) {
            console.log(missing);
          }

          for (const n of missing[day].withdrawn) {
            if (n < pos) {
              adjust -= 1;
            }
          }

          for (const [s, e] of missing[day].virtual) {
            if (s < pos && e > pos - m) {
              adjust -= 1;
            }

            if (s > pos - m && e < pos - m) {
              adjust += 1;
            }
          }

          updateStats(overallStats.day, String(m + adjust), 1, crewInfo);
          updateStats(club.day, String(m + adjust), 1, crewInfo);

          gained += m + adjust;
        }

        pos -= m;
      }

      const crewInfo = {
        club: clubName,
        number: crew.number,
        gender: event.gender,
        year: event.year,
      };

      updateStats(overallStats.set, String(gained), 1, crewInfo);
      updateStats(club.set, String(gained), 1, crewInfo);

      if (crew.blades) {
        overallStats.blades.push(crewInfo);
        club.blades.push(crewInfo);
      }
    }

    updateStats(overallStats.crews, String(event.crews.length), 1, eventInfo);

    for (const club in clubCount) {
      updateStats(
        stats.club[club].crews,
        String(clubCount[club].total),
        1,
        eventInfo,
      );
      updateStats(overallStats.clubs, String(clubCount[club].total), 1, {
        club: club,
        year: parseInt(event.year),
        gender: event.gender,
      });
    }

    const head = headOf(event);

    if (head !== undefined && names[head]) {
      eventInfo.year = eventInfo.year.split(" ")[0];
      updateStats(stats.club[names[head]].headships, "1", 1, eventInfo);
    }
  }

  return stats;
}

type ClubStats = ReturnType<typeof getStats>["club"][string];

type HeadDays = {
  days: number;
  /** The longest run of consecutive racing days at head, and its years. */
  longest: number;
  start: number;
  end: number;
};

/**
 * Each club's days at head across `events`, which must be in year order: the
 * days its crews finished at head, counting only complete events. A run at
 * head carries on from one year to the next until another club takes it.
 */
function getHeadDays(events: ProcessedEvent[]): Record<string, HeadDays> {
  const clubs: Record<string, HeadDays> = {};
  let run: { club: string; days: number; start: number } | undefined;

  for (const event of events) {
    if (!event.full_set) continue;

    const year = parseInt(event.year);

    for (const index of dailyHeads(event)) {
      if (index === undefined) continue;

      const club = creditedTo(event, event.crews[index].club);
      clubs[club] ??= { days: 0, longest: 0, start: year, end: year };
      clubs[club].days += 1;

      run =
        run?.club === club
          ? { ...run, days: run.days + 1 }
          : { club, days: 1, start: year };

      if (run.days > clubs[club].longest) {
        clubs[club].longest = run.days;
        clubs[club].start = run.start;
        clubs[club].end = year;
      }
    }
  }

  return clubs;
}

/**
 * The statistics pages' tables for one event and category: clubs ranked by
 * headships, crews entered, total and continuous days at head, and blades.
 * Each crew counts for the club it belongs to (see `clubOf`).
 */
export function getRankings(events: ProcessedEvent[]) {
  const stats = getStats(events, true);
  const head = getHeadDays(events);

  const rHeadships: Record<string, ClubStats["headships"][string]> = {};
  const rCrewsEntered: Record<string, number> = {};
  const rHeadDays: Record<string, HeadDays> = {};
  const rHeadLong: Record<string, HeadDays> = {};
  const rBladesAwarded: Record<string, number> = {};

  // Generate rankings
  for (const club in stats.club) {
    if ("1" in stats.club[club].headships) {
      rHeadships[club] = stats.club[club].headships["1"];
    }

    if (club in head) {
      rHeadDays[club] = head[club];
      rHeadLong[club] = head[club];
    }

    rCrewsEntered[club] = stats.club[club].count;

    if (stats.club[club].blades.length > 0) {
      rBladesAwarded[club] = stats.club[club].blades.length;
    }
  }

  return {
    headships: from(
      Object.entries(rHeadships).map(([club, res]) => ({
        club: club,
        headships: res.total,
        lastYear: res.labels[res.labels.length - 1].year,
      })),
    )
      .orderby(desc("headships"), desc("lastYear"))
      .objects(),
    crewsEntered: from(
      Object.entries(rCrewsEntered).map(([club, res]) => ({
        club: club,
        count: res,
      })),
    )
      .orderby(desc("count"))
      .objects(),
    headDays: from(
      Object.entries(rHeadDays).map(([club, res]) => ({
        club: club,
        days: res.days,
      })),
    )
      .orderby(desc("days"))
      .objects(),
    headLong: from(
      Object.entries(rHeadLong).map(([club, res]) => ({
        club: club,
        days: res.longest,
        span:
          res.start !== res.end ? `${res.start} - ${res.end}` : `${res.start}`,
      })),
    )
      .orderby(desc("days"))
      .objects(),
    bladesAwarded: from(
      Object.entries(rBladesAwarded).map(([club, res]) => ({
        club: club,
        count: res,
      })),
    )
      .orderby(desc("count"))
      .objects(),
  };
}
