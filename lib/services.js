export const SERVICES = [
  {
    slug: "residential-interiors",
    title: "Residential Interiors",
    caption:
      "Thoughtful interior design and finishing for homes that feel refined, warm, and built to last.",
    video: "/videos/InteriorFinishing.mp4",
  },
  {
    slug: "commercial-spaces",
    title: "Commercial Spaces",
    caption:
      "Modern commercial environments designed for flow, productivity, and a strong brand presence.",
    video: "/videos/IndoorWork.mp4",
  },
  {
    slug: "structural-engineering-consulting",
    title: "Structural Engineering Consulting",
    caption:
      "Structural insight and site coordination that keeps ambitious builds safe, sound, and on track.",
    video: "/videos/OutdoorWork.mp4",
  },
  {
    slug: "bespoke-furnishings",
    title: "Bespoke Furnishings",
    caption:
      "Custom furnishings and detailing tailored to each space, elevating comfort and character.",
    video: "/videos/Oak.mp4",
  },
  {
    slug: "renovations-upgrades",
    title: "Renovations & Upgrades",
    caption:
      "Renovation and upgrade work that refreshes existing spaces with smarter layouts and finishes.",
    video: "/videos/Interior.mp4",
  },
];

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug);
}
