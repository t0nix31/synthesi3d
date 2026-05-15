import { createFileRoute } from "@tanstack/react-router";

import { Layout } from "@/components/Layout";

import { Mail, Phone, Globe, MapPin, Send, Paperclip, X, FileText } from "lucide-react";

import { useRef, useState, type FormEvent } from "react";

import { toast } from "sonner";

const MAX_TOTAL_UPLOAD_MB = 95;
const MAX_TOTAL_UPLOAD_BYTES = MAX_TOTAL_UPLOAD_MB * 1024 * 1024;

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — Sintesi 3D" },
      {
        name: "description",
        content:
          "Contatta Sintesi 3D per un preventivo su stampa 3D, scansione, reverse engineering o progettazione CAD. Risposta entro 24 ore.",
      },
      { property: "og:title", content: "Contatti — Sintesi 3D" },
      {
        property: "og:description",
        content: "Richiedi un preventivo o scopri come possiamo realizzare il tuo progetto.",
      },
    ],
  }),

  component: ContactPage,
});

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "info@sintesi3d.it",
    code: "EML",
    href: "mailto:info@sintesi3d.it",
  },
  {
    icon: Phone,
    label: "Telefono",
    value: "+39 375 590 5212",
    code: "TEL",
    href: "tel:+393755905212",
  },
  {
    icon: Globe,
    label: "Sito",
    value: "www.sintesi3d.it",
    code: "WEB",
    href: "https://www.sintesi3d.it",
  },
  {
    icon: MapPin,
    label: "Sede",
    value: "Sperone (AV) — Italy",
    code: "GEO",
    href: undefined,
  },
  {
    icon: FileText,
    label: "P.IVA",
    value: "03247910643",
    code: "VAT",
    href: undefined,
  },
];

function ContactPage() {
  const [sending, setSending] = useState(false);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [totalSize, setTotalSize] = useState(0);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (totalSize > MAX_TOTAL_UPLOAD_BYTES) {
      toast.error("Allegati troppo grandi", {
        description: `Il totale degli allegati deve essere massimo ${MAX_TOTAL_UPLOAD_MB} MB.`,
      });
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    setSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Invio non riuscito.");
      }

      toast.success("Richiesta inviata", {
        description: "Ti risponderemo entro 24 ore.",
      });

      form.reset();
      setFileNames([]);
      setTotalSize(0);
    } catch (error) {
      toast.error("Invio non riuscito", {
        description:
          error instanceof Error
            ? error.message
            : "Si è verificato un errore. Riprova tra qualche minuto.",
      });
    } finally {
      setSending(false);
    }
  };

  const handleFileChange = () => {
    const files = Array.from(fileInputRef.current?.files ?? []);
    const nextTotalSize = files.reduce((total, file) => total + file.size, 0);

    if (nextTotalSize > MAX_TOTAL_UPLOAD_BYTES) {
      toast.error("Allegati troppo grandi", {
        description: `Puoi caricare massimo ${MAX_TOTAL_UPLOAD_MB} MB totali per richiesta.`,
      });

      clearFiles();
      return;
    }

    setFileNames(files.map((file) => file.name));
    setTotalSize(nextTotalSize);
  };

  const clearFiles = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    setFileNames([]);
    setTotalSize(0);
  };

  return (
    <Layout>
      <section className="border-b border-border/60 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="tech-label">// Get in touch</span>

          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1] md:text-7xl lg:text-8xl">
            Iniziamo
            <br />
            il <span className="text-primary">tuo progetto</span>.
          </h1>

          <p className="mt-10 max-w-2xl text-lg text-muted-foreground">
            Compila il form, allega un riferimento o descrivi a parole la tua idea.
            Riceverai un riscontro tecnico ed economico entro 24 ore lavorative.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="tech-label">// Channels</span>

            <div className="mt-8 space-y-6">
              {contacts.map((c) => (
                <div
                  key={c.label}
                  className="corner-frame border border-border/60 bg-surface/40 p-6 transition-smooth hover:border-primary/50"
                >
                  <div className="flex items-center justify-between">
                    <c.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />

                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      {c.code}
                    </span>
                  </div>

                  <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {c.label}
                  </div>

                  {c.href ? (
                    <a
                      href={c.href}
                      className="mt-1 block font-display text-lg font-semibold transition-smooth hover:text-primary"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <div className="mt-1 font-display text-lg font-semibold">{c.value}</div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 border-l-2 border-primary pl-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                // Response time
              </p>

              <p className="mt-3 font-display text-2xl font-semibold">≤ 24 ore</p>

              <p className="mt-2 text-sm text-muted-foreground">
                Lun – Ven, giorni lavorativi.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <form
              onSubmit={handleSubmit}
              method="POST"
              encType="multipart/form-data"
              className="border border-border/60 bg-surface/40 p-8 md:p-12"
            >
              <input type="text" name="botcheck" className="hidden" tabIndex={-1} />

              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Nome" name="name" required />

                <Field label="Email" name="email" type="email" required />

                <Field label="Azienda (opzionale)" name="company" />

                <Field label="Telefono (opzionale)" name="phone" />
              </div>

              <div className="mt-6">
                <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Servizio di interesse
                </label>

                <select
                  name="service"
                  className="mt-2 w-full border-b border-border bg-transparent py-3 font-display text-base text-foreground outline-none transition-smooth focus:border-primary"
                  required
                >
                  <option value="" className="bg-background">
                    Seleziona…
                  </option>

                  <option value="Stampa 3D" className="bg-background">
                    Stampa 3D
                  </option>

                  <option value="Scansione 3D" className="bg-background">
                    Scansione 3D
                  </option>

                  <option value="Reverse Engineering" className="bg-background">
                    Reverse Engineering
                  </option>

                  <option value="Progettazione CAD" className="bg-background">
                    Progettazione CAD
                  </option>

                  <option value="Altro" className="bg-background">
                    Altro
                  </option>
                </select>
              </div>

              <div className="mt-6">
                <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Descrivi il tuo progetto
                </label>

                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Materiali, dimensioni, tolleranze, quantità…"
                  className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 font-sans text-base text-foreground outline-none transition-smooth placeholder:text-muted-foreground/50 focus:border-primary"
                />
              </div>

              <div className="mt-8">
                <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Allegati opzionali
                </label>

                <label className="mt-3 flex cursor-pointer flex-col items-center justify-center border border-dashed border-border bg-background/30 px-6 py-8 text-center transition-smooth hover:border-primary/60 hover:bg-primary/5">
                  <Paperclip className="mb-3 h-6 w-6 text-primary" strokeWidth={1.5} />

                  <span className="font-display text-base font-semibold text-foreground">
                    Carica file di riferimento
                  </span>

                  <span className="mt-2 max-w-md text-sm text-muted-foreground">
                    Puoi allegare PDF, immagini, STL, STEP, OBJ o ZIP fino a{" "}
                    {MAX_TOTAL_UPLOAD_MB} MB totali.
                  </span>

                  <input
                    ref={fileInputRef}
                    type="file"
                    name="files"
                    multiple
                    className="sr-only"
                    accept=".pdf,.jpg,.jpeg,.png,.webp,.stl,.step,.stp,.obj,.zip,.rar"
                    onChange={handleFileChange}
                  />
                </label>

                {fileNames.length > 0 && (
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        File selezionati — {formatBytes(totalSize)}
                      </p>

                      <button
                        type="button"
                        onClick={clearFiles}
                        className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-smooth hover:text-primary"
                      >
                        <X className="h-3 w-3" />
                        Rimuovi
                      </button>
                    </div>

                    <div className="space-y-2">
                      {fileNames.map((fileName) => (
                        <div
                          key={fileName}
                          className="flex items-center gap-3 border border-border/60 bg-background/30 px-4 py-3 font-mono text-xs text-muted-foreground"
                        >
                          <Paperclip className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />

                          <span className="truncate">{fileName}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <label className="mt-8 flex gap-3 text-sm text-muted-foreground">
                <input
                  type="checkbox"
                  name="privacy"
                  value="accepted"
                  required
                  className="mt-1 h-4 w-4 shrink-0 accent-primary"
                />

                <span>
                  Ho letto la{" "}
                  <a
                    href="https://www.iubenda.com/privacy-policy/82947247"
                    className="iubenda-white iubenda-noiframe iubenda-embed text-primary underline underline-offset-4"
                    title="Privacy Policy"
                  >
                    Privacy Policy
                  </a>
                  , la{" "}
                  <a
                    href="https://www.iubenda.com/privacy-policy/82947247/cookie-policy"
                    className="iubenda-white iubenda-noiframe iubenda-embed text-primary underline underline-offset-4"
                    title="Cookie Policy"
                  >
                    Cookie Policy
                  </a>{" "}
                  e l&apos;
                  <a
                    href="/privacy-contatti"
                    className="text-primary underline underline-offset-4"
                  >
                    informativa sul trattamento dei dati inviati tramite il modulo contatti
                  </a>
                  . Autorizzo il trattamento dei dati inseriti e degli allegati
                  esclusivamente per essere ricontattato in merito alla mia richiesta.
                  Gli allegati saranno accessibili tramite link temporaneo e conservati
                  per massimo 30 giorni.
                </span>
              </label>

              <button
                type="submit"
                disabled={sending}
                className="group mt-10 inline-flex items-center gap-3 bg-primary px-8 py-4 font-mono text-sm uppercase tracking-[0.2em] text-primary-foreground transition-smooth hover:shadow-glow-strong disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Invio…" : "Invia richiesta"}

                <Send className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </label>

      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full border-b border-border bg-transparent py-3 font-display text-base text-foreground outline-none transition-smooth focus:border-primary"
      />
    </div>
  );
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}
