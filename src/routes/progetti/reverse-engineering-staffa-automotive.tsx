import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import projectImg from "@/assets/project-aerospace-bracket.jpg";

export const Route = createFileRoute(
  "/progetti/reverse-engineering-staffa-automotive",
)({
  head: () => ({
    meta: [
      {
        title: "Reverse Engineering Staffa Automotive in PA612-CF | Sintesi 3D",
      },
      {
        name: "description",
        content:
          "Caso studio: rilievo, ricostruzione CAD e produzione FDM in PA612-CF di una staffa automotive tecnica.",
      },
      {
        property: "og:title",
        content: "Reverse engineering di una staffa automotive",
      },
      {
        property: "og:description",
        content:
          "Dal componente originale al modello CAD e alla parte funzionale in PA612-CF.",
      },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content:
          "https://www.sintesi3d.it/progetti/reverse-engineering-staffa-automotive",
      },
      { property: "og:image", content: projectImg },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.sintesi3d.it/progetti/reverse-engineering-staffa-automotive",
      },
    ],
  }),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  return (
    <Layout>
      <article>
        <header className="border-b border-border/60 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <span className="tech-label">// Case study · Automotive</span>
            <h1 className="mt-6 max-w-5xl font-display text-5xl font-semibold leading-[0.98] md:text-7xl">
              Reverse engineering di una{" "}
              <span className="text-primary">staffa automotive</span>.
            </h1>
            <p className="mt-8 max-w-3xl text-lg text-muted-foreground">
              Rilievo dell'originale, ricostruzione CAD e produzione di un
              componente funzionale in PA612 rinforzata con fibra di carbonio.
            </p>
          </div>
        </header>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <img
            src={projectImg}
            alt="Staffa automotive ricostruita tramite reverse engineering"
            className="max-h-[680px] w-full border border-border/60 object-cover"
          />
          <div className="mt-16 grid gap-14 lg:grid-cols-12">
            <aside className="lg:col-span-4">
              <dl className="space-y-6 border-l-2 border-primary pl-6">
                <div>
                  <dt className="tech-label">Settore</dt>
                  <dd className="mt-2">Automotive</dd>
                </div>
                <div>
                  <dt className="tech-label">Processo</dt>
                  <dd className="mt-2">Rilievo + CAD + FDM</dd>
                </div>
                <div>
                  <dt className="tech-label">Materiale</dt>
                  <dd className="mt-2">PA612-CF</dd>
                </div>
              </dl>
            </aside>
            <div className="space-y-12 lg:col-span-8">
              <section>
                <h2 className="text-3xl">Il problema</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Il componente originale doveva essere riprodotto mantenendo
                  ingombri e interfacce di montaggio. In assenza di un modello
                  CAD utilizzabile, era necessario ricostruire la geometria e
                  selezionare un materiale adatto all'impiego tecnico sotto
                  cofano.
                </p>
              </section>
              <section>
                <h2 className="text-3xl">Analisi e ricostruzione</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Abbiamo rilevato quote funzionali, superfici di accoppiamento,
                  fori e vincoli dell'originale. Il modello CAD è stato
                  ricostruito con geometrie parametriche, così da consentire
                  correzioni e future varianti senza dipendere dalla sola mesh.
                </p>
              </section>
              <section>
                <h2 className="text-3xl">Soluzione produttiva</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  La parte è stata preparata per stampa FDM in PA612-CF,
                  materiale scelto per rigidezza, stabilità dimensionale e
                  resistenza chimica. Orientamento, supporti e parametri sono
                  stati definiti in funzione dei carichi e delle superfici di
                  montaggio.
                </p>
              </section>
              <section>
                <h2 className="text-3xl">Risultato</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Il processo ha restituito un file CAD modificabile e un
                  componente funzionale pronto alla verifica di montaggio. La
                  ricostruzione parametrica rende inoltre più rapide eventuali
                  ottimizzazioni o produzioni successive.
                </p>
              </section>
            </div>
          </div>
          <div className="mt-20 border border-primary/30 bg-surface/40 p-10 md:flex md:items-center md:justify-between">
            <div>
              <span className="tech-label">// Un caso simile?</span>
              <h2 className="mt-4 text-3xl">
                Invia una foto per una prima valutazione.
              </h2>
            </div>
            <Link
              to="/contatti"
              search={{ servizio: "reverse-engineering" }}
              className="mt-8 inline-flex items-center gap-3 bg-primary px-7 py-4 font-mono text-xs uppercase tracking-[0.18em] text-primary-foreground md:mt-0"
            >
              Parla con un tecnico <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
