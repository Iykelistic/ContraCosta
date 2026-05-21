export const FEATURED_PROJECTS = [
  {
    slug: "urban-loft-conversion",
    title: "Urban Loft Conversion",
    caption:
      "Transforming a minimalist apartment into a dynamic urban sanctuary.",
    video: "/videos/IndoorWork.mp4",
    cardOffset: "md:mt-0",
  },
  {
    slug: "riverside-corporate-hub",
    title: "Riverside Corporate Hub",
    caption:
      "Designing a sleek, modern workspace that inspires productivity.",
    video: "/videos/OfficeRenovation.mp4",
    cardOffset: "md:mt-14",
  },
  {
    slug: "boutique-retail-space",
    title: "Boutique Retail Space",
    caption:
      "Elevating a brand through thoughtful design and customer flow.",
    video: "/videos/Oak.mp4",
    cardOffset: "md:mt-7",
  },
];

export function getProjectBySlug(slug) {
  return FEATURED_PROJECTS.find((p) => p.slug === slug);
}
