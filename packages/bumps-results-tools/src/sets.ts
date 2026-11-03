// The one list of Sets, and what's true of each. Everything else that varies
// by Set (the TG schema's names, which clubs table a Set's results use, the
// bumps site's labels, routes and redirects) is worked out from this, so a new
// Set is one entry here. Safe for the browser: it imports nothing.

export type City = "Cambridge" | "Oxford";

/** Who races in a Set: its city's colleges, or the town's clubs. */
export type SetKind = "college" | "town";

export type SetInfo = {
  /** The Set's name, as a TG file's `Set` line gives it. */
  name: string;
  /** Its short name, as a TG file's `Short` line gives it. */
  short: string;
  city: City;
  kind: SetKind;
  /** The men's category's label: the Cambridge Sets call it "Open". */
  menLabel: "Men" | "Open";
};

/**
 * Every Set, keyed as the bumps site's URLs and the TG file names name it,
 * each city's in the order they're raced through the year.
 */
export const sets = {
  lents: {
    name: "Lent Bumps",
    short: "Lents",
    city: "Cambridge",
    kind: "college",
    menLabel: "Open",
  },
  mays: {
    name: "May Bumps",
    short: "Mays",
    city: "Cambridge",
    kind: "college",
    menLabel: "Open",
  },
  town: {
    name: "Town Bumps",
    short: "Town",
    city: "Cambridge",
    kind: "town",
    menLabel: "Open",
  },
  torpids: {
    name: "Torpids",
    short: "Torpids",
    city: "Oxford",
    kind: "college",
    menLabel: "Men",
  },
  eights: {
    name: "Summer Eights",
    short: "Eights",
    city: "Oxford",
    kind: "college",
    menLabel: "Men",
  },
} as const satisfies Record<string, SetInfo>;

/** A Set as the bumps site's URLs and the TG file names name it. */
export type EventKey = keyof typeof sets;

/** A Set's name, as a TG file's `Set` line gives it. */
export type SetName = (typeof sets)[EventKey]["name"];

/** A Set's short name, as a TG file's `Short` line gives it. */
export type SetShort = (typeof sets)[EventKey]["short"];

/** Every Set's key, in the order of `sets`. */
export const eventKeys = Object.keys(sets) as EventKey[];

export const isEventKey = (x: string): x is EventKey => Object.hasOwn(sets, x);

/** A city's Sets (only its college or town ones, given `kind`), in raced order. */
export const setsIn = (city: City, kind?: SetKind): EventKey[] =>
  eventKeys.filter(
    (key) =>
      sets[key].city === city &&
      (kind === undefined || sets[key].kind === kind),
  );
