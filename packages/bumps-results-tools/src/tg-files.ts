import { parseTgFileName, sets } from "./sets";

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
    const name = parseTgFileName(path);

    if (name === null) {
      return [];
    }

    const { key, gender, year } = name;

    return [
      {
        id: `${key}${year}_${gender}`,
        set: sets[key].short,
        gender: gender === "men" ? ("Men" as const) : ("Women" as const),
        year,
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
