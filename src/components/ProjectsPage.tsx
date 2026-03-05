import React from "react";
import SiteCard from "./SiteCard";

type Site = {
  title: string;
  description: string;
  url: string;
  techs: string[];
};

const sites: Site[] = [
  {
    title: "BRUTO CORTE | Barbearia",
    description: "Landing page brutalista para barbearia com foco em servicos e reservas.",
    url: "/sites/barbeiro/index.html",
    techs: ["HTML", "CSS"],
  },
  {
    title: "NeonByte Informatica",
    description: "Site de informatica com secao de servicos, produtos e contato comercial.",
    url: "/sites/informatica/index.html",
    techs: ["HTML", "CSS"],
  },
  {
    title: "Noir Atelier | Loja Online",
    description: "E-commerce demonstrativo com catalogo, carrinho e checkout ficticio.",
    url: "/sites/loja_online_roupas/index.html",
    techs: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Mira Kinetic | Portfolio",
    description: "Portfolio criativo com filtros de projetos e animacoes interativas.",
    url: "/sites/portfolio_kinetic/index.html",
    techs: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Dra. Helena Costa | Psicologa",
    description: "Pagina institucional para atendimento psicologico com secoes de abordagem e FAQ.",
    url: "/sites/pscologa/index.html",
    techs: ["HTML", "CSS"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-neutral-800 px-6 py-16 text-white md:px-12 lg:px-20">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-neutral-600/40 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10">
        <header className="flex flex-col gap-4">
          <a
            href="/"
            className="w-fit rounded-full border border-neutral-700 bg-neutral-900/60 px-4 py-2 text-sm text-neutral-300 transition-colors duration-300 hover:border-neutral-500 hover:text-white"
          >
            Voltar para inicio
          </a>

          <div className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Sites Desenvolvidos</h1>
            <p className="max-w-3xl text-sm font-light leading-relaxed text-neutral-300 md:text-base">
              Selecao de sites de exemplo disponiveis neste portfolio. Clique em "Acessar" para
              abrir cada projeto em nova aba.
            </p>
          </div>
        </header>

        <section
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
          aria-label="Lista de sites"
        >
          {sites.map((site) => (
            <SiteCard
              key={site.title}
              title={site.title}
              description={site.description}
              url={site.url}
              techs={site.techs}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
