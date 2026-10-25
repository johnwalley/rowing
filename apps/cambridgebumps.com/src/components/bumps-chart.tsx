import { BumpsChart as Chart, type Event } from "react-bumps-chart";
import { useMemo } from "react";

import { ReplayControls } from "@/components/replay-controls";
import { useReplay } from "@/hooks/use-replay";
import { measureChartText } from "@/lib/measure-text";

import classes from "./bumps-chart.module.css";
import "react-bumps-chart/dist/index.css";

type BumpsChartProps = {
  data: Event;
  club?: string | null;
  blades?: boolean;
  spoons?: boolean;
};

export default function BumpsChart({
  data,
  club,
  blades = false,
  spoons = false,
}: BumpsChartProps) {
  // The results carry no highlight of their own, so with no club selected the
  // year's data goes to the chart untouched rather than being cloned crew by
  // crew on every render.
  const highlightedData = useMemo(() => {
    if (!club) return data;

    return {
      ...data,
      crews: data.crews.map((crew) => ({
        ...crew,
        highlight: crew.club === club,
      })),
    };
  }, [data, club]);

  const replay = useReplay(data.days);

  return (
    <div className="flex flex-col gap-3">
      {data.results.length > 0 && (
        <ReplayControls replay={replay} days={data.days} />
      )}
      <div className={classes.chart}>
        <Chart
          data={highlightedData}
          blades={blades}
          spoons={spoons}
          measureText={measureChartText}
          progress={replay.progress}
        />
      </div>
    </div>
  );
}
