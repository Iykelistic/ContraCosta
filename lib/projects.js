import { VIDEOS } from "./assets";

export const FEATURED_PROJECTS = [
  {
    slug: "urban-loft-conversion",
    title: "Masion Ariela",
    caption:
      "A warm expression of layered beige tones, subtle gold accents, rich textures.",
    video: VIDEOS.indoorWork,
    videoEndAt: 41,
  },
  {
    slug: "riverside-corporate-hub",
    title: "The green line office",
    caption:
      "The space features an open shared working space softened by lush indoor greenery, natural textures, and expansive street-facing views that keep the office connected to the rhythm of the city.",
    video: VIDEOS.officeRenovation,
    videoEndAt: 47,
  },
  {
    slug: "boutique-retail-space",
    title: "The Mocha Townhouse",
    caption:
      "Warm, understated, and effortlessly refined, The Mocha Townhouse was designed to embody the beauty of contemporary simplicity. Wrapped in rich coffee-brown tones, soft beige palettes, and layered natural textures, the home offers a calming atmosphere that feels intimate, grounded, and timeless.",
    video: VIDEOS.oak,
  },
];

export function getProjectBySlug(slug) {
  return FEATURED_PROJECTS.find((p) => p.slug === slug);
}
