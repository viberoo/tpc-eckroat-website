/**
 * Prairie Club Modernism homepage: asymmetrical hero, quiet material confidence,
 * logo-ordered service index, and evergreen proof without fabricated testimonials.
 */
import SEO from "@/components/SEO";
import { ArrowRight, Flag, Hammer, Phone, Waves } from "lucide-react";
import { Link } from "wouter";

const heroImage = "/manus-storage/tpc-eckroat-hero_feb81cdb.jpg";

const services = [
  {
    number: "01",
    title: "Turf & Golf",
    description:
      "Artificial turf, custom putting greens, and backyard golf layouts shaped around your property and how you want to play.",
    href: "/turf",
    icon: Flag,
    color: "#174d3a",
  },
  {
    number: "02",
    title: "Custom Pools",
    description:
      "Purpose-built pools coordinated with decking, grading, retaining walls, structures, and the rest of the outdoor plan.",
    href: "/pools",
    icon: Waves,
    color: "#1976ae",
  },
  {
    number: "03",
    title: "Construction",
    description:
      "Concrete, pergolas, outdoor kitchens, pool houses, retaining walls, remodels, and complete outdoor living construction.",
    href: "/construction",
    icon: Hammer,
    color: "#6a7173",
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="TPC Eckroat | Turf, Custom Pools & Outdoor Construction in Edmond, OK"
        description="TPC Eckroat builds artificial turf, putting greens, custom pools, concrete, pergolas, retaining walls, pool houses, and complete outdoor environments across Edmond and the Oklahoma City metro."
        path="/"
      />

      <section className="relative overflow-hidden bg-[#102b23] text-white">
        <div className="container grid min-h-[43rem] lg:grid-cols-[0.87fr_1.13fr] lg:items-stretch">
          <div className="relative z-10 flex flex-col justify-center py-16 lg:pr-14 lg:py-24">
            <div className="mb-7 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#f2bd3b]">
              <span className="flag-point" /> Turf · Pools · Construction
            </div>
            <h1 className="max-w-3xl font-display text-[3.65rem] font-semibold uppercase leading-[0.88] tracking-[-0.035em] sm:text-[5rem] lg:text-[6.3rem]">
              One vision.
              <span className="block text-[#75b9df]">Every part</span>
              of the backyard.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/74">
              TPC Eckroat brings turf, pools, concrete, structures, and outdoor living together
              in one coordinated plan for properties across central Oklahoma.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="button-gold">
                Plan your project <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a href="tel:+14055091988" className="button-ghost-light">
                <Phone size={17} aria-hidden="true" /> Call (405) 509-1988
              </a>
            </div>
          </div>

          <div className="relative min-h-[27rem] lg:-mr-[calc((100vw-1280px)/2)] lg:min-h-[43rem]">
            <img
              src={heroImage}
              alt="Coordinated Oklahoma backyard with a custom pool, putting green, pergola, concrete deck, and retaining walls"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#102b23] via-[#102b23]/15 to-transparent lg:from-[#102b23] lg:via-transparent" />
            <div className="absolute bottom-0 left-0 grid w-full grid-cols-3 border-t border-white/20 bg-[#102b23]/86 backdrop-blur-md lg:left-16 lg:w-auto">
              <div className="px-4 py-4 sm:px-6">
                <span className="proof-value">2007</span>
                <span className="proof-label">Construction</span>
              </div>
              <div className="border-x border-white/15 px-4 py-4 sm:px-6">
                <span className="proof-value">2017</span>
                <span className="proof-label">Pool work</span>
              </div>
              <div className="px-4 py-4 sm:px-6">
                <span className="proof-value">60 mi</span>
                <span className="proof-label">Service area</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ec] py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="eyebrow">The TPC service index</p>
              <h2 className="section-title mt-4">The whole yard, considered together.</h2>
            </div>
            <p className="max-w-2xl border-l-2 border-[#f2bd3b] pl-6 text-lg leading-8 text-[#52645e] lg:ml-auto">
              A pool changes grading. A retaining wall affects drainage. A pergola changes how the
              patio is used. TPC Eckroat approaches the project as one connected environment—not a
              collection of unrelated pieces.
            </p>
          </div>

          <div className="mt-14 border-y border-[#bdb6a8]">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="service-row group"
                  style={{ "--service-color": service.color } as React.CSSProperties}
                >
                  <span className="font-display text-sm font-bold tracking-[0.18em] text-[#7b817f]">
                    {service.number}
                  </span>
                  <div className="flex items-center gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#bdb6a8] text-[var(--service-color)]">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-3xl font-semibold uppercase text-[#102b23] sm:text-4xl">
                      {service.title}
                    </h3>
                  </div>
                  <p className="max-w-xl leading-7 text-[#52645e]">{service.description}</p>
                  <ArrowRight className="text-[var(--service-color)] transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="relative min-h-[30rem] bg-[#174d3a] p-8 text-white sm:p-10 lg:min-h-[35rem]">
            <div className="pool-line" aria-hidden="true" />
            <p className="eyebrow text-[#f2bd3b]">Built from experience</p>
            <p className="mt-6 font-display text-5xl font-semibold uppercase leading-[0.96] sm:text-6xl">
              Construction first.
              <span className="block text-[#75b9df]">Backyard focused.</span>
            </p>
            <p className="mt-7 max-w-md text-lg leading-8 text-white/72">
              Steve Eckroat brings construction experience dating to 2007 and pool work dating to
              2017 to each outdoor project.
            </p>
            <Link href="/about" className="mt-9 inline-flex items-center gap-2 font-bold text-[#f2bd3b] hover:underline">
              Meet TPC Eckroat <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <div className="absolute bottom-0 right-0 h-28 w-28 bg-[#1976ae] sm:h-36 sm:w-36">
              <div className="absolute left-0 top-0 h-0 w-0 border-r-[2.5rem] border-t-[2.5rem] border-r-transparent border-t-[#f2bd3b]" />
            </div>
          </div>

          <div>
            <p className="eyebrow">A practical process</p>
            <h2 className="section-title mt-4 max-w-2xl">Clear decisions from the first walk-through.</h2>
            <div className="mt-10">
              {[
                ["01", "Walk the property", "Start with the site, goals, drainage, access, and how the finished space should be used."],
                ["02", "Coordinate the scope", "Bring turf, pool, concrete, retaining, and structures into one practical sequence."],
                ["03", "Build with accountability", "Keep communication direct while specialized crews execute the work."],
              ].map(([number, title, text]) => (
                <div key={number} className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-[#d8d2c5] py-6 last:border-b">
                  <span className="font-display text-xl font-bold text-[#1976ae]">{number}</span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold uppercase text-[#102b23]">{title}</h3>
                    <p className="mt-2 leading-7 text-[#52645e]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#174d3a] py-20 text-white lg:py-28">
        <div className="absolute -right-16 -top-20 h-80 w-80 rounded-full border-[3rem] border-[#1976ae]/45" aria-hidden="true" />
        <div className="container relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="eyebrow text-white/65">Your property, planned as one place</p>
            <h2 className="mt-4 max-w-4xl font-display text-5xl font-semibold uppercase leading-[0.94] sm:text-6xl lg:text-7xl">
              Ready to make more of the backyard?
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-lg text-lg leading-8 text-white/76">
              Tell us what you want to build, what is already there, and where the property is located.
              We’ll start with a practical conversation.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="button-gold">
                Start planning <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a href="tel:+14055091988" className="button-ghost-light">
                <Phone size={17} aria-hidden="true" /> Call Steve
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
