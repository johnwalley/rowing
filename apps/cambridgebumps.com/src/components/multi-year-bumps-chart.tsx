import {
  BumpsChartMultiYear as Chart,
  layoutChartMultiYear,
  type Event,
} from "react-bumps-chart";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

import { PinnedCrews, YearStrip } from "@/components/multi-year-chart-guides";
import { measureChartText } from "@/lib/measure-text";
import { yearOf, type EventKey, type Gender } from "@/lib/utils";

import classes from "./bumps-chart.module.css";
import "react-bumps-chart/dist/index.css";

// A stable identity, so the memo below doesn't hand the chart a fresh array on
// every render while the results are still loading.
const EMPTY: Event[] = [];

// The nearest ancestor that scrolls sideways — the shell's chart pane.
function horizontalScroller(element: HTMLElement) {
  for (let e = element.parentElement; e; e = e.parentElement) {
    if (/auto|scroll/.test(getComputedStyle(e).overflowX)) return e;
  }

  return null;
}

type MultiYearBumpsChartProps = {
  // A whole event's results run to megabytes and the chart only renders in the
  // browser, so the data is fetched from a static JSON file (built by
  // `src/pages/data/results/[event]/[gender].json.ts`) rather than inlined into
  // the page.
  src: string;
  event: EventKey;
  gender: Gender;
  /** The first and last years to chart, inclusive. */
  from: string;
  to: string;
  club?: string | null;
  blades?: boolean;
  spoons?: boolean;
};

export default function MultiYearBumpsChart({
  src,
  event,
  gender,
  from,
  to,
  club,
  blades = false,
  spoons = false,
}: MultiYearBumpsChartProps) {
  const [data, setData] = useState<Event[] | null>(null);
  const [failed, setFailed] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  // The pinned year strip and crew names need the scroll box and the chart's
  // SVG, both known only once the chart is in the DOM.
  const [elements, setElements] = useState<{
    scroller: HTMLElement | null;
    chart: SVGSVGElement | null;
  }>({ scroller: null, chart: null });

  // `yearOf`, not `+year`: the early mays/men seasons have two races a year,
  // with compound years such as "1827 February March", and both belong in the
  // range.
  const rangedData = useMemo(() => {
    if (!data) return null;

    const first = yearOf(from);
    const last = yearOf(to);

    return data.filter(
      (event) => yearOf(event.year) >= first && yearOf(event.year) <= last,
    );
  }, [data, from, to]);

  // The chart runs oldest to newest, left to right, and is tens of thousands
  // of pixels wide; most visitors want the latest seasons, so open on the
  // right-hand end once there's a chart to show. Only on load or a change of
  // years — highlighting a club or toggling blades leaves the scroll position
  // where the visitor put it.
  //
  // This sets the scroll box's `scrollLeft` rather than calling
  // `scrollIntoView`, which would scroll the page as well — and while a view
  // transition is running the page can scroll sideways by a scrollbar's width
  // (see `YearPicker`).
  useEffect(() => {
    const scroller = ref.current && horizontalScroller(ref.current);

    scroller?.scrollTo({ left: scroller.scrollWidth, behavior: "instant" });
  }, [rangedData]);

  // And keep it there as the pane changes width. A browser holds a box's left
  // scroll edge still, so narrowing the window would slide the newest years
  // out of view on the right, and widening it would show only older ones.
  // Instead hold the distance from the right-hand end: the newest years stay
  // put, and so do older ones the visitor has scrolled back to.
  useEffect(() => {
    const scroller = elements.scroller;

    if (!scroller) return;

    const fromEnd = () =>
      scroller.scrollWidth - scroller.clientWidth - scroller.scrollLeft;

    let width = scroller.clientWidth;
    let distance = fromEnd();
    // Where the observer below last put `scrollLeft`
    let placed: number | null = null;

    const onScroll = () => {
      // Widening the pane can pull `scrollLeft` back, and its scroll event
      // arrives before the observer below; and the observer's own change
      // fires one too. Neither is the visitor scrolling, and a pane too wide
      // to keep the distance mustn't lose it.
      if (scroller.clientWidth !== width || scroller.scrollLeft === placed) {
        return;
      }

      placed = null;
      distance = fromEnd();
    };

    const observer = new ResizeObserver(() => {
      if (scroller.clientWidth === width) return;

      width = scroller.clientWidth;
      scroller.scrollLeft =
        scroller.scrollWidth - scroller.clientWidth - distance;
      placed = scroller.scrollLeft;
    });

    scroller.addEventListener("scroll", onScroll, { passive: true });
    observer.observe(scroller);

    return () => {
      scroller.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [elements.scroller]);

  // Where the chart puts its year labels, races and names, for the pinned
  // strip and columns. Highlighting a club moves nothing, so this follows the
  // range and blades only.
  const layout = useMemo(
    () =>
      rangedData && rangedData.length > 0
        ? layoutChartMultiYear(rangedData, {
            measureText: measureChartText,
            blades,
          })
        : null,
    [rangedData, blades],
  );

  useEffect(() => {
    let cancelled = false;

    // The shell is persisted across view transitions, so switching event or
    // gender re-runs this effect on a component still holding the previous
    // event's results. Clear them, or the old chart sits under the new page's
    // heading until the fetch lands.
    setData(null);
    setFailed(false);

    fetch(src)
      .then((response) => {
        if (!response.ok) throw new Error(`Failed to load ${src}`);
        return response.json();
      })
      .then((results: Event[]) => {
        if (!cancelled) setData(results);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, [src]);

  // A whole event is ~250 races and ~19,000 crews, so cloning every one of them
  // to set a flag is not free. The results carry no highlight of their own, so
  // with no club selected — the default, and every blades/spoons toggle — the
  // fetched data can be handed straight to the chart.
  const highlightedData = useMemo(() => {
    if (!rangedData) return EMPTY;
    if (!club) return rangedData;

    return rangedData.map((event) => ({
      ...event,
      crews: event.crews.map((crew) => ({
        ...crew,
        highlight: crew.club === club,
      })),
    }));
  }, [rangedData, club]);

  // The chart's SVG is `width: 100%` and scales its viewBox to fit, so the box
  // around it sets its size. Give it one pixel per chart unit, which keeps the
  // text the same size however many years are shown. A width per race doesn't:
  // the crew-name columns either side are a fixed width, so a short range would
  // squeeze them, and every race, into a sliver. The viewBox is read back
  // before paint — and, being a layout effect, before the scroll to the
  // right-hand end above, so that sees the chart's real width.
  useLayoutEffect(() => {
    const svg = ref.current?.querySelector("svg");

    if (ref.current && svg) {
      ref.current.style.width = `${svg.viewBox.baseVal.width}px`;
    }

    const scroller = ref.current && horizontalScroller(ref.current);

    setElements((current) =>
      current.scroller === scroller && current.chart === (svg ?? null)
        ? current
        : { scroller, chart: svg ?? null },
    );
  }, [highlightedData, blades]);

  if (failed) {
    return (
      <div className="py-8 text-center">
        We couldn&rsquo;t load the results for this chart.
      </div>
    );
  }

  if (!rangedData) {
    return <div className="py-8 text-center">Loading chart&hellip;</div>;
  }

  // The width applies only once the chart is here: the loading and error
  // messages are centred, and centred in a 20,000px box they'd be off screen.
  // A chart narrower than the pane is centred under the heading; a wider one
  // overflows to the right, where `mx-auto` resolves to nothing.
  //
  // A one-cell grid, so the pinned year strip and crew names stack over the
  // chart; each is `sticky` within the scroll box (see
  // `multi-year-chart-guides.tsx`).
  return (
    <div className={`${classes.chart} mx-auto grid w-max px-10`}>
      <div ref={ref} className="[grid-area:1/1]">
        <Chart
          data={highlightedData}
          blades={blades}
          spoons={spoons}
          measureText={measureChartText}
        />
      </div>
      {layout && (
        <>
          <YearStrip
            layout={layout}
            data={rangedData}
            event={event}
            gender={gender}
            club={club}
            blades={blades}
            spoons={spoons}
          />
          <PinnedCrews
            layout={layout}
            data={rangedData}
            club={club}
            scroller={elements.scroller}
            chart={elements.chart}
          />
        </>
      )}
    </div>
  );
}
