// @vitest-environment jsdom
import { act } from "react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { createRoot, Root } from "react-dom/client";
import { renderToString } from "react-dom/server";
import { BumpsChart } from "../src/components/bumps-chart";
import { BumpsChartMultiYear } from "../src/components/bumps-chart-multi-year";
import { events } from "./fixtures";

declare global {
  var IS_REACT_ACT_ENVIRONMENT: boolean;
}

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

const measureText = (text: string) => text.length * 5;

const event = events.mays2023_men;

let container: HTMLDivElement;
let root: Root;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(() => {
  act(() => root.unmount());
  container.remove();
});

function render(element: React.ReactElement) {
  act(() => root.render(element));
  return container.querySelector("svg")!;
}

describe("onClubClick", () => {
  test("clicking a crew's name reports its club", () => {
    const onClubClick = vi.fn();
    const svg = render(
      <BumpsChart
        data={event}
        measureText={measureText}
        onClubClick={onClubClick}
      />,
    );

    const crew = event.crews[3];
    const name = [...svg.querySelectorAll("text")].find(
      (text) => text.textContent === crew.start,
    )!;

    act(() => name.dispatchEvent(new MouseEvent("click", { bubbles: true })));

    expect(onClubClick).toHaveBeenCalledWith(crew.club);
  });

  test("clicking a crew's line reports its club", () => {
    const onClubClick = vi.fn();
    const svg = render(
      <BumpsChart
        data={event}
        measureText={measureText}
        onClubClick={onClubClick}
      />,
    );

    const line = svg.querySelector("polyline[data-club]")!;

    act(() => line.dispatchEvent(new MouseEvent("click", { bubbles: true })));

    expect(onClubClick).toHaveBeenCalledWith(line.getAttribute("data-club"));
  });

  test("Enter on a starting name reports its club", () => {
    const onClubClick = vi.fn();
    const svg = render(
      <BumpsChart
        data={event}
        measureText={measureText}
        onClubClick={onClubClick}
      />,
    );

    const focusable = svg.querySelectorAll('text[tabindex="0"]');
    // One column of names, not both
    expect(focusable).toHaveLength(event.crews.length);

    const name = focusable[0];
    expect(name.getAttribute("role")).toBe("button");
    expect(name.getAttribute("aria-label")).toBe(
      `Highlight ${event.crews[0].club}`,
    );

    act(() =>
      name.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
      ),
    );

    expect(onClubClick).toHaveBeenCalledWith(event.crews[0].club);
  });

  test("a highlighted club's names are pressed", () => {
    const club = event.crews[0].club;
    const svg = render(
      <BumpsChart
        data={{
          ...event,
          crews: event.crews.map((crew) => ({
            ...crew,
            highlight: crew.club === club,
          })),
        }}
        measureText={measureText}
        onClubClick={() => {}}
      />,
    );

    const pressed = [...svg.querySelectorAll('[aria-pressed="true"]')];

    expect(pressed.length).toBeGreaterThan(0);
    expect(
      pressed.every((name) => name.getAttribute("data-club") === club),
    ).toBe(true);
  });

  test("the multi-year chart reports clicks too", () => {
    const onClubClick = vi.fn();
    const svg = render(
      <BumpsChartMultiYear
        data={[events.mays2022_men, events.mays2023_men]}
        measureText={measureText}
        onClubClick={onClubClick}
      />,
    );

    const line = svg.querySelector("polyline[data-club]")!;

    act(() => line.dispatchEvent(new MouseEvent("click", { bubbles: true })));

    expect(onClubClick).toHaveBeenCalledWith(line.getAttribute("data-club"));
  });

  test("without it, the chart renders as before", () => {
    const html = renderToString(
      <BumpsChart data={event} measureText={measureText} />,
    );

    expect(html).not.toContain("data-club");
    expect(html).not.toContain("tabindex");
    expect(html).not.toContain('role="button"');
  });
});
