import type { APIRoute } from "@tanstack/react-start";

export const GET: APIRoute = async ({ request, env }) => {
  const url = new URL(request.url);
  const key = url.searchParams.get("key");

  if (!key) {
    return new Response(
      JSON.stringify({ error: "Parametro key mancante." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  if (!/^[a-zA-Z0-9\-_.%]+$/.test(key)) {
    return new Response(
      JSON.stringify({ error: "Key non valida." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const object = await env.CONTACT_UPLOADS.get(key);

  if (!object) {
    return new Response(
      JSON.stringify({ error: "File non trovato o scaduto." }),
      { status: 404, headers: { "Content-Type": "application/json" } }
    );
  }

  const contentType =
    object.httpMetadata?.contentType || "application/octet-stream";
  const contentDisposition =
    object.httpMetadata?.contentDisposition || `attachment; filename="${key}"`;

  return new Response(object.body, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      "Content-Disposition": contentDisposition,
      "Content-Length": object.size.toString(),
      "Access-Control-Allow-Origin": "https://www.sintesi3d.it",
    },
  });
};
