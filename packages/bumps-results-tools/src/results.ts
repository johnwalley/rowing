import { processResults, readEvent } from "./bumps";
import type { ProcessedEvent } from "./types";

// Every TG file in results/tg_format/, bundled at build time. This needs Vite
// (the bumps site, the results editor, Vitest); scripts run with tsx read the files
// with `readFile` instead.
const files = import.meta.glob<string>("../results/tg_format/*.txt", {
  query: "?raw",
  import: "default",
  eager: true,
});

/**
 * Every event in `results/tg_format/`, parsed and processed, in file name
 * order. Importing this throws if any file has errors, listing them all, so
 * nothing is built from bad data.
 */
export const events: ProcessedEvent[] = [];

const problems: string[] = [];

for (const path of Object.keys(files).sort()) {
  const parsed = readEvent(files[path]);
  const processed = parsed.event ? processResults(parsed.event) : undefined;
  const errors = [...parsed.errors, ...(processed?.errors ?? [])];

  if (errors.length > 0 || !processed?.event) {
    problems.push(`${path.split("/").pop()}:\n    ${errors.join("\n    ")}`);
    continue;
  }

  events.push(processed.event);
}

if (problems.length > 0) {
  throw new Error(
    `${problems.length} TG file(s) have errors:\n  ${problems.join("\n  ")}`,
  );
}
