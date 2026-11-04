import {
  CrewsColumn,
  DivisionLayout,
  LayoutOptions,
  NumbersColumn,
  fontSize,
  getMaxWidth,
  scale,
} from "./layout-chart";
import { calculateJoin, markJointYearHeadship } from "./calculate-join";
import { Event } from "../types";
import { calculateDivisions } from "./calculate-divisions";
import { calculateNumbers } from "./calculate-numbers";
import { calculateStripes } from "./calculate-stripes";

export type YearLabel = {
  label: { label: string; pos: number[] };
  lines: number[][][];
};

export type JoinLayout = Omit<ReturnType<typeof calculateJoin>, "height"> & {
  x: number;
  /** Whether a year or more with no racing falls between the two races. */
  gap: boolean;
};

/** A stretch of years with no racing, between two races. */
export type GapLayout = {
  /** The first and last years with no racing. */
  first: number;
  last: number;
  /** "2021", or "2020–21" for more than a year. */
  label: string;
  /**
   * Where the label's text is centred, on its baseline, from the chart's top
   * left: unlike a year label's, not offset by `labels.x`.
   */
  pos: number[];
};

/**
 * Where every part of a multi-year chart goes, in chart units. The chart's SVG
 * has a `viewBox` of `0 0 width height`, so drawn one pixel per unit these are
 * pixels from its top left corner.
 */
export type MultiYearChartLayout = {
  width: number;
  height: number;
  /**
   * The year labels along the top. Each label's text is centred on
   * `(x + pos[0], y + pos[1])`, on the text's baseline, and its lines are
   * offset by `(x, y)` too.
   */
  labels: { x: number; y: number; labels: YearLabel[] };
  /** Vertical offset of the chart body, below the year labels. */
  y: number;
  /** The height of one position in the chart body. */
  rowHeight: number;
  /**
   * The left edge and width of each race's body, in the order of `data`. A
   * crew in position `i` (from 0) is centred on `y + (i + 0.5) * rowHeight`.
   */
  races: { x: number; width: number }[];
  stripes: { x: number; stripes: number[][][][] };
  startNumbers: NumbersColumn;
  endNumbers: NumbersColumn;
  startCrews: CrewsColumn;
  endCrews: CrewsColumn;
  joins: JoinLayout[];
  /** Each stretch of years with no racing, marked between the races. */
  gaps: GapLayout[];
  divisions: DivisionLayout[];
};

const sep = 32;
const gap = 5;

/** The year labels' row. */
const labelsY = 30;

/** The leading year of an event's `year`, which may be "1827 February March". */
const yearOf = (year: string) => parseInt(year, 10);

/** "2021", "2020–21", or "1999–2001" across a century. */
function gapLabel(first: number, last: number) {
  if (first === last) return `${first}`;

  return Math.floor(first / 100) === Math.floor(last / 100)
    ? `${first}–${String(last % 100).padStart(2, "0")}`
    : `${first}–${last}`;
}

/** Calculates the position of every part of a chart of consecutive events. */
export function layoutChartMultiYear(
  data: Event[],
  { measureText, blades = false }: Omit<LayoutOptions, "bladeIcons">,
): MultiYearChartLayout {
  let height = 0;

  const widthStartCrews =
    getMaxWidth(
      data[0].crews.map((crew) => crew.start),
      measureText,
    ) +
    2 * gap;

  const widthEndCrews =
    getMaxWidth(
      data[data.length - 1].crews.map((crew) => crew.end ?? ""),
      measureText,
    ) +
    2 * gap;

  const startNumbers = calculateNumbers(data[0]);
  const endNumbers = calculateNumbers(data[data.length - 1]);

  const widthStartNumbers = getMaxWidth(startNumbers, measureText) + gap;
  const widthEndNumbers = getMaxWidth(endNumbers, measureText) + gap;

  const top = 0;

  let xPos = 0;
  let skipFirst = false;

  const joins = [];
  const stripes = [];
  const labels: YearLabel[] = [];

  let xDivisionOffset = 0;
  const xDivisionOffsets: number[] = [0];

  // Copy so marking joint-year headships doesn't mutate the caller's data
  const events = [...data];

  for (let eventNum = 0; eventNum < data.length; eventNum++) {
    const event = data[eventNum];
    let event2 = null;

    if (eventNum < data.length - 1) {
      event2 = data[eventNum + 1];
    }

    const p = event.year.split(" ");
    let p2 = [p[0]];

    if (p.length > 1) {
      p2.push(p.slice(1).join(" "));
    }

    if (skipFirst) {
      p2 = p2.slice(1);
      skipFirst = false;
    } else if (eventNum < data.length - 1) {
      const nYear = event2!.year.split(" ")[0];

      if (nYear === p[0]) {
        skipFirst = true;
        const h = top - 5 - (p2.length - 1) * fontSize;
        const mid1 = xPos + (scale * event.days) / 2;

        const mid2 =
          xPos + scale * event.days + sep + (scale * event2!.days) / 2;

        const midp = (mid1 + mid2) / 2;
        const tWidth = measureText(nYear);

        labels.push({
          label: { label: nYear, pos: [midp, h] },
          lines: [
            [
              [mid1, h - fontSize / 2],
              [midp - tWidth / 2, h - fontSize / 2],
            ],
            [
              [midp + tWidth / 2, h - fontSize / 2],
              [mid2, h - fontSize / 2],
            ],
            [
              [mid1, h - fontSize / 2],
              [mid1, h],
            ],
            [
              [mid2, h - fontSize / 2],
              [mid2, h],
            ],
          ],
        });

        p2 = p2.slice(1);
      }
    }

    let h = top - 5 - (p2.length - 1) * fontSize;

    for (let i = 0; i < p2.length; i++) {
      labels.push({
        label: { label: p2[i], pos: [xPos + (scale * event.days) / 2, h] },
        lines: [],
      });

      h += fontSize;
    }

    stripes.push(
      calculateStripes(
        event,
        event2,
        scale,
        eventNum === 0
          ? xDivisionOffset - widthStartCrews - widthStartNumbers - gap
          : xDivisionOffset,
        event.days * scale +
          (eventNum === 0
            ? widthStartCrews + widthStartNumbers + gap
            : eventNum === data.length - 1
              ? gap + widthEndCrews + widthEndNumbers
              : 0),
        sep,
      ),
    );

    if (eventNum < data.length - 1) {
      const { height: h, ...join } = calculateJoin(
        event,
        event2!,
        top,
        scale,
        sep,
      );

      if (skipFirst) {
        events[eventNum] = markJointYearHeadship(event, event2!);
      }

      if (h > height) {
        height = h;
      }

      joins.push(join);
    }

    xPos = xPos + scale * event.days + sep;

    xDivisionOffset += event.days * scale + sep;
    xDivisionOffsets.push(xDivisionOffset);
  }

  const divisions = [];

  for (const event of events) {
    const { height: h, ...division } = calculateDivisions(
      event,
      scale,
      0,
      0,
      blades,
    );

    if (h > height) {
      height = h;
    }

    divisions.push(division);
  }

  // Left edge of the first event's divisions
  const x = widthStartNumbers + widthStartCrews + gap;
  const widthEvents = xDivisionOffsets[data.length] - sep;

  // Years with no racing between two races: the war years, 2020–21. Labelled
  // in the year labels' row, centred over the join between the races.
  const gaps: (GapLayout & { index: number })[] = [];

  for (let index = 0; index < data.length - 1; index++) {
    const first = yearOf(data[index].year) + 1;
    const last = yearOf(data[index + 1].year) - 1;

    if (last >= first) {
      gaps.push({
        index,
        first,
        last,
        label: gapLabel(first, last),
        pos: [x + xDivisionOffsets[index + 1] - sep / 2, labelsY + top - 5],
      });
    }
  }

  return {
    width: x + widthEvents + gap + widthEndCrews + widthEndNumbers,
    height: height + 3 * fontSize,
    labels: { x, y: labelsY, labels },
    y: 30,
    rowHeight: scale,
    races: data.map((event, index) => ({
      x: x + xDivisionOffsets[index],
      width: event.days * scale,
    })),
    stripes: { x, stripes },
    startNumbers: { x: gap, numbers: startNumbers },
    endNumbers: {
      x: x + widthEvents + gap + widthEndCrews + widthEndNumbers - gap,
      numbers: endNumbers,
    },
    startCrews: {
      x: widthStartNumbers + widthStartCrews,
      crews: events[0].crews.map((crew, index) => ({
        crew: crew.start,
        blades: blades && crew.blades,
        highlight: crew.highlight,
        y: index,
      })),
    },
    endCrews: {
      x: x + widthEvents + gap,
      crews: data[data.length - 1].crews.map((crew, index) => ({
        crew: crew.gain !== null ? crew.start : null,
        blades: blades && crew.blades,
        highlight: crew.highlight,
        y: index - (crew.gain ?? 0),
      })),
    },
    joins: joins.map((join, index) => ({
      x: x + xDivisionOffsets[index + 1] - sep,
      gap: gaps.some((gap) => gap.index === index),
      ...join,
    })),
    gaps: gaps.map(({ index: _index, ...gap }) => gap),
    divisions: divisions.map((division, index) => ({
      x: x + xDivisionOffsets[index],
      ...division,
    })),
  };
}
