/**
 * Prairie Club Modernism turf page: fairway-led photography and practical golf-space language
 * with understated private-club cues.
 */
import ServicePage, { type ServicePageData } from "@/components/ServicePage";

const data: ServicePageData = {
  title: "Turf & Golf",
  metaTitle: "Artificial Turf & Backyard Putting Greens in Edmond, OK | TPC Eckroat",
  metaDescription:
    "TPC Eckroat installs artificial turf, custom putting greens, and multi-hole backyard golf layouts across Edmond, Oklahoma City, Stillwater, and nearby communities.",
  path: "/turf",
  eyebrow: "01 · Turf & Golf",
  headline: "Practice-ready turf, shaped for real backyards.",
  intro:
    "From a clean, low-maintenance lawn to a multi-hole backyard golf layout, TPC Eckroat builds turf spaces around the property, the shot, and the way you want to use the yard.",
  image: "/assets/tpc-eckroat/turf.webp",
  imageAlt: "Custom residential backyard putting green with sculpted artificial turf and limestone edging",
  highlights: [
    "Custom putting surfaces and contours",
    "Compact greens and multi-hole layouts",
    "Artificial turf for small or full yards",
    "Integration with concrete, pools, and landscaping",
  ],
  services: [
    {
      title: "Putting Greens",
      description:
        "Custom practice areas with planned breaks, clean fringe transitions, and cup locations matched to the available space.",
    },
    {
      title: "Multi-Hole Golf",
      description:
        "Larger backyard golf layouts can support multiple holes and longer practice shots when the property allows.",
    },
    {
      title: "Artificial Turf Lawns",
      description:
        "A consistent, low-maintenance surface for small yards, pool surrounds, side yards, and outdoor living areas.",
    },
    {
      title: "Integrated Edges",
      description:
        "Coordinate turf with concrete, retaining walls, pool decking, planting beds, and drainage so the finish feels intentional.",
    },
  ],
  approachTitle: "Good turf starts below the surface.",
  approachBody:
    "Base preparation, drainage, grade, edge restraint, and seam planning determine how the finished turf performs. We look at those conditions before selecting the final layout.",
  material: "turf",
  materialNotes: ["grade", "base preparation", "edge restraint", "playing contour"],
  steps: [
    { number: "01", title: "Assess", description: "Review grade, access, drainage, intended use, and how the turf connects to existing surfaces." },
    { number: "02", title: "Shape", description: "Plan the green, fringe, cups, contours, and surrounding hardscape as one coordinated layout." },
    { number: "03", title: "Install", description: "Prepare the base, set edges, place material, finish transitions, and tune the playing surface." },
  ],
};

export default function Turf() {
  return <ServicePage data={data} />;
}
