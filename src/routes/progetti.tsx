import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import aerospaceImg from "@/assets/project-aerospace-bracket.jpg";
import motorsportImg from "@/assets/project-motorsport-intake.jpg";
import railwayImg from "@/assets/project-railway-gear.jpg";
import medicalImg from "@/assets/project-medical-guide.jpg";
import industrialImg from "@/assets/project-industrial-gripper.jpg";
import heritageImg from "@/assets/project-heritage-scan.jpg";
import batmanImg from "@/assets/project-batman-mask.jpg";
import ductsImg from "@/assets/project-air-ducts-cfd.jpg";
import coinImg from "@/assets/project-coin-mech.jpg";
import carbScanImg from "@/assets/project-carb-scan.jpg";
import trumpetsImg from "@/assets/project-intake-trumpets.jpg";
import carGrilleImg from "@/assets/project-car-grille.jpg";

export const Route = createFileRoute("/progetti")({
  head: () => ({
    meta: [
      { title: "Progetti — Lavori realizzati | Sintesi 3D" },
      {
        name: "description",
        content:
          "Una selezione di pezzi realizzati: descrizione, materiale e tecnologia produttiva utilizzata.",
      },
      { property: "og:title", content: "Progetti — Sintesi 3D" },
      {
        property: "og:description",
        content:
          "Lavori realizzati in stampa 3D, scansione 3D, reverse engineering e progettazione CAD.",
      },
      { property: "og:image", content: aerospaceImg },
    ],
  }),
  component: ProjectsPage,
});

type Project = {
  code: string;
  title: string;
  tech: string;
  material: string;
  description: string;
  img: string;
};

// TODO: sostituire le immagini placeholder con le foto reali fornite dal cliente.
const projects: Project[] = [
  {
    code: "P-01",
    title: "Staffa automotive — reverse engineering",
    tech: "FDM",
    material: "PA612-CF",
    description:
      "Reverse engineering di una parte del settore automotive: rilievo dimensionale dell'originale, ricostruzione CAD e produzione in PA612 caricata fibra di carbonio per ottenere rigidezza, stabilità dimensionale e resistenza chimica adeguate all'impiego sotto cofano.",
    img: aerospaceImg,
  },
  {
    code: "P-02",
    title: "Staffa aerospace in Ultem",
    tech: "FDM",
    material: "ULTEM",
    description:
      "Staffa strutturale realizzata in Ultem (PEI) per il settore aerospace tramite tecnologia FDM: elevata resistenza meccanica e termica, ottima stabilità dimensionale e comportamento certificabile per applicazioni a bordo, con riduzione significativa del peso rispetto alle soluzioni metalliche.",
    img: motorsportImg,
  },
  {
    code: "P-03",
    title: "Cover protezione dashboard — Motorsport",
    tech: "FDM",
    material: "ASA",
    description:
      "Cover di protezione per dashboard sviluppata per il settore Motorsport Racing, stampata in ASA tramite tecnologia FDM: ottima resistenza ai raggi UV, agli agenti atmosferici e alle vibrazioni, con finitura tecnica e tolleranze adatte al montaggio diretto in vettura.",
    img: railwayImg,
  },
  {
    code: "P-04",
    title: "Scansione 3D componente moto — Motorsport",
    tech: "Scansione 3D a luce strutturata",
    material: "—",
    description:
      "Scansione 3D di un componente motociclistico per il settore Motorsport Racing: acquisizione ad alta risoluzione, generazione mesh e ricostruzione CAD parametrica per lo sviluppo di componenti aftermarket perfettamente accoppiabili all'originale.",
    img: medicalImg,
  },
  {
    code: "P-05",
    title: "Reverse engineering componente automotive",
    tech: "SLA",
    material: "Resina tecnica",
    description:
      "Settore Automotive: reverse engineering di un componente non più reperibile in commercio. Rilievo dell'originale, ricostruzione CAD e implementazione delle modifiche richieste dal cliente per migliorarne funzionalità e durata, con riproduzione fedele delle interfacce di montaggio.",
    img: industrialImg,
  },
  {
    code: "P-06",
    title: "Miniatura 3D della città di Napoli",
    tech: "FDM",
    material: "PLA",
    description:
      "Settore Architettura: miniatura 3D della città di Napoli realizzata da dati cartografici, con riproduzione fedele dell'edificato e della linea di costa. Modello stampato in scala e montato in cornice espositiva con base blu a contrasto per valorizzare il porto e il waterfront.",
    img: heritageImg,
  },
  {
    code: "P-07",
    title: "Maschera di Batman — arredo da collezione",
    tech: "FDM + post-produzione e verniciatura",
    material: "PLA",
    description:
      "Maschera di Batman pensata come elemento d'arredo da collezione: stampata in FDM e rifinita con un'accurata fase di post-produzione (levigatura, stuccatura, primer) e verniciatura nera opaca per ottenere una superficie pulita, uniforme e dall'aspetto scultoreo.",
    img: batmanImg,
  },
  {
    code: "P-08",
    title: "Condotti aria — progettazione e simulazione CFD",
    tech: "CAD + CFD + SLA",
    material: "Resina tecnica",
    description:
      "Progettazione 3D di condotti aria con ottimizzazione del flusso tramite simulazione fluidodinamica (CFD): analisi di pressione e velocità, iterazione sulla geometria interna e produzione del prototipo finale in stampa 3D SLA per validazione su banco.",
    img: ductsImg,
  },
  {
    code: "P-09",
    title: "Gettoniera calcio balilla — CAD + Lost-PLA casting",
    tech: "CAD + FDM (Lost-PLA casting)",
    material: "PLA (modello sacrificale)",
    description:
      "Progettazione CAD di una gettoniera per calcio balilla e realizzazione del modello in PLA tramite stampa 3D FDM, pensato come modello sacrificale per il processo di fusione Lost-PLA casting: il PLA viene incorporato in una forma refrattaria e bruciato in cottura, lasciando la cavità per la colata del metallo finale.",
    img: coinImg,
  },
  {
    code: "P-10",
    title: "Scansione 3D corpo farfallato moto — CFD",
    tech: "Scansione 3D a luce strutturata",
    material: "—",
    description:
      "Settore Motorsport motociclistico: scansione 3D a luce strutturata di un componente per acquisirne la geometria reale ad alta risoluzione. La mesh ottenuta è stata utilizzata come base per lo sviluppo e l'ottimizzazione fluidodinamica (CFD) dei condotti, con iterazioni sul profilo interno per massimizzare l'efficienza del flusso.",
    img: carbScanImg,
  },
  {
    code: "P-11",
    title: "Cornetti d'aspirazione Honda CBR600RR — WSS",
    tech: "CFD + FDM",
    material: "Polimero tecnico",
    description:
      "Studio fluidodinamico, progettazione e realizzazione in stampa 3D FDM di cornetti d'aspirazione per Honda CBR600RR impiegata nel mondiale Supersport (WSS): ottimizzazione del profilo interno tramite simulazione CFD per massimizzare il riempimento dei cilindri e la curva di coppia, con prototipi funzionali pronti per il banco e la pista.",
    img: trumpetsImg,
  },
  {
    code: "P-12",
    title: "Griglia personalizzata auto — scansione 3D + FDM",
    tech: "Scansione 3D + FDM",
    material: "Polimero tecnico",
    description:
      "Settore Automotive: scansione 3D dell'auto per acquisire la geometria reale della zona di montaggio e successiva ricostruzione CAD del componente secondo le specifiche di design fornite dal cliente. Realizzazione finale tramite stampa 3D FDM con pattern a nido d'ape, pronta per il montaggio diretto sul veicolo.",
    img: carGrilleImg,
  },
];

function ProjectsPage() {
  return (
    <Layout>
      {/* HEADER */}
      <section className="relative border-b border-border/60 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="tech-label">// Selected Work</span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1] tracking-tight md:text-7xl lg:text-8xl">
            Progetti <span className="text-primary">realizzati</span>.
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-muted-foreground">
            Una selezione di pezzi realizzati in officina, con il dettaglio del
            materiale e della tecnologia produttiva utilizzata.
          </p>
        </div>
      </section>

      {/* MASONRY GRID */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
          {projects.map((p) => (
            <article
              key={p.code}
              className="group mb-8 inline-block w-full break-inside-avoid border border-border/60 bg-surface/30 transition-smooth hover:border-primary/60"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-auto w-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 border border-primary/40 bg-background/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-primary backdrop-blur">
                  REF · {p.code}
                </div>
              </div>

              <div className="flex flex-col p-6">
                <h2 className="font-display text-xl font-semibold leading-tight">
                  {p.title}
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border/60 pt-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Materiale
                    </div>
                    <div className="mt-1 text-xs">{p.material}</div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Tecnologia
                    </div>
                    <div className="mt-1 font-mono text-xs text-primary">
                      {p.tech}
                    </div>
                  </div>
                </div>
                {p.code === "P-01" && (
                  <Link
                    to="/progetti/reverse-engineering-staffa-automotive"
                    className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary"
                  >
                    Leggi il caso studio <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10">
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight md:text-5xl">
            Hai un progetto simile
            <span className="text-primary"> nel cassetto</span>?
          </h2>
          <Link
            to="/contatti"
            className="mt-10 inline-flex items-center gap-3 bg-primary px-8 py-4 font-mono text-sm uppercase tracking-[0.2em] text-primary-foreground transition-smooth hover:shadow-glow-strong"
          >
            Parliamone <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
