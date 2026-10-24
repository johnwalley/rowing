// Renders every blade in react-rowing-blades to public/images/<club>.svg, the
// files the club pages' Download buttons link to. They're generated, not
// committed, so they always match the workspace's blades.
import { mkdirSync, writeFileSync } from "node:fs";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Blade, clubs } from "react-rowing-blades";

const dir = new URL("../public/images/", import.meta.url);
mkdirSync(dir, { recursive: true });

const all = Object.values(clubs).flat();

for (const club of all) {
  const svg = renderToStaticMarkup(createElement(Blade, { size: 500, club }));
  writeFileSync(new URL(`${club}.svg`, dir), svg);
}

console.log(`Wrote ${all.length} blades to public/images`);
