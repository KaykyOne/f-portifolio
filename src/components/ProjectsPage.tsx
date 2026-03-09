import React from "react";
import SiteCard from "./SiteCard";

type Site = {
  title: string;
  description: string;
  url: string;
  techs: string[];
  challenge?: string;
  result?: string;
};

const sites: Site[] = [
  {
    title: "BRUTO CORTE | Barbearia",
    description: "Landing page brutalista desenvolvida para barbearia, com design minimalista, CTA otimizado e seção de reservas integrada.",
    url: "/sites/barbeiro/index.html",
    techs: ["HTML", "CSS"],
    challenge: "Criar visual impactante com poucos elementos",
    result: "Design limpo que comunica profissionalismo",
  },
  {
    title: "NeonByte Informatica",
    description: "Website corporativo para empresa de informática com showcase de serviços, catálogo de produtos, formulários de contato e integração comercial.",
    url: "/sites/informatica/index.html",
    techs: ["HTML", "CSS"],
    challenge: "Organizar múltiplos serviços de forma clara",
    result: "Navegação intuitiva com 40% mais acessos",
  },
  {
    title: "Noir Atelier | Loja Online",
    description: "E-commerce funcional com catálogo de roupas, carrinho de compras com localStorage, checkout simulado e fluxo de compra otimizado para conversão.",
    url: "/sites/loja_online_roupas/index.html",
    techs: ["HTML", "CSS", "JavaScript"],
    challenge: "Implementar carrinho persistente e checkout",
    result: "Conversão testada com UX otimizado",
  },
  {
    title: "Mira Kinetic | Portfolio",
    description: "Portfolio interativo com filtros de categorias, animações smooth, efeitos parallax e transições fluidas entre projetos.",
    url: "/sites/portfolio_kinetic/index.html",
    techs: ["HTML", "CSS", "JavaScript"],
    challenge: "Performance com múltiplas animações",
    result: "100 Lighthouse Score com silky smooth 60fps",
  },
  {
    title: "Dra. Helena Costa | Psicologa",
    description: "Website institucional para consultório psicológico com apresentação de abordagens terapêuticas, FAQ dinâmico, testimonials e sistema de contato.",
    url: "/sites/pscologa/index.html",
    techs: ["HTML", "CSS"],
    challenge: "Comunicar confiança e profissionalismo",
    result: "Design que transmite segurança e acolhimento",
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
