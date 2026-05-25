import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Globe2, Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";

const linksIt = [
  { to: "/", label: "Home" },
  { to: "/servizi", label: "Servizi" },
  { to: "/progetti", label: "Progetti" },
  { to: "/chi-siamo", label: "Chi Siamo" },
  { to: "/contatti", label: "Contatti" },
] as const;

const linksEn = [
  { to: "/en/", label: "Home" },
  { to: "/en/services", label: "Services" },
  { to: "/en/projects", label: "Projects" },
  { to: "/en/about", label: "About" },
  { to: "/en/contact", label: "Contact" },
] as const;

function getLanguageSwitch(pathname: string) {
  const normalized = pathname.replace(/\/$/, "") || "/";

  const toItalian: Record<string, string> = {
    "/en": "/",
    "/en/services": "/servizi",
    "/en/projects": "/progetti",
    "/en/about": "/chi-siamo",
    "/en/contact": "/contatti",
    "/en/contact-privacy": "/privacy-contatti",
    "/en/privacy": "/",
    "/en/cookie-policy": "/",
  };

  const toEnglish: Record<string, string> = {
    "/": "/en/",
    "/servizi": "/en/services",
    "/progetti": "/en/projects",
    "/chi-siamo": "/en/about",
    "/contatti": "/en/contact",
    "/privacy-contatti": "/en/contact-privacy",
  };

  if (normalized.startsWith("/en")) {
    return {
      href: toItalian[normalized] ?? "/",
      label: "IT",
      fullLabel: "Italiano",
      ariaLabel: "Passa alla versione italiana",
    };
  }

  return {
    href: toEnglish[normalized] ?? "/en/",
    label: "EN",
    fullLabel: "English",
    ariaLabel: "Switch to the English version",
  };
}

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isEnglish = location.pathname.startsWith("/en");
  const links = isEnglish ? linksEn : linksIt;
  const quoteLink = isEnglish ? "/en/contact" : "/contatti";
  const quoteLabel = isEnglish ? "Request a Quote" : "Richiedi Preventivo";
  const homeLink = isEnglish ? "/en/" : "/";
  const languageSwitch = getLanguageSwitch(location.pathname);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1800px] items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8 2xl:px-10">
        <Link
          to={homeLink}
          className="group flex min-w-0 items-center"
          onClick={() => setOpen(false)}
          aria-label={isEnglish ? "Sintesi 3D — Home" : "Sintesi 3D — Home"}
        >
          <Logo className="h-9 w-auto transition-smooth group-hover:drop-shadow-[0_0_12px_oklch(0.82_0.16_195/0.55)] sm:h-12 md:h-14 2xl:h-16" />
        </Link>

        <nav className="hidden items-center gap-7 2xl:flex 2xl:gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-smooth hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 2xl:flex">
          <a
            href={languageSwitch.href}
            aria-label={languageSwitch.ariaLabel}
            className="inline-flex items-center gap-2 border border-border px-3 py-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-smooth hover:border-primary hover:text-primary"
          >
            <Globe2 className="h-3.5 w-3.5" />
            {languageSwitch.label}
          </a>

          <Link
            to={quoteLink}
            className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-primary transition-smooth hover:bg-primary hover:text-primary-foreground hover:shadow-glow"
          >
            {quoteLabel}
            <span className="h-1 w-1 rounded-full bg-primary" />
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-2 2xl:hidden">
          <a
            href={languageSwitch.href}
            aria-label={languageSwitch.ariaLabel}
            className="inline-flex items-center gap-1.5 border border-border px-2.5 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-smooth hover:border-primary hover:text-primary sm:text-xs"
          >
            <Globe2 className="h-3.5 w-3.5" />
            {languageSwitch.label}
          </a>

          <button
            className="inline-flex h-10 w-10 items-center justify-center text-foreground"
            onClick={() => setOpen(!open)}
            aria-label={isEnglish ? "Toggle menu" : "Apri menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl 2xl:hidden">
          <nav className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-smooth hover:text-primary"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}

            <a
              href={languageSwitch.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 border-b border-border/40 py-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-smooth hover:text-primary"
            >
              <Globe2 className="h-3.5 w-3.5" />
              {languageSwitch.fullLabel}
            </a>

            <Link
              to={quoteLink}
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 border border-primary/40 bg-primary/10 px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary transition-smooth hover:bg-primary hover:text-primary-foreground"
            >
              {quoteLabel}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
