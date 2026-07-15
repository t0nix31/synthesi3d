import { createFileRoute } from "@tanstack/react-router";
import { env } from "cloudflare:workers";

type ContactUploadsBucket = {
  put: (
    key: string,
    body: ReadableStream | ArrayBuffer | string,
    options?: {
      httpMetadata?: { contentType?: string };
      customMetadata?: Record<string, string>;
    },
  ) => Promise<unknown>;
};

type WorkerEnv = {
  CONTACT_UPLOADS: ContactUploadsBucket;
  RESEND_API_KEY: string;
  DOWNLOAD_LINK_SECRET: string;
};

const MAX_TOTAL_UPLOAD_MB = 95;
const MAX_TOTAL_UPLOAD_BYTES = MAX_TOTAL_UPLOAD_MB * 1024 * 1024;
const DOWNLOAD_LINK_EXPIRES_SECONDS = 7 * 24 * 60 * 60;

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const workerEnv = env as unknown as WorkerEnv;

        try {
          const formData = await request.formData();

          const botcheck = String(formData.get("botcheck") ?? "");
          if (botcheck) {
            return json({ success: true });
          }

          const name = cleanText(formData.get("name"));
          const email = cleanText(formData.get("email"));
          const company = cleanText(formData.get("company"));
          const phone = cleanText(formData.get("phone"));
          const service = cleanText(formData.get("service"));
          const message = cleanText(formData.get("message"));
          const privacy = cleanText(formData.get("privacy"));

          if (!name || !email || !service || !message || privacy !== "accepted") {
            return json(
              {
                success: false,
                message: "Compila tutti i campi obbligatori e accetta la privacy.",
              },
              400,
            );
          }

          const files = formData
            .getAll("files")
            .filter((value): value is File => value instanceof File && value.size > 0);

          const totalUploadSize = files.reduce((total, file) => total + file.size, 0);

          if (totalUploadSize > MAX_TOTAL_UPLOAD_BYTES) {
            return json(
              {
                success: false,
                message: `Gli allegati superano il limite di ${MAX_TOTAL_UPLOAD_MB} MB totali.`,
              },
              413,
            );
          }

          const uploadedFiles = [];

          for (const file of files) {
            const safeName = sanitizeFileName(file.name);
            const key = `contatti/${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID()}-${safeName}`;

            await workerEnv.CONTACT_UPLOADS.put(key, file.stream(), {
              httpMetadata: {
                contentType: file.type || "application/octet-stream",
              },
              customMetadata: {
                originalName: file.name,
                uploadedBy: email,
                uploadedAt: new Date().toISOString(),
              },
            });

            const downloadUrl = await createSignedDownloadUrl({
              request,
              key,
              secret: workerEnv.DOWNLOAD_LINK_SECRET,
            });

            uploadedFiles.push({
              name: file.name,
              size: file.size,
              url: downloadUrl,
            });
          }

          const subject = `Nuova richiesta dal sito — ${service}`;
          const text = buildTextEmail({
            name,
            email,
            company,
            phone,
            service,
            message,
            uploadedFiles,
          });

          const html = buildHtmlEmail({
            name,
            email,
            company,
            phone,
            service,
            message,
            uploadedFiles,
          });

          const resendResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${workerEnv.RESEND_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "Sintesi 3D <noreply@sintesi3d.it>",
              to: ["info@sintesi3d.it"],
              reply_to: email,
              subject,
              text,
              html,
            }),
          });

          if (!resendResponse.ok) {
            const errorText = await resendResponse.text();

            console.error("Resend error:", errorText);

            return json(
              {
                success: false,
                message: "Il messaggio non è stato inviato. Riprova tra qualche minuto.",
              },
              500,
            );
          }

          return json({
            success: true,
            message: "Richiesta inviata correttamente.",
          });
        } catch (error) {
          console.error("Contact form error:", error);

          return json(
            {
              success: false,
              message: "Errore durante l'invio. Riprova tra qualche minuto.",
            },
            500,
          );
        }
      },
    },
  },
});

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}

function cleanText(value: FormDataEntryValue | null) {
  if (typeof value !== "string") return "";
  return value.trim();
}

function sanitizeFileName(fileName: string) {
  return fileName
    .normalize("NFKD")
    .replace(/[^\w.\-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 120);
}

async function createSignedDownloadUrl({
  request,
  key,
  secret,
}: {
  request: Request;
  key: string;
  secret: string;
}) {
  const expires = Math.floor(Date.now() / 1000) + DOWNLOAD_LINK_EXPIRES_SECONDS;
  const signature = await signDownloadLink(`${key}.${expires}`, secret);

  const url = new URL("/api/download", request.url);
  url.searchParams.set("key", key);
  url.searchParams.set("expires", String(expires));
  url.searchParams.set("signature", signature);

  return url.toString();
}

async function signDownloadLink(value: string, secret: string) {
  const encoder = new TextEncoder();

  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );

  const signature = await crypto.subtle.sign("HMAC", cryptoKey, encoder.encode(value));

  return [...new Uint8Array(signature)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function buildTextEmail({
  name,
  email,
  company,
  phone,
  service,
  message,
  uploadedFiles,
}: {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
  uploadedFiles: Array<{ name: string; size: number; url: string }>;
}) {
  const filesText =
    uploadedFiles.length > 0
      ? uploadedFiles
          .map(
            (file, index) =>
              `${index + 1}. ${file.name} (${formatBytes(file.size)})\n${file.url}`,
          )
          .join("\n\n")
      : "Nessun allegato.";

  return `
Nuova richiesta dal sito Sintesi 3D

Nome: ${name}
Email: ${email}
Azienda: ${company || "-"}
Telefono: ${phone || "-"}
Servizio: ${service}

Messaggio:
${message}

Allegati:
${filesText}

Nota: i link agli allegati scadono dopo 7 giorni.
`.trim();
}

function buildHtmlEmail({
  name,
  email,
  company,
  phone,
  service,
  message,
  uploadedFiles,
}: {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
  uploadedFiles: Array<{ name: string; size: number; url: string }>;
}) {
  const filesHtml =
    uploadedFiles.length > 0
      ? `<ul>${uploadedFiles
          .map(
            (file) =>
              `<li><a href="${escapeHtml(file.url)}">${escapeHtml(file.name)}</a> — ${formatBytes(
                file.size,
              )}</li>`,
          )
          .join("")}</ul>`
      : "<p>Nessun allegato.</p>";

  return `
<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
  <h2>Nuova richiesta dal sito Sintesi 3D</h2>

  <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
  <p><strong>Email:</strong> ${escapeHtml(email)}</p>
  <p><strong>Azienda:</strong> ${escapeHtml(company || "-")}</p>
  <p><strong>Telefono:</strong> ${escapeHtml(phone || "-")}</p>
  <p><strong>Servizio:</strong> ${escapeHtml(service)}</p>

  <h3>Messaggio</h3>
  <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>

  <h3>Allegati</h3>
  ${filesHtml}

  <p style="font-size: 12px; color: #666;">
    I link agli allegati scadono dopo 7 giorni.
  </p>
</div>
`.trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
