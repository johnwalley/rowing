import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const recordingsCollection = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/recordings" }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    year: z.string(),
    description: z.string(),
    cox: z.string(),
    videoId: z.string().regex(/^[\w-]{11}$/),
  }),
});

export const collections = {
  recordings: recordingsCollection,
};
