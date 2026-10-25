import { Event } from "../types";

export type Track = {
  blades: boolean;
  highlight: boolean;
  /** Whether the crew left the event, rather than its racing being unknown. */
  withdrawn: boolean;
  /**
   * Where the crew is at the start and after each day it raced, days it sat
   * out included. Ends early if the crew left the event or the results so
   * far stop.
   */
  points: number[][];
};

/**
 * Follows each crew through the event, in the division's coordinates, for
 * drawing where each crew has got to partway through a replay.
 */
export function calculateTracks(
  event: Event,
  scale: number,
  blades = false,
): Track[] {
  return event.crews.map((crew, crewNum) => {
    let c = crewNum;
    let y = crewNum * scale + scale / 2;
    const points = [[0, y]];

    for (let day = 0; day < event.days; day++) {
      const up = event.move[day][c];

      if (up === null || up === undefined) break;

      y -= up * scale;
      c -= up;
      points.push([(day + 1) * scale, y]);
    }

    return {
      blades: blades && crew.blades,
      highlight: crew.highlight,
      withdrawn: crew.withdrawn,
      points,
    };
  });
}

/**
 * Where a track has got to `progress` days in, or null if the crew left the
 * event before then. Past the last result, a crew still in the event waits
 * where it got to.
 */
export function pointAlongTrack(
  track: Track,
  progress: number,
  scale: number,
): number[] | null {
  const last = track.points.length - 1;

  if (progress > last) return track.withdrawn ? null : track.points[last];

  if (last === 0 || progress <= 0) return track.points[0];

  const day = Math.min(Math.floor(progress), last - 1);

  const [x0, y0] = track.points[day];
  const [, y1] = track.points[day + 1];
  const t = progress - day;

  return [x0 + t * scale, y0 + t * (y1 - y0)];
}
