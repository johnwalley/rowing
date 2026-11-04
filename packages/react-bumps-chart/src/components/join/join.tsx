import classNames from "classnames";
import classes from "./join.module.css";

namespace Join {
  export type Props = {
    /** A crew's line from one year to the next. */
    lines: { points: number[][]; highlight: boolean }[];
    joins: number[][][];
    text: { label: string; pos: number[] }[];
    x: number;
  };
}

export const Join = ({ lines, joins, text, x }: Join.Props) => {
  return (
    <g transform={`translate(${x} 0)`} fontSize="9px">
      {lines.map(({ points, highlight }, index) => (
        <line
          key={index}
          x1={points[0][0]}
          y1={points[0][1]}
          x2={points[1][0]}
          y2={points[1][1]}
          stroke="lightgrey"
          fill="none"
          strokeWidth="1"
          className={classNames(classes.line, {
            [classes.highlight]: highlight,
          })}
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
