export const COMPANY_SERVICE_GROUPS = [
  {
    label: "Design & planning",
    items: [
      "Interior Design & Space Planning",
      "Architectural & Technical Drawings",
      "2D & 3D Visualization",
      "AutoCAD Drafting",
    ],
  },
  {
    label: "Construction & site",
    items: [
      "Civil & Structural Support Services",
      "Project Supervision & Site Coordination",
      "Drywall & POP Installation",
      "Flooring & Tiling Works",
      "Renovation & Finishing Works",
      "Outdoor & Landscaping Support Services",
    ],
  },
  {
    label: "Production & interiors",
    items: [
      "Furniture Production & Installation",
      "Joinery & Upholstery (Made in Nigeria)",
      "Kitchen, Wardrobe & Custom Cabinetry Solutions",
    ],
  },
  {
    label: "Sourcing",
    items: [
      "Procurement & Material Sourcing",
      "Heavy Equipment, Machinery & Spare Parts Sourcing",
    ],
  },
];

export const COMPANY_SERVICES = COMPANY_SERVICE_GROUPS.flatMap((group) => group.items);
