import type { SVGProps } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Logo } from "@/components/Logo";

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .6.05.88.15V9.4a6.35 6.35 0 0 0-.88-.06A6.33 6.33 0 0 0 5 20.12a6.34 6.34 0 0 0 10.86-4.45V8.75a8.2 8.2 0 0 0 4.77 1.52V6.85c-.35 0-.69-.06-1.04-.16Z" />
    </svg>
  );
}

const socialLinks = [
  {
    name: "Facebook",
    href: "",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sintesi3d?igsh=YW0xaWw2M2lzeWg0",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    href: "",
    icon: Linkedin,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@www.sintesi3d.it?_r=1&_t=ZN-96KaEACMmbG",
    icon: TikTokIcon,
  },
].filter((social) => social.href);

const legalLinkClass =
  "text-muted-foreground transition-smooth hover:text-primary";

export function Footer() {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith("/en");

  const navLinks = isEnglish
    ? ([
        { to: "/en", label: "Home" },
        { to: "/en/services", label: "Services" },
        { to: "/en/about", label: "About" },
        { to: "/en/contact", label: "Contact" },
      ] as const)
    : ([
        { to: "/", label: "Home" },
        { to: "/servizi", label: "Servizi" },
        { to: "/reverse-engineering", label: "Reverse Engineering" },
        { to: "/chi-siamo", label: "Chi Siamo" },
        { to: "/contatti", label: "Contatti" },
      ] as const);

  return (
    <footer className="relative mt-32 border-t border-border/60 bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-5 lg:px-10">
        <div className="md:col-span-2">
          <Logo className="h-20 w-auto" />

          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            {isEnglish
              ? "3D printing, 3D scanning, reverse engineering and CAD design for aerospace, motorsport and high-speed rail applications. Twenty years of engineering know-how, now accessible."
              : "Stampa 3D, scansioni 3D, reverse engineering e progettazione CAD per Aerospace, Motorsport e Ferroviario High-Speed. Vent'anni di ingegneria, oggi accessibili."}
          </p>

          <div className="mt-7">
            <p className="tech-label mb-2">
              {isEnglish ? "See our work" : "Guarda i nostri lavori"}
            </p>

            <p className="mb-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {isEnglish
                ? "Follow us on social media to see prototypes, 3D prints, scans and completed projects."
                : "Seguici sui social per vedere prototipi, stampe 3D, scansioni e progetti realizzati."}
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-smooth hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="tech-label mb-5">
            {isEnglish ? "Navigation" : "Navigazione"}
          </p>

          <ul className="space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={legalLinkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="tech-label mb-5">{isEnglish ? "Legal" : "Legale"}</p>

          <ul className="space-y-3 text-sm">
            <li>
              {isEnglish ? (
                <Link to="/en/privacy" className={legalLinkClass}>
                  Privacy Notice
                </Link>
              ) : (
                <a
                  href="https://www.iubenda.com/privacy-policy/82947247"
                  className={legalLinkClass}
                  title="Privacy Policy"
                >
                  Privacy Policy
                </a>
              )}
            </li>

            <li>
              {isEnglish ? (
                <Link to="/en/cookie-policy" className={legalLinkClass}>
                  Cookie Notice
                </Link>
              ) : (
                <a
                  href="https://www.iubenda.com/privacy-policy/82947247/cookie-policy"
                  className={legalLinkClass}
                  title="Cookie Policy"
                >
                  Cookie Policy
                </a>
              )}
            </li>

            <li>
              <Link
                to={isEnglish ? "/en/contact-privacy" : "/privacy-contatti"}
                className={legalLinkClass}
              >
                {isEnglish
                  ? "Contact form privacy notice"
                  : "Informativa contatti"}
              </Link>
            </li>

            <li>
              <button
                type="button"
                className={`cursor-pointer bg-transparent p-0 text-left ${legalLinkClass}`}
                onClick={() => {
                  const fn = (window as unknown as Record<string, unknown>)
                    .openCookiePreferences;
                  if (typeof fn === "function") (fn as () => void)();
                }}
              >
                {isEnglish ? "Cookie preferences" : "Preferenze cookie"}
              </button>
            </li>
          </ul>
        </div>

        <div>
          <p className="tech-label mb-5">
            {isEnglish ? "Contact" : "Contatti"}
          </p>

          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              <a
                href="mailto:info@sintesi3d.it"
                className="transition-smooth hover:text-primary"
              >
                info@sintesi3d.it
              </a>
            </li>

            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-primary" />
              <a
                href="tel:+393755905212"
                className="transition-smooth hover:text-primary"
              >
                +39 375 590 5212
              </a>
            </li>

            <li className="flex items-start gap-2">
              <Globe className="mt-0.5 h-4 w-4 text-primary" />
              <a
                href="https://www.sintesi3d.it"
                className="transition-smooth hover:text-primary"
              >
                www.sintesi3d.it
              </a>
            </li>

            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              <span>Via S. Croce 48, 83020 Sperone (AV), Italia</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex-row lg:px-10">
          <span>
            © {new Date().getFullYear()} Sintesi 3D — All rights reserved
          </span>

          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            {isEnglish ? "System operational" : "Sistema operativo"}
          </span>
        </div>
      </div>
    </footer>
  );
}
