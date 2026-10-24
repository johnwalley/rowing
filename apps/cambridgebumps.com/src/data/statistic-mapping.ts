import type { Statistic } from "bumps-results-tools/stats";

// Safe to import into islands: unlike `@/data/stats`, it doesn't pull in the
// results.

/**
 * How each statistics table is labelled, and which of its row's fields are
 * the figure and the extra column (see `statisticRows`).
 */
export const statisticMapping: Record<
  Statistic,
  {
    label: string;
    keyLabel: string;
    value: string;
    valueLabel: string;
    additional?: string;
    additionalLabel?: string;
  }
> = {
  headships: {
    label: "Headships",
    keyLabel: "Club",
    value: "headships",
    valueLabel: "Headships",
    additional: "lastYear",
    additionalLabel: "Last year",
  },
  headDays: {
    label: "Total days at headship",
    keyLabel: "Club",
    value: "days",
    valueLabel: "Days",
  },
  headLong: {
    label: "Continuous days at headship",
    keyLabel: "Club",
    value: "days",
    valueLabel: "Days",
    additional: "span",
    additionalLabel: "Span",
  },
  crewsEntered: {
    label: "Crews entered",
    keyLabel: "Club",
    value: "count",
    valueLabel: "Number",
  },
  bladesAwarded: {
    label: "Blades awarded",
    keyLabel: "Club",
    value: "count",
    valueLabel: "Number",
  },
};

/** The statistics, in the order the pages list them. */
export const statistics = Object.keys(statisticMapping) as Statistic[];
