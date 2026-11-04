import { navigate } from "astro:transitions/client";
import { useRef } from "react";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";

import { EventSelect } from "@/components/event-select";
import { GenderRadioGroup } from "@/components/gender-radio-group";
import { HighlightControls } from "@/components/highlight-controls";
import MultiYearBumpsChart from "@/components/multi-year-bumps-chart";
import { MultiYearEventsNav } from "@/components/multi-year-events-nav";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { YearRangeControls, yearRange } from "@/components/year-range-controls";
import { useChartParams, withParams } from "@/hooks/use-chart-params";
import { useDragToScroll } from "@/hooks/use-drag-to-scroll";
import {
  cn,
  getGenderLabel,
  set,
  yearOf,
  type Gender,
  type EventKey,
} from "@/lib/utils";

type MultiYearChartsShellProps = {
  event: EventKey;
  gender: Gender;
  /** Club names across every year, for the "Highlight club" dropdown. */
  clubs: string[];
  /** Static JSON holding this event/gender's results. */
  dataUrl: string;
  /** Every year the event ran, oldest first. */
  years: string[];
};

export function MultiYearChartsShell({
  event,
  gender,
  clubs,
  dataUrl,
  years,
}: MultiYearChartsShellProps) {
  const { params, setParam } = useChartParams();

  const club = params.get("club");
  const blades = params.get("blades") === "true";
  const spoons = params.get("spoons") === "true";
  const hasResults = years.length > 0;
  const { from, to } = hasResults
    ? yearRange(years, params)
    : { from: "", to: "" };

  // The chart pane, which a mouse can drag to scroll
  const pane = useRef<HTMLDivElement>(null);
  const dragging = useDragToScroll(pane);

  // The line under the heading, like a single-year chart's: the category, how
  // many years are shown, and the club being highlighted, so a shared link or
  // screenshot explains itself.
  const shown = years.filter(
    (year) => yearOf(year) >= yearOf(from) && yearOf(year) <= yearOf(to),
  ).length;
  const facts = [
    getGenderLabel(event, gender),
    ...(hasResults ? [`${shown} ${shown === 1 ? "year" : "years"}`] : []),
    ...(club ? [`highlighting ${club}`] : []),
  ];

  // What the phone's "Options" button says is chosen
  const summary = [
    club,
    from === to ? from : `${from}–${to}`,
    blades && "blades",
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    // Fills the viewport below the header (3.5rem plus its 1px bottom border),
    // so the chart box is the only thing that scrolls — on phones the controls
    // stack above it in the same column rather than pushing it off the bottom
    // of the page.
    <div className="relative mx-auto flex h-[calc(100dvh-3.5rem-1px)] w-full flex-col items-stretch px-2 lg:grid lg:grid-cols-[1fr_400px] lg:gap-6">
      {/* On phones, the event and category stay in view and the rest of the
          options sit in a sheet, so the chart starts two rows down rather
          than five. */}
      <div className="mt-2 mb-2 flex flex-col space-y-2 lg:hidden">
        <MultiYearEventsNav event={event} gender={gender} params={params} />
        <div className="flex items-center gap-2">
          <Tabs value={gender} className="relative grid scroll-m-20 gap-4">
            <TabsList className="h-7 rounded-md p-0 px-[calc(theme(spacing.1)_-_2px)] py-[theme(spacing.1)] sm:flex">
              <TabsTrigger
                value="men"
                className="h-[1.45rem] rounded-sm px-2 text-sm"
                asChild
              >
                <a href={withParams(`/multi-year-charts/${event}/men`, params)}>
                  {getGenderLabel(event, "men")}
                </a>
              </TabsTrigger>
              <TabsTrigger
                value="women"
                className="h-[1.45rem] rounded-sm px-2 text-sm"
                asChild
              >
                <a
                  href={withParams(`/multi-year-charts/${event}/women`, params)}
                >
                  Women
                </a>
              </TabsTrigger>
            </TabsList>
          </Tabs>
          {hasResults && (
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 min-w-0 flex-1 justify-start gap-2 px-2 font-normal"
                >
                  <MixerHorizontalIcon className="h-4 w-4 shrink-0" />
                  <span className="truncate">{summary}</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" aria-describedby={undefined}>
                <SheetHeader className="mb-4 text-left">
                  <SheetTitle>Chart options</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-3">
                  <HighlightControls
                    event={event}
                    clubs={clubs}
                    club={club}
                    blades={blades}
                    setParam={setParam}
                    compact
                  />
                  <YearRangeControls
                    years={years}
                    from={from}
                    to={to}
                    setParam={setParam}
                    compact
                  />
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
      <div className="order-2 hidden border-l py-4 lg:block">
        <div className="flex flex-col space-y-3 px-4">
          <EventSelect
            value={event}
            onValueChange={(value) => {
              navigate(
                withParams(`/multi-year-charts/${value}/${gender}`, params),
              );
            }}
          />
          <GenderRadioGroup
            event={event}
            value={gender}
            onValueChange={(value) => {
              navigate(
                withParams(`/multi-year-charts/${event}/${value}`, params),
              );
            }}
          />
          {hasResults && (
            <YearRangeControls
              years={years}
              from={from}
              to={to}
              setParam={setParam}
            />
          )}
          <HighlightControls
            event={event}
            clubs={clubs}
            club={club}
            blades={blades}
            setParam={setParam}
          />
        </div>
      </div>
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden lg:h-full">
        <header className="pt-2 pb-4 text-center">
          <h1 className="scroll-m-20 text-xl font-semibold tracking-tight lg:text-3xl">
            {hasResults
              ? `${set[event]} ${from === to ? from : `${from}–${to}`}`
              : set[event]}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {facts.join(" · ")}
          </p>
        </header>
        <div
          ref={pane}
          className={cn(
            "overflow-auto [@media(pointer:fine)]:cursor-grab",
            dragging && "cursor-grabbing! select-none",
          )}
        >
          {hasResults ? (
            <div className="mb-4 w-full">
              <MultiYearBumpsChart
                src={dataUrl}
                event={event}
                gender={gender}
                from={from}
                to={to}
                club={club}
                blades={blades}
                spoons={spoons}
              />
            </div>
          ) : (
            <div className="mb-4 text-center">We have no results to show</div>
          )}
        </div>
      </div>
    </div>
  );
}
