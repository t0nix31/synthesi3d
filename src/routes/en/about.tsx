import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import teamImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/en/about")({
  head: () => ({
    meta: [
      { title: "About — Sintesi 3D" },
      {
        name: "description",
        content:
          "A team with twenty years of experience in aerospace, motorsport and high-speed rail. Our mission is to make high-level engineering accessible.",
      },
      { property: "og:title", content: "About — Sintesi 3D" },
      {
        property: "og:description",
        content:
          "Twenty years of aerospace, motorsport and railway engineering, now serving private clients and companies.",
      },
      { httpEquiv: "content-language", content: "en" },
    ],
    links: [
      { rel: "canonical", href: "https://www.sintesi3d.it/en/about" },
      { rel: "alternate", hrefLang: "it", href: "https://www.sintesi3d.it/chi-siamo" },
      { rel: "alternate", hrefLang: "en", href: "https://www.sintesi3d.it/en/about" },
    ],
  }),
  component: AboutPageEn,
});

const values = [
  { code: "01", title: "Precision", desc: "Tolerances and standards inherited from the most demanding sectors." },
  { code: "02", title: "Innovation", desc: "Materials and technologies aligned with the state of the art." },
  { code: "03", title: "Accessibility", desc: "High-level engineering available even to individual users." },
  { code: "04", title: "Transparency", desc: "Clear technical communication, with timing and costs declared upfront." },
];

const timeline = [
  { year: "2003", text: "First aerospace projects on certifiable components." },
  { year: "2010", text: "Entry into motorsport: custom racing parts in limited runs." },
  { year: "2015", text: "Experience in high-speed rail: lightweight design and durability." },
  { year: "2020", text: "Adoption of advanced additive technologies in metals and polymers." },
  { year: "Today", text: "Sintesi 3D: twenty years of know-how, now accessible to everyone." },
];

function AboutPageEn() {
  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0">
          <img
            src={teamImg}
            alt="Sintesi 3D team at work"
            width={1600}
            height={1000}
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-10">
          <span className="tech-label">// Identity</span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1] md:text-7xl lg:text-8xl">
            Twenty years where every
            <br />
            <span className="text-primary">gram matters</span>.
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-muted-foreground">
            We were born from the union of engineers with two decades of experience
            in aerospace, motorsport and high-speed rail. Fields where error is not
            an option and innovation is part of daily work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="tech-label">// Mission</span>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight md:text-5xl">
              <span className="text-primary">Industrial-grade</span> engineering,
              for everyone.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-7 lg:col-start-6">
            <p>
              Sintesi 3D was created to share the experience of a team that, for two
              decades, has designed and produced components for mission-critical
              applications: from commercial aviation to racing vehicles and high-speed trains.
            </p>
            <p>
              We use the evolving landscape of <span className="text-foreground">technical polymers</span>,
              <span className="text-foreground"> advanced metals</span> and
              <span className="text-foreground"> new design technologies</span> to make them
              available to end users — whether a private client with an idea or a company
              with production needs.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-surface/30 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="tech-label">// Principles</span>
          <div className="mt-12 grid gap-px bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.code} className="bg-background p-8 transition-smooth hover:bg-surface">
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary">/{v.code}</div>
                <h3 className="mt-8 font-display text-2xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="tech-label">// Timeline</span>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight md:text-5xl">
              From the track
              <br />
              to <span className="text-primary">your workbench</span>.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <ol className="relative border-l border-border">
              {timeline.map((t) => (
                <li key={t.year} className="relative pb-12 pl-10 last:pb-0">
                  <span className="absolute -left-[7px] top-1 h-3 w-3 rotate-45 border border-primary bg-background" />
                  <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary">{t.year}</div>
                  <p className="mt-3 text-lg text-foreground">{t.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10">
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight md:text-5xl">
            Let&apos;s build something
            <span className="text-primary"> together</span>.
          </h2>
          <Link
            to="/en/contact"
            className="mt-10 inline-flex items-center gap-3 bg-primary px-8 py-4 font-mono text-sm uppercase tracking-[0.2em] text-primary-foreground transition-smooth hover:shadow-glow-strong"
          >
            Talk to the team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
