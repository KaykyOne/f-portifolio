import React, { useEffect, useState } from 'react';

interface ProjectDetailsData {
  name: string;
  description: string;
  full_name: string;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  owner: {
    avatar_url: string;
    login: string;
    html_url: string;
  };
}

interface ProjectDetailProps {
  projectName: string;
  ownerName?: string;
}

export default function ProjectDetail({ projectName, ownerName = 'your-username' }: ProjectDetailProps) {
  const [project, setProject] = useState<ProjectDetailsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${ownerName}/${projectName}`
        );
        if (!response.ok) {
          throw new Error('Projeto não encontrado');
        }
        const data = await response.json();
        setProject(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [projectName, ownerName]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 text-white px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-400">Carregando detalhes do projeto...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-slate-900 text-white px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <a href="/projetos" className="text-sm text-blue-400 hover:text-blue-300 mb-6 inline-block">
            ← Voltar para projetos
          </a>
          <h1 className="text-3xl font-bold mb-2">{projectName}</h1>
          <p className="text-red-400">Erro: {error || 'Projeto não encontrado'}</p>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <a href="/projetos" className="text-sm text-blue-400 hover:text-blue-300 mb-8 inline-block">
          ← Voltar para projetos
        </a>

        <div className="flex items-start justify-between gap-6 mb-8 pb-8 border-b border-slate-700">
          <div className="flex gap-4 flex-1">
            <img 
              src={project.owner.avatar_url} 
              alt={project.owner.login}
              className="w-16 h-16 rounded-full border-2 border-slate-700"
            />
            <div>
              <h1 className="text-3xl font-bold mb-1">{project.name}</h1>
              <a 
                href={project.owner.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                {project.owner.login}
              </a>
            </div>
          </div>
          <a 
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
          >
            Ver no GitHub ↗
          </a>
        </div>

        {project.description && (
          <p className="text-slate-300 text-lg leading-relaxed mb-8">{project.description}</p>
        )}

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Estrelas</p>
            <p className="text-2xl font-bold text-blue-400">{project.stargazers_count}</p>
          </div>
          <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Forks</p>
            <p className="text-2xl font-bold text-blue-400">{project.forks_count}</p>
          </div>
          <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Watchers</p>
            <p className="text-2xl font-bold text-blue-400">{project.watchers_count}</p>
          </div>
        </div>

        {project.language && (
          <div className="mb-8 p-4 rounded-lg bg-slate-800/30 border-l-4 border-blue-500">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-2">Linguagem</p>
            <p className="text-sm font-medium text-slate-200">{project.language}</p>
          </div>
        )}

        {project.topics && project.topics.length > 0 && (
          <div className="mb-8">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-3">Tópicos</p>
            <div className="flex flex-wrap gap-2">
              {project.topics.map((topic) => (
                <span key={topic} className="px-3 py-1 text-xs rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:border-blue-500 transition-colors">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.homepage && (
          <div className="mb-8">
            <a 
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
            >
              Visitar site do projeto →
            </a>
          </div>
        )}

        <div className="text-xs text-slate-500 space-y-1 pt-8 border-t border-slate-700">
          <p>Criado em: {formatDate(project.created_at)}</p>
          <p>Atualizado em: {formatDate(project.updated_at)}</p>
        </div>
      </div>
    </div>
  );
}
