import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/en/contact-privacy")({
  head: () => ({
    meta: [
      { title: "Contact form privacy notice — Sintesi 3D" },
      {
        name: "description",
        content:
          "Privacy notice for personal data and technical attachments submitted through the Sintesi 3D contact form.",
      },
      { httpEquiv: "content-language", content: "en" },
    ],
    links: [
      { rel: "canonical", href: "https://www.sintesi3d.it/en/contact-privacy" },
      { rel: "alternate", hrefLang: "it", href: "https://www.sintesi3d.it/privacy-contatti" },
      { rel: "alternate", hrefLang: "en", href: "https://www.sintesi3d.it/en/contact-privacy" },
    ],
  }),

  component: ContactPrivacyPageEn,
});

function ContactPrivacyPageEn() {
  return (
    <Layout>
      <section className="border-b border-border/60 py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <span className="tech-label">// Privacy</span>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1] md:text-7xl">
            Contact form privacy notice
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            This notice explains how Sintesi 3D processes personal data and attachments
            submitted through the contact form on this website.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            The full Privacy Policy and Cookie Policy are available through iubenda.
            This page complements those policies with information about the contact
            form, technical attachments, Cloudflare R2, Cloudflare Workers and the
            email delivery service used to receive requests.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
        <div className="space-y-12 text-muted-foreground">
          <Block title="1. Data controller">
            <p>
              The data controller is {" "}
              <strong className="text-foreground">Sintesi 3D di Michela Rozza</strong>,
              sole proprietorship, represented by its owner {" "}
              <strong className="text-foreground">Rozza Michela</strong>, operating
              through the website and brand <strong className="text-foreground">Sintesi 3D</strong>.
            </p>

            <p className="mt-3">VAT number: 03247910643</p>
            <p className="mt-3">Owner tax code: RZZMHL86H63I073S</p>

            <p className="mt-3">
              Registered office / tax domicile: Via S. Croce 48, 83020 Sperone (AV), Italy.
            </p>

            <p className="mt-3">
              Privacy contact email: {" "}
              <a
                href="mailto:info@sintesi3d.it"
                className="text-primary underline underline-offset-4"
              >
                info@sintesi3d.it
              </a>
            </p>
          </Block>

          <Block title="2. Data collected through the form">
            <p>
              When users complete the contact form, the website may collect the following
              data: name, email address, telephone number, company, service of interest,
              message and content of the request.
            </p>

            <p className="mt-3">
              Users may also voluntarily upload technical attachments or reference files,
              such as images, PDFs, STL, STEP, STP, OBJ, ZIP, RAR files or other documents
              useful for evaluating the project.
            </p>

            <p className="mt-3">
              Users are invited not to send special categories of data, sensitive data,
              documents containing third-party data or information that is not necessary
              to manage the request, unless strictly required for project evaluation.
            </p>
          </Block>

          <Block title="3. Purposes of processing">
            <p>
              Data is processed exclusively to reply to the user’s request, evaluate the
              project, provide technical or commercial information, prepare quotes and
              manage pre-contractual or commercial communications connected with the request.
            </p>

            <p className="mt-3">
              Technical data and uploaded attachments are used only to understand the
              request, verify project feasibility, prepare a reply or formulate a commercial proposal.
            </p>
          </Block>

          <Block title="4. Legal basis">
            <p>
              Processing of data submitted through the contact form is based on the user’s
              request to be contacted and on the need to carry out pre-contractual or
              informational activities before the possible conclusion of a contract.
            </p>

            <p className="mt-3">
              For certain technical and organizational activities, such as website security,
              abuse prevention, technical diagnostics and orderly storage of received requests,
              processing may also be based on the controller’s legitimate interest.
            </p>
          </Block>

          <Block title="5. Mandatory data">
            <p>
              Providing the data marked as mandatory in the form is necessary to submit the
              request and receive a reply. Failure to provide such data may prevent Sintesi 3D
              from properly managing the request.
            </p>

            <p className="mt-3">
              Attachments are optional. However, in some cases, technical files or images may
              help evaluate the project correctly and prepare a more accurate reply.
            </p>
          </Block>

          <Block title="6. Management of technical attachments">
            <p>
              Attachments uploaded through the form are temporarily stored in a private
              Cloudflare R2 bucket. The bucket is not public, and files are not indexed or
              freely accessible from the Internet.
            </p>

            <p className="mt-3">
              After the form is submitted, Sintesi 3D receives an email containing the request
              data and, where present, temporary links to download the attachments. These links
              are generated by the website backend and are intended exclusively to manage the
              received request.
            </p>

            <p className="mt-3">
              Temporary attachment links are time-limited and do not make the bucket public.
              Access to attachments is limited to the purposes of managing the request submitted by the user.
            </p>
          </Block>

          <Block title="7. Retention of data and attachments">
            <p>
              Attachments uploaded through the contact form are kept for a maximum of 30 days
              and then deleted from the R2 bucket, except for strictly connected technical,
              defensive or contractual needs related to the user’s request.
            </p>

            <p className="mt-3">
              Requests received by email may be kept for the time necessary to manage the
              communication, prepare a quote, manage any commercial relationship and comply
              with applicable administrative, tax or legal obligations.
            </p>

            <p className="mt-3">
              Where a request does not become a commercial relationship, data is kept only
              for the period reasonably necessary to document the communication received,
              manage any subsequent requests and protect the controller’s rights.
            </p>
          </Block>

          <Block title="8. Services and providers used">
            <p>
              The website and contact form use technical services provided by third parties, including:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-foreground">Cloudflare Workers</strong>, to run the
                website backend and manage requests submitted through the form.
              </li>

              <li>
                <strong className="text-foreground">Cloudflare R2</strong>, for temporary and
                private storage of technical attachments uploaded by the user.
              </li>

              <li>
                <strong className="text-foreground">Cloudflare Workers Observability/Logs</strong>,
                for technical security, diagnostics, website monitoring, error detection and abuse prevention.
              </li>

              <li>
                <strong className="text-foreground">Resend</strong>, to send the notification
                email to Sintesi 3D containing request data and temporary links to attachments.
              </li>

              <li>
                <strong className="text-foreground">iubenda</strong>, for the Privacy Policy,
                Cookie Policy and cookie preference controls.
              </li>
            </ul>
          </Block>

          <Block title="9. Technical logs, security and abuse prevention">
            <p>
              For security, diagnostics and correct website operation, Cloudflare infrastructure
              may generate technical logs related to HTTP requests, such as IP address, request
              date and time, requested URL, user agent, request outcome, application errors and
              related technical metadata.
            </p>

            <p className="mt-3">
              Such data is used exclusively for security, debugging, maintenance, abuse prevention
              and service continuity. It is not used for profiling or marketing purposes.
            </p>
          </Block>

          <Block title="10. Recipients of data">
            <p>
              Data submitted through the form is received and processed by Sintesi 3D and by
              authorized persons managing requests sent to {" "}
              <a
                href="mailto:info@sintesi3d.it"
                className="text-primary underline underline-offset-4"
              >
                info@sintesi3d.it
              </a>
              .
            </p>

            <p className="mt-3">
              Data may also be processed by the technical providers listed above, within the
              limits necessary to provide their respective services and based on applicable
              agreements, contractual terms or legal instruments.
            </p>
          </Block>

          <Block title="11. Transfers outside the EEA">
            <p>
              To provide the website, manage the contact form, send emails and temporarily store
              attachments, Sintesi 3D uses technical providers that may process personal data
              outside the European Economic Area, including in the United States.
            </p>

            <p className="mt-3">
              In particular, <strong className="text-foreground">Cloudflare</strong> may process
              technical data, logs, request data and technical attachments through Workers, R2,
              security, network and monitoring services. <strong className="text-foreground">Resend</strong>
              may process the data necessary to send emails generated by the contact form,
              including name, email address, request content, technical metadata and temporary links to attachments.
            </p>

            <p className="mt-3">
              Transfers to countries outside the EEA take place, where necessary, on the basis
              of safeguards provided by applicable law, including Data Processing Agreements,
              Standard Contractual Clauses approved by the European Commission, any applicable
              adequacy decisions and/or additional contractual and technical measures adopted by the providers.
            </p>
          </Block>

          <Block title="12. Security measures">
            <p>
              Sintesi 3D adopts technical and organizational measures proportionate to the type
              of processing carried out. Attachments are uploaded to a private R2 bucket that is
              not publicly accessible and are made available through temporary links.
            </p>

            <p className="mt-3">
              The website uses HTTPS connections and infrastructure services designed to support
              availability, security and protection from abusive requests.
            </p>

            <p className="mt-3">
              Access to technical tools and received communications is limited to authorized
              persons and technical providers necessary for website and request management.
            </p>
          </Block>

          <Block title="13. Data subject rights">
            <p>
              Users may request, where provided by applicable law, access to their data,
              rectification, erasure, restriction of processing, objection to processing and
              data portability.
            </p>

            <p className="mt-3">
              Requests can be sent to {" "}
              <a
                href="mailto:info@sintesi3d.it"
                className="text-primary underline underline-offset-4"
              >
                info@sintesi3d.it
              </a>
              .
            </p>

            <p className="mt-3">
              Users also have the right to lodge a complaint with the competent supervisory
              authority, in particular the Italian Data Protection Authority.
            </p>
          </Block>

          <Block title="14. Full Privacy Policy and Cookie Policy">
            <p>
              This page complements the information relating to the contact form. For the full
              website Privacy Policy and Cookie Policy, please see:
            </p>

            <div className="mt-4 flex flex-wrap gap-4">
              <Link
                to="/en/privacy"
                className="text-primary underline underline-offset-4"
              >
                Privacy Notice
              </Link>

              <Link
                to="/en/cookie-policy"
                className="text-primary underline underline-offset-4"
              >
                Cookie Notice
              </Link>
            </div>
          </Block>

          <Block title="15. Last update">
            <p>This notice was last updated on 25 May 2026.</p>
          </Block>

          <div className="border-t border-border/60 pt-10">
            <Link
              to="/en/contact"
              className="font-mono text-xs uppercase tracking-[0.25em] text-primary transition-smooth hover:text-foreground"
            >
              ← Back to contact form
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold text-foreground">{title}</h2>

      <div className="mt-4 text-base leading-relaxed">{children}</div>
    </section>
  );
}
