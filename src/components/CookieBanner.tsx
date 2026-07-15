/**
 * CookieBanner — GDPR/Garante compliant cookie consent
 * Libreria: vanilla JS (nessuna dipendenza npm aggiuntiva)
 * Funzionalità:
 *  - Banner al primo accesso con "Accetta tutti" / "Rifiuta" / "Gestisci preferenze"
 *  - Pannello preferenze con categorie (necessari, analitici, marketing)
 *  - Supporto IT / EN basato sul pathname
 *  - Consenso salvato in localStorage con timestamp
 *  - Pulsante "Preferenze cookie" nel footer tramite window.openCookiePreferences()
 */

import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";

// ─── Tipi ────────────────────────────────────────────────────────────────────

type ConsentState = {
  necessary: true; // sempre true, non modificabile
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  version: number;
};

const CONSENT_KEY = "sintesi3d_cookie_consent";
const CONSENT_VERSION = 1;

// ─── Helpers ────────────────────────────────────────────────────────────────

function loadConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function saveConsent(analytics: boolean, marketing: boolean): ConsentState {
  const consent: ConsentState = {
    necessary: true,
    analytics,
    marketing,
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  return consent;
}

// ─── Testi IT / EN ──────────────────────────────────────────────────────────

const i18n = {
  it: {
    title: "Utilizziamo i cookie",
    description:
      "Questo sito utilizza cookie tecnici necessari al funzionamento e, previo consenso, cookie analitici e di marketing per migliorare l'esperienza e misurare le prestazioni.",
    acceptAll: "Accetta tutti",
    rejectAll: "Rifiuta",
    manage: "Gestisci preferenze",
    save: "Salva preferenze",
    close: "Chiudi",
    privacyPolicy: "Privacy Policy",
    cookiePolicy: "Cookie Policy",
    categories: {
      necessary: {
        label: "Necessari",
        description:
          "Cookie tecnici indispensabili per il funzionamento del sito (sessione, sicurezza). Non possono essere disabilitati.",
      },
      analytics: {
        label: "Analitici",
        description:
          "Cookie che raccolgono informazioni aggregate sull'utilizzo del sito per migliorarne le funzionalità. Nessun dato è condiviso con terze parti a scopo pubblicitario.",
      },
      marketing: {
        label: "Marketing",
        description:
          "Cookie utilizzati per mostrare annunci pertinenti ai tuoi interessi e misurare l'efficacia delle campagne pubblicitarie.",
      },
    },
  },
  en: {
    title: "We use cookies",
    description:
      "This site uses necessary technical cookies and, with your consent, analytical and marketing cookies to improve your experience and measure performance.",
    acceptAll: "Accept all",
    rejectAll: "Reject all",
    manage: "Manage preferences",
    save: "Save preferences",
    close: "Close",
    privacyPolicy: "Privacy Policy",
    cookiePolicy: "Cookie Policy",
    categories: {
      necessary: {
        label: "Necessary",
        description:
          "Technical cookies essential for the site to function (session, security). These cannot be disabled.",
      },
      analytics: {
        label: "Analytics",
        description:
          "Cookies that collect aggregated information about site usage to improve functionality. No data is shared with third parties for advertising purposes.",
      },
      marketing: {
        label: "Marketing",
        description:
          "Cookies used to show ads relevant to your interests and measure the effectiveness of advertising campaigns.",
      },
    },
  },
};

// ─── Toggle switch ──────────────────────────────────────────────────────────

function Toggle({
  checked,
  disabled,
  onChange,
  id,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
  id: string;
}) {
  return (
    <button
      id={id}
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange?.(!checked)}
      className={[
        "cc-toggle",
        checked ? "cc-toggle--on" : "",
        disabled ? "cc-toggle--disabled" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      type="button"
    >
      <span className="cc-toggle__thumb" />
    </button>
  );
}

// ─── Componente principale ──────────────────────────────────────────────────

export function CookieBanner() {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith("/en");
  const t = isEnglish ? i18n.en : i18n.it;

  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [visible, setVisible] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [ready, setReady] = useState(false);

  // Carica consenso salvato al mount
  useEffect(() => {
    const saved = loadConsent();
    if (saved) {
      setConsent(saved);
      setAnalytics(saved.analytics);
      setMarketing(saved.marketing);
      setVisible(false);
    } else {
      setVisible(true);
    }
    setReady(true);
  }, []);

  // Espone funzione globale per il pulsante "Preferenze cookie" nel footer
  useEffect(() => {
    (window as unknown as Record<string, unknown>).openCookiePreferences = () => {
      const saved = loadConsent();
      if (saved) {
        setAnalytics(saved.analytics);
        setMarketing(saved.marketing);
      }
      setPanelOpen(true);
      setVisible(true);
    };
    return () => {
      delete (window as unknown as Record<string, unknown>).openCookiePreferences;
    };
  }, []);

  const handleAcceptAll = () => {
    const c = saveConsent(true, true);
    setConsent(c);
    setAnalytics(true);
    setMarketing(true);
    setVisible(false);
    setPanelOpen(false);
  };

  const handleRejectAll = () => {
    const c = saveConsent(false, false);
    setConsent(c);
    setAnalytics(false);
    setMarketing(false);
    setVisible(false);
    setPanelOpen(false);
  };

  const handleSave = () => {
    const c = saveConsent(analytics, marketing);
    setConsent(c);
    setVisible(false);
    setPanelOpen(false);
  };

  if (!ready || !visible) return null;

  return (
    <>
      {/* Overlay */}
      <div className="cc-overlay" aria-hidden="true" />

      {/* Banner / Pannello preferenze */}
      <div
        className={["cc-banner", panelOpen ? "cc-banner--panel" : ""].filter(Boolean).join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label={t.title}
      >
        {!panelOpen ? (
          /* ── Vista banner compatta ── */
          <div className="cc-banner__inner">
            <div className="cc-banner__text">
              <p className="cc-banner__title">{t.title}</p>
              <p className="cc-banner__desc">{t.description}</p>
              <p className="cc-banner__links">
                <a
                  href={
                    isEnglish
                      ? "/en/cookie-policy"
                      : "https://www.iubenda.com/privacy-policy/82947247/cookie-policy"
                  }
                  target={isEnglish ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="cc-link"
                >
                  {t.cookiePolicy}
                </a>
                {" · "}
                <a
                  href={
                    isEnglish ? "/en/privacy" : "https://www.iubenda.com/privacy-policy/82947247"
                  }
                  target={isEnglish ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="cc-link"
                >
                  {t.privacyPolicy}
                </a>
              </p>
            </div>

            <div className="cc-banner__actions">
              <button type="button" className="cc-btn cc-btn--primary" onClick={handleAcceptAll}>
                {t.acceptAll}
              </button>
              <button type="button" className="cc-btn cc-btn--secondary" onClick={handleRejectAll}>
                {t.rejectAll}
              </button>
              <button
                type="button"
                className="cc-btn cc-btn--ghost"
                onClick={() => setPanelOpen(true)}
              >
                {t.manage}
              </button>
            </div>
          </div>
        ) : (
          /* ── Vista pannello preferenze ── */
          <div className="cc-panel">
            <div className="cc-panel__header">
              <p className="cc-banner__title">{t.manage}</p>
              <button
                type="button"
                className="cc-panel__close"
                onClick={() => {
                  if (consent) {
                    setVisible(false);
                    setPanelOpen(false);
                  } else {
                    setPanelOpen(false);
                  }
                }}
                aria-label={t.close}
              >
                ✕
              </button>
            </div>

            <div className="cc-panel__body">
              {/* Necessari */}
              <div className="cc-category">
                <div className="cc-category__header">
                  <label className="cc-category__label" htmlFor="cc-necessary">
                    {t.categories.necessary.label}
                  </label>
                  <Toggle id="cc-necessary" checked={true} disabled={true} />
                </div>
                <p className="cc-category__desc">{t.categories.necessary.description}</p>
              </div>

              {/* Analitici */}
              <div className="cc-category">
                <div className="cc-category__header">
                  <label className="cc-category__label" htmlFor="cc-analytics">
                    {t.categories.analytics.label}
                  </label>
                  <Toggle
                    id="cc-analytics"
                    checked={analytics}
                    onChange={setAnalytics}
                  />
                </div>
                <p className="cc-category__desc">{t.categories.analytics.description}</p>
              </div>

              {/* Marketing */}
              <div className="cc-category">
                <div className="cc-category__header">
                  <label className="cc-category__label" htmlFor="cc-marketing">
                    {t.categories.marketing.label}
                  </label>
                  <Toggle
                    id="cc-marketing"
                    checked={marketing}
                    onChange={setMarketing}
                  />
                </div>
                <p className="cc-category__desc">{t.categories.marketing.description}</p>
              </div>
            </div>

            <div className="cc-panel__footer">
              <button type="button" className="cc-btn cc-btn--primary" onClick={handleSave}>
                {t.save}
              </button>
              <button type="button" className="cc-btn cc-btn--secondary" onClick={handleRejectAll}>
                {t.rejectAll}
              </button>
              <button type="button" className="cc-btn cc-btn--ghost" onClick={handleAcceptAll}>
                {t.acceptAll}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// Esporta helper per verificare il consenso da altri componenti
export function hasConsent(category: "analytics" | "marketing"): boolean {
  const saved = loadConsent();
  if (!saved) return false;
  return saved[category];
}
