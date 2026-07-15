import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import reverseImg from "@/assets/service-reverse.jpg";

export const Route = createFileRoute("/reverse-engineering")({
  head: () => ({
    meta: [
      { title: "Reverse Engineering e Ricostruzione CAD | Sintesi 3D" },
      {
        name: "description",
        content:
          "Reverse engineering di componenti, ricostruzione CAD da scansione 3D e riproduzione di ricambi fuori produzione. Valutazione tecnica entro 24 ore.",
      },
      {
        property: "og:title",
        content: "Reverse Engineering e Ricostruzione CAD | Sintesi 3D",
      },
      {
        property: "og:description",
        content:
          "Dal componente fisico al modello CAD pronto per la produzione, anche senza disegni originali.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://www.sintesi3d.it/reverse-engineering",
      },
      { property: "og:image", content: reverseImg },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.sintesi3d.it/reverse-engineering",
      },
    ],
  }),
  component: ReverseEngineeringPage,
});

const applications = [
  "Ricambi fuori produzione o non più reperibili",
  "Componenti senza disegni tecnici o file CAD",
  "Parti rotte da ricostruire, correggere o rinforzare",
  "Sviluppo di componenti custom e aftermarket",
  "Conversione di mesh STL/OBJ in modelli STEP parametrici",
  "Acquisizione delle interfacce per accoppiamenti precisi",
];

function ReverseEngineeringPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Reverse engineering e ricostruzione CAD",
    serviceType: "Reverse engineering",
    provider: {
      "@type": "ProfessionalService",
      name: "Sintesi 3D",
      url: "https://www.sintesi3d.it",
    },
    areaServed: "IT",
    description:
      "Scansione, rilievo e ricostruzione CAD di componenti fisici per riproduzione, modifica e produzione.",
  };

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="border-b border-border/60 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:items-center lg:px-10">
          <div className="lg:col-span-7">
            <span className="tech-label">// Reverse engineering</span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.98] md:text-7xl">
              Dal componente fisico al{" "}
              <span className="text-primary">modello CAD</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Rileviamo o scansioniamo il pezzo originale, ricostruiamo un
              modello CAD ingegnerizzato e lo prepariamo per la produzione,
              anche quando disegni e ricambi non sono disponibili.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contatti"
                search={{ servizio: "reverse-engineering" }}
                className="inline-flex items-center gap-3 bg-primary px-8 py-4 font-mono text-sm uppercase tracking-[0.18em] text-primary-foreground hover:shadow-glow-strong"
              >
                Invia una foto del componente <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/progetti/reverse-engineering-staffa-automotive"
                className="inline-flex items-center border border-border px-8 py-4 font-mono text-sm uppercase tracking-[0.18em] hover:border-primary hover:text-primary"
              >
                Guarda il caso studio
              </Link>
            </div>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-primary">
              Riscontro tecnico ed economico entro 24 ore lavorative
            </p>
          </div>
          <div className="lg:col-span-5">
            <img
              src={reverseImg}
              alt="Scansione 3D e ricostruzione CAD di un componente"
              className="w-full border border-border/60 object-cover shadow-tech"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="tech-label">// Quando serve</span>
            <h2 className="mt-6 font-display text-4xl font-semibold">
              Ricostruiamo ciò che{" "}
              <span className="text-primary">non puoi più acquistare</span>.
            </h2>
          </div>
          <div className="grid gap-px bg-border/60 sm:grid-cols-2 lg:col-span-7">
            {applications.map((item) => (
              <div key={item} className="flex gap-3 bg-background p-6">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-surface/30 py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="tech-label">// Metodo</span>
          <div className="mt-10 grid gap-px bg-border/60 md:grid-cols-4">
            {[
              [
                "01",
                "Analisi",
                "Obiettivo, vincoli funzionali, ambiente d'uso e interfacce.",
              ],
              [
                "02",
                "Acquisizione",
                "Scansione 3D, rilievo dimensionale o integrazione dei due metodi.",
              ],
              [
                "03",
                "Ricostruzione CAD",
                "Superfici, feature parametriche, tolleranze e modifiche richieste.",
              ],
              [
                "04",
                "Validazione",
                "Controllo con la scansione, prototipo e preparazione alla produzione.",
              ],
            ].map(([n, t, d]) => (
              <article key={n} className="bg-background p-7">
                <span className="font-mono text-xs text-primary">/{n}</span>
                <h3 className="mt-8 text-xl">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
