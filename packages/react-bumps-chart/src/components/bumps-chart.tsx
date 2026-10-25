import "./globals.css";

import { Blades } from "./blades/blades";
import { Crews } from "./crews/crews";
import { Division } from "./division/division";
import { Event } from "../types";
import { ExtraText } from "./extra-text/extra-text";
import { Heads } from "./heads/heads";
import { Numbers } from "./numbers/numbers";
import { Stripes } from "./stripes/stripes";
import classNames from "classnames";
import classes from "./bumps-chart.module.css";
import { MeasureText, layoutChart, scale } from "@/utils/layout-chart";
import { useMeasureText } from "@/utils/measure-text";
import { useMemo, useRef } from "react";

namespace BumpsChart {
  export type Props = {
    data: Event;
    blades?: boolean;
    spoons?: boolean;
    /**
     * Returns the width of a crew name or position at the chart's font size
     * (12.8), in chart units. Used on the server and in the browser alike, so
     * a chart laid out with it never changes shape on hydration. It must
     * match the font the chart draws in, which is unkerned when this is given.
     * Pass a stable function, such as one defined at module level: a new one
     * each render lays the chart out again each render.
     *
     * Defaults to measuring with the DOM, which can only estimate on the server.
     */
    measureText?: MeasureText;
    /**
     * How far through the racing to draw, in days, from 0 (the start order)
     * to `data.days`: 1.5 is halfway through the second day. Short of the
     * end, a dot marks where each crew has got to and the finishing order is
     * hidden. Animate it for a replay; leave it out for the finished chart.
     */
    progress?: number;
  };
}

export type BumpsChartProps = BumpsChart.Props;

export const BumpsChart = ({
  data,
  blades = false,
  measureText: measureTextProp,
  progress,
}: BumpsChart.Props) => {
  const ref = useRef<SVGSVGElement>(null);
  const measureText = useMeasureText(ref, measureTextProp);

  const layout = useMemo(
    () => layoutChart(data, { measureText, blades }),
    [data, measureText, blades],
  );

  const gender = data.gender === "Women" ? "women" : "men";

  const replaying = progress !== undefined && progress < data.days;
  const drawnTo = replaying ? Math.max(progress, 0) : undefined;

  return (
    <svg
      ref={ref}
      className={classNames(classes.root, {
        [classes.unkerned]: measureTextProp,
      })}
      viewBox={`0 0 ${layout.width} ${layout.height}`}
      preserveAspectRatio="none"
    >
      <g transform={`translate(0 ${layout.y})`}>
        <Stripes stripes={layout.stripes} x={0} />
        <Numbers
          align="start"
          numbers={layout.startNumbers.numbers}
          scale={scale}
          x={layout.startNumbers.x}
        />
        {layout.startBlades && (
          <Blades
            flip
            crews={layout.startBlades.clubs}
            gender={gender}
            scale={scale}
            x={layout.startBlades.x}
          />
        )}
        <Crews
          align="end"
          crews={layout.startCrews.crews}
          scale={scale}
          x={layout.startCrews.x}
        />
        <g
          className={classNames(classes.finish, {
            [classes.pending]: replaying,
          })}
        >
          <Numbers
            align="end"
            numbers={layout.endNumbers.numbers}
            scale={scale}
            x={layout.endNumbers.x}
          />
          {layout.endBlades && (
            <Blades
              crews={layout.endBlades.clubs}
              gender={gender}
              scale={scale}
              x={layout.endBlades.x}
            />
          )}
          <Crews
            align="start"
            crews={layout.endCrews.crews}
            scale={scale}
            x={layout.endCrews.x}
          />
        </g>
        <Division
          lines={layout.division.polylines}
          divisionLines={layout.division.divisionLines}
          circles={layout.division.circles}
          skipped={layout.division.skipped}
          rect={layout.division.rect}
          x={layout.division.x}
          drawnTo={drawnTo === undefined ? undefined : drawnTo * scale}
        />
        {drawnTo !== undefined && (
          <Heads
            tracks={layout.tracks}
            progress={drawnTo}
            scale={scale}
            x={layout.division.x}
          />
        )}
        <ExtraText text={layout.extraText.text} x={layout.extraText.x} />
      </g>
    </svg>
  );
};
