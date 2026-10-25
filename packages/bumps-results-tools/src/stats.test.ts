import { expect, test } from "vitest";

import { clubOf, type EventKey } from "./clubs";
import { events } from "./results";
import { getRankings, headOf } from "./stats";

const race = (short: string, gender: string, year: string) =>
  events.find(
    (event) =>
      event.short === short && event.gender === gender && event.year === year,
  )!;

test("a crew that withdrew is never head", () => {
  // Christ Church I led until it withdrew on the last day; Queen's I finished
  // head with blades.
  const eights = race("Eights", "Men", "1837");
  expect(eights.crews[headOf(eights)!].num_name.trim()).toBe("Queen's I");

  // Every crew but Wadham I withdrew.
  const torpids = race("Torpids", "Men", "1840");
  expect(torpids.crews[headOf(torpids)!].num_name.trim()).toBe("Wadham I");
});

test.each(["eights", "lents", "mays", "torpids", "town"] as EventKey[])(
  "%s statistics credit former names to their clubs",
  (event) => {
    for (const gender of ["Men", "Women"]) {
      const rankings = getRankings(
        events.filter(
          (race) =>
            race.short.toLowerCase() === event && race.gender === gender,
        ),
      );

      for (const rows of Object.values(rankings)) {
        for (const { club } of rows) {
          expect(clubOf(event, club)?.short ?? club).toBe(club);
        }
      }
    }
  },
);

/** Each table as aligned text, one club per line. */
function summarise(rankings: ReturnType<typeof getRankings>): string {
  return Object.entries(rankings)
    .map(([table, rows]) => {
      const cells = rows.map((row) => Object.values(row).map(String));
      const widths = cells[0]?.map((_, i) =>
        Math.max(...cells.map((row) => row[i].length)),
      );
      const lines = cells.map((row) =>
        row
          .map((cell, i) => cell.padEnd(widths![i]))
          .join("  ")
          .trimEnd(),
      );
      return [table, ...lines].join("\n");
    })
    .join("\n\n")
    .concat("\n");
}

test.each(
  ["eights", "lents", "mays", "torpids", "town"].flatMap((event) =>
    ["men", "women"].map((gender) => [event, gender]),
  ),
)("%s %s statistics tables", async (event, gender) => {
  const rankings = getRankings(
    events.filter(
      (race) =>
        race.short.toLowerCase() === event &&
        race.gender.toLowerCase() === gender,
    ),
  );

  await expect(summarise(rankings)).toMatchFileSnapshot(
    `./__snapshots__/stats/${event}_${gender}.txt`,
  );
});
