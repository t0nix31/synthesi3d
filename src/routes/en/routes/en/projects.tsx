import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import aerospaceImg from "@/assets/project-aerospace-bracket.jpg";
import motorsportImg from "@/assets/project-motorsport-intake.jpg";
import railwayImg from "@/assets/project-railway-gear.jpg";
import medicalImg from "@/assets/project-medical-guide.jpg";
import industrialImg from "@/assets/project-industrial-gripper.jpg";
import heritageImg from "@/assets/project-heritage-scan.jpg";
import batmanImg from "@/assets/project-batman-mask.jpg";
import ductsImg from "@/assets/project-air-ducts-cfd.jpg";
import coinImg from "@/assets/project-coin-mech.jpg";
import carbScanImg from "@/assets/project-carb-scan.jpg";
import trumpetsImg from "@/assets/project-intake-trumpets.jpg";
import carGrilleImg from "@/assets/project-car-grille.jpg";

export const Route = createFileRoute("/en/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Selected work | Sintesi 3D" },
      {
        name: "description",
        content:
          "A selection of completed projects with details about materials and production technologies.",
      },
      { property: "og:title", content: "Projects — Sintesi 3D" },
      {
        property: "og:description",
        content:
          "Completed work in 3D printing, 3D scanning, reverse engineering and CAD design.",
      },
      { property: "og:image", content: aerospaceImg },
      { httpEquiv: "content-language", content: "en" },
    ],
    links: [
      { rel: "canonical", href: "https://www.sintesi3d.it/en/projects" },
      { rel: "alternate", hrefLang: "it", href: "https://www.sintesi3d.it/progetti" },
      { rel: "alternate", hrefLang: "en", href: "https://www.sintesi3d.it/en/projects" },
    ],
  }),
  component: ProjectsPageEn,
});

type Project = {
  code: string;
  title: string;
  tech: string;
  material: string;
  description: string;
  img: string;
};

const projects: Project[] = [
  {
    code: "P-01",
    title: "Automotive bracket — reverse engineering",
    tech: "FDM",
    material: "PA612-CF",
    description:
      "Reverse engineering of an automotive component: dimensional survey of the original part, CAD reconstruction and production in carbon-fiber-filled PA612 for stiffness, dimensional stability and chemical resistance under the hood.",
    img: aerospaceImg,
  },
  {
    code: "P-02",
    title: "Aerospace bracket in Ultem",
    tech: "FDM",
    material: "ULTEM",
    description:
      "Structural bracket produced in Ultem (PEI) for aerospace applications using FDM technology: high mechanical and thermal resistance, excellent dimensional stability and significant weight reduction compared with metal alternatives.",
    img: motorsportImg,
  },
  {
    code: "P-03",
    title: "Dashboard protection cover — Motorsport",
    tech: "FDM",
    material: "ASA",
    description:
      "Protective dashboard cover developed for motorsport racing, printed in ASA with FDM: UV and weather resistance, vibration resistance, technical finish and tolerances suitable for direct installation in the vehicle.",
    img: railwayImg,
  },
  {
    code: "P-04",
    title: "3D scan of motorcycle component — Motorsport",
    tech: "Structured-light 3D scanning",
    material: "—",
    description:
      "3D scanning of a motorcycle component for motorsport: high-resolution acquisition, mesh generation and parametric CAD reconstruction for aftermarket parts that fit precisely with the original geometry.",
    img: medicalImg,
  },
  {
    code: "P-05",
    title: "Reverse engineering of automotive component",
    tech: "SLA",
    material: "Technical resin",
    description:
      "Reverse engineering of an automotive component no longer available on the market. Original part survey, CAD reconstruction and customer-requested improvements while preserving the mounting interfaces.",
    img: industrialImg,
  },
  {
    code: "P-06",
    title: "3D miniature of the city of Naples",
    tech: "FDM",
    material: "PLA",
    description:
      "Architectural 3D miniature of Naples generated from mapping data, with faithful reproduction of buildings and coastline. The scaled model was mounted in an exhibition frame with a contrasting blue base.",
    img: heritageImg,
  },
  {
    code: "P-07",
    title: "Batman mask — collectible decor piece",
    tech: "FDM + post-processing and painting",
    material: "PLA",
    description:
      "Batman mask designed as a collectible decor element: FDM printed and finished through sanding, filling, primer and matte black painting to obtain a clean, uniform sculptural surface.",
    img: batmanImg,
  },
  {
    code: "P-08",
    title: "Air ducts — CAD design and CFD simulation",
    tech: "CAD + CFD + SLA",
    material: "Technical resin",
    description:
      "3D design of air ducts with flow optimization through CFD simulation: pressure and velocity analysis, internal geometry iteration and final SLA prototype production for bench validation.",
    img: ductsImg,
  },
  {
    code: "P-09",
    title: "Table football coin mechanism — CAD + Lost-PLA casting",
    tech: "CAD + FDM (Lost-PLA casting)",
    material: "PLA sacrificial pattern",
    description:
      "CAD design of a table football coin mechanism and FDM printing of a PLA sacrificial model for the Lost-PLA casting process, where the printed pattern leaves the cavity for the final metal casting.",
    img: coinImg,
  },
  {
    code: "P-10",
    title: "3D scan of motorcycle throttle body — CFD",
    tech: "Structured-light 3D scanning",
    material: "—",
    description:
      "Structured-light 3D scanning of a motorsport motorcycle component. The resulting mesh was used as the basis for fluid-dynamic development and CFD optimization of internal duct profiles.",
    img: carbScanImg,
  },
  {
    code: "P-11",
    title: "Honda CBR600RR intake trumpets — WSS",
    tech: "CFD + FDM",
    material: "Technical polymer",
    description:
      "Fluid-dynamic study, design and FDM production of intake trumpets for a Honda CBR600RR used in World Supersport: CFD-optimized internal profiles for torque and cylinder filling.",
    img: trumpetsImg,
  },
  {
    code: "P-12",
    title: "Custom car grille — 3D scan + FDM",
    tech: "3D scanning + FDM",
    material: "Technical polymer",
    description:
      "Automotive project involving 3D scanning of the vehicle mounting area, CAD reconstruction according to customer design requirements and final FDM production with a honeycomb pattern ready for direct installation.",
    img: carGrilleImg,
  },
];

function ProjectsPageEn() {
  return (
    <Layout>
      <section className="relative border-b border-border/60 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="tech-label">// Selected Work</span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1] tracking-tight md:text-7xl lg:text-8xl">
            Completed <span className="text-primary">projects</span>.
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-muted-foreground">
            A selection of workshop projects with details about the materials and
            manufacturing technologies used.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
          {projects.map((p) => (
            <article
              key={p.code}
              className="group mb-8 inline-block w-full break-inside-avoid border border-border/60 bg-surface/30 transition-smooth hover:border-primary/60"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-auto w-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 border border-primary/40 bg-background/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-primary backdrop-blur">
                  REF · {p.code}
                </div>
              </div>

              <div className="flex flex-col p-6">
                <h2 className="font-display text-xl font-semibold leading-tight">{p.title}</h2>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border/60 pt-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Material
                    </div>
                    <div className="mt-1 text-xs">{p.material}</div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Technology
                    </div>
                    <div className="mt-1 font-mono text-xs text-primary">{p.tech}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10">
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight md:text-5xl">
            Have a similar project
            <span className="text-primary"> in mind</span>?
          </h2>
          <Link
            to="/en/contact"
            className="mt-10 inline-flex items-center gap-3 bg-primary px-8 py-4 font-mono text-sm uppercase tracking-[0.2em] text-primary-foreground transition-smooth hover:shadow-glow-strong"
          >
            Let&apos;s talk <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
