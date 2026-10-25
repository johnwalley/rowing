import classNames from "classnames";
import classes from "./division.module.css";
import { useId } from "react";

namespace Division {
  export type Props = {
    lines: { blades: boolean; highlight: boolean; points: number[][] }[];
    divisionLines: number[][][];
    skipped: number[][][];
    circles: number[][];
    rect: number[][];
    x: number;
    /** Draw crews' lines only this far across, for a replay. */
    drawnTo?: number;
  };
}

export const Division = ({
  lines,
  divisionLines,
  circles,
  rect,
  skipped,
  x,
  drawnTo,
}: Division.Props) => {
  // React's ids hold characters a url() reference can't
  const clipId = `division-clip-${useId().replace(/[^\w-]/g, "")}`;
  const clipped = drawnTo !== undefined;

  return (
    <g transform={`translate(${x} 0)`}>
      {clipped && (
        <clipPath id={clipId}>
          <rect
            x={rect[0][0]}
            y={rect[0][1]}
            width={drawnTo - rect[0][0]}
            height={rect[1][1]}
          />
        </clipPath>
      )}
      <g clipPath={clipped ? `url(#${clipId})` : undefined}>
        {lines.map((line, index) => (
          <polyline
            key={index}
            points={line.points.map((point) => point.join(",")).join(" ")}
            fill="none"
            stroke={line.highlight ? "red" : "grey"}
            strokeWidth="1"
            className={classNames(classes.line, {
              [classes.blades]: line.blades,
              [classes.highlight]: line.highlight,
            })}
          />
        ))}
        {skipped.map((line, index) => (
          <polyline
            key={index}
            points={line.map((point) => point.join(",")).join(" ")}
            fill="none"
            stroke="lightgrey"
            strokeWidth="1"
            className={classes.skipped}
          />
        ))}
      </g>
      {divisionLines.map((line, index) => (
        <polyline
          key={index}
          points={line.map((point) => point.join(",")).join(" ")}
          fill="none"
          stroke="grey"
          strokeWidth="1"
          className={classes.border}
        />
      ))}
      {circles.map((circle, index) =>
        clipped && circle[0] > drawnTo ? null : (
          <circle
            key={index}
            cx={circle[0]}
            cy={circle[1]}
            r="3"
            fill="grey"
            className={classes.withdrawn}
          />
        ),
      )}
      <rect
        x={rect[0][0]}
        y={rect[0][1]}
        width={rect[1][0]}
        height={rect[1][1]}
        fill="none"
        stroke="black"
        strokeWidth="1"
        className={classes.border}
      />
    </g>
  );
};
