import { useId } from "react";
import { CaretSortIcon } from "@radix-ui/react-icons";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn, yearOf } from "@/lib/utils";

// With no `?from=` or `?to=`, a multi-year chart shows this many of the
// event's most recent years. The whole history of the Mays is tens of thousands
// of pixels wide, and most visitors want recent seasons.
const DEFAULT_SPAN = 20;

// The quick choices beside the year pickers, besides "All". They count years
// the event ran, so a gap in the racing doesn't shorten them.
const SPANS = [10, DEFAULT_SPAN, 50];

// The first of the event's last `count` years.
function firstOfLast(years: string[], count: number) {
  return years[Math.max(0, years.length - count)];
}

// The span of years a multi-year chart covers, from `?from=` and `?to=`.
// With neither, it's the last `DEFAULT_SPAN` years. Either can be left out on
// its own, meaning the event's first or last year, and either can name a year
// the event didn't run — the range snaps inward to the nearest year it did. A
// pair given the wrong way round is swapped, and one that takes in no years at
// all (a women's event linked with a range from the 1800s, say) falls back to
// the default.
export function yearRange(
  years: string[],
  params: URLSearchParams,
): { from: string; to: string } {
  const first = years[0];
  const last = years[years.length - 1];
  const recent = { from: firstOfLast(years, DEFAULT_SPAN), to: last };

  if (!params.has("from") && !params.has("to")) return recent;

  const parse = (value: string | null, fallback: string) => {
    const year = yearOf(value ?? fallback);

    return Number.isNaN(year) ? yearOf(fallback) : year;
  };

  const a = parse(params.get("from"), first);
  const b = parse(params.get("to"), last);
  const lo = Math.min(a, b);
  const hi = Math.max(a, b);

  const from = years.find((year) => yearOf(year) >= lo);
  const to = years.findLast((year) => yearOf(year) <= hi);

  if (from === undefined || to === undefined || yearOf(from) > yearOf(to)) {
    return recent;
  }

  return { from, to };
}

// The `?from=` and `?to=` that give a range, as short as `yearRange` reads
// back: the default span has a bare URL, and a range ending in the event's
// last year leaves out `to`. `from` is left out only for the default, since on
// its own a missing `from` means the event's first year.
function rangeParams(
  years: string[],
  from: string,
  to: string,
): { from: string | null; to: string | null } {
  if (to !== years[years.length - 1]) return { from, to };

  return {
    from: from === firstOfLast(years, DEFAULT_SPAN) ? null : from,
    to: null,
  };
}

type YearRangeControlsProps = {
  /** Every year the event ran, oldest first. */
  years: string[];
  from: string;
  to: string;
  setParam: (name: string, value: string | null) => void;
  /** The native selects shown above the chart on narrow screens. */
  compact?: boolean;
};

// Quick span choices plus "From" and "To" pickers for a multi-year chart. Each
// picker only offers the years that keep the range the right way round.
// Changing either end sets both params (see `rangeParams`), so moving one end
// never moves the other.
//
// Rendered twice, like `HighlightControls`, hence the `useId` ids.
export function YearRangeControls({
  years,
  from,
  to,
  setParam,
  compact = false,
}: YearRangeControlsProps) {
  const id = useId();

  const last = years[years.length - 1];

  const fromYears = years.filter((year) => yearOf(year) <= yearOf(to));
  const toYears = years.filter((year) => yearOf(year) >= yearOf(from));

  const setRange = (nextFrom: string, nextTo: string) => {
    const next = rangeParams(years, nextFrom, nextTo);

    setParam("from", next.from);
    setParam("to", next.to);
  };

  const setFrom = (year: string) => setRange(year, to);
  const setTo = (year: string) => setRange(from, year);

  // A choice as long as the whole history is the same as "All", so it's left
  // out; an event with no shorter choice gets no quick choices at all.
  const spans = [
    ...SPANS.filter((count) => count < years.length).map((count) => ({
      label: `Last ${count}`,
      title: `The last ${count} years of racing`,
      from: firstOfLast(years, count),
    })),
    { label: "All", title: "Every year", from: years[0] },
  ];

  const spanChoices = spans.length > 1 && (
    <div
      role="group"
      aria-label="Span of years"
      className={cn(
        "inline-flex items-center rounded-md bg-muted p-1 text-muted-foreground",
        compact ? "h-7 w-full" : "h-9 w-[280px]",
      )}
    >
      {spans.map((span) => {
        const pressed = from === span.from && to === last;

        return (
          <button
            key={span.label}
            type="button"
            title={span.title}
            aria-pressed={pressed}
            onClick={() => setRange(span.from, last)}
            className={cn(
              "inline-flex flex-1 items-center justify-center rounded-sm px-2 text-sm font-medium whitespace-nowrap transition-all hover:text-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none",
              compact ? "h-[1.45rem]" : "h-7",
              pressed && "bg-background text-foreground shadow",
            )}
          >
            {span.label}
          </button>
        );
      })}
    </div>
  );

  if (compact) {
    return (
      <div className="flex flex-col gap-2">
        {spanChoices}
        <div className="flex items-center gap-2 text-sm">
          <YearNativeSelect
            years={fromYears}
            value={from}
            onChange={setFrom}
            aria-label="First year"
          />
          <span className="text-muted-foreground">to</span>
          <YearNativeSelect
            years={toYears}
            value={to}
            onChange={setTo}
            aria-label="Last year"
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Label htmlFor={`${id}-from`} className="mb-4 block">
        Years
      </Label>
      <div className="flex flex-col gap-2">
        {spanChoices}
        <div className="flex w-[280px] items-center gap-2">
          <YearSelect
            id={`${id}-from`}
            years={fromYears}
            value={from}
            onChange={setFrom}
            aria-label="First year"
          />
          <span className="text-sm text-muted-foreground">to</span>
          <YearSelect
            years={toYears}
            value={to}
            onChange={setTo}
            aria-label="Last year"
          />
        </div>
      </div>
    </div>
  );
}

type YearSelectProps = {
  id?: string;
  years: string[];
  value: string;
  onChange: (year: string) => void;
  "aria-label": string;
};

function YearSelect({
  id,
  years,
  value,
  onChange,
  "aria-label": ariaLabel,
}: YearSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger id={id} aria-label={ariaLabel} className="flex-1">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {years.map((year) => (
          <SelectItem key={year} value={year}>
            {year}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

// A native select on phones, for the same reason as `ClubNativeSelect`.
function YearNativeSelect({
  years,
  value,
  onChange,
  "aria-label": ariaLabel,
}: Omit<YearSelectProps, "id">) {
  return (
    <div className="relative flex min-w-0 flex-1">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label={ariaLabel}
        // 16px text: iOS zooms the page into any smaller form control on focus.
        className="h-8 w-full min-w-0 appearance-none rounded-md border border-input bg-transparent py-0 pr-8 pl-3 text-base shadow-sm ring-offset-background focus:outline-none focus-visible:ring-1 focus-visible:ring-ring dark:[color-scheme:dark]"
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <CaretSortIcon className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 opacity-50" />
    </div>
  );
}
