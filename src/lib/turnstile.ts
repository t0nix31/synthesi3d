import { useEffect, useRef, useState, useCallback } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: Record<string, string | ((token: string) => void)>
      ) => string;
      reset: (id: string) => void;
      remove: (id: string) => void;
      getResponse: (id?: string) => string;
    };
  }
}

const SITE_KEY = "0x4AAAAAAFkltoPkh6R-Bd5b";

export interface TurnstileState {
  containerRef: React.RefObject<HTMLDivElement | null>;
  token: string;
  expired: boolean;
  loading: boolean;
  refresh: () => void;
}

export function useTurnstile(): TurnstileState {
  const [token, setToken] = useState("");
  const [expired, setExpired] = useState(false);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string>("");

  useEffect(() => {
    let mounted = true;

    const loadScript = () =>
      new Promise<void>((resolve) => {
        if (window.turnstile) {
          resolve();
          return;
        }
        const s = document.createElement("script");
        s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
        s.async = true;
        s.defer = true;
        s.onload = () => resolve();
        s.onerror = () => resolve();
        document.head.appendChild(s);
      });

    loadScript().then(() => {
      if (!mounted || !containerRef.current || !window.turnstile) {
        if (mounted) setLoading(false);
        return;
      }
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: SITE_KEY,
        callback: (t: string) => {
          setToken(t);
          setExpired(false);
          setLoading(false);
        },
        "expired-callback": () => {
          setToken("");
          setExpired(true);
          setLoading(false);
        },
        "error-callback": () => {
          setToken("");
          setExpired(true);
          setLoading(false);
        },
      });
    });

    return () => {
      mounted = false;
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, []);

  const refresh = useCallback(() => {
    setToken("");
    setExpired(false);
    setLoading(true);
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
    }
  }, []);

  return { containerRef, token, expired, loading, refresh };
}
