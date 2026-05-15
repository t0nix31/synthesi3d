import type { SVGProps } from "react";
import { Link } from "@tanstack/react-router";
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
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
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

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60 bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 lg:px-10">
        <div className="md:col-span-2">
          <Logo className="h-20 w-auto" />

          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Stampa 3D, scansioni 3D, reverse engineering e progettazione CAD per
            Aerospace, Motorsport e Ferroviario High-Speed. Vent&apos;anni di
            ingegneria, oggi accessibili.
          </p>

          <div className="mt-7">
            <p className="tech-label mb-2">Guarda i nostri lavori</p>

            <p className="mb-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Seguici sui social per vedere prototipi, stampe 3D, scansioni e
              progetti realizzati.
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
          <p className="tech-label mb-5">Navigazione</p>

          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/"
                className="text-muted-foreground transition-smooth hover:text-primary"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/servizi"
                className="text-muted-foreground transition-smooth hover:text-primary"
              >
                Servizi
              </Link>
            </li>

            <li>
              <Link
                to="/chi-siamo"
                className="text-muted-foreground transition-smooth hover:text-primary"
              >
                Chi Siamo
              </Link>
            </li>

            <li>
              <Link
                to="/contatti"
                className="text-muted-foreground transition-smooth hover:text-primary"
              >
                Contatti
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="tech-label mb-5">Contatti</p>

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
              <span>Sperone (AV) — Italy</span>
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
            System operational
          </span>
        </div>
      </div>
    </footer>
  );
}
