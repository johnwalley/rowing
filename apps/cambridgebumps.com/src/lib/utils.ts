import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { abbreviations, clubs, shortShortNames } from "react-rowing-blades";
import {
  eventKeys,
  genders,
  isEventKey,
  isGender,
  sets,
  setsIn,
  type City,
  type EventKey,
  type Gender,
} from "bumps-results-tools/sets";

export { genders, isGender, type City, type EventKey, type Gender };

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Each event's name, from the tools' list of Sets.
export const set = Object.fromEntries(
  eventKeys.map((event) => [event, sets[event].name]),
) as Record<EventKey, string>;

// Short labels for the event tabs and menus.
export const eventShortNames = Object.fromEntries(
  eventKeys.map((event) => [event, sets[event].short]),
) as Record<EventKey, string>;

export const genderMap: Record<Gender, string> = {
  men: "Men",
  women: "Women",
};

// Display label for a category, event-aware. The men's category of the
// Cambridge events (Lents, Mays, Town) is now branded "Open" (each Set's
// `menLabel`); everything else (Oxford men's, all women's) keeps its genderMap
// label. Note this is a display-only concern — the URL slug stays "men".
export function getGenderLabel(
  event: EventKey | string,
  gender: Gender | string,
): string {
  if (gender === "men" && isEventKey(event)) return sets[event].menLabel;
  return genderMap[gender as Gender];
}

export const events = eventKeys;

/** The events a city races, in the order they're raced through the year. */
export const eventsIn = (city: City) => setsIn(city);

export const isEvent = isEventKey;

// Shape of the per-event results summary JSON (lists of years by category).
// Each event has `all`, `split`, `men` and `women` keys, all arrays of year strings.
export type ResultsSummary = Record<
  EventKey,
  Record<Gender | "all" | "split", string[]>
>;

// Some historical mays/men entries store compound year strings such as
// "1827 February March" (two distinct races held in the same year). The leading
// 4-digit year is the canonical key used by URLs and the year summary, so match
// on that: `+"1827 February March"` is NaN, whereas parseInt yields 1827.
export function yearOf(year: string | number): number {
  return parseInt(String(year), 10);
}

// The year in `years` closest to `year` — `year` itself when it's there. The
// earlier of two equally close years wins. Undefined only for an empty list.
export function nearestYear(
  years: string[],
  year: string | number,
): string | undefined {
  const target = yearOf(year);

  let best: string | undefined;

  for (const candidate of years) {
    if (
      best === undefined ||
      Math.abs(yearOf(candidate) - target) < Math.abs(yearOf(best) - target)
    ) {
      best = candidate;
    }
  }

  return best;
}

// A chart page's path. A year with two races (the early mays/men years) has a
// page for each: the first at the year's path, the second under it
// ("/charts/mays/men/1838/2").
export const chartPath = (
  event: EventKey,
  gender: Gender,
  year: string | number,
  race = 1,
) => `/charts/${event}/${gender}/${year}${race > 1 ? `/${race}` : ""}`;

// A race's name, as its chart page's heading, tab title and correction email
// give it: "May Bumps 2025", or "May Bumps 1838 (March race)" for one of a
// year's two races, where `raceLabel` ("March") tells them apart.
export const raceTitle = (event: EventKey, year: string, raceLabel?: string) =>
  `${set[event]} ${year}${raceLabel ? ` (${raceLabel} race)` : ""}`;

/** A race a chart page links to: its path and its name. */
export type RaceLink = { path: string; title: string };

// Who races in an event, for page descriptions: "Cambridge college" crews.
export function getEventContext(event: EventKey): string {
  const { city, kind } = sets[event];
  return kind === "town" ? "town rowing club" : `${city} college`;
}

const collegeBlades: Record<
  City,
  { names: Record<string, string>; abbr: Record<string, string> }
> = {
  Cambridge: {
    names: shortShortNames.cambridge,
    abbr: abbreviations.cambridge,
  },
  Oxford: { names: shortShortNames.oxford, abbr: abbreviations.oxford },
};

// Union of all valid club codes accepted by react-rowing-blades' <Blade>.
export type ClubCode = (typeof clubs)[keyof typeof clubs][number];

export function getCode(club: string, set: EventKey): ClubCode | undefined {
  // A college event's blades are its city's colleges'; a town event's are
  // the UK clubs', whose abbreviations are their own names.
  const { city, kind } = sets[set];
  const names: Record<string, string> =
    kind === "town" ? shortShortNames.uk : collegeBlades[city].names;
  const abbr: Record<string, string> =
    kind === "town"
      ? Object.fromEntries(
          Object.values(abbreviations.uk).map((x: string) => [x, x]),
        )
      : collegeBlades[city].abbr;

  const name = club;

  let code = Object.keys(names).find((key) => names[key] === abbr[name]);

  // Couldn't find club code based on abbreviation
  // Search using full name instead
  if (!code) {
    code = Object.keys(names).find((key) => names[key] === name);
  }

  if (!code) {
    if (name === "LMBC") {
      code = "lmb";
    } else if (name === "1st and 3rd") {
      code = "ftt";
    } else if (name === "St Catharine's") {
      code = "scc";
    } else if (name === "St Edmund's") {
      code = "sec";
    } else if (name === "Town") {
      code = "cam";
    } else if (name === "Old Cantabs") {
      code = "cab";
    } else if (name === "Free Press") {
      code = "xpr";
    }
  }

  return code as ClubCode | undefined;
}
