/**
 * Prairie Club Modernism contact page: direct, low-friction business contact
 * details with an emphasis on phone, email, and the Edmond office location.
 */
import SEO from "@/components/SEO";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact TPC Eckroat | Outdoor Projects in Edmond & Central Oklahoma"
        description="Call or email TPC Eckroat to discuss artificial turf, putting greens, custom pools, concrete, pergolas, retaining walls, outdoor kitchens, and complete backyard projects."
        path="/contact"
      />

      <section className="bg-[#102b23] py-16 text-white lg:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
          <div>
            <p className="eyebrow text-[#f2bd3b]">Contact TPC Eckroat</p>
            <h1 className="mt-5 max-w-4xl font-display text-6xl font-semibold uppercase leading-[0.9] tracking-[-0.035em] sm:text-7xl lg:text-8xl">
              Start with the property. Build from there.
            </h1>
          </div>
          <p className="max-w-xl border-l-2 border-[#1976ae] pl-6 text-lg leading-8 text-white/72">
            Call, email, or stop by the Edmond office to start the conversation. TPC Eckroat will help
            identify the right next step for the property.
          </p>
        </div>
      </section>

      <section className="bg-[#f7f4ec] py-20 lg:py-28">
        <div className="container">
          <p className="eyebrow">Direct contact</p>
          <h2 className="mt-4 max-w-3xl font-display text-5xl font-semibold uppercase leading-[0.92] tracking-[-0.03em] text-[#102b23] sm:text-6xl">
            Reach TPC Eckroat directly.
          </h2>
          <div className="mt-10 grid border-t border-[#bdb6a8] sm:grid-cols-3">
            <a href="tel:+14055091988" className="contact-method group border-b sm:border-r">
              <span className="contact-icon"><Phone size={20} aria-hidden="true" /></span>
              <span>
                <span className="contact-label">Call Steve</span>
                <span className="contact-value">(405) 509-1988</span>
              </span>
              <ArrowRight className="ml-auto transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href="mailto:info@tpceckroat.com" className="contact-method group border-b sm:border-r">
              <span className="contact-icon"><Mail size={20} aria-hidden="true" /></span>
              <span>
                <span className="contact-label">Email</span>
                <span className="contact-value break-all">info@tpceckroat.com</span>
              </span>
              <ArrowRight className="ml-auto transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=4260+N+Boulevard+Suite+128+Edmond+OK+73034"
              target="_blank"
              rel="noreferrer"
              className="contact-method group items-start border-b"
            >
              <span className="contact-icon"><MapPin size={20} aria-hidden="true" /></span>
              <span>
                <span className="contact-label">Office</span>
                <span className="contact-value">4260 N Boulevard, Suite 128<br />Edmond, OK 73034</span>
              </span>
              <ArrowRight className="ml-auto mt-3 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-10 max-w-md bg-[#174d3a] p-7 text-white">
            <p className="font-display text-2xl font-semibold uppercase">Service area</p>
            <p className="mt-3 leading-7 text-white/72">
              Based in Edmond and serving the Oklahoma City metro, Stillwater, and communities
              within approximately 200 miles.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
