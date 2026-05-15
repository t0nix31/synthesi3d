import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import teamImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/chi-siamo")({
  head: () => ({
    meta: [
      { title: "Chi Siamo — Sintesi 3D" },
      {
        name: "description",
        content:
          "Un team con vent'anni di esperienza in Aerospace, Motorsport e Ferroviario High-Speed. La nostra missione è rendere accessibile l'ingegneria di alto livello.",
      },
      { property: "og:title", content: "Chi Siamo — Sintesi 3D" },
      {
        property: "og:description",
        content:
          "Vent'anni di ingegneria aerospace, motorsport e ferroviaria, oggi al servizio di privati e aziende.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { code: "01", title: "Precisione", desc: "Tolleranze e standard ereditati dai settori più esigenti." },
  { code: "02", title: "Innovazione", desc: "Materiali e tecnologie sempre allineati allo stato dell'arte." },
  { code: "03", title: "Accessibilità", desc: "Ingegneria di alto livello disponibile anche al singolo utente." },
  { code: "04", title: "Trasparenza", desc: "Comunicazione tecnica chiara, tempi e costi sempre dichiarati." },
];

const timeline = [
  { year: "2003", text: "Primi progetti nel settore aerospace su componenti certificabili." },
  { year: "2010", text: "Ingresso nel motorsport: parti racing custom in tirature limitate." },
  { year: "2015", text: "Esperienze sul ferroviario high-speed: leggerezza e durabilità." },
  { year: "2020", text: "Adozione delle tecnologie additive avanzate in metallo e polimero." },
  { year: "Oggi", text: "Sintesi 3D: vent'anni di know-how, oggi accessibili a tutti." },
];

function AboutPage() {
  return (
    <Layout>
      {/* HEADER */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0">
          <img
            src={teamImg}
            alt="Team Sintesi 3D al lavoro"
            width={1600}
            height={1000}
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-10">
          <span className="tech-label">// Identity</span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1] md:text-7xl lg:text-8xl">
            Vent'anni in cui ogni
            <br />
            <span className="text-primary">grammo conta</span>.
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-muted-foreground">
            Nasciamo dall'unione di ingegneri con esperienza ventennale nei
            settori Aerospace, Motorsport e Ferroviario High-Speed. Mestieri in
            cui errore non è un'opzione e l'innovazione è quotidiana.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="tech-label">// Mission</span>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Ingegneria di livello
              <span className="text-primary"> industriale</span>, per chiunque.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-7 lg:col-start-6">
            <p>
              Sintesi 3D nasce dalla volontà di mettere a fattor comune le
              competenze di un team che, per due decenni, ha progettato e
              realizzato componenti per applicazioni mission-critical:
              dall'aviazione commerciale alle monoposto da competizione, fino ai
              treni ad alta velocità.
            </p>
            <p>
              Sfruttiamo il panorama in evoluzione dei <span className="text-foreground">polimeri tecnici</span>,
              dei <span className="text-foreground">metalli avanzati</span> e
              delle <span className="text-foreground">nuove tecnologie di progettazione</span>{" "}
              per renderle finalmente disponibili anche all'utente finale —
              che sia un privato con un'idea o un'azienda con esigenze produttive.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
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

      {/* TIMELINE */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="tech-label">// Timeline</span>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Dalla pista
              <br />
              al <span className="text-primary">tuo banco</span>.
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

      {/* CTA */}
      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10">
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight md:text-5xl">
            Costruiamo qualcosa
            <span className="text-primary"> insieme</span>.
          </h2>
          <Link
            to="/contatti"
            className="mt-10 inline-flex items-center gap-3 bg-primary px-8 py-4 font-mono text-sm uppercase tracking-[0.2em] text-primary-foreground transition-smooth hover:shadow-glow-strong"
          >
            Parla con il team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
