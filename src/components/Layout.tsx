import type { ReactNode } from "react";

import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Banner cookie GDPR — nessuna dipendenza esterna */}
      <CookieBanner />

      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
