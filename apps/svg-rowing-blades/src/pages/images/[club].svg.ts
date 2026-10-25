import type { APIRoute, GetStaticPaths } from "astro";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Blade } from "react-rowing-blades";

import { allClubs, designsOf } from "../../lib/clubs";

// The files the club pages' Download buttons link to, rendered at 500px: one
// per design, so `wro.svg` and `wro-men.svg` for a club with two.
export const getStaticPaths = (() =>
  allClubs.flatMap((club) =>
    designsOf(club).map(({ file, gender }) => ({
      params: { club: file },
      props: { club, gender },
    })),
  )) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => {
  const { club, gender } = props;
  const svg = renderToStaticMarkup(
    createElement(Blade, { size: 500, club, gender }),
  );
  return new Response(svg, { headers: { "Content-Type": "image/svg+xml" } });
};
