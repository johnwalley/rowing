import fs from "fs";
import { processResults, readFile } from "../src/bumps";
import { roman } from "../src/abbreviations";
import { parseTgFileName, type EventKey, type Gender } from "../src/sets";
import { type Event } from "../src/types";

// What an AD file name calls each Set and category.
const setMap: Record<EventKey, string> = {
  eights: "e",
  torpids: "t",
  mays: "m",
  lents: "l",
  town: "town",
};

const genderMap: Record<Gender, string> = {
  men: "m",
  women: "w",
};

function renderName(crew: Event["crews"][number], isTown: boolean): string {
  return isTown && crew.number === 1 ? `${crew.start} 1` : crew.start;
}

function writeAd(event: Event): string {
  if (!event.div_size || !event.move) {
    throw new Error(
      `Event ${event.short} ${event.year} has no processed results`,
    );
  }

  const startingDivs = event.div_size[0];
  const nDivs = startingDivs.length;
  const nCrews = event.crews.length;
  const genderStr = event.gender === "Men" ? "Men's" : "Women's";
  const isTown = event.short === "Town";

  let out = `${event.short.toUpperCase()} ${event.year}\n`;
  out += ` ${event.days}  ${nDivs}  ${nCrews}   = NDay, NDiv, NCrew\n`;

  let crewIndex = 0;
  for (let d = 0; d < nDivs; d++) {
    const size = startingDivs[d];
    out += ` ${size}  ${genderStr} Div ${roman[d]}\n`;

    for (let p = 0; p < size; p++) {
      const crew = event.crews[crewIndex];
      let line = renderName(crew, isTown).padEnd(25);
      let pos = crewIndex;
      for (let day = 0; day < event.days; day++) {
        const m = event.move[day][pos] ?? 0;
        line += String(m).padStart(4);
        pos -= m;
      }
      out += line + "\n";
      crewIndex++;
    }
  }

  return out;
}

const tgDir = "./results/tg_format/";
const adDir = "./results/ad_format/";

if (!fs.existsSync(adDir)) {
  fs.mkdirSync(adDir);
}

const files = fs.readdirSync(tgDir).sort();
// AD file name -> TG file it was converted from
const written = new Map<string, string>();
let numSkipped = 0;

for (const file of files) {
  // e.g. mays1848.1_men.txt: years with more than one race have a suffix
  const name = parseTgFileName(file);

  if (!name) {
    console.warn(`Skipping ${file}: unrecognised filename`);
    numSkipped++;
    continue;
  }

  const set = setMap[name.key];
  const gender = genderMap[name.gender];
  const year = name.year;

  const { event, errors: parseErrors } = await readFile(tgDir + file);

  if (!event || event.crews.length === 0) {
    console.warn(`Skipping ${file}: parse failed or no crews`, parseErrors);
    numSkipped++;
    continue;
  }

  const { event: processed, errors } = processResults(event);

  if (!processed || errors.length > 0) {
    console.warn(`Skipping ${file}: could not process results`, errors);
    numSkipped++;
    continue;
  }

  const newFile = `${set}${year}${gender}.txt`;

  const existing = written.get(newFile);
  if (existing) {
    console.error(`${file} and ${existing} both convert to ${newFile}`);
    process.exit(1);
  }

  try {
    const ad = writeAd(processed);
    fs.writeFileSync(adDir + newFile, ad);
    written.set(newFile, file);
  } catch (err) {
    console.error(`Failed to convert ${file}:`, err);
    numSkipped++;
  }
}

// Remove AD files whose TG file has gone or been renamed
let numRemoved = 0;
for (const file of fs.readdirSync(adDir)) {
  if (!written.has(file)) {
    fs.unlinkSync(adDir + file);
    numRemoved++;
  }
}

console.log(
  `Converted ${written.size} files, skipped ${numSkipped}, removed ${numRemoved} stale`,
);
