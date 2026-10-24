import { clubs, names, shortNames } from "react-rowing-blades";

/** Every club with a blade, sorted by code. */
export const allClubs = [
  ...clubs.cambridge,
  ...clubs.oxford,
  ...clubs.uk,
  ...clubs.international,
].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

export type Club = (typeof allClubs)[number];

export const allNames: Record<Club, string> = {
  ...names.cambridge,
  ...names.international,
  ...names.oxford,
  ...names.uk,
};

export const allShortNames: Record<Club, string> = {
  ...shortNames.cambridge,
  ...shortNames.oxford,
  ...shortNames.uk,
  ...shortNames.international,
};
