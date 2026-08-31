/**
 * Prairie Club Modernism pool page: blue-water precision balanced with grounded construction
 * language and integrated site planning.
 */
import ServicePage, { type ServicePageData } from "@/components/ServicePage";

const data: ServicePageData = {
  title: "Custom Pools",
  metaTitle: "Custom Pool Builder in Edmond & Oklahoma City | TPC Eckroat",
  metaDescription:
    "TPC Eckroat plans and builds custom swimming pools coordinated with concrete decking, retaining walls, pool houses, and complete outdoor living construction in central Oklahoma.",
  path: "/pools",
  eyebrow: "02 · Custom Pools",
  headline: "A pool planned as part of the whole property.",
  intro:
    "TPC Eckroat brings pool design, site work, decking, retaining, and surrounding outdoor spaces into one coordinated plan—so the finished pool belongs in the yard from every angle.",
  image: "/assets/tpc-eckroat/pools-hero.webp",
  video: "/assets/tpc-eckroat/pool-water-matched.mp4",
  imageAlt: "Modern custom swimming pool with concrete decking, limestone coping, and integrated outdoor living space",
  highlights: [
    "Custom pool layouts for the property",
    "Concrete deck and coping coordination",
    "Retaining walls, drainage, and site transitions",
    "Pool houses, pergolas, and adjacent living areas",
  ],
  services: [
    {
      title: "Pool Planning",
      description:
        "Shape, placement, access, and circulation are considered in relation to the home, grade, views, and surrounding yard.",
    },
    {
      title: "Decking & Concrete",
      description:
        "Coordinate pool coping, concrete decking, walkways, and adjacent patios for a consistent, durable finish.",
    },
    {
      title: "Site Integration",
      description:
        "Retaining walls, drainage, grading, utilities, and access are considered early rather than treated as afterthoughts.",
    },
    {
      title: "Poolside Structures",
      description:
        "Add pergolas, pool houses, changing spaces, outdoor kitchens, and seating areas to make the pool easier to use." ,
    },
  ],
  approachTitle: "The best pool plan extends beyond the waterline.",
  approachBody:
    "We look at how people arrive, where they gather, what the grade requires, and which supporting structures belong nearby. That wider view keeps the project coordinated from excavation through the final outdoor space.",
  material: "pools",
  materialNotes: ["waterline", "coping", "deck transition", "site drainage"],
  steps: [
    { number: "01", title: "Site Walk", description: "Discuss the property, goals, access, grade, placement, and the full outdoor scope." },
    { number: "02", title: "Coordinate", description: "Bring the pool, concrete, retaining, turf, and structures into one build sequence." },
    { number: "03", title: "Build", description: "Manage execution with direct communication and attention to each transition around the pool." },
  ],
};

export default function Pools() {
  return <ServicePage data={data} />;
}
