import { useCallback, useEffect, useRef, useState } from "react";

// Each day's racing plays out over DAY_MS, then holds for PAUSE_MS so the
// day's bumps can sink in before the next starts.
const DAY_MS = 1600;
const PAUSE_MS = 500;
const STEP_MS = DAY_MS + PAUSE_MS;

const ease = (x: number) => (1 - Math.cos(Math.PI * x)) / 2;
const unease = (y: number) => Math.acos(1 - 2 * y) / Math.PI;

// The replay's clock runs in milliseconds; the chart wants days. With reduced
// motion each day appears whole rather than being drawn on.
function progressAt(ms: number, reducedMotion: boolean) {
  const day = Math.floor(ms / STEP_MS);
  const within = Math.min((ms - day * STEP_MS) / DAY_MS, 1);

  return day + (reducedMotion ? Math.floor(within) : ease(within));
}

function msAt(progress: number) {
  const day = Math.floor(progress);

  return day * STEP_MS + unease(progress - day) * DAY_MS;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export type Replay = {
  /** How far through the racing the chart is drawn, in days; undefined until
   * a replay starts, for the finished chart. */
  progress: number | undefined;
  playing: boolean;
  /** Plays from where the replay is, or from the start once it's finished. */
  play: () => void;
  pause: () => void;
  /** Moves the replay to `progress` days in, pausing it. */
  seek: (progress: number) => void;
};

/**
 * Plays a bumps chart's racing back a day at a time, for its `progress`
 * prop. Starting over with new results is the caller's job: key the
 * component that uses it by the event.
 */
export function useReplay(days: number): Replay {
  const [progress, setProgress] = useState<number | undefined>(undefined);
  const [playing, setPlaying] = useState(false);
  const clock = useRef(0);

  useEffect(() => {
    if (!playing) return;

    const reducedMotion = prefersReducedMotion();
    let last: number | null = null;
    let frame = requestAnimationFrame(function tick(now) {
      clock.current += last === null ? 0 : now - last;
      last = now;

      const next = Math.min(progressAt(clock.current, reducedMotion), days);
      setProgress(next);

      if (next >= days) {
        setPlaying(false);
      } else {
        frame = requestAnimationFrame(tick);
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [playing, days]);

  const play = useCallback(() => {
    if (progress === undefined || progress >= days) {
      clock.current = 0;
      setProgress(0);
    }
    setPlaying(true);
  }, [progress, days]);

  const pause = useCallback(() => setPlaying(false), []);

  const seek = useCallback((to: number) => {
    setPlaying(false);
    clock.current = msAt(to);
    setProgress(to);
  }, []);

  return { progress, playing, play, pause, seek };
}
