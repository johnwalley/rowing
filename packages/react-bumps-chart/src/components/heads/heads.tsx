import { Track, pointAlongTrack } from "@/utils/calculate-tracks";
import classNames from "classnames";
import classes from "./heads.module.css";

namespace Heads {
  export type Props = {
    tracks: Track[];
    /** How far through the racing each crew has got, in days. */
    progress: number;
    scale: number;
    x: number;
  };
}

/** A dot where each crew has got to partway through a replay. */
export const Heads = ({ tracks, progress, scale, x }: Heads.Props) => {
  return (
    <g transform={`translate(${x} 0)`}>
      {tracks.map((track, index) => {
        const point = pointAlongTrack(track, progress, scale);

        return point ? (
          <circle
            key={index}
            cx={point[0]}
            cy={point[1]}
            r={track.blades || track.highlight ? 3.5 : 2.5}
            className={classNames(classes.head, {
              [classes.blades]: track.blades,
              [classes.highlight]: track.highlight,
            })}
          />
        ) : null;
      })}
    </g>
  );
};
