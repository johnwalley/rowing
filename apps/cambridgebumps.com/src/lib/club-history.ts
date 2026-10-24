import {
  getClubHistory as historyOf,
  type ClubHistory,
} from "bumps-results-tools/club-history";
import { events } from "bumps-results-tools/results";

import { clubs, type Club } from "@/data/clubs";
import type { City } from "@/lib/utils";

export {
  getSectionRecords,
  isCurrent,
  latestYear,
  type ClubCrew,
  type ClubHistory,
  type ClubRace,
  type ClubSection,
  type CrewYear,
  type SectionRecords,
} from "bumps-results-tools/club-history";

const histories = new Map<Club, ClubHistory>();

/** A club's races and records, worked out once per build. */
export function getClubHistory(club: Club): ClubHistory {
  let history = histories.get(club);

  if (!history) {
    history = historyOf(club, events);
    histories.set(club, history);
  }

  return history;
}

export const clubsIn = (city: City) =>
  clubs.filter((club) => club.city === city);

export function getClub(city: City, slug: string): Club | undefined {
  return clubsIn(city).find((club) => club.slug === slug);
}
