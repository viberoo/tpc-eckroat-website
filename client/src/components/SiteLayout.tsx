/**
 * Prairie Club Modernism shell: high-contrast utility bar, prominent supplied wordmark,
 * architectural navigation rules, and a grounded fairway-green footer.
 */
import { ArrowUpRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

const logo = "/manus-storage/tpc-eckroat-logo-redesign_bc9f28c9.svg";

const navigation = [
  { href: "/turf", label: "Turf" },
  { href: "/pools", label: "Pools" },
  { href: "/construction", label: "Construction" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[100] -translate-y-20 bg-[#f2bd3b] px-4 py-3 text-sm font-bold text-[#102b23] transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <div className="hidden bg-[#102b23] text-white lg:block">
        <div className="container flex h-10 items-center justify-between text-[0.7rem] font-bold uppercase tracking-[0.16em]">
          <span>Serving Edmond, Oklahoma City, Stillwater &amp; nearby communities</span>
          <div className="flex items-center gap-6">
            <a className="utility-link" href="mailto:info@tpceckroat.com">
              <Mail size={13} aria-hidden="true" /> info@tpceckroat.com
            </a>
            <a className="utility-link" href="tel:+14055091988">
              <Phone size={13} aria-hidden="true" /> (405) 509-1988
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-[#d8d2c5] bg-[#f7f4ec]/95 backdrop-blur-xl">
        <div className="container flex h-[5.25rem] items-center justify-between gap-5 lg:h-24">
          <Link href="/" className="shrink-0" aria-label="TPC Eckroat home">
            <img
              src={logo}
              alt="TPC Eckroat — Turf, Pools, Construction"
              className="brand-logo-light h-[64px] w-auto object-contain sm:h-[72px] lg:h-[86px]"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${location === item.href ? "is-active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href="tel:+14055091988"
            className="hidden min-h-12 items-center gap-2 bg-[#f2bd3b] px-5 text-sm font-extrabold uppercase tracking-[0.08em] text-[#102b23] transition hover:bg-[#ffd268] xl:flex"
          >
            <Phone size={17} aria-hidden="true" /> Call Steve
          </a>

          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center border border-[#174d3a] text-[#174d3a] lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`fixed inset-x-0 top-[5.25rem] z-50 h-[calc(100vh-5.25rem)] bg-[#102b23] text-white transition duration-200 lg:hidden ${
            menuOpen ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-full opacity-0"
          }`}
        >
          <nav className="container flex h-full flex-col py-8" aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between border-b border-white/15 py-5 font-display text-3xl font-semibold uppercase tracking-wide"
              >
                <span>
                  <span className="mr-4 text-xs font-bold text-[#f2bd3b]">0{index + 1}</span>
                  {item.label}
                </span>
                <ArrowUpRight size={20} aria-hidden="true" />
              </Link>
            ))}
            <a
              href="tel:+14055091988"
              className="mt-auto flex min-h-14 items-center justify-center gap-3 bg-[#f2bd3b] px-5 font-extrabold uppercase tracking-[0.08em] text-[#102b23]"
            >
              <Phone size={19} aria-hidden="true" /> Call (405) 509-1988
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">{children}</main>

      <footer className="bg-[#102b23] text-white">
        <div className="container grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:py-16">
          <div>
            <img
              src={logo}
              alt="TPC Eckroat"
              className="mb-6 w-[240px] max-w-full"
            />
            <p className="max-w-md text-[0.95rem] leading-7 text-white/70">
              Coordinated turf, pools, concrete, structures, and complete outdoor environments for
              properties across the central Oklahoma region.
            </p>
          </div>
          <div>
            <p className="footer-label">Explore</p>
            <div className="mt-5 grid gap-3 text-sm">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="footer-link">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="footer-label">Contact</p>
            <div className="mt-5 grid gap-4 text-sm text-white/75">
              <a className="footer-contact" href="tel:+14055091988">
                <Phone size={16} aria-hidden="true" /> (405) 509-1988
              </a>
              <a className="footer-contact" href="mailto:info@tpceckroat.com">
                <Mail size={16} aria-hidden="true" /> info@tpceckroat.com
              </a>
              <a
                className="footer-contact items-start"
                href="https://www.google.com/maps/search/?api=1&query=4260+N+Boulevard+Suite+128+Edmond+OK+73034"
                target="_blank"
                rel="noreferrer"
              >
                <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>4260 N Boulevard, Suite 128<br />Edmond, OK 73034</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/12">
          <div className="container flex flex-col gap-2 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} TPC Eckroat. All rights reserved.</p>
            <p>
              Created by{" "}
              <a
                href="https://www.jrpmts.com"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-[#f2bd3b] underline-offset-4 hover:underline"
              >
                JRPMTS
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
