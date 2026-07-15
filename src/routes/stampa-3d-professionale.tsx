import { createFileRoute } from "@tanstack/react-router";
import { ServiceLanding } from "@/components/ServiceLanding";
import image from "@/assets/service-print.jpg";

const url = "https://www.sintesi3d.it/stampa-3d-professionale";
const description = "Servizio di stampa 3D professionale per prototipi funzionali, componenti tecnici e piccole serie in polimeri e metalli. Preventivo tecnico entro 24 ore.";

export const Route = createFileRoute("/stampa-3d-professionale")({
  head: () => ({
    meta: [
      { title: "Stampa 3D professionale e prototipazione rapida | Sintesi 3D" },
      { name: "description", content: description },
      { property: "og:title", content: "Stampa 3D professionale | Sintesi 3D" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: Page,
});

function Page() {
  return <ServiceLanding
    eyebrow="Stampa 3D professionale"
    title="Dal file al pezzo:"
    accent="prototipi e componenti tecnici."
    intro="Produciamo prototipi funzionali, ricambi, attrezzature e piccole serie scegliendo tecnologia, materiale e finitura in base ai requisiti reali del componente. Serviamo aziende, professionisti e privati in Campania e in tutta Italia."
    image={image}
    imageAlt="Servizio professionale di stampa 3D per componenti tecnici"
    benefits={["Analisi gratuita di fattibilità e orientamento del pezzo", "FDM, SLA, SLS, MJF e stampa 3D in metallo", "Polimeri standard, tecnici e ad alte prestazioni", "Post-processing, inserti filettati e finiture su richiesta"]}
    applications={[
      { title: "Prototipazione rapida", description: "Verifica forma, assemblaggio ed ergonomia prima di investire in stampi o lavorazioni definitive." },
      { title: "Componenti funzionali", description: "Parti resistenti per uso reale, attrezzature, dime, supporti e ricambi fuori produzione." },
      { title: "Piccole serie", description: "Produzione flessibile senza stampo per lotti contenuti, varianti e personalizzazioni." },
    ]}
    process={[
      { title: "Analisi", description: "Riceviamo STEP, STL, OBJ o il componente fisico e definiamo requisiti, quantità e ambiente d’uso." },
      { title: "Proposta tecnica", description: "Selezioniamo tecnologia, materiale, orientamento, tolleranze, finitura, tempi e costo." },
      { title: "Produzione e controllo", description: "Produciamo il componente, eseguiamo i controlli concordati e spediamo in tutta Italia." },
    ]}
    faq={[
      { question: "Quanto costa stampare un pezzo in 3D?", answer: "Il costo dipende da dimensioni, materiale, tecnologia, precisione, finitura e quantità. Inviando il file possiamo formulare un preventivo tecnico ed economico, normalmente entro 24 ore." },
      { question: "Quali file posso inviare?", answer: "Per la produzione sono preferibili STEP, STL e 3MF. Possiamo valutare anche OBJ, disegni 2D, schizzi o un componente fisico da digitalizzare." },
      { question: "Realizzate anche un solo pezzo?", answer: "Sì. Gestiamo il singolo prototipo, il ricambio personalizzato e piccole serie, scegliendo il processo più conveniente per quantità e prestazioni richieste." },
      { question: "Spedite fuori dalla Campania?", answer: "Sì. Seguiamo progetti in tutta Italia e organizziamo la spedizione dei componenti finiti; per le scansioni possiamo valutare anche interventi presso il cliente." },
    ]}
    schema={{ "@context": "https://schema.org", "@type": "Service", name: "Servizio di stampa 3D professionale", serviceType: "Stampa 3D professionale e prototipazione rapida", provider: { "@type": "LocalBusiness", name: "Sintesi 3D", url: "https://www.sintesi3d.it", telephone: "+39 375 590 5212" }, areaServed: { "@type": "Country", name: "Italia" }, url, description }}
  />;
}
