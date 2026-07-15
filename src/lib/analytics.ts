type ConversionEvent =
  | "cta_click"
  | "contact_form_start"
  | "contact_form_submit"
  | "contact_form_error"
  | "phone_click"
  | "email_click";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackConversion(
  event: ConversionEvent,
  parameters: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") return;

  const consent = window.localStorage.getItem("sintesi3d_cookie_consent");
  let analyticsAllowed = false;
  try {
    analyticsAllowed = consent ? JSON.parse(consent).analytics === true : false;
  } catch {
    analyticsAllowed = false;
  }
  if (!analyticsAllowed) return;

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...parameters });
}
