import { clubs, genderedClubs, names, shortNames } from "react-rowing-blades";

/** Every club with a blade, sorted by code. */
export const allClubs = [
  ...clubs.cambridge,
  ...clubs.oxford,
  ...clubs.uk,
  ...clubs.international,
  ...clubs.overseas,
].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

export type Club = (typeof allClubs)[number];

export const allNames: Record<Club, string> = {
  ...names.cambridge,
  ...names.international,
  ...names.overseas,
  ...names.oxford,
  ...names.uk,
};

export const allShortNames: Record<Club, string> = {
  ...shortNames.cambridge,
  ...shortNames.oxford,
  ...shortNames.uk,
  ...shortNames.international,
  ...shortNames.overseas,
};

export type Design = {
  gender?: "men" | "women";
  /** "Men's" or "Women's" for a club with both, otherwise undefined. */
  label?: string;
  /** The SVG's name under /images, without the extension. */
  file: string;
};

/**
 * A club's blade designs: one, or a men's and a women's for the clubs in
 * `genderedClubs`. The women's keeps the plain `<club>.svg`, the file it had
 * before the split.
 */
export const designsOf = (club: Club): Design[] =>
  genderedClubs.includes(club)
    ? [
        { gender: "men", label: "Men's", file: `${club}-men` },
        { gender: "women", label: "Women's", file: club },
      ]
    : [{ file: club }];
