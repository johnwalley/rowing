import { describe, expect, test } from "vitest";
import { estimateTextWidth } from "@/utils/measure-text";
import { layoutChartMultiYear } from "@/utils/layout-chart-multi-year";
import { maysFull, sequences } from "./fixtures";

describe("layoutChartMultiYear", () => {
  test.each(Object.entries(sequences))("%s", (_name, sequence) => {
    const layout = layoutChartMultiYear(sequence, {
      measureText: estimateTextWidth,
    });

    expect({
      width: layout.width,
      height: layout.height,
      startNumbers: layout.startNumbers.x,
      startCrews: layout.startCrews.x,
      endCrews: layout.endCrews.x,
      endNumbers: layout.endNumbers.x,
      joins: layout.joins.map((join) => join.x),
      divisions: layout.divisions.map((division) => division.x),
      labels: layout.labels.labels.map(
        ({ label }) => `${label.label} @ ${label.pos.join(",")}`,
      ),
    }).toMatchSnapshot();
  });

  test("places each race where its divisions are drawn", () => {
    const sequence = Object.values(sequences)[0];
    const layout = layoutChartMultiYear(sequence, {
      measureText: estimateTextWidth,
    });

    expect(layout.races.map((race) => race.x)).toEqual(
      layout.divisions.map((division) => division.x),
    );
    expect(layout.races.map((race) => race.width)).toEqual(
      sequence.map((event) => event.days * layout.rowHeight),
    );
    // The last race ends where the end crews' column begins, less a gap.
    const last = layout.races[layout.races.length - 1];
    expect(last.x + last.width).toBeLessThan(layout.endCrews.x);
  });

  test("marks the years with no racing", () => {
    const layout = layoutChartMultiYear(maysFull, {
      measureText: estimateTextWidth,
    });

    expect(layout.gaps.map((gap) => gap.label)).toMatchSnapshot();
    expect(layout.gaps.map((gap) => gap.label)).toContain("2020–21");

    // Each gap is centred over the join between its races, whose lines dash
    for (const gap of layout.gaps) {
      const join = layout.joins.find(
        (join) => join.x < gap.pos[0] && gap.pos[0] < join.x + 32,
      );

      expect(join?.gap).toBe(true);
    }

    expect(layout.joins.filter((join) => join.gap)).toHaveLength(
      layout.gaps.length,
    );
  });

  test("marks no gaps in consecutive years", () => {
    const layout = layoutChartMultiYear(sequences.mays2022_2024, {
      measureText: estimateTextWidth,
    });

    expect(layout.gaps).toEqual([]);
    expect(layout.joins.some((join) => join.gap)).toBe(false);
  });

  test("gives the joint-year headship blades without changing the data", () => {
    const [february, aprilMay] = sequences.mays1845_1846;
    const head = aprilMay.crews[0].end;
    const index = february.crews.findIndex((crew) => crew.start === head);

    const layout = layoutChartMultiYear(sequences.mays1845_1846, {
      measureText: estimateTextWidth,
      blades: true,
    });

    expect(layout.startCrews.crews[index].blades).toBe(true);
    expect(february.crews[index].blades).toBe(false);
  });
});
