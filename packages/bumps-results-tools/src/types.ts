import { z } from "zod";

import { sets, type SetName, type SetShort } from "./sets";

const setNames = Object.values(sets).map((set) => set.name) as [
  SetName,
  ...SetName[],
];
const setShorts = Object.values(sets).map((set) => set.short) as [
  SetShort,
  ...SetShort[],
];

const StatisticsSchema = z.object({
  headships: z.array(
    z.object({
      club: z.string(),
      headships: z.number(),
      lastYear: z.number(),
    }),
  ),
  crews: z.array(
    z
      .object({
        year: z.number(),
      })
      .catchall(z.number()),
  ),
  positionChange: z.record(
    z.number(),
    z.array(z.object({ club: z.string(), crew: z.number(), year: z.number() })),
  ),
});

export type Statistics = z.infer<typeof StatisticsSchema>;

const CrewSchema = z.object({
  blades: z.boolean(),
  club_end: z.string().nullable(),
  club: z.string(),
  end: z.string().nullable(),
  gain: z.number().nullable(),
  highlight: z.boolean(),
  num_name: z.string(),
  number: z.number(),
  start: z.string(),
  withdrawn: z.boolean(),
});

export const EventSchema = z.object({
  back: z.array(z.array(z.number().nullable())).optional(),
  completed: z.array(z.array(z.boolean())).optional(),
  crews_withdrawn: z.number().optional(),
  crews: z.array(CrewSchema),
  days: z.number(),
  distance: z.number(),
  div_size: z.array(z.array(z.number())).nullable(),
  flags: z.array(z.string()),
  full_set: z.boolean().optional(),
  gender: z.enum(["Men", "Women"]),
  move: z.array(z.array(z.number().nullable())).optional(),
  pace: z.array(z.unknown()),
  results: z.array(z.string()),
  set: z.enum(setNames),
  short: z.enum(setShorts),
  skip: z.array(z.array(z.boolean())).optional(),
  year: z.string(),
});

export type Event = z.infer<typeof EventSchema>;
export type Crew = z.infer<typeof CrewSchema>;

/**
 * An {@link Event} that has been run through `processResults`. The fields that
 * `processResults` computes are guaranteed to be present (and `div_size` is no
 * longer nullable), so downstream consumers can read them without non-null
 * assertions.
 */
export type ProcessedEvent = Event & {
  back: (number | null)[][];
  completed: boolean[][];
  crews_withdrawn: number;
  div_size: number[][];
  full_set: boolean;
  move: (number | null)[][];
  skip: boolean[][];
};
