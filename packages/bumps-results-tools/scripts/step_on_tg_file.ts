import { processResults, readFile, stepOn, writeString } from "../src/bumps";

// Next year's starting order from a TG file (or stdin), as TG text on stdout:
// the results editor's "Generate next years starting positions".
const parsed = await readFile(process.argv[2]);
const processed = parsed.event ? processResults(parsed.event) : undefined;
const errors = [...parsed.errors, ...(processed?.errors ?? [])];

for (const error of errors) {
  console.error(error);
}

if (errors.length > 0 || !processed?.event) {
  process.exit(1);
}

process.stdout.write(writeString(stepOn(processed.event)));
