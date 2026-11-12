import type { KeyboardEvent, MouseEvent } from "react";

/** Called with a crew's club when its name or line is clicked. */
export type OnClubClick = (club: string) => void;

// The chart can run to tens of thousands of elements, so rather than a handler
// on each, the names and lines carry their club in `data-club` and one handler
// on the SVG finds it.
function clubOf(target: EventTarget | null) {
  return target instanceof Element
    ? (target.closest("[data-club]")?.getAttribute("data-club") ?? null)
    : null;
}

/** The SVG's event handlers for `onClubClick`, or none without one. */
export function clubClickHandlers(onClubClick: OnClubClick | undefined) {
  if (!onClubClick) return {};

  return {
    onClick: (event: MouseEvent<SVGSVGElement>) => {
      const club = clubOf(event.target);

      if (club !== null) onClubClick(club);
    },
    // The focusable names are role="button", so Enter and Space press them.
    onKeyDown: (event: KeyboardEvent<SVGSVGElement>) => {
      if (event.key !== "Enter" && event.key !== " ") return;

      const club = clubOf(event.target);

      if (club === null) return;

      event.preventDefault();
      onClubClick(club);
    },
  };
}
