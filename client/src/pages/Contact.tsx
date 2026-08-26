/**
 * Prairie Club Modernism contact page: direct owner contact, explicit service area,
 * and a lightweight email-app handoff suitable for a static frontend.
 */
import SEO from "@/components/SEO";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import type { FormEvent } from "react";

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const email = String(form.get("email") || "");
    const location = String(form.get("location") || "");
    const project = String(form.get("project") || "");
    const subject = encodeURIComponent(`Website project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nProject location: ${location}\n\nProject details:\n${project}`,
    );
    window.location.href = `mailto:info@tpceckroat.com?subject=${subject}&body=${body}`;
  };

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
            Share the location, the work you have in mind, and what is already in the yard. Steve can
            help identify the right next conversation for the project.
          </p>
        </div>
      </section>

      <section className="bg-[#f7f4ec] py-20 lg:py-28">
        <div className="container grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <aside>
            <p className="eyebrow">Direct contact</p>
            <div className="mt-6 border-t border-[#bdb6a8]">
              <a href="tel:+14055091988" className="contact-method group">
                <span className="contact-icon"><Phone size={20} aria-hidden="true" /></span>
                <span>
                  <span className="contact-label">Call Steve</span>
                  <span className="contact-value">(405) 509-1988</span>
                </span>
                <ArrowRight className="ml-auto transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a href="mailto:info@tpceckroat.com" className="contact-method group">
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
                className="contact-method group items-start"
              >
                <span className="contact-icon"><MapPin size={20} aria-hidden="true" /></span>
                <span>
                  <span className="contact-label">Office</span>
                  <span className="contact-value">4260 N Boulevard, Suite 128<br />Edmond, OK 73034</span>
                </span>
                <ArrowRight className="ml-auto mt-3 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-10 bg-[#174d3a] p-7 text-white">
              <p className="font-display text-2xl font-semibold uppercase">Service area</p>
              <p className="mt-3 leading-7 text-white/72">
                Based in Edmond and serving the Oklahoma City metro, Stillwater, and communities
                within approximately 60 miles.
              </p>
            </div>
          </aside>

          <div className="project-worksheet p-6 sm:p-10 lg:p-12">
            <div className="worksheet-index">
              <span>Field intake</span>
              <span>Sheet 01 / TPC</span>
            </div>
            <p className="eyebrow mt-8">Project details</p>
            <h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-none text-[#102b23] sm:text-5xl">
              Prepare an email to TPC Eckroat.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-[#52645e]">
              Completing this form opens your device’s email app with the project details prepared.
              You can review the message before sending.
            </p>
            <form className="mt-9 grid gap-6" onSubmit={handleSubmit}>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="field-label">
                  Name <span aria-hidden="true">*</span>
                  <input className="field-input" type="text" name="name" autoComplete="name" required />
                </label>
                <label className="field-label">
                  Phone <span aria-hidden="true">*</span>
                  <input className="field-input" type="tel" name="phone" autoComplete="tel" required />
                </label>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="field-label">
                  Email <span aria-hidden="true">*</span>
                  <input className="field-input" type="email" name="email" autoComplete="email" required />
                </label>
                <label className="field-label">
                  Project location
                  <input className="field-input" type="text" name="location" autoComplete="street-address" />
                </label>
              </div>
              <label className="field-label">
                What would you like to build? <span aria-hidden="true">*</span>
                <textarea className="field-input min-h-36 resize-y" name="project" required />
              </label>
              <button type="submit" className="button-dark w-fit">
                Open prepared email <ArrowRight size={18} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
