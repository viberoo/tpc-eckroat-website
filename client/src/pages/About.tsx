/**
 * Prairie Club Modernism about page: owner-led credibility, evergreen experience dates,
 * and factual process details presented without manufactured social proof.
 */
import SEO from "@/components/SEO";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <>
      <SEO
        title="About TPC Eckroat | Outdoor Construction Experience in Edmond, OK"
        description="Learn about Steve Eckroat and TPC Eckroat’s construction-first approach to custom pools, turf, putting greens, concrete, structures, and complete outdoor environments."
        path="/about"
      />

      <section className="bg-[#f7f4ec] py-16 lg:py-24">
        <div className="container grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="eyebrow">About TPC Eckroat</p>
            <h1 className="mt-5 max-w-4xl font-display text-6xl font-semibold uppercase leading-[0.9] tracking-[-0.035em] text-[#102b23] sm:text-7xl lg:text-8xl">
              Experience that sees the whole build.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#52645e]">
              TPC Eckroat is an owner-led outdoor construction company serving Edmond, Oklahoma City,
              Stillwater, and nearby communities. The work spans turf, pools, concrete, structures,
              and complete backyard projects.
            </p>
          </div>
          <div className="relative min-h-[27rem] overflow-hidden bg-[#102b23] p-8 text-white sm:p-10">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border-[2.5rem] border-[#1976ae]" aria-hidden="true" />
            <div className="absolute bottom-0 right-0 h-28 w-36 bg-[#f2bd3b]" aria-hidden="true" />
            <div className="relative z-10">
              <span className="font-display text-8xl font-semibold leading-none text-white/12">TPC</span>
              <p className="mt-10 max-w-sm font-display text-4xl font-semibold uppercase leading-tight">
                Turf. Pools. Construction.
              </p>
              <p className="mt-5 max-w-sm leading-7 text-white/70">
                Three service areas, one coordinated point of view.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Steve Eckroat</p>
            <h2 className="section-title mt-4">Construction roots. Outdoor focus.</h2>
            <a href="tel:+14055091988" className="mt-8 inline-flex items-center gap-2 font-bold text-[#1976ae] hover:underline">
              <Phone size={17} aria-hidden="true" /> Speak directly with Steve
            </a>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#52645e]">
            <p>
              Steve’s construction experience dates to 2007 and includes residential and commercial
              work. He began focusing on pools in 2017, adding water, grading, concrete, retaining,
              and outdoor structures to an already broad construction background.
            </p>
            <p>
              That experience shapes how TPC Eckroat approaches a backyard. Instead of treating a
              putting green, pool, patio, or pergola as an isolated addition, the project begins with
              the entire property—access, drainage, grade, circulation, materials, and the way the
              finished space needs to function.
            </p>
            <p>
              Planning remains owner-led, while specialized trade crews carry out the work. The goal
              is direct communication and a coordinated sequence from the first site visit through
              the finished outdoor environment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#102b23] py-20 text-white lg:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="eyebrow text-[#f2bd3b]">What guides the work</p>
            <h2 className="mt-4 max-w-2xl font-display text-5xl font-semibold uppercase leading-none sm:text-6xl">
              Practical decisions, made early.
            </h2>
          </div>
          <div className="border-t border-white/20">
            {[
              ["Whole-property thinking", "Look beyond the immediate feature to the grade, drainage, circulation, and surrounding work."],
              ["Direct communication", "Keep the planning conversation clear and connected to the person responsible for the project."],
              ["Coordinated trades", "Sequence specialized work so turf, pool, concrete, structures, and finishes fit together."],
              ["Useful outdoor space", "Design around how the property will actually be played in, gathered in, and maintained."],
            ].map(([title, description]) => (
              <div key={title} className="grid grid-cols-[1.75rem_1fr] gap-4 border-b border-white/20 py-6">
                <Check className="mt-1 text-[#f2bd3b]" size={18} aria-hidden="true" />
                <div>
                  <h3 className="font-display text-2xl font-semibold uppercase">{title}</h3>
                  <p className="mt-2 leading-7 text-white/68">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2bd3b] py-14 text-[#102b23]">
        <div className="container flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-3xl font-display text-4xl font-semibold uppercase leading-none sm:text-5xl">
            Bring the first idea. We’ll talk through the whole property.
          </h2>
          <Link href="/contact" className="button-dark shrink-0">
            Plan a project <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
