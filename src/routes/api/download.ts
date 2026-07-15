import { createFileRoute } from "@tanstack/react-router";
import { env } from "cloudflare:workers";

type R2Object = {
  body: ReadableStream;
  httpMetadata?: {
    contentType?: string;
  };
  customMetadata?: Record<string, string>;
};

type ContactUploadsBucket = {
  get: (key: string) => Promise<R2Object | null>;
};

type WorkerEnv = {
  CONTACT_UPLOADS: ContactUploadsBucket;
  DOWNLOAD_LINK_SECRET: string;
};

export const Route = createFileRoute("/api/download")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const workerEnv = env as unknown as WorkerEnv;

        const url = new URL(request.url);
        const key = url.searchParams.get("key") ?? "";
        const expires = Number(url.searchParams.get("expires") ?? "0");
        const signature = url.searchParams.get("signature") ?? "";

        if (!key || !expires || !signature) {
          return new Response("Link non valido.", { status: 400 });
        }

        if (Date.now() / 1000 > expires) {
          return new Response("Link scaduto.", { status: 403 });
        }

        const expectedSignature = await signDownloadLink(
          `${key}.${expires}`,
          workerEnv.DOWNLOAD_LINK_SECRET,
        );

        if (!safeEqual(signature, expectedSignature)) {
          return new Response("Firma non valida.", { status: 403 });
        }

        const object = await workerEnv.CONTACT_UPLOADS.get(key);

        if (!object) {
          return new Response("File non trovato.", { status: 404 });
        }

        const originalName =
          object.customMetadata?.originalName || key.split("/").at(-1) || "allegato";

        return new Response(object.body, {
          headers: {
            "Content-Type": object.httpMetadata?.contentType || "application/octet-stream",
            "Content-Disposition": buildContentDisposition(originalName),
            "Cache-Control": "private, no-store",
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "DENY",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
        });
      },
    },
  },
});

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

function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;

  let result = 0;

  for (let i = 0; i < a.length; i += 1) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }

  return result === 0;
}

// Encoding RFC 5987 per Content-Disposition con nomi non-ASCII
function buildContentDisposition(fileName: string): string {
  const safe = fileName.replace(/[\\/:*?"<>|]/g, "-").replace(/[^\x20-\x7e]/g, "");
  const encoded = encodeURIComponent(fileName);
  // Usa entrambe le forme per massima compatibilità browser
  return `attachment; filename="${safe}"; filename*=UTF-8''${encoded}`;
}

function sanitizeDownloadName(fileName: string) {
  return fileName.replace(/[\\/:*?"<>|]/g, "-");
}
