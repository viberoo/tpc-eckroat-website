/**
 * Prairie Club Modernism service template: offset photography, numbered editorial content,
 * square-edged material panels, and direct local-service conversion paths.
 */
import SEO from "@/components/SEO";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Link } from "wouter";

export type ServicePageData = {
  title: string;
  metaTitle: string;
  metaDescription: string;
  path: string;
  eyebrow: string;
  headline: string;
  intro: string;
  image: string;
  video?: string;
  imageAlt: string;
  highlights: string[];
  services: Array<{ title: string; description: string }>;
  approachTitle: string;
  approachBody: string;
  material: "turf" | "pools" | "construction";
  materialNotes: string[];
  steps: Array<{ number: string; title: string; description: string }>;
};

export default function ServicePage({ data }: { data: ServicePageData }) {
  return (
    <div className={`service-page material-${data.material}`}>
      <SEO
        title={data.metaTitle}
        description={data.metaDescription}
        path={data.path}
        image={data.image}
      />

      <section className="service-hero">
        <div className="container grid items-stretch lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-10 flex flex-col justify-center bg-[#102b23] px-6 py-16 text-white sm:px-10 lg:-mr-16 lg:min-h-[39rem] lg:px-14 lg:py-24">
            <p className="eyebrow text-[#f2bd3b]">{data.eyebrow}</p>
            <h1 className="mt-5 max-w-2xl font-display text-5xl font-semibold uppercase leading-[0.94] tracking-[-0.025em] sm:text-6xl lg:text-7xl">
              {data.headline}
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/76">{data.intro}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="button-gold">
                Plan this project <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a href="tel:+14055091988" className="button-ghost-light">
                <Phone size={17} aria-hidden="true" /> (405) 509-1988
              </a>
            </div>
          </div>
          <div className="relative min-h-[23rem] overflow-hidden lg:my-12 lg:min-h-[34rem]">
            <img
              src={data.image}
              alt={data.imageAlt}
              className="service-hero-still absolute inset-0 h-full w-full object-cover"
            />
            {data.video && (
              <video
                className="service-hero-video absolute inset-0 h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-hidden="true"
              >
                <source src={data.video} type="video/mp4" />
              </video>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#102b23]/55 via-transparent to-transparent" />
            <div className="material-mark" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 bg-[#f2bd3b] px-5 py-3 text-xs font-extrabold uppercase tracking-[0.16em] text-[#102b23] lg:left-16">
              Edmond · OKC · Stillwater
            </div>
          </div>
        </div>
      </section>

      <div className="material-ledger">
        <div className="container flex flex-wrap items-center gap-x-8 gap-y-3 py-4">
          <span className="material-ledger-title"><span className="flag-point" /> Material field notes</span>
          {data.materialNotes.map((note) => (
            <span key={note} className="material-ledger-note">{note}</span>
          ))}
        </div>
      </div>

      <section className="bg-[#f7f4ec] py-20 lg:py-28">
        <div className="container grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="eyebrow">What we build</p>
            <h2 className="section-title mt-4">The work behind the finished space.</h2>
            <div className="mt-8 border-l-2 border-[#1976ae] pl-6">
              {data.highlights.map((highlight) => (
                <div key={highlight} className="flex gap-3 border-b border-[#d8d2c5] py-4 first:pt-0">
                  <Check size={18} className="mt-0.5 shrink-0 text-[#1976ae]" aria-hidden="true" />
                  <span className="font-semibold text-[#27463d]">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid border-t border-[#bdb6a8] sm:grid-cols-2">
            {data.services.map((service, index) => (
              <article
                key={service.title}
                className={`border-b border-[#bdb6a8] py-8 sm:px-8 ${
                  index % 2 === 0 ? "sm:border-r" : ""
                }`}
              >
                <span className="font-display text-sm font-bold tracking-[0.18em] text-[#1976ae]">
                  0{index + 1}
                </span>
                <h3 className="mt-4 font-display text-3xl font-semibold uppercase leading-none text-[#102b23]">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-[#52645e]">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <p className="eyebrow">A coordinated approach</p>
              <h2 className="section-title mt-4 max-w-3xl">{data.approachTitle}</h2>
            </div>
            <p className="max-w-2xl border-l-2 border-[#f2bd3b] pl-6 text-lg leading-8 text-[#52645e]">
              {data.approachBody}
            </p>
          </div>
          <div className="mt-14 grid border-y border-[#bdb6a8] lg:grid-cols-3">
            {data.steps.map((step, index) => (
              <article
                key={step.number}
                className={`py-8 lg:px-8 lg:py-10 ${index < data.steps.length - 1 ? "border-b border-[#bdb6a8] lg:border-b-0 lg:border-r" : ""}`}
              >
                <span className="font-display text-5xl font-semibold text-[#d5d0c4]">{step.number}</span>
                <h3 className="mt-5 font-display text-2xl font-semibold uppercase text-[#102b23]">{step.title}</h3>
                <p className="mt-3 leading-7 text-[#52645e]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#174d3a] py-16 text-white lg:py-20">
        <div className="cta-sweep" aria-hidden="true" />
        <div className="container flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow text-white/70">Start with the whole property</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold uppercase leading-none sm:text-5xl">
              Let’s make every part work together.
            </h2>
          </div>
          <Link href="/contact" className="button-gold shrink-0">
            Contact TPC Eckroat <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
