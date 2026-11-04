import { describe, expect, test } from "vitest";
import { calculateJoin, markJointYearHeadship } from "@/utils/calculate-join";
import { deepFreeze, formatPoints, sequences } from "./fixtures";

const pairs = Object.values(sequences).flatMap((sequence) =>
  sequence.slice(1).map((event2, i) => ({
    name: `${sequence[i].year} -> ${event2.year}`,
    event: sequence[i],
    event2,
  })),
);

describe("calculateJoin", () => {
  test.each(pairs)("$name", ({ event, event2 }) => {
    const join = calculateJoin(event, event2, 0, 16, 32);

    expect({
      ...join,
      lines: join.lines.map(({ points }) => formatPoints(points)),
      polylines: join.polylines.map(formatPoints),
      text: join.text.map(({ label, pos }) => `${label} @ ${pos.join(",")}`),
    }).toMatchSnapshot();
  });

  test.each(pairs)(
    "$name: highlights the line from where a crew finished to where it starts next",
    ({ event, event2 }) => {
      // A crew that moved, so the line from its start position would differ
      const crew = event.crews.find(
        (crew) =>
          crew.gain && event2.crews.some((next) => next.start === crew.start),
      );

      if (!crew) return;

      const finished = event.crews.indexOf(crew) - crew.gain!;
      const starts = event2.crews.findIndex(
        (next) => next.start === crew.start,
      );
      const highlighted = {
        ...event2,
        crews: event2.crews.map((next, i) => ({
          ...next,
          highlight: i === starts,
        })),
      };

      const join = calculateJoin(event, highlighted, 0, 16, 32);
      const lines = join.lines.filter((line) => line.highlight);

      expect(lines).toHaveLength(1);
      expect(lines[0].points).toEqual([
        [0, 16 * finished + 8],
        [32, 16 * starts + 8],
      ]);
    },
  );
});

describe("markJointYearHeadship", () => {
  const [february, aprilMay] = sequences.mays1845_1846;

  test("awards blades to the crew that finishes head of the second event", () => {
    const marked = markJointYearHeadship(february, aprilMay);
    const head = aprilMay.crews[0].end;

    marked.crews.forEach((crew, i) => {
      expect(crew).toEqual(
        crew.start === head
          ? { ...february.crews[i], blades: true }
          : february.crews[i],
      );
    });
    expect(marked.crews.find((crew) => crew.start === head)?.blades).toBe(true);
  });

  test("does not mutate its inputs", () => {
    const event = deepFreeze(structuredClone(february));
    const event2 = deepFreeze(structuredClone(aprilMay));

    expect(() => markJointYearHeadship(event, event2)).not.toThrow();
  });

  test("returns the event unchanged when the head crew is not found", () => {
    const event2 = {
      ...aprilMay,
      crews: [{ ...aprilMay.crews[0], end: "Nobody" }],
    };

    expect(markJointYearHeadship(february, event2)).toBe(february);
  });
});
