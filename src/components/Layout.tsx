import { useEffect, type ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

function IubendaScripts() {
  useEffect(() => {
    const addScript = (id: string, src: string) => {
      if (document.getElementById(id)) return;

      const script = document.createElement("script");
      script.id = id;
      script.type = "text/javascript";
      script.src = src;
      script.async = true;

      document.head.appendChild(script);
    };

    addScript(
      "iubenda-privacy-controls",
      "https://embeds.iubenda.com/widgets/908871ca-5916-4d87-8428-bb93afdc3a46.js",
    );

    addScript("iubenda-policy-modal", "https://cdn.iubenda.com/iubenda.js");
  }, []);

  return null;
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <IubendaScripts />

      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
