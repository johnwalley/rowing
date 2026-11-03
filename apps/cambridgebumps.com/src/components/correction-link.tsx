import { siteConfig } from "@/config/site";
import {
  chartPath,
  getGenderLabel,
  type Gender,
  type EventKey,
} from "@/lib/utils";

type CorrectionLinkProps = {
  event: EventKey;
  gender: Gender;
  year: string;
  race: number;
  /** The race's name: "May Bumps 1838 (May race)" (see `raceTitle`). */
  title: string;
  /** The highlighted club, if any — likely the crew the reader means. */
  club: string | null;
};

// The "Spotted a mistake?" line under a chart. Corrections arrive by email, so
// the link opens one already addressed and subject-lined with the chart, and a
// body that asks for what we need to act on it: the day and division, what
// actually happened, and a source to check it against.
export function CorrectionLink({
  event,
  gender,
  year,
  race,
  title,
  club,
}: CorrectionLinkProps) {
  const chart = `${title} (${getGenderLabel(event, gender)})`;

  const body = [
    `Chart: ${siteConfig.url}${chartPath(event, gender, year, race)}`,
    ...(club ? [`Crew: ${club}`] : []),
    "Day and division:",
    "What actually happened:",
    "Source (e.g. a newspaper report, club history or official results):",
    "",
  ].join("\r\n");

  const href = `mailto:${siteConfig.correctionsEmail}?subject=${encodeURIComponent(
    `Correction: ${chart}`,
  )}&body=${encodeURIComponent(body)}`;

  return (
    <p className="text-center text-sm text-muted-foreground">
      Spotted a mistake in these results?{" "}
      <a
        href={href}
        className="font-medium underline underline-offset-4 hover:text-primary"
      >
        Email a correction
      </a>
    </p>
  );
}
