import type { Event, MultiYearChartLayout } from "react-bumps-chart";
import { useEffect, useMemo, useState } from "react";

import { measureChartText } from "@/lib/measure-text";
import {
  chartPath,
  set,
  yearOf,
  type EventKey,
  type Gender,
} from "@/lib/utils";

// The year strip and crew-name columns pinned over a multi-year chart, so the
// years and the crews stay in view however far it's scrolled. The chart draws
// its own year labels, and names only at its two ends; these copy them from
// the chart's layout (`layoutChartMultiYear`), so they sit exactly over it.
//
// They're grid items stacked in the chart's cell (see `MultiYearBumpsChart`),
// made `sticky` within the shell's scrolling chart pane: the strip to its top,
// the columns to its sides. Drawn one pixel per chart unit, like the chart.

// react-bumps-chart's font size and the gap either side of a crew name, in
// chart units
const FONT_SIZE = 12.8;
const GAP = 5;

// The narrowest chart pane that gets a column on each side. On a phone two
// columns of names leave room for about one race between them, so it gets
// only the left one.
const BOTH_COLUMNS_WIDTH = 600;

const textStyle = {
  fill: "hsl(var(--react-bumps-chart-foreground))",
  fontKerning: "none",
} as const;

const highlightStyle = {
  fill: "hsl(var(--react-bumps-chart-highlight))",
  fontVariationSettings: '"GRAD" 150',
} as const;

type YearStripProps = {
  layout: MultiYearChartLayout;
  data: Event[];
  event: EventKey;
  gender: Gender;
};

// The chart's year labels, on an opaque strip that hides the chart's own as it
// scrolls under. Each race's stretch of the strip links to its chart page.
export function YearStrip({ layout, data, event, gender }: YearStripProps) {
  // The early mays/men years held two races, whose pages are `/1838` and
  // `/1838/2`. A range always takes in both races of a year.
  const links = data.map((race, index) => {
    const year = yearOf(race.year);
    const number = data
      .slice(0, index)
      .filter((other) => yearOf(other.year) === year).length;

    return {
      href: chartPath(event, gender, year, number + 1),
      label: `${set[event]} ${race.year}`,
      ...layout.races[index],
    };
  });

  return (
    <svg
      width={layout.width}
      height={layout.y}
      viewBox={`0 0 ${layout.width} ${layout.y}`}
      className="sticky top-0 z-20 self-start [grid-area:1/1]"
    >
      <rect
        width={layout.width}
        height={layout.y}
        className="fill-background"
      />
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          aria-label={link.label}
          className="group"
        >
          <title>{link.label}</title>
          <rect
            x={link.x}
            width={link.width}
            height={layout.y}
            rx={3}
            className="fill-transparent group-hover:fill-muted group-focus-visible:fill-muted"
          />
        </a>
      ))}
      <g
        transform={`translate(${layout.labels.x} ${layout.labels.y})`}
        textAnchor="middle"
        fontSize={FONT_SIZE}
        pointerEvents="none"
      >
        {layout.labels.labels.map(({ label, lines }, index) => (
          <g key={index}>
            <text x={label.pos[0]} y={label.pos[1]} style={textStyle}>
              {label.label}
            </text>
            {lines.map(([[x1, y1], [x2, y2]], line) => (
              <line
                key={line}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                strokeWidth={1}
                style={{ stroke: textStyle.fill }}
              />
            ))}
          </g>
        ))}
      </g>
      {/* Years with no racing, between the races either side */}
      {layout.gaps.map((gap) => (
        <text
          key={gap.first}
          x={gap.pos[0]}
          y={gap.pos[1]}
          textAnchor="middle"
          fontSize={9}
          style={{
            ...textStyle,
            fill: "hsl(var(--react-bumps-chart-muted-foreground))",
          }}
        >
          <title>{`No racing in ${gap.label}`}</title>
          {gap.label}
        </text>
      ))}
    </svg>
  );
}

type Side = "left" | "right";

// The race whose order a column shows, and whether at the race's start or
// end: the order of the lines beside the column's inner edge, at `x`. A left
// column in the gap before a race shows that race's start, a right column its
// end; within a race, the half `x` falls in decides.
function orderAt(
  layout: MultiYearChartLayout,
  x: number,
  side: Side,
): { race: number; end: boolean } {
  const index = layout.races.findIndex((race) => x < race.x + race.width);

  if (index === -1) return { race: layout.races.length - 1, end: true };

  const race = layout.races[index];

  if (x < race.x) {
    return side === "left" || index === 0
      ? { race: index, end: false }
      : { race: index - 1, end: true };
  }

  return { race: index, end: x >= race.x + race.width / 2 };
}

// What each pinned column shows, or null while the chart's own names at that
// end are in view. A string, so that scrolling within the same race doesn't
// re-render. `widths` is each race's column width: the column's inner edge
// depends on the race it shows, so the race at its outer edge picks the width.
function columnKey(
  layout: MultiYearChartLayout,
  widths: number[],
  left: number,
  right: number,
  side: Side,
): string | null {
  if (side === "left") {
    // Once the chart's own names at the start are half hidden
    if (left < layout.startCrews.x - widths[0] / 2) return null;

    const width = widths[orderAt(layout, left, "left").race];
    const { race, end } = orderAt(layout, left + width, "left");
    return `${race}:${end}`;
  }

  if (right > layout.endCrews.x + widths[widths.length - 1] / 2) return null;

  const width = widths[orderAt(layout, right, "right").race];
  const { race, end } = orderAt(layout, right - width, "right");
  return `${race}:${end}`;
}

type PinnedCrewsProps = {
  layout: MultiYearChartLayout;
  data: Event[];
  club?: string | null;
  /** The shell's chart pane, which scrolls the chart. */
  scroller: HTMLElement | null;
  /** The chart's SVG, to find which part of it is in view. */
  chart: SVGSVGElement | null;
};

// Crew names pinned to the chart pane's left and right edges, naming the lines
// beside them.
export function PinnedCrews({
  layout,
  data,
  club,
  scroller,
  chart,
}: PinnedCrewsProps) {
  // Each race's column width: wide enough for its longest name. A width for
  // the whole range would be set by the longest name in two centuries, and
  // two such columns hide much of the chart.
  const widths = useMemo(
    () =>
      data.map(
        (race) =>
          Math.ceil(
            Math.max(
              0,
              ...race.crews.map((crew) => measureChartText(crew.start)),
            ),
          ) +
          2 * GAP,
      ),
    [data],
  );

  const [keys, setKeys] = useState<{
    left: string | null;
    right: string | null;
  }>({ left: null, right: null });

  useEffect(() => {
    if (!scroller || !chart) return;

    let frame = 0;

    const update = () => {
      frame = 0;

      // The part of the chart in view, in chart units: one per pixel
      const left =
        scroller.getBoundingClientRect().left -
        chart.getBoundingClientRect().left;
      const right = left + scroller.clientWidth;

      const next = {
        left: columnKey(layout, widths, left, right, "left"),
        right:
          scroller.clientWidth < BOTH_COLUMNS_WIDTH
            ? null
            : columnKey(layout, widths, left, right, "right"),
      };

      setKeys((current) =>
        current.left === next.left && current.right === next.right
          ? current
          : next,
      );
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    scroller.addEventListener("scroll", schedule, { passive: true });

    const observer = new ResizeObserver(schedule);
    observer.observe(scroller);

    return () => {
      cancelAnimationFrame(frame);
      scroller.removeEventListener("scroll", schedule);
      observer.disconnect();
    };
  }, [scroller, chart, layout, widths]);

  return (
    <>
      {keys.left && (
        <CrewColumn
          side="left"
          order={keys.left}
          layout={layout}
          data={data}
          club={club}
          widths={widths}
        />
      )}
      {keys.right && (
        <CrewColumn
          side="right"
          order={keys.right}
          layout={layout}
          data={data}
          club={club}
          widths={widths}
        />
      )}
    </>
  );
}

type CrewColumnProps = {
  side: Side;
  /** From `columnKey`: the race, and whether at its end. */
  order: string;
  layout: MultiYearChartLayout;
  data: Event[];
  club?: string | null;
  /** Each race's column width. */
  widths: number[];
};

function CrewColumn({
  side,
  order,
  layout,
  data,
  club,
  widths,
}: CrewColumnProps) {
  const [index, end] = order.split(":");
  const race = data[Number(index)];
  const width = widths[Number(index)];

  // A crew's position: where it started the race, or where it finished it
  // (`gain` places higher). A crew with no `gain` didn't finish.
  const crews = race.crews.flatMap((crew, position) =>
    end === "true"
      ? crew.gain === null
        ? []
        : [{ name: crew.start, club: crew.club, y: position - crew.gain }]
      : [{ name: crew.start, club: crew.club, y: position }],
  );

  const height = layout.y + race.crews.length * layout.rowHeight;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      className={`pointer-events-none sticky z-10 self-start [grid-area:1/1] ${
        side === "left"
          ? "left-0 justify-self-start"
          : "right-0 justify-self-end"
      }`}
    >
      <rect
        y={layout.y}
        width={width}
        height={height - layout.y}
        className="fill-background"
        opacity={0.85}
      />
      <g
        transform={`translate(${side === "left" ? width - GAP : GAP} ${layout.y})`}
        textAnchor={side === "left" ? "end" : "start"}
        fontSize={FONT_SIZE}
      >
        {crews.map((crew) => (
          <text
            key={`${crew.name}-${crew.y}`}
            y={(crew.y + 0.5) * layout.rowHeight}
            dominantBaseline="central"
            style={
              crew.club === club
                ? { ...textStyle, ...highlightStyle }
                : textStyle
            }
          >
            {crew.name}
          </text>
        ))}
      </g>
    </svg>
  );
}
