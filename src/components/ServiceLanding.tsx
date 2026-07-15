import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { Layout } from "@/components/Layout";

export type ServiceLandingProps = {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  image: string;
  imageAlt: string;
  benefits: string[];
  applications: { title: string; description: string }[];
  process: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
  schema: Record<string, unknown>;
};

export function ServiceLanding(props: ServiceLandingProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: props.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(props.schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="border-b border-border/60 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
          <div>
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <Link to="/servizi" className="hover:text-primary">Servizi</Link>
              <ChevronRight className="h-3 w-3" />
              <span>{props.eyebrow}</span>
            </nav>
            <span className="tech-label">// {props.eyebrow}</span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[.98] tracking-tight md:text-7xl">
              {props.title} <span className="text-primary">{props.accent}</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{props.intro}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contatti" className="inline-flex items-center gap-3 bg-primary px-7 py-4 font-mono text-xs uppercase tracking-[.18em] text-primary-foreground">
                Richiedi un preventivo <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+393755905212" className="inline-flex items-center border border-border px-7 py-4 font-mono text-xs uppercase tracking-[.18em] hover:border-primary">
                Parla con un tecnico
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden border border-border">
            <img src={props.image} alt={props.imageAlt} width={1280} height={960} className="aspect-[4/3] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-5 md:grid-cols-2">
          {props.benefits.map((benefit) => (
            <div key={benefit} className="flex gap-4 border border-border/70 bg-surface/30 p-5">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-surface/20 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="tech-label">// Applicazioni</span>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold md:text-5xl">Soluzioni costruite attorno al componente.</h2>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            {props.applications.map((item, index) => (
              <article key={item.title} className="bg-background p-7">
                <span className="font-mono text-xs text-primary">0{index + 1}</span>
                <h3 className="mt-5 font-display text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <span className="tech-label">// Metodo</span>
        <h2 className="mt-5 font-display text-4xl font-semibold md:text-5xl">Dal problema al risultato.</h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {props.process.map((item, index) => (
            <li key={item.title} className="border-t border-primary pt-6">
              <span className="font-mono text-sm text-primary">0{index + 1}</span>
              <h3 className="mt-4 font-display text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-border/60 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <span className="tech-label">// FAQ</span>
          <h2 className="mt-5 font-display text-4xl font-semibold">Domande frequenti</h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {props.faq.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="cursor-pointer list-none font-display text-xl font-medium">{item.question}</summary>
                <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-14 bg-primary p-8 text-primary-foreground md:p-10">
            <h2 className="font-display text-3xl font-semibold">Hai un file, un campione o soltanto un’idea?</h2>
            <p className="mt-3 max-w-2xl">Descrivici il risultato che vuoi ottenere. Valutiamo fattibilità, tecnologia, materiale, tempi e costi.</p>
            <Link to="/contatti" className="mt-7 inline-flex items-center gap-3 border border-primary-foreground/40 px-6 py-3 font-mono text-xs uppercase tracking-widest">
              Invia il progetto <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
