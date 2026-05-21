import { VIDEOS } from "./assets";

export const SERVICES = [
  {
    slug: "residential-interiors",
    title: "Residential Interiors",
    caption:
      "Thoughtful interior design and finishing for homes that feel refined, warm, and built to last.",
    video: VIDEOS.interiorFinishing,
  },
  {
    slug: "commercial-spaces",
    title: "Commercial Spaces",
    caption:
      "Modern commercial environments designed for flow, productivity, and a strong brand presence.",
    video: VIDEOS.indoorWork,
  },
  {
    slug: "structural-engineering-consulting",
    title: "Structural Engineering Consulting",
    caption:
      "Structural insight and site coordination that keeps ambitious builds safe, sound, and on track.",
    video: VIDEOS.outdoorWork,
  },
  {
    slug: "bespoke-furnishings",
    title: "Bespoke Furnishings",
    caption:
      "Custom furnishings and detailing tailored to each space, elevating comfort and character.",
    video: VIDEOS.oak,
  },
  {
    slug: "renovations-upgrades",
    title: "Renovations & Upgrades",
    caption:
      "Renovation and upgrade work that refreshes existing spaces with smarter layouts and finishes.",
    video: VIDEOS.interior,
  },
];

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug);
}
