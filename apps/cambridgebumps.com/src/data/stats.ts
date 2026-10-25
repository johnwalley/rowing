import {
  getRankings,
  type Rankings,
  type Statistic,
} from "bumps-results-tools/stats";

import { results } from "@/data/results";
import { statisticMapping } from "@/data/statistic-mapping";
import { events, genders, type Gender, type Set } from "@/lib/utils";

// The statistics tables for each event and category, from the same results
// as the charts.
const stats = Object.fromEntries(
  events.map((event) => [
    event,
    Object.fromEntries(
      genders.map((gender) => [gender, getRankings(results[event][gender])]),
    ),
  ]),
) as Record<Set, Record<Gender, Rankings>>;

/** A statistics table's row as the pages show it. */
export type StatisticRow = {
  club: string;
  value: number;
  additional?: string;
};

/** A statistics table, with each row's figures picked out by its mapping. */
export function statisticRows(
  event: Set,
  gender: Gender,
  statistic: Statistic,
): StatisticRow[] {
  const { value, additional } = statisticMapping[statistic];
  const rows = stats[event][gender][statistic] as Record<
    string,
    string | number
  >[];

  return rows.map((row) => ({
    club: row.club as string,
    value: row[value] as number,
    additional: additional === undefined ? undefined : String(row[additional]),
  }));
}
