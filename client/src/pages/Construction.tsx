/**
 * Prairie Club Modernism construction page: cedar, limestone, concrete, and disciplined
 * architectural rhythm communicate durable outdoor craftsmanship.
 */
import ServicePage, { type ServicePageData } from "@/components/ServicePage";

const data: ServicePageData = {
  title: "Construction",
  metaTitle: "Outdoor Construction, Concrete & Pergolas in Edmond, OK | TPC Eckroat",
  metaDescription:
    "TPC Eckroat builds concrete patios and driveways, pergolas, outdoor kitchens, retaining walls, pool houses, remodels, and coordinated outdoor living spaces across central Oklahoma.",
  path: "/construction",
  eyebrow: "03 · Construction",
  headline: "Outdoor structures built to belong there.",
  intro:
    "With construction experience dating to 2007, TPC Eckroat builds the concrete, walls, shade structures, kitchens, and enclosed spaces that turn a yard into a complete place to live.",
  image: "/manus-storage/tpc-construction-service-v2_5ad219ff.jpg",
  imageAlt: "Cedar pergola, outdoor kitchen, concrete patio, and limestone retaining wall in a finished Oklahoma backyard",
  highlights: [
    "Concrete patios, walkways, and driveways",
    "Pergolas and outdoor shade structures",
    "Outdoor kitchens and gathering areas",
    "Retaining walls, pool houses, bathhouses, and remodels",
  ],
  services: [
    {
      title: "Concrete",
      description:
        "Patios, pool decks, walkways, and driveways planned for circulation, drainage, durability, and the surrounding architecture.",
    },
    {
      title: "Pergolas",
      description:
        "Shade structures that define outdoor rooms and create a more comfortable transition between the home and yard.",
    },
    {
      title: "Outdoor Kitchens",
      description:
        "Cooking, serving, and gathering spaces coordinated with utilities, seating, shade, and nearby pool or patio areas.",
    },
    {
      title: "Walls & Buildings",
      description:
        "Retaining walls, pool houses, changing spaces, bathhouses, and other structures shaped around the project’s practical needs.",
    },
  ],
  approachTitle: "Every structure should solve more than one problem.",
  approachBody:
    "A retaining wall can create usable grade. A pergola can define circulation and shade a gathering zone. A pool house can support storage, changing, and entertaining. We plan each element around how the whole space works.",
  material: "construction",
  materialNotes: ["concrete mass", "limestone edge", "cedar structure", "finished grade"],
  steps: [
    { number: "01", title: "Define", description: "Clarify the use, footprint, material direction, site limitations, and relationship to existing construction." },
    { number: "02", title: "Sequence", description: "Coordinate concrete, utilities, structures, retaining, turf, and pool work in the right order." },
    { number: "03", title: "Complete", description: "Finish material transitions and details so the new work reads as one connected environment." },
  ],
};

export default function Construction() {
  return <ServicePage data={data} />;
}
