// Safe to import into islands: unlike `@/data/stats`, it doesn't pull in the
// results.
export const statisticMapping: Record<
  string,
  {
    label: string;
    key: string;
    keyLabel: string;
    value: string;
    valueLabel: string;
    additional?: string;
    additionalLabel?: string;
  }
> = {
  headships: {
    label: "Headships",
    key: "club",
    keyLabel: "Club",
    value: "headships",
    valueLabel: "Headships",
    additional: "lastYear",
    additionalLabel: "Last year",
  },
  headDays: {
    label: "Total days at headship",
    key: "club",
    keyLabel: "Club",
    value: "days",
    valueLabel: "Days",
  },
  headLong: {
    label: "Continuous days at headship",
    key: "club",
    keyLabel: "Club",
    value: "days",
    valueLabel: "Days",
    additional: "span",
    additionalLabel: "Span",
  },
  crewsEntered: {
    label: "Crews entered",
    key: "club",
    keyLabel: "Club",
    value: "count",
    valueLabel: "Number",
  },
  bladesAwarded: {
    label: "Blades awarded",
    key: "club",
    keyLabel: "Club",
    value: "count",
    valueLabel: "Number",
  },
};
