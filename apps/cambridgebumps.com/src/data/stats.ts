import { getRankings } from "bumps-results-tools/stats";

import { processedResults } from "@/data/results";
import { events, genders } from "@/lib/utils";

// The statistics tables for each event and category, from the same results
// as the charts.
export const stats = Object.fromEntries(
  events.map((event) => [
    event,
    Object.fromEntries(
      genders.map((gender) => [
        gender,
        getRankings(processedResults[event][gender]),
      ]),
    ),
  ]),
) as Record<string, Record<string, any>>;
