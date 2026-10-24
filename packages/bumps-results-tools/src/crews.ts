import type { ProcessedEvent } from "./types";
import { range } from "./utils";

/** One crew's result in one race. Positions count from 1, the head. */
export type CrewResult = {
  /** As the results name the crew: "New Hall II". */
  name: string;
  /** As the results name its club: "New Hall". */
  club: string;
  number: number;
  start: number;
  /** After each day's racing; null once the crew has withdrawn. */
  positions: (number | null)[];
  /** Null when the crew withdrew. */
  finish: number | null;
  gain: number | null;
  /** Up every day. Only awarded in a complete event, as are spoons. */
  blades: boolean;
  /** Down every day. */
  spoons: boolean;
  /** Finished head of the river: see {@link headOf}. */
  head: boolean;
};

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

// The crew starting at `index`'s position after each day, following its
// moves; null once it withdraws.
function dailyPositions(
  event: ProcessedEvent,
  index: number,
): (number | null)[] {
  const positions: (number | null)[] = [];
  let position: number | null = index;

  for (const day of range(0, event.days)) {
    const move: number | null | undefined =
      position === null ? null : event.move[day]?.[position];
    position = move === null || move === undefined ? null : position! - move;
    positions.push(position === null ? null : position + 1);
  }

  return positions;
}

const cache = new WeakMap<ProcessedEvent, CrewResult[]>();

/** Every crew's result in `event`, in starting order. */
export function crewResults(event: ProcessedEvent): CrewResult[] {
  let crews = cache.get(event);

  if (!crews) {
    const head = headOf(event);

    crews = event.crews.map((crew, index) => {
      const positions = dailyPositions(event, index);

      return {
        name: crew.num_name.trim(),
        club: crew.club,
        number: crew.number,
        start: index + 1,
        positions,
        finish: crew.gain === null ? null : index - crew.gain + 1,
        gain: crew.gain,
        blades: event.full_set && crew.blades,
        spoons:
          event.full_set &&
          positions.every(
            (position, day) =>
              position !== null &&
              position > (day === 0 ? index + 1 : positions[day - 1]!),
          ),
        head: index === head,
      };
    });

    cache.set(event, crews);
  }

  return crews;
}
