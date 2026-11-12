import classNames from "classnames";
import classes from "./join.module.css";

namespace Join {
  export type Props = {
    /** A crew's line from one year to the next. */
    lines: { points: number[][]; highlight: boolean; club: string }[];
    joins: number[][][];
    text: { label: string; pos: number[] }[];
    /** Years with no racing fall between the races: dash the lines. */
    gap?: boolean;
    x: number;
    /** Mark each crew's line with its club, for the chart's click handler. */
    interactive?: boolean;
  };
}

export const Join = ({
  lines,
  joins,
  text,
  gap = false,
  x,
  interactive = false,
}: Join.Props) => {
  return (
    <g transform={`translate(${x} 0)`} fontSize="9px">
      {lines.map(({ points, highlight, club }, index) => (
        <line
          key={index}
          x1={points[0][0]}
          y1={points[0][1]}
          x2={points[1][0]}
          y2={points[1][1]}
          stroke="lightgrey"
          fill="none"
          strokeWidth="1"
          strokeDasharray={gap ? "3 2" : undefined}
          className={classNames(classes.line, {
            [classes.highlight]: highlight,
          })}
          data-club={interactive ? club : undefined}
        />
      ))}
      {joins.map((line, index) => (
        <polyline
          key={index}
          points={line.map((point) => point.join(",")).join(" ")}
          fill="none"
          stroke="grey"
          strokeWidth="1"
        />
      ))}
      {text.map((text, index) => (
        <text
          key={index}
          x={text.pos[0] + 1}
          y={text.pos[1]}
          fill="black"
          stroke="none"
          textAnchor="end"
          className={classes.text}
        >
          {text.label}
        </text>
      ))}
    </g>
  );
};
