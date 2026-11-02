import { readdirSync } from "node:fs";

import { expect, test } from "vitest";

import { keyOf, parseTgFileName, sets } from "./sets";

test("reads a TG file's name", () => {
  expect(parseTgFileName("mays2025_men.txt")).toEqual({
    key: "mays",
    gender: "men",
    year: "2025",
  });
  expect(parseTgFileName("../results/tg_format/mays1848.1_women.txt")).toEqual({
    key: "mays",
    gender: "women",
    year: "1848.1",
  });
});

test.each([
  "henley2025_men.txt",
  "mays2025_mixed.txt",
  "mays25_men.txt",
  "mays2025_men.json",
  "Mays2025_men.txt",
])("%s isn't a TG file's name", (name) => {
  expect(parseTgFileName(name)).toBeNull();
});

// The results editor and the bumps site's redirects skip a file whose name
// doesn't parse, so a misnamed file would go missing from both.
test("every TG file's name parses", () => {
  const files = readdirSync(new URL("../results/tg_format/", import.meta.url));

  expect(files.filter((file) => parseTgFileName(file) === null)).toEqual([]);
});

test("each Set's key is its short name's", () => {
  for (const [key, set] of Object.entries(sets)) {
    expect(keyOf(set)).toBe(key);
  }
});
