import { clubOf, type EventKey } from "./clubs";
import { crewResults } from "./crews";
import type { ProcessedEvent } from "./types";

export { headOf } from "./crews";

/** The name a crew's results count under: its club's, if it has one. */
const creditedTo = (event: ProcessedEvent, name: string) =>
  clubOf(event.short.toLowerCase() as EventKey, name)?.short ?? name;

type HeadDays = {
  days: number;
  /** The longest run of consecutive racing days at head, and its years. */
  longest: number;
  start: number;
  end: number;
};

/**
 * Each club's days at head across `events`, which must be in year order: the
 * days its crews finished at head, counting only days the head division
 * raced. A run at head carries on from one year to the next until another
 * club takes it.
 */
function getHeadDays(events: ProcessedEvent[]): Map<string, HeadDays> {
  const clubs = new Map<string, HeadDays>();
  let run: { club: string; days: number; start: number } | undefined;

  for (const event of events) {
    const year = parseInt(event.year);
    const crews = crewResults(event);

    for (let day = 0; day < event.days; day++) {
      if (!event.completed[day][0]) continue;

      const head = crews.find((crew) => crew.positions[day] === 1);
      if (!head) continue;

      const club = creditedTo(event, head.club);
      const record = clubs.get(club) ?? {
        days: 0,
        longest: 0,
        start: year,
        end: year,
      };
      clubs.set(club, record);
      record.days += 1;

      run =
        run?.club === club
          ? { ...run, days: run.days + 1 }
          : { club, days: 1, start: year };

      if (run.days > record.longest) {
        record.longest = run.days;
        record.start = run.start;
        record.end = year;
      }
    }
  }

  return clubs;
}

/** Sorts rows biggest first by `key`, keeping ties in the order given. */
const biggestFirst = <Row extends Record<K, number>, K extends keyof Row>(
  rows: Row[],
  key: K,
) => rows.sort((a, b) => b[key] - a[key]);

/**
 * The statistics pages' tables for one event and category: clubs ranked by
 * headships, crews entered, total and continuous days at head, and blades.
 * Only complete events count, and each crew counts for the club it belongs
 * to (see `clubOf`). Ties keep the order in which the clubs first raced.
 */
export function getRankings(events: ProcessedEvent[]) {
  const complete = events.filter((event) => event.full_set);
  const clubs = new Map<
    string,
    { crews: number; blades: number; headships: string[] }
  >();

  for (const event of complete) {
    for (const crew of crewResults(event)) {
      if (!crew.club) continue;

      const name = creditedTo(event, crew.club);
      const club = clubs.get(name) ?? { crews: 0, blades: 0, headships: [] };
      clubs.set(name, club);

      club.crews += 1;
      if (crew.blades) club.blades += 1;
      if (crew.head) club.headships.push(event.year.split(" ")[0]);
    }
  }

  const head = getHeadDays(complete);
  const rows = [...clubs].map(([club, stats]) => ({
    club,
    ...stats,
    head: head.get(club),
  }));

  return {
    headships: rows
      .filter(({ headships }) => headships.length > 0)
      .map(({ club, headships }) => ({
        club,
        headships: headships.length,
        lastYear: headships[headships.length - 1],
      }))
      .sort(
        (a, b) =>
          b.headships - a.headships || Number(b.lastYear) - Number(a.lastYear),
      ),
    crewsEntered: biggestFirst(
      rows.map(({ club, crews }) => ({ club, count: crews })),
      "count",
    ),
    headDays: biggestFirst(
      rows.flatMap(({ club, head }) =>
        head ? [{ club, days: head.days }] : [],
      ),
      "days",
    ),
    headLong: biggestFirst(
      rows.flatMap(({ club, head }) =>
        head
          ? [
              {
                club,
                days: head.longest,
                span:
                  head.start !== head.end
                    ? `${head.start} - ${head.end}`
                    : `${head.start}`,
              },
            ]
          : [],
      ),
      "days",
    ),
    bladesAwarded: biggestFirst(
      rows
        .filter(({ blades }) => blades > 0)
        .map(({ club, blades }) => ({ club, count: blades })),
      "count",
    ),
  };
}

/** The statistics pages' tables, by statistic. */
export type Rankings = ReturnType<typeof getRankings>;

export type Statistic = keyof Rankings;
