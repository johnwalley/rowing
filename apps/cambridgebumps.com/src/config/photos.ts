import type { ImageMetadata } from "astro";

import cambridgeAboutBump from "@/images/about/bump.webp";
import cambridgeAboutChase from "@/images/about/motorway-bridge.webp";
import cambridgeAboutWillow from "@/images/about/willow.webp";
import cambridgeBump from "@/images/bump.webp";
import cambridgeCannon from "@/images/cannon.webp";
import cambridgeMays1 from "@/images/mays_2025_1.webp";
import cambridgeMays2 from "@/images/mays_2025_2.webp";
import cambridgeBridge from "@/images/motorway-bridge.webp";
import oxfordBoathouses from "@/images/oxford/boathouses.webp";
import oxfordBridgeBump from "@/images/oxford/donnington-bridge-bump.webp";
import oxfordBridgeChase from "@/images/oxford/donnington-bridge-chase.webp";
import oxfordEights2023 from "@/images/oxford/eights-2023.webp";
import oxfordStart from "@/images/oxford/start.webp";
import oxfordTorpidsBump from "@/images/oxford/torpids-2023-bump.webp";
import type { City } from "@/lib/utils";

import { homeCity } from "./site";

/**
 * A photo by someone else, shown under its licence. The licence requires the
 * credit to sit wherever the photo does.
 */
export interface Credit {
  author: string;
  /** The photo's page on Wikimedia Commons. */
  source: string;
  license: "CC BY-SA 2.0" | "CC BY-SA 3.0" | "CC BY-SA 4.0";
}

export interface Photo {
  src: ImageMetadata;
  alt: string;
  /** Absent for the site author's own photos. */
  credit?: Credit;
}

export const licenseUrls: Record<Credit["license"], string> = {
  "CC BY-SA 2.0": "https://creativecommons.org/licenses/by-sa/2.0/",
  "CC BY-SA 3.0": "https://creativecommons.org/licenses/by-sa/3.0/",
  "CC BY-SA 4.0": "https://creativecommons.org/licenses/by-sa/4.0/",
};

// The Cambridge photos are the site author's own. There are none of Oxford yet, so the
// Oxford site uses openly licensed ones from Wikimedia Commons.
const christineMatthews = (geographId: number): Credit => ({
  author: "Christine Matthews",
  source: `https://commons.wikimedia.org/wiki/File:Bump_Race,_River_Thames,_Oxford_-_geograph.org.uk_-_${geographId}.jpg`,
  license: "CC BY-SA 2.0",
});

const oxfordTorpidsBumpPhoto: Photo = {
  src: oxfordTorpidsBump,
  alt: "St Antony's bumping St Catherine's in Torpids 2023",
  credit: {
    author: "POderfla",
    source: "https://commons.wikimedia.org/wiki/File:St_Ants_m1_torpids_23.jpg",
    license: "CC BY-SA 4.0",
  },
};

/** The strip of photos at the foot of the home page. */
const homePhotosByCity: Record<City, Photo[]> = {
  Cambridge: [
    { src: cambridgeBump, alt: "A bump taking place during a bumps race" },
    {
      src: cambridgeBridge,
      alt: "Rowing crews racing under a bridge",
    },
    { src: cambridgeMays1, alt: "May Bumps 2025 racing on the River Cam" },
    { src: cambridgeCannon, alt: "The cannon used to start bumps races" },
    { src: cambridgeMays2, alt: "May Bumps 2025 racing on the River Cam" },
  ],
  Oxford: [
    {
      src: oxfordBridgeBump,
      alt: "A crew closing on the boat ahead under Donnington Bridge in Summer Eights 2015",
      credit: christineMatthews(4510114),
    },
    {
      src: oxfordBoathouses,
      alt: "A crew racing past the crowded college boathouses in Summer Eights 2015",
      credit: christineMatthews(4510374),
    },
    oxfordTorpidsBumpPhoto,
    {
      src: oxfordStart,
      alt: "Crews held at the bank by poles, waiting for the start of a bumps race",
      credit: {
        author: "Steve Bennett",
        source:
          "https://commons.wikimedia.org/wiki/File:Oxford_Bumps_start_Stevage.jpeg",
        license: "CC BY-SA 3.0",
      },
    },
    {
      src: oxfordEights2023,
      alt: "A crew racing on the Isis in Summer Eights 2023",
      credit: {
        author: "Stephen McKay",
        source:
          "https://commons.wikimedia.org/wiki/File:Eights_Week_-_geograph.org.uk_-_7505002.jpg",
        license: "CC BY-SA 2.0",
      },
    },
  ],
};

/** The photos in "Bumps explained". Oxford has none of willow: see the page. */
const aboutPhotosByCity: Record<
  City,
  { chase: Photo; bump: Photo; willow?: Photo }
> = {
  Cambridge: {
    chase: {
      src: cambridgeAboutChase,
      alt: "Multiple boats chasing each other",
    },
    bump: { src: cambridgeAboutBump, alt: "Crew about to bump another crew" },
    willow: { src: cambridgeAboutWillow, alt: "Crew who have bumped" },
  },
  Oxford: {
    chase: {
      src: oxfordBridgeChase,
      alt: "Crews chasing each other under Donnington Bridge in Summer Eights 2015",
      credit: christineMatthews(4510116),
    },
    bump: oxfordTorpidsBumpPhoto,
  },
};

export const homePhotos = homePhotosByCity[homeCity];
export const aboutPhotos = aboutPhotosByCity[homeCity];
