import { PauseIcon, PlayIcon, ResetIcon } from "@radix-ui/react-icons";
import { useId } from "react";

import { Button } from "@/components/ui/button";
import type { Replay } from "@/hooks/use-replay";

type ReplayControlsProps = {
  replay: Replay;
  days: number;
};

function dayLabel(progress: number | undefined, days: number) {
  if (progress === undefined || progress >= days) return "Finish";
  if (progress <= 0) return "Start";

  return `Day ${Math.ceil(progress)} of ${days}`;
}

// Play/pause and a scrubber for replaying a year's racing on the chart.
export function ReplayControls({ replay, days }: ReplayControlsProps) {
  const id = useId();
  const { progress, playing, play, pause, seek } = replay;
  const finished = progress === undefined || progress >= days;
  const label = dayLabel(progress, days);

  return (
    <div className="flex w-full items-center gap-3">
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 shrink-0"
        onClick={playing ? pause : play}
        aria-label={
          playing
            ? "Pause replay"
            : finished
              ? "Replay racing"
              : "Resume replay"
        }
      >
        {playing ? (
          <PauseIcon />
        ) : finished && progress !== undefined ? (
          <ResetIcon />
        ) : (
          <PlayIcon />
        )}
      </Button>
      <label htmlFor={id} className="sr-only">
        Replay position
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={days}
        step={0.01}
        value={progress ?? days}
        aria-valuetext={label}
        onChange={(e) => seek(Number(e.target.value))}
        className="h-1 min-w-0 flex-1 cursor-pointer accent-primary"
      />
      <span
        className="w-24 shrink-0 text-right text-sm text-muted-foreground tabular-nums"
        aria-live="polite"
      >
        {label}
      </span>
    </div>
  );
}
