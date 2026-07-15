import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowRight, Cpu, Layers, Scan, Wrench } from "lucide-react";
import heroImg from "@/assets/hero-3dprint.jpg";
import scanImg from "@/assets/service-scan.jpg";
import printImg from "@/assets/service-print.jpg";
import cadImg from "@/assets/service-cad.jpg";

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title: "Sintesi 3D — 3D Printing, 3D Scanning & Reverse Engineering" },
      {
        name: "description",
        content:
          "3D printing, 3D scanning, reverse engineering and CAD design. Twenty years of experience in aerospace, motorsport and high-speed rail.",
      },
      { property: "og:title", content: "Sintesi 3D — Engineering & Print" },
      {
        property: "og:description",
        content:
          "Precision additive technologies for professionals, companies and private clients.",
      },
      { httpEquiv: "content-language", content: "en" },
    ],
    links: [
      { rel: "canonical", href: "https://www.sintesi3d.it/en/" },
      { rel: "alternate", hrefLang: "it", href: "https://www.sintesi3d.it/" },
      { rel: "alternate", hrefLang: "en", href: "https://www.sintesi3d.it/en/" },
    ],
  }),
  component: HomePageEn,
});

const services = [
  {
    icon: Layers,
    title: "3D Printing",
    desc: "Technical polymers and metals for functional prototypes and end-use parts.",
    img: printImg,
  },
  {
    icon: Scan,
    title: "3D Scanning",
    desc: "High-resolution acquisition of complex physical geometries.",
    img: scanImg,
  },
  {
    icon: Wrench,
    title: "Reverse Engineering",
    desc: "From physical component to engineered CAD model ready for production.",
    img: scanImg,
  },
  {
    icon: Cpu,
    title: "CAD Design",
    desc: "Parametric design, topology optimization and additive-ready engineering.",
    img: cadImg,
  },
];

const sectors = [
  {
    code: "AER",
    name: "Aerospace",
    desc: "Lightweight alloys and high-performance polymers for demanding applications.",
  },
  {
    code: "MTR",
    name: "Motorsport",
    desc: "Custom high-demand parts for racing and performance applications.",
  },
  {
    code: "RAIL",
    name: "High-Speed Rail",
    desc: "Lightweight, durable solutions for railway and high-speed train environments.",
  },
];

const stats = [
  { value: "20+", label: "Years of experience" },
  { value: "3", label: "Industrial sectors" },
  { value: "100%", label: "Made in Italy" },
  { value: "24h", label: "Quote response" },
];

function HomePageEn() {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="3D printing of an aerospace metal component"
            width={1920}
            height={1280}
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[90vh] max-w-7xl grid-cols-12 items-center gap-6 px-6 py-20 lg:px-10">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-primary" />
              <span className="tech-label">SYS · 001 — Engineering Studio</span>
            </div>

            <h1 className="mt-8 font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-[7.5rem]">
              From idea
              <br />
              to <span className="text-primary text-glow">component</span>
              <br />
              <span className="text-muted-foreground">in days.</span>
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              3D printing, 3D scanning, reverse engineering and 3D CAD design. We make
              twenty years of aerospace, motorsport and high-speed rail engineering
              experience available to private clients and companies.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                to="/en/contact"
                className="group inline-flex items-center gap-3 bg-primary px-8 py-4 font-mono text-sm uppercase tracking-[0.2em] text-primary-foreground transition-smooth hover:shadow-glow-strong"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
              </Link>
              <Link
                to="/en/services"
                className="inline-flex items-center gap-3 border border-border px-8 py-4 font-mono text-sm uppercase tracking-[0.2em] text-foreground transition-smooth hover:border-primary hover:text-primary"
              >
                Explore services
              </Link>
            </div>

            <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span>// Technical polymers</span>
              <span>// Metal alloys</span>
              <span>// Lattice & topology</span>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute left-6 top-24 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-primary lg:block">
          <div>LAT 40.9°N</div>
          <div className="mt-1">LON 14.6°E</div>
        </div>
        <div className="pointer-events-none absolute right-6 bottom-6 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground lg:block">
          <div>v.2026 · Industrial</div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-surface/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border/60 md:grid-cols-4 lg:px-10">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-10 text-center">
              <div className="font-display text-4xl font-semibold text-primary md:text-5xl">{s.value}</div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="tech-label">// 02 — Capabilities</span>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Four disciplines.
              <br />
              <span className="text-primary">One value</span> chain.
            </h2>
            <p className="mt-6 text-muted-foreground">
              From scanning the physical component to printing the finished part:
              everything under one roof, managed by one engineering team.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-px bg-border/60 sm:grid-cols-2">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group relative bg-background p-8 transition-smooth hover:bg-surface"
                >
                  <s.icon className="h-8 w-8 text-primary transition-smooth group-hover:scale-110" strokeWidth={1.25} />
                  <h3 className="mt-6 font-display text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <div className="mt-6 h-px w-8 bg-primary transition-smooth group-hover:w-16" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-border/60 bg-surface/30 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="tech-label">// 03 — Heritage</span>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Twenty years in the
                <br />
                most <span className="text-primary">demanding</span> sectors.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Quality standards, tolerances and materials inherited from aerospace,
              motorsport and high-speed rail engineering.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {sectors.map((s, i) => (
              <div
                key={s.code}
                className="corner-frame group relative border border-border/60 bg-background p-8 transition-smooth hover:border-primary/50 hover:shadow-tech"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    /{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-xs text-primary">{s.code}</span>
                </div>
                <h3 className="mt-12 font-display text-3xl font-semibold">{s.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <div className="relative overflow-hidden border border-primary/30 bg-gradient-hero p-12 md:p-20">
          <div className="grid-bg absolute inset-0 opacity-30" />
          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="tech-label">// Ready to start</span>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-tight md:text-6xl">
                Have a project
                <br />
                <span className="text-primary">in mind?</span>
              </h2>
            </div>
            <div>
              <p className="text-muted-foreground md:text-lg">
                Send us a CAD file, a sketch or even a simple description. You will
                receive technical and commercial feedback within 24 working hours.
              </p>
              <Link
                to="/en/contact"
                className="mt-8 inline-flex items-center gap-3 bg-primary px-8 py-4 font-mono text-sm uppercase tracking-[0.2em] text-primary-foreground transition-smooth hover:shadow-glow-strong"
              >
                Contact us now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
