// Single source of truth for redirects. `astro.config.mjs` passes them to
// Astro via `buildAstroRedirects`; in production `@astrojs/vercel` turns them
// into HTTP redirects at build time, and `astro dev` serves them directly.
//
// The default chart year is derived from the results data, never hand-edited.

import { readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The TG files the site's results are built from. This runs in plain Node, as
// `astro.config.mjs` loads, so it reads their names rather than the results.
const tgFormat = join(
  dirname(fileURLToPath(import.meta.url)),
  "../../../packages/bumps-results-tools/results/tg_format",
);

// The latest year for which a given event/gender has results, from the TG
// file names: `mays2025_men.txt`, or `mays1827.2_men.txt` in a year with more
// than one race.
export function getLatestYear(event, gender) {
  const years = readdirSync(tgFormat).flatMap((file) => {
    const match = file.match(/^([a-z]+)(\d{4})(?:\.\d+)?_(men|women)\.txt$/);
    return match && match[1] === event && match[3] === gender
      ? [Number(match[2])]
      : [];
  });

  return Math.max(...years);
}

const EVENTS = ["eights", "lents", "mays", "torpids", "town"];
const GENDERS = ["men", "women"];

// The event the bare `/charts`, `/statistics` and `/multi-year-charts` routes
// open on: one of the site's own. Cambridge keeps Town, its default all along.
/** @param {string} title */
function defaultEvent(title) {
  return title === "Oxford" ? "eights" : "town";
}

/** @param {{ title: string }} site */
export function buildRedirects({ title }) {
  const event = defaultEvent(title);

  return [
    {
      source: "/statistics",
      destination: `/statistics/${event}/men`,
      permanent: false,
    },
    {
      source: "/statistics/:event",
      destination: "/statistics/:event/men",
      permanent: false,
    },
    {
      source: "/charts",
      destination: `/charts/${event}/men/${getLatestYear(event, "men")}`,
      permanent: false,
    },
    // Each event/gender redirects to its own latest year, since events don't
    // all share the same most-recent season (e.g. Town lags the others). These
    // explicit rules replace `/charts/:event` and `/charts/:event/:gender`
    // wildcards, which could only supply a single year for every event.
    ...EVENTS.map((event) => ({
      source: `/charts/${event}`,
      destination: `/charts/${event}/men/${getLatestYear(event, "men")}`,
      permanent: false,
    })),
    ...EVENTS.flatMap((event) =>
      GENDERS.map((gender) => ({
        source: `/charts/${event}/${gender}`,
        destination: `/charts/${event}/${gender}/${getLatestYear(event, gender)}`,
        permanent: false,
      })),
    ),
    {
      source: "/multi-year-charts",
      destination: `/multi-year-charts/${event}/men`,
      permanent: false,
    },
    {
      source: "/multi-year-charts/:event",
      destination: "/multi-year-charts/:event/men",
      permanent: false,
    },
    { source: "/latest", destination: "/charts", permanent: false },
    {
      source: "/latest/:event",
      destination: "/charts/:event",
      permanent: false,
    },
    {
      source: "/latest/:event/:gender",
      destination: "/charts/:event/:gender",
      permanent: false,
    },
    { source: "/history", destination: "/charts", permanent: false },
    {
      source: "/history/:event",
      destination: "/charts/:event",
      permanent: false,
    },
    {
      source: "/history/:event/:gender",
      destination: "/charts/:event/:gender",
      permanent: false,
    },
    ...EVENTS.flatMap((event) => [
      {
        source: `/${event}/men`,
        destination: `/charts/${event}/men`,
        permanent: true,
      },
      {
        source: `/${event}/women`,
        destination: `/charts/${event}/women`,
        permanent: true,
      },
    ]),
  ];
}

// Astro's `redirects` config takes a map of concrete paths, so the `:event` /
// `:gender` patterns above are expanded against the known event and gender
// lists.
function expand(source, destination) {
  let pairs = [[source, destination]];

  for (const [param, values] of [
    [":event", EVENTS],
    [":gender", GENDERS],
  ]) {
    if (!source.includes(param)) continue;

    pairs = pairs.flatMap(([s, d]) =>
      values.map((value) => [
        s.replaceAll(param, value),
        d.replaceAll(param, value),
      ]),
    );
  }

  return pairs;
}

/** @param {{ title: string }} site */
export function buildAstroRedirects(site) {
  return Object.fromEntries(
    buildRedirects(site).flatMap(({ source, destination, permanent }) =>
      expand(source, destination).map(([s, d]) => [
        s,
        // 308/307 are what `vercel.json`'s `permanent` flag used to produce.
        { status: permanent ? 308 : 307, destination: d },
      ]),
    ),
  );
}
