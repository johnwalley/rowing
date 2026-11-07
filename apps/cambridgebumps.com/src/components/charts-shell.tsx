import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { navigate } from "astro:transitions/client";
import { useEffect } from "react";
import type { Event } from "react-bumps-chart";

import BumpsChart from "@/components/bumps-chart";
import { CorrectionLink } from "@/components/correction-link";
import { EventSelect } from "@/components/event-select";
import { EventsNav, type YearFor } from "@/components/events-nav";
import { GenderRadioGroup } from "@/components/gender-radio-group";
import { HighlightControls } from "@/components/highlight-controls";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { YearPicker } from "@/components/year-picker";
import { useChartParams, withParams } from "@/hooks/use-chart-params";
import {
  chartPath,
  getGenderLabel,
  raceTitle,
  set,
  type Gender,
  type EventKey,
  type RaceLink,
} from "@/lib/utils";

type ChartsShellProps = {
  event: EventKey;
  gender: Gender;
  year: string;
  /** Which of the year's races this is, from 1. */
  race: number;
  /**
   * What tells the year's races apart ("March", "May"), when it had more than
   * one (the early mays/men years); otherwise empty.
   */
  raceLabels: string[];
  /** The race before this one, or null for the first. */
  previous: RaceLink | null;
  /** The race after this one, or null for the latest. */
  next: RaceLink | null;
  /** Every year this event/gender has results for, oldest first. */
  years: string[];
  /** Where each event/category link lands — see `YearFor`. */
  yearFor: YearFor;
  /** Club names racing in this year, for the "Highlight club" dropdown. */
  clubs: string[];
  /** The year's results, or null when there are none yet. */
  data: Event | null;
  /** The current Town Bumps year links to the CRA's official results. */
  showCraNotice: boolean;
};

// The single-year chart page: the event/category/year/highlight controls plus
// the chart itself. It was a Next.js client layout wrapping a server-rendered
// page; in Astro the whole thing is one island, which lets the highlight
// controls update the chart in place instead of navigating.
export function ChartsShell({
  event,
  gender,
  year,
  race,
  raceLabels,
  previous,
  next,
  years,
  yearFor,
  clubs,
  data,
  showCraNotice,
}: ChartsShellProps) {
  const { params, setParam } = useChartParams();

  const club = params.get("club");
  const blades = params.get("blades") === "true";
  const spoons = params.get("spoons") === "true";

  useStepKeys(previous, next, params);

  // The line under the heading: the category, the race's size, and the club
  // being highlighted, so a shared link or screenshot explains itself.
  const facts = [
    getGenderLabel(event, gender),
    ...(data ? raceSize(data) : []),
    ...(club ? [`highlighting ${club}`] : []),
  ];

  const focusElement = years.findIndex((candidate) => candidate === year);

  // The same list feeds both year strips (the mobile one and the sidebar one).
  const yearItems = years.map((candidate) => ({
    href: withParams(`/charts/${event}/${gender}/${candidate}`, params),
    label: candidate,
  }));

  return (
    <div className="relative mx-auto w-full items-stretch gap-6 px-2 lg:grid lg:grid-cols-[1fr_400px]">
      <div className="mt-2 mb-4 flex flex-col space-y-2 lg:hidden">
        <EventsNav
          event={event}
          gender={gender}
          yearFor={yearFor}
          params={params}
        />
        <Tabs value={gender} className="relative grid w-full scroll-m-20 gap-4">
          <TabsList className="h-7 rounded-md p-0 px-[calc(theme(spacing.1)_-_2px)] py-[theme(spacing.1)] sm:flex">
            <TabsTrigger
              value="men"
              className="h-[1.45rem] rounded-sm px-2 text-sm"
              asChild
            >
              <a
                href={withParams(
                  `/charts/${event}/men/${yearFor[event].men}`,
                  params,
                )}
              >
                {getGenderLabel(event, "men")}
              </a>
            </TabsTrigger>
            <TabsTrigger
              value="women"
              className="h-[1.45rem] rounded-sm px-2 text-sm"
              asChild
            >
              <a
                href={withParams(
                  `/charts/${event}/women/${yearFor[event].women}`,
                  params,
                )}
              >
                Women
              </a>
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <YearPicker
          key={`${event}/${gender}`}
          items={yearItems}
          focusElement={focusElement}
          position="center"
        />
        {data && (
          <HighlightControls
            event={event}
            clubs={clubs}
            club={club}
            blades={blades}
            setParam={setParam}
            compact
          />
        )}
      </div>
      <div className="order-2 hidden border-l py-4 lg:block">
        <div className="flex flex-col gap-6 px-4">
          <EventSelect
            value={event}
            onValueChange={(value) => {
              navigate(
                withParams(
                  `/charts/${value}/${gender}/${yearFor[value][gender]}`,
                  params,
                ),
              );
            }}
          />
          <GenderRadioGroup
            event={event}
            value={gender}
            onValueChange={(value) => {
              navigate(
                withParams(
                  `/charts/${event}/${value}/${yearFor[event][value]}`,
                  params,
                ),
              );
            }}
          />
          <div>
            <span className="mb-2 block text-sm leading-none font-medium">
              Year
            </span>
            <YearPicker
              key={`${event}/${gender}`}
              items={yearItems}
              focusElement={focusElement}
              position="center"
            />
          </div>
          <HighlightControls
            event={event}
            clubs={clubs}
            club={club}
            blades={blades}
            setParam={setParam}
          />
        </div>
      </div>
      <div className="pb-4">
        <header className="pt-2 pb-4 text-center">
          <div className="flex items-center justify-center gap-1 sm:gap-2">
            <StepLink race={previous} direction="previous" params={params} />
            <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight lg:text-3xl">
              {set[event]} {year}
            </h1>
            <StepLink race={next} direction="next" params={params} />
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {facts.join(" · ")}
          </p>
        </header>
        {raceLabels.length > 0 && (
          <Tabs value={String(race)} className="mb-4 flex justify-center">
            <TabsList className="h-7 rounded-md p-0 px-[calc(theme(spacing.1)_-_2px)] py-[theme(spacing.1)]">
              {raceLabels.map((label, index) => (
                <TabsTrigger
                  key={label}
                  value={String(index + 1)}
                  className="h-[1.45rem] rounded-sm px-2 text-sm"
                  asChild
                >
                  <a
                    href={withParams(
                      chartPath(event, gender, year, index + 1),
                      params,
                    )}
                  >
                    {label} race
                  </a>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        )}
        {showCraNotice && (
          <p className="pb-2 text-center text-sm">
            Not affiliated with the CRA. For official live results please visit
            the CRA{" "}
            <a
              href="https://www.crarowing.co.uk/town-bumps/about-the-cra-town-bumps/results"
              className="dark:text-white"
            >
              results page
            </a>
            .
          </p>
        )}
        {data ? (
          <div className="mb-4 flex w-full flex-col items-center">
            <div className="w-full max-w-[520px]">
              <BumpsChart
                data={data}
                club={club}
                blades={blades}
                spoons={spoons}
              />
            </div>
            <div className="mt-4">
              <CorrectionLink
                event={event}
                gender={gender}
                year={year}
                race={race}
                title={raceTitle(event, year, raceLabels[race - 1])}
                club={club}
              />
            </div>
          </div>
        ) : (
          <div className="mb-4 text-center">
            <p>We have no results to show for this year yet.</p>
            <a
              href={withParams(
                `/charts/${event}/${gender}/${yearFor[event][gender]}`,
                params,
              )}
              className="underline underline-offset-4 hover:text-primary"
            >
              See the {yearFor[event][gender]} results
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

// "4 days · 5 divisions · 80 crews". Every crew that started counts, including
// any that withdrew during the racing.
function raceSize(data: Event): string[] {
  const divisions = data.div_size[0]?.length ?? 0;
  const plural = (n: number, noun: string) =>
    `${n} ${noun}${n === 1 ? "" : "s"}`;

  return [
    plural(data.days, "day"),
    plural(divisions, "division"),
    plural(data.crews.length, "crew"),
  ];
}

// The arrows either side of the heading, to step through the races one at a
// time without reaching for the year strip. Where there's no race to step to,
// an empty box of the same size keeps the heading centred.
function StepLink({
  race,
  direction,
  params,
}: {
  race: RaceLink | null;
  direction: "previous" | "next";
  params: URLSearchParams;
}) {
  const className = "inline-flex size-8 shrink-0 items-center justify-center";

  if (!race) return <span aria-hidden="true" className={className} />;

  const Icon = direction === "previous" ? ChevronLeftIcon : ChevronRightIcon;
  const key = direction === "previous" ? "ArrowLeft" : "ArrowRight";
  const label = `${direction === "previous" ? "Previous" : "Next"}: ${race.title}`;

  return (
    <a
      href={withParams(race.path, params)}
      aria-label={label}
      aria-keyshortcuts={key}
      title={`${label} (${direction === "previous" ? "←" : "→"})`}
      className={`${className} rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none`}
    >
      <Icon className="size-5" />
    </a>
  );
}

// The left and right arrow keys step to the previous and next race, as the
// heading's arrows do. A key meant for something else is left alone: one typed
// into a field, or one that moves along the year strip, the category tabs or
// radios, or the club picker.
function useStepKeys(
  previous: RaceLink | null,
  next: RaceLink | null,
  params: URLSearchParams,
) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      if (
        event.defaultPrevented ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey
      ) {
        return;
      }

      const target = event.target;

      if (
        target instanceof Element &&
        target.closest(
          "input, textarea, select, [contenteditable], [role=tablist], [role=radiogroup], [role=listbox], [role=combobox], [role=menu], [role=dialog], .year-picker",
        )
      ) {
        return;
      }

      const race = event.key === "ArrowLeft" ? previous : next;

      if (!race) return;

      event.preventDefault();
      navigate(withParams(race.path, params));
    };

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [previous, next, params]);
}
