import { createFileRoute } from "@tanstack/react-router";

import { Layout } from "@/components/Layout";

import { Mail, Phone, Globe, MapPin, Send, Paperclip, X, FileText } from "lucide-react";

import { useRef, useState, type FormEvent } from "react";

import { toast } from "sonner";

const MAX_TOTAL_UPLOAD_MB = 95;
const MAX_TOTAL_UPLOAD_BYTES = MAX_TOTAL_UPLOAD_MB * 1024 * 1024;

export const Route = createFileRoute("/en/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sintesi 3D" },
      {
        name: "description",
        content:
          "Contact Sintesi 3D for a quote on 3D printing, 3D scanning, reverse engineering or CAD design. Reply within 24 working hours.",
      },
      { property: "og:title", content: "Contact — Sintesi 3D" },
      {
        property: "og:description",
        content: "Request a quote or tell us how we can help build your project.",
      },
      { httpEquiv: "content-language", content: "en" },
    ],
    links: [
      { rel: "canonical", href: "https://www.sintesi3d.it/en/contact" },
      { rel: "alternate", hrefLang: "it", href: "https://www.sintesi3d.it/contatti" },
      { rel: "alternate", hrefLang: "en", href: "https://www.sintesi3d.it/en/contact" },
    ],
  }),

  component: ContactPageEn,
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
    label: "Phone",
    value: "+39 375 590 5212",
    code: "TEL",
    href: "tel:+393755905212",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.sintesi3d.it",
    code: "WEB",
    href: "https://www.sintesi3d.it",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Via S. Croce 48, 83020 Sperone (AV), Italy",
    code: "GEO",
    href: undefined,
  },
  {
    icon: FileText,
    label: "VAT number",
    value: "03247910643",
    code: "VAT",
    href: undefined,
  },
];

function ContactPageEn() {
  const [sending, setSending] = useState(false);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [totalSize, setTotalSize] = useState(0);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (totalSize > MAX_TOTAL_UPLOAD_BYTES) {
      toast.error("Attachments too large", {
        description: `The total size of attachments must be no more than ${MAX_TOTAL_UPLOAD_MB} MB.`,
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

      if (!response.ok) {
        throw new Error("The message could not be sent. Please try again in a few minutes.");
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error("The message could not be sent. Please check the required fields and try again.");
      }

      toast.success("Request sent", {
        description: "We will reply within 24 working hours.",
      });

      form.reset();
      setFileNames([]);
      setTotalSize(0);
    } catch (error) {
      toast.error("Message not sent", {
        description:
          error instanceof Error
            ? error.message
            : "An error occurred. Please try again in a few minutes.",
      });
    } finally {
      setSending(false);
    }
  };

  const handleFileChange = () => {
    const files = Array.from(fileInputRef.current?.files ?? []);
    const nextTotalSize = files.reduce((total, file) => total + file.size, 0);

    if (nextTotalSize > MAX_TOTAL_UPLOAD_BYTES) {
      toast.error("Attachments too large", {
        description: `You can upload up to ${MAX_TOTAL_UPLOAD_MB} MB in total per request.`,
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
            Let&apos;s start
            <br />
            your <span className="text-primary">project</span>.
          </h1>

          <p className="mt-10 max-w-2xl text-lg text-muted-foreground">
            Fill in the form, upload a reference file or simply describe your idea.
            You will receive technical and commercial feedback within 24 working hours.
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

              <p className="mt-3 font-display text-2xl font-semibold">≤ 24 hours</p>

              <p className="mt-2 text-sm text-muted-foreground">
                Monday – Friday, working days.
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
                <Field label="Name" name="name" required />

                <Field label="Email" name="email" type="email" required />

                <Field label="Company (optional)" name="company" />

                <Field label="Phone (optional)" name="phone" />
              </div>

              <div className="mt-6">
                <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Service of interest
                </label>

                <select
                  name="service"
                  className="mt-2 w-full border-b border-border bg-transparent py-3 font-display text-base text-foreground outline-none transition-smooth focus:border-primary"
                  required
                >
                  <option value="" className="bg-background">
                    Select…
                  </option>

                  <option value="3D Printing" className="bg-background">
                    3D Printing
                  </option>

                  <option value="3D Scanning" className="bg-background">
                    3D Scanning
                  </option>

                  <option value="Reverse Engineering" className="bg-background">
                    Reverse Engineering
                  </option>

                  <option value="CAD Design" className="bg-background">
                    CAD Design
                  </option>

                  <option value="Other" className="bg-background">
                    Other
                  </option>
                </select>
              </div>

              <div className="mt-6">
                <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Describe your project
                </label>

                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Materials, dimensions, tolerances, quantity…"
                  className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 font-sans text-base text-foreground outline-none transition-smooth placeholder:text-muted-foreground/50 focus:border-primary"
                />
              </div>

              <div className="mt-8">
                <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Optional attachments
                </label>

                <label className="mt-3 flex cursor-pointer flex-col items-center justify-center border border-dashed border-border bg-background/30 px-6 py-8 text-center transition-smooth hover:border-primary/60 hover:bg-primary/5">
                  <Paperclip className="mb-3 h-6 w-6 text-primary" strokeWidth={1.5} />

                  <span className="font-display text-base font-semibold text-foreground">
                    Upload reference files
                  </span>

                  <span className="mt-2 max-w-md text-sm text-muted-foreground">
                    You can attach PDFs, images, STL, STEP, OBJ or ZIP files up to {" "}
                    {MAX_TOTAL_UPLOAD_MB} MB in total.
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
                        Selected files — {formatBytes(totalSize)}
                      </p>

                      <button
                        type="button"
                        onClick={clearFiles}
                        className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-smooth hover:text-primary"
                      >
                        <X className="h-3 w-3" />
                        Remove
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
                  I have read the {" "}
                  <a
                    href="/en/privacy"
                    className="text-primary underline underline-offset-4"
                  >
                    Privacy Notice
                  </a>
                  , the {" "}
                  <a
                    href="/en/cookie-policy"
                    className="text-primary underline underline-offset-4"
                  >
                    Cookie Notice
                  </a>{" "}
                  and the {" "}
                  <a
                    href="/en/contact-privacy"
                    className="text-primary underline underline-offset-4"
                  >
                    privacy notice for data submitted through the contact form
                  </a>
                  . I understand that the data entered and any attachments will be
                  processed exclusively to manage my request, prepare a technical or
                  commercial reply and contact me. Attachments will be accessible through
                  temporary links and kept for a maximum of 30 days.
                </span>
              </label>

              <button
                type="submit"
                disabled={sending}
                className="group mt-10 inline-flex items-center gap-3 bg-primary px-8 py-4 font-mono text-sm uppercase tracking-[0.2em] text-primary-foreground transition-smooth hover:shadow-glow-strong disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Sending…" : "Send request"}

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
