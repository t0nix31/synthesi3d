import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowRight, Layers, Scan, Wrench, Cpu, Check } from "lucide-react";
import scanImg from "@/assets/service-scan.jpg";
import printImg from "@/assets/service-print.jpg";
import cadImg from "@/assets/service-cad.jpg";
import reverseImg from "@/assets/service-reverse.jpg";

export const Route = createFileRoute("/servizi")({
  head: () => ({
    meta: [
      { title: "Servizi — Stampa 3D, Scansione, CAD | Sintesi 3D" },
      {
        name: "description",
        content:
          "Stampa 3D in polimeri e metalli, scansione 3D ad alta precisione, reverse engineering e progettazione CAD avanzata.",
      },
      { property: "og:title", content: "Servizi — Sintesi 3D" },
      {
        property: "og:description",
        content:
          "Quattro servizi integrati per portare le tue idee dal concept al pezzo finito.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    code: "01",
    icon: Layers,
    title: "Stampa 3D",
    img: printImg,
    desc: "Produciamo prototipi funzionali e pezzi finiti utilizzando le migliori tecnologie additive disponibili: FDM, SLA, SLS, MJF e SLM per i metalli.",
    features: [
      "Materiali standard (PLA, PETG, ABS, ASA, TPU)",
      "Polimeri tecnici (PA12, PA6-12-CF, PC-CF, PC-PBT-CF, PEEK, ULTEM, ABS-ESD)",
      "Metalli: Titanium TC4 Metal, 316L Stainless Steel, 316L Stainless Steel",
      
      "Post-processing: barattatura, verniciatura, inserti filettati",
    ],
  },
  {
    code: "02",
    icon: Scan,
    title: "Scansione 3D",
    img: scanImg,
    desc: "Acquisizione 3D ad alta risoluzione di componenti, prototipi o oggetti d'arte con tecnologie a luce strutturata e laser. Il servizio può essere svolto presso i nostri studi oppure direttamente in sede del cliente.",
    features: [
      "Precisione fino a 0,02 mm",
      "Gestione di geometrie complesse e parti riflettenti",
      "Output in formato STL, OBJ, PLY, STEP",
      "Ispezione dimensionale e color map deviazione",
    ],
  },
  {
    code: "03",
    icon: Wrench,
    title: "Reverse Engineering",
    img: reverseImg,
    desc: "Trasformiamo un componente fisico, anche obsoleto o senza disegni, in un modello CAD parametrico pronto per la produzione.",
    features: [
      "Ricostruzione di parti out-of-production",
      "Modellazione parametrica editabile",
      "Validazione metrologica del modello",
      "Riprogettazione e ottimizzazione del componente",
    ],
  },
  {
    code: "04",
    icon: Cpu,
    title: "Progettazione CAD",
    img: cadImg,
    desc: "Design ingegneristico completo: dal concept al disegno tecnico esecutivo, integrando know-how aerospace e motorsport.",
    features: [
      "Modellazione parametrica avanzata (CATIA, SolidWorks, Fusion)",
      "Simulazione FEM e ottimizzazione topologica",
      "Design For Additive Manufacturing (DFAM)",
      "Disegni tecnici quotati e distinte materiali",
    ],
  },
];

function ServicesPage() {
  return (
    <Layout>
      {/* HEADER */}
      <section className="relative border-b border-border/60 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="tech-label">// Capabilities</span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1] tracking-tight md:text-7xl lg:text-8xl">
            Servizi <span className="text-primary">integrati</span> di
            ingegneria additiva.
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-muted-foreground">
            Una pipeline completa, dalla scansione alla stampa, gestita dallo
            stesso team. Niente passaggi di consegne, nessuna perdita di
            informazione tecnica.
          </p>
        </div>
      </section>

      {/* SERVICE BLOCKS */}
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

      {/* CTA */}
      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10">
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight md:text-5xl">
            Pronto a stampare il tuo
            <span className="text-primary"> primo prototipo</span>?
          </h2>
          <Link
            to="/contatti"
            className="mt-10 inline-flex items-center gap-3 bg-primary px-8 py-4 font-mono text-sm uppercase tracking-[0.2em] text-primary-foreground transition-smooth hover:shadow-glow-strong"
          >
            Richiedi un preventivo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
