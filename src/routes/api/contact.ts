import type { APIRoute } from "@tanstack/react-start";

const ALLOWED_EXTENSIONS = [
  ".pdf",
  ".stl",
  ".step",
  ".stp",
  ".obj",
  ".zip",
  ".rar",
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
];

const MAX_TOTAL_SIZE = 95 * 1024 * 1024;
const MAX_SINGLE_FILE = 50 * 1024 * 1024;

function hasAllowedExtension(filename: string): boolean {
  const dot = filename.lastIndexOf(".");
  if (dot === -1) return false;
  return ALLOWED_EXTENSIONS.includes(filename.substring(dot).toLowerCase());
}

function sanitize(str: string | null, maxLen: number): string {
  if (!str) return "";
  return str.replace(/<[^>]*>/g, "").trim().slice(0, maxLen);
}

function jsonResponse(data: unknown, status: number): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://www.sintesi3d.it",
    },
  });
}

export const POST: APIRoute = async ({ request, env }) => {
  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "https://www.sintesi3d.it",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400",
      },
    });
  }

  try {
    const formData = await request.formData();

    const name = formData.get("name") as string | null;
    const email = formData.get("email") as string | null;
    const phone = formData.get("phone") as string | null;
    const company = formData.get("company") as string | null;
    const service = formData.get("service") as string | null;
    const message = formData.get("message") as string | null;
    const privacy = formData.get("privacy") as string | null;
    const botcheck = formData.get("botcheck") as string | null;
    const turnstileToken = formData.get("cf-turnstile-response") as string | null;

    if (botcheck) {
      return jsonResponse({ success: true, message: "Sent." }, 200);
    }

    if (!turnstileToken) {
      return jsonResponse(
        { error: "Verifica anti-bot non completata. Riprova." },
        403
      );
    }

    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: env.TURNSTILE_SECRET,
          response: turnstileToken,
          remoteip: request.headers.get("CF-Connecting-IP") ?? "",
        }),
      }
    );
    const verifyData = (await verifyRes.json()) as { success: boolean };

    if (!verifyData.success) {
      return jsonResponse(
        { error: "Verifica anti-bot fallita. Riprova." },
        403
      );
    }

    const cleanName = sanitize(name, 100);
    const cleanEmail = sanitize(email, 254);
    const cleanPhone = sanitize(phone, 30);
    const cleanCompany = sanitize(company, 150);
    const cleanService = sanitize(service, 100);
    const cleanMessage = sanitize(message, 5000);

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return jsonResponse(
        { error: "Nome, email e messaggio sono campi obbligatori." },
        400
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return jsonResponse({ error: "Indirizzo email non valido." }, 400);
    }

    if (privacy !== "accepted") {
      return jsonResponse(
        { error: "Accettazione della privacy obbligatoria." },
        400
      );
    }

    const fileKeys: string[] = [];
    const timestamp = Date.now();

    const files = formData.getAll("files") as (File | string)[];
    const validFiles = files.filter(
      (f): f is File => f instanceof File && f.size > 0
    );

    if (validFiles.length > 0) {
      const totalSize = validFiles.reduce((sum, f) => sum + f.size, 0);
      if (totalSize > MAX_TOTAL_SIZE) {
        return jsonResponse(
          { error: "Dimensione totale dei file supera 95 MB." },
          413
        );
      }

      for (let i = 0; i < validFiles.length; i++) {
        const file = validFiles[i];

        if (!hasAllowedExtension(file.name)) {
          return jsonResponse(
            { error: `Tipo file non consentito: ${file.name}` },
            400
          );
        }

        if (file.size > MAX_SINGLE_FILE) {
          return jsonResponse(
            { error: `Il file "${file.name}" supera 50 MB.` },
            413
          );
        }

        const r2Key = `${timestamp}-${i}-${encodeURIComponent(file.name)}`;

        await env.CONTACT_UPLOADS.put(r2Key, file, {
          httpMetadata: {
            contentType: "application/octet-stream",
            contentDisposition: `attachment; filename="${encodeURIComponent(file.name)}"`,
          },
        });

        fileKeys.push(r2Key);
      }
    }

    const fileListHtml = fileKeys.length
      ? `<hr style="margin:16px 0;border:none;border-top:1px solid #e5e7eb"/>
         <h3 style="font-size:14px;font-weight:600;margin:0 0 8px">Allegati (${fileKeys.length})</h3>
         <ul style="margin:0;padding-left:20px">
           ${fileKeys
             .map(
               (key, idx) =>
                 `<li style="margin:4px 0"><a href="https://www.sintesi3d.it/api/download?key=${encodeURIComponent(key)}" style="color:#2563eb">Allegato ${idx + 1}</a></li>`
             )
             .join("")}
         </ul>`
      : "";

    const emailHtml = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1f2937">
        <h2 style="font-size:18px;font-weight:700;margin:0 0 16px">📩 Nuova richiesta dal sito</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:16px">
          <tr><td style="padding:6px 0;font-weight:600;width:120px">Nome</td><td style="padding:6px 0">${cleanName}</td></tr>
          <tr><td style="padding:6px 0;font-weight:600">Email</td><td style="padding:6px 0">${cleanEmail}</td></tr>
          ${cleanPhone ? `<tr><td style="padding:6px 0;font-weight:600">Telefono</td><td style="padding:6px 0">${cleanPhone}</td></tr>` : ""}
          ${cleanCompany ? `<tr><td style="padding:6px 0;font-weight:600">Azienda</td><td style="padding:6px 0">${cleanCompany}</td></tr>` : ""}
          <tr><td style="padding:6px 0;font-weight:600">Servizio</td><td style="padding:6px 0">${cleanService || "—"}</td></tr>
        </table>
        <div style="background:#f9fafb;border-radius:8px;padding:16px;margin-bottom:16px;white-space:pre-wrap">${cleanMessage}</div>
        ${fileListHtml}
        <p style="font-size:12px;color:#9ca3af;margin-top:24px">Ricevuto via sintesi3d.it · ${new Date().toLocaleString("it-IT")}</p>
      </div>
    `;

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Sintesi 3D <sintesi3d@sintesi3d.it>",
        to: "info@sintesi3d.it",
        subject: `Nuova richiesta: ${cleanName} — ${cleanService || "Contatto"}`,
        html: emailHtml,
      }),
    });

    if (!emailRes.ok) {
      const errText = await emailRes.text();
      console.error("[ContactForm] Resend error:", emailRes.status, errText);
    }

    return jsonResponse(
      {
        success: true,
        message: "Richiesta inviata. Risponderemo entro 24h lavorative.",
      },
      200
    );
  } catch (err) {
    console.error("[ContactForm] Unhandled error:", err);
    return jsonResponse(
      { error: "Errore interno. Riprova tra qualche minuto." },
      500
    );
  }
};
