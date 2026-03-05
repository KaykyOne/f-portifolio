import React from "react";

type SiteCardProps = {
  title: string;
  description: string;
  url: string;
  techs: string[];
};

export default function SiteCard({ title, description, url, techs }: SiteCardProps) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-2xl border border-neutral-700 bg-neutral-900/70 p-5 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-500 hover:bg-neutral-900">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-lg font-semibold leading-tight text-neutral-100">{title}</h2>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-full border border-neutral-600 px-3 py-1 text-xs font-medium uppercase tracking-wide text-neutral-200 transition-colors duration-300 hover:border-neutral-400 hover:bg-neutral-800 hover:text-white"
        >
          Acessar
        </a>
      </div>

      <p className="mt-4 text-sm font-light leading-relaxed text-neutral-300">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
        {techs.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-neutral-700 bg-neutral-800/90 px-2.5 py-1 text-[11px] uppercase tracking-wide text-neutral-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
