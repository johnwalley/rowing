import classNames from "classnames";
import classes from "./division.module.css";

namespace Division {
  export type Props = {
    lines: {
      blades: boolean;
      highlight: boolean;
      club: string;
      points: number[][];
    }[];
    divisionLines: number[][][];
    skipped: number[][][];
    circles: number[][];
    rect: number[][];
    x: number;
    /**
     * Mark each line with its club (`data-club`), for the chart's click
     * handler. With `"wide"`, each line also gets an invisible wider twin
     * that's easier to hit: worth it on a single race, too many elements
     * across many years.
     */
    interactive?: false | "thin" | "wide";
  };
}

export const Division = ({
  lines,
  divisionLines,
  circles,
  rect,
  skipped,
  x,
  interactive = false,
}: Division.Props) => {
  return (
    <g transform={`translate(${x} 0)`}>
      {interactive === "wide" &&
        lines.map((line, index) => (
          <polyline
            key={`hit-${index}`}
            points={line.points.map((point) => point.join(",")).join(" ")}
            fill="none"
            stroke="transparent"
            strokeWidth="8"
            data-club={line.club}
          />
        ))}
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
          data-club={interactive ? line.club : undefined}
        />
      ))}
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
      {circles.map((circle, index) => (
        <circle
          key={index}
          cx={circle[0]}
          cy={circle[1]}
          r="3"
          fill="grey"
          className={classes.withdrawn}
        />
      ))}
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
