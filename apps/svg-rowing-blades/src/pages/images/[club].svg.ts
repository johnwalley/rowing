import type { APIRoute, GetStaticPaths } from "astro";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Blade } from "react-rowing-blades";

import { allClubs, type Club } from "../../lib/clubs";

// The files the club pages' Download buttons link to, rendered at 500px.
export const getStaticPaths = (() =>
  allClubs.map((club) => ({ params: { club } }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ params }) => {
  const club = params.club as Club;
  const svg = renderToStaticMarkup(createElement(Blade, { size: 500, club }));
  return new Response(svg, { headers: { "Content-Type": "image/svg+xml" } });
};
