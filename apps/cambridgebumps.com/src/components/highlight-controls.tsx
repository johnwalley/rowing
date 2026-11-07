import { useId } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";

import { ClubCombobox } from "@/components/club-combobox";
import { ClubNativeSelect } from "@/components/club-native-select";
import { HighlightToggle } from "@/components/highlight-toggle";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { clubPageUrl } from "@/data/clubs";
import { cn, type EventKey } from "@/lib/utils";

type HighlightControlsProps = {
  event: EventKey;
  /** Club names for the "Highlight club" dropdown. */
  clubs: string[];
  club: string | null;
  blades: boolean;
  setParam: (name: string, value: string | null) => void;
  /**
   * The single row shown above the chart on narrow screens, rather than the
   * labelled stack in the sidebar.
   */
  compact?: boolean;
};

// The "Highlight club" picker and "Highlight blades" toggle shared by both
// chart shells. Each shell renders it twice — in the sidebar and above the
// chart on narrow screens, one of them hidden by CSS — so the ids come from
// `useId` rather than being fixed, or the two copies' labels would point at
// the same control. The narrow-screen copy picks clubs with a native select;
// see `ClubNativeSelect`.
export function HighlightControls({
  event,
  clubs,
  club,
  blades,
  setParam,
  compact = false,
}: HighlightControlsProps) {
  const id = useId();
  const clubId = `${id}-club`;
  const bladesId = `${id}-blades`;

  // The highlighted club's own page, when it has one.
  const clubHref = club === null ? undefined : clubPageUrl(event, club);
  const clubLink = clubHref && (
    <a
      href={clubHref}
      className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
    >
      {club} history
    </a>
  );

  const clubPicker = (
    <div className={cn("flex", compact ? "min-w-0 flex-1" : "w-[280px]")}>
      {compact ? (
        <ClubNativeSelect
          id={clubId}
          clubs={clubs}
          value={club}
          onChange={(value) => setParam("club", value)}
          placeholder="Highlight a club"
          aria-label="Highlight club"
          className="h-8 min-w-0 flex-1"
        />
      ) : (
        <ClubCombobox
          id={clubId}
          clubs={clubs}
          value={club}
          onChange={(value) => setParam("club", value)}
          placeholder="Select a club"
          aria-label="Highlight club"
          className="min-w-0 flex-1"
        />
      )}
      <Button
        variant="link"
        size="icon"
        className={cn("shrink-0", compact && "h-8 w-8")}
        disabled={club === null}
        onClick={() => setParam("club", null)}
        aria-label="Clear highlighted club"
      >
        <Cross2Icon className="h-4 w-4" />
      </Button>
    </div>
  );

  const bladesToggle = (
    <div
      className={cn(
        "flex space-x-2",
        compact ? "shrink-0 items-center" : "items-top w-[280px]",
      )}
    >
      <HighlightToggle
        id={bladesId}
        label="Blades"
        description={
          compact
            ? undefined
            : "Crews who bumped every day, or finished head of the river."
        }
        checked={blades}
        onCheckedChange={(checked) =>
          setParam("blades", checked ? "true" : "false")
        }
      />
    </div>
  );

  if (compact) {
    return (
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          {clubPicker}
          {bladesToggle}
        </div>
        {clubLink}
      </div>
    );
  }

  // The club and blades highlights are one group under one heading, so the
  // sidebar reads Event, Category, Year(s), Highlight.
  return (
    <div>
      <Label htmlFor={clubId} className="mb-2 block">
        Highlight
      </Label>
      {clubPicker}
      {clubLink && <div className="mt-2">{clubLink}</div>}
      <div className="mt-4">{bladesToggle}</div>
    </div>
  );
}
