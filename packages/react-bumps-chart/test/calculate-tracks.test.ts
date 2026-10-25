import { describe, expect, test } from "vitest";
import { calculateTracks, pointAlongTrack } from "@/utils/calculate-tracks";
import { calculateDivisions } from "@/utils/calculate-divisions";
import { events } from "./fixtures";

describe("calculateTracks", () => {
  test.each(Object.entries(events))(
    "%s follows the division's lines",
    (_name, event) => {
      const tracks = calculateTracks(event, 16);
      const { polylines, skipped } = calculateDivisions(event, 16, 0, 0);

      // Every point of every line drawn lies on its crew's track
      const onATrack = new Set(
        tracks.flatMap((track) => track.points.map((point) => `${point}`)),
      );
      for (const line of [...polylines.map((l) => l.points), ...skipped]) {
        for (const point of line) {
          expect(onATrack).toContain(`${point}`);
        }
      }
    },
  );

  test("ends a withdrawn crew's track on the day it left", () => {
    const tracks = calculateTracks(events.torpids1858_men, 16);
    const withdrawn = tracks.filter((track) => track.withdrawn);

    expect(withdrawn).toHaveLength(2);
    for (const track of withdrawn) {
      expect(track.points.length).toBeLessThan(events.torpids1858_men.days + 1);
    }
  });

  test("only marks blades when asked to", () => {
    const event = events.mays2023_men;

    expect(calculateTracks(event, 16).some((t) => t.blades)).toBe(false);
    expect(calculateTracks(event, 16, true).some((t) => t.blades)).toBe(true);
  });
});

describe("pointAlongTrack", () => {
  const track = {
    blades: false,
    highlight: false,
    withdrawn: false,
    points: [
      [0, 40],
      [16, 24],
      [32, 24],
    ],
  };

  test("starts at the start", () => {
    expect(pointAlongTrack(track, 0, 16)).toEqual([0, 40]);
  });

  test("moves along a day's line", () => {
    expect(pointAlongTrack(track, 0.25, 16)).toEqual([4, 36]);
    expect(pointAlongTrack(track, 1.5, 16)).toEqual([24, 24]);
  });

  test("finishes at the end", () => {
    expect(pointAlongTrack(track, 2, 16)).toEqual([32, 24]);
  });

  test("waits at the last result for a crew still racing", () => {
    expect(pointAlongTrack(track, 3.5, 16)).toEqual([32, 24]);
  });

  test("drops a crew that withdrew", () => {
    expect(pointAlongTrack({ ...track, withdrawn: true }, 2.5, 16)).toBeNull();
  });
});
