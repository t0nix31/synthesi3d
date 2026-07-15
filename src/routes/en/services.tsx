import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowRight, Layers, Scan, Wrench, Cpu, Check } from "lucide-react";
import scanImg from "@/assets/service-scan.jpg";
import printImg from "@/assets/service-print.jpg";
import cadImg from "@/assets/service-cad.jpg";
import reverseImg from "@/assets/service-reverse.jpg";

export const Route = createFileRoute("/en/services")({
  head: () => ({
    meta: [
      { title: "Services — 3D Printing, Scanning, CAD | Sintesi 3D" },
      {
        name: "description",
        content:
          "3D printing in polymers and metals, high-precision 3D scanning, reverse engineering and advanced CAD design.",
      },
      { property: "og:title", content: "Services — Sintesi 3D" },
      {
        property: "og:description",
        content:
          "Four integrated services to take your ideas from concept to finished part.",
      },
      { httpEquiv: "content-language", content: "en" },
    ],
    links: [
      { rel: "canonical", href: "https://www.sintesi3d.it/en/services" },
      { rel: "alternate", hrefLang: "it", href: "https://www.sintesi3d.it/servizi" },
      { rel: "alternate", hrefLang: "en", href: "https://www.sintesi3d.it/en/services" },
    ],
  }),
  component: ServicesPageEn,
});

const services = [
  {
    code: "01",
    icon: Layers,
    title: "3D Printing",
    img: printImg,
    desc: "We produce functional prototypes and end-use parts using leading additive technologies: FDM, SLA, SLS, MJF and SLM for metals.",
    features: [
      "Standard materials: PLA, PETG, ABS, ASA, TPU",
      "Technical polymers: PA12, PA6-12-CF, PC-CF, PC-PBT-CF, PEEK, ULTEM, ABS-ESD",
      "Metals: Titanium TC4 Metal and 316L Stainless Steel",
      "Post-processing: tumbling, painting and threaded inserts",
    ],
  },
  {
    code: "02",
    icon: Scan,
    title: "3D Scanning",
    img: scanImg,
    desc: "High-resolution 3D acquisition of components, prototypes and art objects using structured-light and laser technologies. The service can be performed at our studio or directly at the client’s site.",
    features: [
      "Accuracy up to 0.02 mm",
      "Complex geometries and reflective parts",
      "Output formats: STL, OBJ, PLY, STEP",
      "Dimensional inspection and deviation color maps",
    ],
  },
  {
    code: "03",
    icon: Wrench,
    title: "Reverse Engineering",
    img: reverseImg,
    desc: "We transform physical components, including obsolete parts without drawings, into parametric CAD models ready for manufacturing.",
    features: [
      "Reconstruction of out-of-production parts",
      "Editable parametric modeling",
      "Metrological validation of the model",
      "Redesign and component optimization",
    ],
  },
  {
    code: "04",
    icon: Cpu,
    title: "CAD Design",
    img: cadImg,
    desc: "Complete engineering design: from concept to production drawings, integrating aerospace and motorsport know-how.",
    features: [
      "Advanced parametric modeling: CATIA, SolidWorks, Fusion",
      "FEM simulation and topology optimization",
      "Design for Additive Manufacturing (DFAM)",
      "Dimensioned technical drawings and bills of materials",
    ],
  },
];

function ServicesPageEn() {
  return (
    <Layout>
      <section className="relative border-b border-border/60 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="tech-label">// Capabilities</span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1] tracking-tight md:text-7xl lg:text-8xl">
            Integrated <span className="text-primary">additive</span> engineering services.
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-muted-foreground">
            A complete pipeline, from scanning to printing, managed by the same team.
            No handovers, no loss of technical information.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="space-y-32">
          {services.map((s, idx) => (
            <article
              key={s.code}
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${idx % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div>
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-5xl font-light text-primary">{s.code}</span>
                  <span className="h-px flex-1 bg-border" />
                  <s.icon className="h-6 w-6 text-primary" strokeWidth={1.25} />
                </div>
                <h2 className="mt-6 font-display text-4xl font-semibold md:text-5xl">{s.title}</h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-8 space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" strokeWidth={2.5} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 border border-primary/20" />
                <div className="relative overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="h-full w-full object-cover transition-smooth hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                    REF · {s.code}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10">
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight md:text-5xl">
            Ready to print your
            <span className="text-primary"> first prototype</span>?
          </h2>
          <Link
            to="/en/contact"
            className="mt-10 inline-flex items-center gap-3 bg-primary px-8 py-4 font-mono text-sm uppercase tracking-[0.2em] text-primary-foreground transition-smooth hover:shadow-glow-strong"
          >
            Request a quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
