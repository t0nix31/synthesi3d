import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sintesi 3D | Stampa 3D, scansione 3D e progettazione CAD" },
      {
        name: "description",
        content:
          "Sintesi 3D offre servizi di stampa 3D, scansione 3D, reverse engineering e progettazione CAD per aziende, professionisti e privati.",
      },
      { name: "author", content: "Sintesi 3D" },
      { property: "og:title", content: "Sintesi 3D" },
      {
        property: "og:description",
        content:
          "Stampa 3D, scansione 3D, reverse engineering e progettazione CAD professionale.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Sintesi 3D" },
      // Security headers via meta tag (pagine HTML)
      { httpEquiv: "X-Content-Type-Options", content: "nosniff" },
      { httpEquiv: "X-Frame-Options", content: "DENY" },
      { name: "referrer", content: "strict-origin-when-cross-origin" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "alternate", hrefLang: "it", href: "https://www.sintesi3d.it/" },
      { rel: "alternate", hrefLang: "en", href: "https://www.sintesi3d.it/en/" },
      { rel: "alternate", hrefLang: "x-default", href: "https://www.sintesi3d.it/" },
      // Font serviti localmente da /public/font/ — nessuna richiesta a Google (GDPR)
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.sintesi3d.it/#business",
    name: "Sintesi 3D",
    url: "https://www.sintesi3d.it/",
    email: "info@sintesi3d.it",
    telephone: "+39 375 590 5212",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via S. Croce 48",
      postalCode: "83020",
      addressLocality: "Sperone",
      addressRegion: "AV",
      addressCountry: "IT",
    },
    areaServed: { "@type": "Country", name: "Italia" },
    sameAs: [
      "https://www.instagram.com/sintesi3d",
      "https://www.tiktok.com/@www.sintesi3d.it",
    ],
  };

  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.lang = location.pathname.startsWith('/en') ? 'en' : 'it';",
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
}
