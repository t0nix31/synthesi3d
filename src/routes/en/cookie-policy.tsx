import { createFileRoute, Link } from "@tanstack/react-router";

import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/en/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Notice — Sintesi 3D" },
      {
        name: "description",
        content:
          "English cookie notice for Sintesi 3D website and iubenda cookie controls.",
      },
    ],
  }),

  component: CookieNoticeEn,
});

function CookieNoticeEn() {
  return (
    <Layout>
      <section className="border-b border-border/60 py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <span className="tech-label">// English notice</span>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1] md:text-7xl">
            Cookie Notice
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            This English cookie notice explains how Sintesi 3D uses cookies and
            similar technologies on this website.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            The official iubenda-generated Cookie Policy is available in Italian.
            This English version is provided for transparency and convenience.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
        <div className="space-y-12 text-muted-foreground">
          <Block title="1. What cookies are">
            <p>
              Cookies are small text files stored on the user&apos;s device when
              visiting a website. They may be used to make the website work,
              remember preferences or collect technical information about website
              usage.
            </p>
          </Block>

          <Block title="2. Technical cookies">
            <p>
              This website may use technical cookies and similar technologies that
              are necessary for the correct operation of the website, security,
              routing, performance and form functionality.
            </p>
          </Block>

          <Block title="3. Cookie banner and consent management">
            <p>
              This website uses a built-in cookie consent banner to collect and manage user
              preferences before any non-essential cookies are set.
            </p>

            <p className="mt-3">
              Users can accept all cookies, reject non-essential cookies, or manage their
              preferences by category at any time via the &quot;Cookie preferences&quot; link in
              the footer.
            </p>
          </Block>

          <Block title="4. Third-party services">
            <p>
              The website uses Cloudflare infrastructure for website delivery,
              security and performance. The contact form also uses Cloudflare
              Workers, Cloudflare R2 and Resend to process requests and send email
              notifications.
            </p>
          </Block>

          <Block title="5. Official Italian cookie policy">
            <p>
              The official Cookie Policy generated through iubenda is available here:
            </p>

            <p className="mt-3">
              <a
                href="https://www.iubenda.com/privacy-policy/82947247/cookie-policy"
                className="text-primary underline underline-offset-4"
                title="Cookie Policy"
              >
                Italian Cookie Policy
              </a>
            </p>
          </Block>

          <Block title="6. Contact">
            <p>
              For any privacy or cookie-related request, users can contact Sintesi 3D
              at{" "}
              <a
                href="mailto:info@sintesi3d.it"
                className="text-primary underline underline-offset-4"
              >
                info@sintesi3d.it
              </a>
              .
            </p>
          </Block>

          <div className="border-t border-border/60 pt-10">
            <Link
              to="/en/"
              className="font-mono text-xs uppercase tracking-[0.25em] text-primary transition-smooth hover:text-foreground"
            >
              ← Back to English website
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold text-foreground">{title}</h2>

      <div className="mt-4 text-base leading-relaxed">{children}</div>
    </section>
  );
}
