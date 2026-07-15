import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Scan,
  Wrench,
} from "lucide-react";
import { trackConversion } from "@/lib/analytics";
import heroImg from "@/assets/hero-3dprint.jpg";
import scanImg from "@/assets/service-scan.jpg";
import printImg from "@/assets/service-print.jpg";
import cadImg from "@/assets/service-cad.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stampa 3D professionale, scansione 3D e CAD | Sintesi 3D" },
      {
        name: "description",
        content:
          "Stampa 3D professionale, prototipazione rapida, scansione 3D, reverse engineering e progettazione CAD per aziende e privati in tutta Italia.",
      },
      { property: "og:title", content: "Sintesi 3D — Engineering & Print" },
      {
        property: "og:description",
        content:
          "Tecnologie additive di precisione per professionisti, aziende e privati.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.sintesi3d.it/" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "https://www.sintesi3d.it/" }],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Layers,
    title: "Stampa 3D",
    desc: "Polimeri tecnici e metalli per prototipi e produzione finale.",
    img: printImg,
    to: "/stampa-3d-professionale",
  },
  {
    icon: Scan,
    title: "Scansione 3D",
    desc: "Acquisizione ad alta risoluzione di geometrie complesse.",
    img: scanImg,
    to: "/scansione-3d",
  },
  {
    icon: Wrench,
    title: "Reverse Engineering",
    desc: "Da componente fisico a modello CAD ingegnerizzato.",
    img: scanImg,
    to: "/reverse-engineering",
  },
  {
    icon: Cpu,
    title: "Progettazione CAD",
    desc: "Design parametrico, ottimizzazione topologica, lattice.",
    img: cadImg,
    to: "/progettazione-cad",
  },
];

const sectors = [
  {
    code: "AER",
    name: "Aerospace",
    desc: "Componenti certificabili in lega leggera e polimeri ad alte prestazioni.",
  },
  {
    code: "MTR",
    name: "Motorsport",
    desc: "Parti custom ad alta richiesta per applicazioni racing.",
  },
  {
    code: "FER",
    name: "Ferroviario",
    desc: "Soluzioni per treni high-speed: leggerezza e durabilità.",
  },
];

const stats = [
  { value: "20+", label: "Anni di esperienza" },
  { value: "3", label: "Settori industriali" },
  { value: "100%", label: "Made in Italy" },
  { value: "24h", label: "Risposta preventivo" },
];

const problems = [
  "Riprodurre un ricambio fuori produzione o danneggiato",
  "Trasformare un componente fisico in un modello CAD",
  "Realizzare e validare un prototipo funzionale",
  "Produrre componenti tecnici e piccole serie",
  "Modificare una parte esistente per migliorarne prestazioni e durata",
  "Verificare geometrie, accoppiamenti e tolleranze",
];

const process = [
  [
    "01",
    "Invia file o foto",
    "Condividi CAD, mesh, disegno, foto o il componente fisico.",
  ],
  [
    "02",
    "Analisi tecnica",
    "Valutiamo geometria, impiego, materiale, processo e criticità.",
  ],
  [
    "03",
    "Preventivo entro 24h",
    "Ricevi fattibilità, tempi e costo entro un giorno lavorativo.",
  ],
  [
    "04",
    "Produzione e verifica",
    "Progettiamo, produciamo e controlliamo il risultato prima della consegna.",
  ],
];

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Stampa 3D di componente metallico aerospace"
            width={1920}
            height={1280}
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[90vh] max-w-7xl grid-cols-12 items-center gap-6 px-6 py-20 lg:px-10">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="h-px w-12 bg-primary" />
              <span className="tech-label">SYS · 001 — Engineering Studio</span>
            </div>

            <h1 className="mt-8 font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-[7.5rem]">
              Idee, ricambi
              <br />e <span className="text-primary text-glow">componenti</span>
              <br />
              <span className="text-muted-foreground">diventano realtà.</span>
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Stampa 3D professionale, scansione 3D, reverse engineering e
              progettazione CAD per aziende, officine, professionisti e privati.
              Dall'oggetto fisico al componente finito, con un unico referente
              tecnico.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                to="/contatti"
                search={{ servizio: "valutazione" }}
                onClick={() =>
                  trackConversion("cta_click", {
                    cta_label: "hero_valutazione_tecnica",
                  })
                }
                className="group inline-flex items-center gap-3 bg-primary px-8 py-4 font-mono text-sm uppercase tracking-[0.2em] text-primary-foreground transition-smooth hover:shadow-glow-strong"
              >
                Ricevi una valutazione tecnica
                <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contatti"
                search={{ servizio: "file" }}
                onClick={() =>
                  trackConversion("cta_click", { cta_label: "hero_invia_file" })
                }
                className="inline-flex items-center gap-3 border border-border px-8 py-4 font-mono text-sm uppercase tracking-[0.2em] text-foreground transition-smooth hover:border-primary hover:text-primary"
              >
                Invia un file o una foto
              </Link>
            </div>

            <div className="mt-6 inline-flex items-center gap-3 border-l-2 border-primary pl-4 text-sm text-foreground">
              <span className="font-display text-xl font-semibold text-primary">
                ≤ 24h
              </span>
              <span>Riscontro tecnico ed economico nei giorni lavorativi.</span>
            </div>

            <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span>// Polimeri tecnici</span>
              <span>// Leghe metalliche</span>
              <span>// Lattice & topology</span>
            </div>
          </div>
        </div>

        {/* corner markers */}
        <div className="pointer-events-none absolute left-6 top-24 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-primary lg:block">
          <div>LAT 40.9°N</div>
          <div className="mt-1">LON 14.6°E</div>
        </div>
        <div className="pointer-events-none absolute right-6 bottom-6 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground lg:block">
          <div>v.2026 · Industrial</div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="border-y border-border/60 bg-surface/30 py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <span className="tech-label">// 02 — Problemi risolti</span>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Parti dal problema.
              <br />
              <span className="text-primary">Alla soluzione pensiamo noi.</span>
            </h2>
            <p className="mt-6 max-w-lg text-muted-foreground">
              Non serve conoscere già la tecnologia giusta: descrivi l'impiego,
              i vincoli e il risultato che vuoi ottenere.
            </p>
          </div>
          <div className="grid gap-px bg-border/60 sm:grid-cols-2 lg:col-span-7">
            {problems.map((problem) => (
              <div key={problem} className="flex gap-4 bg-background p-6">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  strokeWidth={1.5}
                />
                <p className="text-sm leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/60 bg-surface/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border/60 md:grid-cols-4 lg:px-10">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-10 text-center">
              <div className="font-display text-4xl font-semibold text-primary md:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="tech-label">// 02 — Capabilities</span>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Quattro discipline.
              <br />
              <span className="text-primary">Una catena</span> di valore.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Dalla scansione del componente fisico fino alla stampa del pezzo
              finito: tutto sotto lo stesso tetto, gestito da un unico team.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-px bg-border/60 sm:grid-cols-2">
              {services.map((s) => (
                <Link
                  key={s.title}
                  to={s.to}
                  className="group relative bg-background p-8 transition-smooth hover:bg-surface"
                >
                  <s.icon
                    className="h-8 w-8 text-primary transition-smooth group-hover:scale-110"
                    strokeWidth={1.25}
                  />
                  <h3 className="mt-6 font-display text-2xl font-semibold">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                  <div className="mt-6 h-px w-8 bg-primary transition-smooth group-hover:w-16" />
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
                    Approfondisci <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <span className="tech-label">// 04 — Processo</span>
        <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-5xl">
          Dal primo contatto alla <span className="text-primary">consegna</span>
          .
        </h2>
        <div className="mt-14 grid gap-px bg-border/60 md:grid-cols-4">
          {process.map(([number, title, description]) => (
            <article key={number} className="bg-background p-7">
              <span className="font-mono text-xs text-primary">/{number}</span>
              <h3 className="mt-8 font-display text-xl font-semibold">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* SECTORS */}
      <section className="relative border-t border-border/60 bg-surface/30 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="tech-label">// 03 — Heritage</span>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Vent'anni nei settori
                <br />
                più <span className="text-primary">esigenti</span>.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Standard di qualità, tolleranze e materiali derivati
              dall'industria aeronautica, motorsport e ferroviaria ad alta
              velocità.
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
                  <span className="font-mono text-xs text-primary">
                    {s.code}
                  </span>
                </div>
                <h3 className="mt-12 font-display text-3xl font-semibold">
                  {s.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <div className="relative overflow-hidden border border-primary/30 bg-gradient-hero p-12 md:p-20">
          <div className="grid-bg absolute inset-0 opacity-30" />
          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="tech-label">// Ready to start</span>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-tight md:text-6xl">
                Hai un progetto
                <br />
                <span className="text-primary">in mente?</span>
              </h2>
            </div>
            <div>
              <p className="text-muted-foreground md:text-lg">
                Inviaci il file CAD, lo schizzo o anche solo una descrizione.
                Riceverai un riscontro tecnico ed economico entro 24 ore.
              </p>
              <Link
                to="/contatti"
                onClick={() =>
                  trackConversion("cta_click", {
                    cta_label: "bottom_cta_contatti",
                  })
                }
                className="mt-8 inline-flex items-center gap-3 bg-primary px-8 py-4 font-mono text-sm uppercase tracking-[0.2em] text-primary-foreground transition-smooth hover:shadow-glow-strong"
              >
                Contattaci ora
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
