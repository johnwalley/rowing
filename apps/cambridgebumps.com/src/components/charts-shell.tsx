import { navigate } from "astro:transitions/client";
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
  set,
  type Gender,
  type EventKey,
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

  // "1838 May" for the second race of 1838.
  const raceYear =
    raceLabels.length > 0 ? `${year} ${raceLabels[race - 1]}` : year;

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
        <div className="flex flex-col space-y-3 px-4">
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
            <span className="mb-4 block text-sm leading-none font-medium">
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
        <h1 className="scroll-m-20 pt-2 pb-4 text-center text-xl font-semibold tracking-tight lg:text-3xl">
          {`${set[event]} - ${getGenderLabel(event, gender)} - ${raceYear}`}
        </h1>
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
                    {label}
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
                raceYear={raceYear}
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
