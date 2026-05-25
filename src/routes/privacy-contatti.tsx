import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/privacy-contatti")({
  head: () => ({
    meta: [
      { title: "Informativa modulo contatti — Sintesi 3D" },
      {
        name: "description",
        content:
          "Informativa sul trattamento dei dati inviati tramite il modulo contatti di Sintesi 3D, inclusi allegati tecnici e file caricati.",
      },
    ],
  }),

  component: PrivacyContattiPage,
});

function PrivacyContattiPage() {
  return (
    <Layout>
      <section className="border-b border-border/60 py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <span className="tech-label">// Privacy</span>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1] md:text-7xl">
            Informativa modulo contatti
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Questa informativa spiega come Sintesi 3D tratta i dati personali e gli
            allegati inviati tramite il modulo contatti del sito.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            La Privacy Policy e la Cookie Policy complete sono disponibili tramite
            iubenda. Questa pagina integra le informazioni relative al modulo contatti,
            agli allegati tecnici, a Cloudflare R2, a Cloudflare Workers e al servizio
            di invio email utilizzato per ricevere le richieste.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
        <div className="space-y-12 text-muted-foreground">
          <Block title="1. Titolare del trattamento">
            <p>
              Il titolare del trattamento è{" "}
              <strong className="text-foreground">
                Sintesi 3D di Michela Rozza
              </strong>
              , ditta individuale, nella persona della titolare{" "}
              <strong className="text-foreground">Rozza Michela</strong>, che opera
              tramite il sito e il marchio{" "}
              <strong className="text-foreground">Sintesi 3D</strong>.
            </p>

            <p className="mt-3">P.IVA: 03247910643</p>
            <p className="mt-3">Codice fiscale titolare: RZZMHL86H63I073S</p>

            <p className="mt-3">
              Sede legale / domicilio fiscale: Via S. Croce 48, 83020 Sperone (AV),
              Italia.
            </p>

            <p className="mt-3">
              Email di contatto privacy: {" "}
              <a
                href="mailto:info@sintesi3d.it"
                className="text-primary underline underline-offset-4"
              >
                info@sintesi3d.it
              </a>
            </p>
          </Block>

          <Block title="2. Dati raccolti tramite il modulo">
            <p>
              Quando l’utente compila il modulo contatti, il sito può raccogliere i
              seguenti dati: nome, indirizzo email, numero di telefono, azienda,
              servizio di interesse, messaggio inviato e contenuto della richiesta.
            </p>

            <p className="mt-3">
              L’utente può inoltre caricare volontariamente allegati tecnici o file di
              riferimento, ad esempio immagini, PDF, file STL, STEP, STP, OBJ, ZIP,
              RAR o altri documenti utili alla valutazione del progetto.
            </p>

            <p className="mt-3">
              L’utente è invitato a non inviare dati particolari, dati sensibili,
              documenti contenenti dati di terzi o informazioni non necessarie alla
              gestione della richiesta, salvo che tali informazioni siano strettamente
              indispensabili per valutare il progetto.
            </p>
          </Block>

          <Block title="3. Finalità del trattamento">
            <p>
              I dati sono trattati esclusivamente per rispondere alla richiesta
              dell’utente, valutare il progetto, fornire informazioni tecniche o
              commerciali, preparare eventuali preventivi e gestire comunicazioni
              precontrattuali o commerciali collegate alla richiesta.
            </p>

            <p className="mt-3">
              I dati tecnici e gli allegati caricati sono utilizzati solo per comprendere
              la richiesta, verificare la fattibilità del progetto, predisporre un
              riscontro o formulare una proposta commerciale.
            </p>
          </Block>

          <Block title="4. Base giuridica">
            <p>
              Il trattamento dei dati inviati tramite il modulo contatti si basa sulla
              richiesta dell’utente di essere ricontattato e sulla necessità di svolgere
              attività precontrattuali o informative prima dell’eventuale conclusione
              di un contratto.
            </p>

            <p className="mt-3">
              Per alcune attività tecniche e organizzative, come la gestione della
              sicurezza del sito, la prevenzione di abusi, la diagnostica tecnica e la
              conservazione ordinata delle richieste ricevute, il trattamento può
              basarsi anche sul legittimo interesse del titolare.
            </p>
          </Block>

          <Block title="5. Obbligatorietà dei dati">
            <p>
              Il conferimento dei dati indicati come obbligatori nel modulo è necessario
              per inviare la richiesta e ricevere una risposta. Il mancato conferimento
              di tali dati può impedire a Sintesi 3D di gestire correttamente la
              richiesta.
            </p>

            <p className="mt-3">
              L’invio degli allegati è facoltativo. Tuttavia, in alcuni casi, file
              tecnici o immagini possono essere utili per valutare correttamente il
              progetto e predisporre un riscontro più preciso.
            </p>
          </Block>

          <Block title="6. Gestione degli allegati tecnici">
            <p>
              Gli allegati caricati tramite il modulo vengono salvati temporaneamente
              in un bucket privato Cloudflare R2. Il bucket non è pubblico e i file non
              sono indicizzati né accessibili liberamente da Internet.
            </p>

            <p className="mt-3">
              Dopo l’invio del modulo, Sintesi 3D riceve una email contenente i dati
              della richiesta e, se presenti, link temporanei per scaricare gli allegati.
              I link sono generati dal backend del sito e sono destinati esclusivamente
              alla gestione della richiesta ricevuta.
            </p>

            <p className="mt-3">
              I link temporanei agli allegati hanno durata limitata e non rendono il
              bucket pubblico. L’accesso agli allegati è limitato alle finalità di
              gestione della richiesta inviata dall’utente.
            </p>
          </Block>

          <Block title="7. Conservazione dei dati e degli allegati">
            <p>
              Gli allegati caricati tramite il modulo contatti vengono conservati per
              un massimo di 30 giorni e poi eliminati dal bucket R2, salvo eventuali
              esigenze tecniche, difensive o contrattuali strettamente connesse alla
              richiesta dell’utente.
            </p>

            <p className="mt-3">
              Le richieste ricevute via email possono essere conservate per il tempo
              necessario alla gestione della comunicazione, alla preparazione del
              preventivo, all’eventuale rapporto commerciale e agli adempimenti
              amministrativi, fiscali o legali applicabili.
            </p>

            <p className="mt-3">
              Quando la richiesta non si trasforma in un rapporto commerciale, i dati
              vengono conservati solo per il periodo ragionevolmente necessario a
              documentare la comunicazione ricevuta, gestire eventuali richieste
              successive e tutelare i diritti del titolare.
            </p>
          </Block>

          <Block title="8. Servizi e fornitori utilizzati">
            <p>
              Per il funzionamento del sito e del modulo contatti vengono utilizzati
              servizi tecnici forniti da terzi, tra cui:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-foreground">Cloudflare Workers</strong>, per
                l’esecuzione del backend del sito e la gestione delle richieste inviate
                dal modulo.
              </li>

              <li>
                <strong className="text-foreground">Cloudflare R2</strong>, per
                l’archiviazione temporanea e privata degli allegati tecnici caricati
                dall’utente.
              </li>

              <li>
                <strong className="text-foreground">
                  Cloudflare Workers Observability/Logs
                </strong>
                , per finalità tecniche di sicurezza, diagnostica, monitoraggio del
                corretto funzionamento del sito, individuazione di errori e prevenzione
                di abusi.
              </li>

              <li>
                <strong className="text-foreground">Resend</strong>, per l’invio
                dell’email di notifica a Sintesi 3D contenente i dati della richiesta e
                i link temporanei agli allegati.
              </li>

              <li>
                <strong className="text-foreground">iubenda</strong>, per la gestione
                della Privacy Policy, Cookie Policy e dei controlli relativi ai cookie.
              </li>
            </ul>
          </Block>

          <Block title="9. Log tecnici, sicurezza e prevenzione abusi">
            <p>
              Per finalità di sicurezza, diagnostica e corretto funzionamento del sito,
              l’infrastruttura Cloudflare può generare log tecnici relativi alle
              richieste HTTP, come indirizzo IP, data e ora della richiesta, URL
              richiesto, user agent, esito della richiesta, errori applicativi e
              metadati tecnici collegati.
            </p>

            <p className="mt-3">
              Tali dati sono utilizzati esclusivamente per sicurezza, debug,
              manutenzione, prevenzione di abusi e continuità del servizio. Non sono
              utilizzati per finalità di profilazione o marketing.
            </p>
          </Block>

          <Block title="10. Destinatari dei dati">
            <p>
              I dati inviati tramite il modulo sono ricevuti e trattati da Sintesi 3D e
              dai soggetti autorizzati alla gestione delle richieste inviate a{" "}
              <a
                href="mailto:info@sintesi3d.it"
                className="text-primary underline underline-offset-4"
              >
                info@sintesi3d.it
              </a>
              .
            </p>

            <p className="mt-3">
              I dati possono inoltre essere trattati dai fornitori tecnici indicati
              sopra, nei limiti necessari alla fornitura dei rispettivi servizi e sulla
              base di accordi, condizioni contrattuali o strumenti giuridici applicabili
              al rapporto con tali fornitori.
            </p>
          </Block>

          <Block title="11. Trasferimenti extra UE">
            <p>
              Alcuni fornitori tecnici utilizzati per l’erogazione del sito e dei
              servizi collegati, in particolare Cloudflare e Resend, possono trattare
              dati anche al di fuori dello Spazio Economico Europeo, inclusi gli Stati
              Uniti, secondo le rispettive condizioni contrattuali e informative
              privacy.
            </p>

            <p className="mt-3">
              Quando necessario, tali trasferimenti avvengono sulla base di strumenti
              di garanzia previsti dalla normativa applicabile, come Data Processing
              Agreement, Standard Contractual Clauses o altri meccanismi di trasferimento
              riconosciuti dalla normativa privacy vigente.
            </p>

            <p className="mt-3">
              Per maggiori dettagli sui servizi generali del sito, consulta anche la
              Privacy Policy completa generata tramite iubenda.
            </p>
          </Block>

          <Block title="12. Misure di sicurezza">
            <p>
              Sintesi 3D adotta misure tecniche e organizzative proporzionate al tipo
              di trattamento effettuato. In particolare, gli allegati sono caricati in
              un bucket R2 privato, non pubblicamente accessibile, e sono resi
              disponibili tramite link temporanei.
            </p>

            <p className="mt-3">
              Il sito utilizza connessioni HTTPS e servizi infrastrutturali pensati per
              garantire disponibilità, sicurezza e protezione dalle richieste abusive.
            </p>

            <p className="mt-3">
              L’accesso agli strumenti tecnici e alle comunicazioni ricevute è limitato
              alle persone autorizzate e ai fornitori tecnici necessari alla gestione
              del sito e delle richieste.
            </p>
          </Block>

          <Block title="13. Diritti dell’interessato">
            <p>
              L’utente può richiedere, nei casi previsti dalla normativa applicabile,
              l’accesso ai propri dati, la rettifica, la cancellazione, la limitazione
              del trattamento, l’opposizione al trattamento e la portabilità dei dati.
            </p>

            <p className="mt-3">
              Le richieste possono essere inviate a{" "}
              <a
                href="mailto:info@sintesi3d.it"
                className="text-primary underline underline-offset-4"
              >
                info@sintesi3d.it
              </a>
              .
            </p>

            <p className="mt-3">
              L’utente ha inoltre il diritto di proporre reclamo all’autorità di
              controllo competente, in particolare al Garante per la protezione dei dati
              personali.
            </p>
          </Block>

          <Block title="14. Privacy Policy e Cookie Policy complete">
            <p>
              Questa pagina integra le informazioni relative al modulo contatti. Per la
              Privacy Policy e la Cookie Policy complete del sito, consulta:
            </p>

            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href="https://www.iubenda.com/privacy-policy/82947247"
                className="iubenda-white iubenda-noiframe iubenda-embed text-primary underline underline-offset-4"
                title="Privacy Policy"
              >
                Privacy Policy
              </a>

              <a
                href="https://www.iubenda.com/privacy-policy/82947247/cookie-policy"
                className="iubenda-white iubenda-noiframe iubenda-embed text-primary underline underline-offset-4"
                title="Cookie Policy"
              >
                Cookie Policy
              </a>
            </div>
          </Block>

          <Block title="15. Ultimo aggiornamento">
            <p>Questa informativa è stata aggiornata il 25 maggio 2026.</p>
          </Block>

          <div className="border-t border-border/60 pt-10">
            <Link
              to="/contatti"
              className="font-mono text-xs uppercase tracking-[0.25em] text-primary transition-smooth hover:text-foreground"
            >
              ← Torna al modulo contatti
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
