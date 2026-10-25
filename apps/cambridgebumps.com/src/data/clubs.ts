import { clubOf } from "bumps-results-tools/clubs";

import { cityUrls, homeCity } from "@/config/site";
import type { Set } from "@/lib/utils";

export {
  clubs,
  eventsOf,
  namesOf,
  unlisted,
  type Club,
} from "bumps-results-tools/clubs";

/**
 * The page of the club a results name belongs to, as raced in `event`: a
 * path on this site, or a full URL on the other city's. Undefined for a name
 * with no page, or a joint crew, which belongs to more than one.
 */
export function clubPageUrl(event: Set, name: string): string | undefined {
  const club = clubOf(event, name);
  if (!club) return undefined;

  const path = `/clubs/${club.slug}`;
  return club.city === homeCity ? path : `${cityUrls[club.city]}${path}`;
}
