import { isEventKey, sets } from "./sets";

// Every TG file in results/tg_format/, each loaded lazily as its own chunk, so
// the results editor lists every file without bundling them all. Like
// results.ts, this needs Vite.
const loaders = import.meta.glob<string>("../results/tg_format/*.txt", {
  query: "?raw",
  import: "default",
});

export type ResultFile = {
  id: string;
  set: string;
  gender: "Men" | "Women";
  year: string;
  load: () => Promise<string>;
};

export const resultFiles: ResultFile[] = Object.entries(loaders)
  .flatMap(([path, load]) => {
    const m = path.match(/\/([a-z]+)([0-9]{4}(?:\.[0-9]+)?)_(men|women)\.txt$/);

    if (m === null || !isEventKey(m[1])) {
      return [];
    }

    return [
      {
        id: `${m[1]}${m[2]}_${m[3]}`,
        set: sets[m[1]].short,
        gender: m[3] === "men" ? ("Men" as const) : ("Women" as const),
        year: m[2],
        load,
      },
    ];
  })
  .sort(
    (a, b) =>
      a.set.localeCompare(b.set) ||
      a.gender.localeCompare(b.gender) ||
      a.year.localeCompare(b.year, undefined, { numeric: true }),
  );
