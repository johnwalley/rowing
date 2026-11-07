import classNames from "classnames";
import classes from "./crews.module.css";

namespace Crews {
  export type Props = {
    align: "start" | "middle" | "end";
    crews: {
      crew: string | null;
      club: string;
      blades: boolean;
      highlight: boolean;
      y: number;
    }[];
    scale: number;
    x: number;
    /**
     * Mark each name with its club (`data-club`), for the chart's click
     * handler. With `"focusable"` each name is also a toggle button in the tab
     * order; only one column of names is, so the keyboard doesn't visit every
     * crew twice.
     */
    interactive?: false | "clickable" | "focusable";
  };
}

export const Crews = ({
  align,
  crews,
  scale,
  x,
  interactive = false,
}: Crews.Props) => {
  return (
    <g
      transform={`translate(${x} 0)`}
      textAnchor={align}
      fontSize="12.8"
      fill="black"
      className={classes.root}
    >
      {crews.map((crew, index) => (
        <text
          key={index}
          y={(crew.y + 0.5) * scale}
          dominantBaseline="central"
          className={classNames({
            [classes.blades]: crew.blades,
            [classes.highlight]: crew.highlight,
          })}
          data-club={interactive && crew.crew !== null ? crew.club : undefined}
          {...(interactive === "focusable" && crew.crew !== null
            ? {
                tabIndex: 0,
                role: "button",
                "aria-pressed": crew.highlight,
                "aria-label": `Highlight ${crew.club}`,
              }
            : {})}
        >
          {crew.crew}
        </text>
      ))}
    </g>
  );
};
