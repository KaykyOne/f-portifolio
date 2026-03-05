import React, { useState, useEffect } from 'react';
import RepositoryCard from './RepositoryCard';

interface Repository {
    name: string;
    html_url: string;
    description: string | null;
    stargazers_count: number;
    created_at: string;
}

export default function ProjectsPage() {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                // Altere 'your-username' para seu username do GitHub
                const response = await fetch('https://api.github.com/users/kaykyOne/repos?sort=stars&order=desc');
                if (!response.ok) {
                    throw new Error('Falha ao carregar repositórios');
                }
                const data = await response.json();
                setRepositories(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Erro desconhecido');
            } finally {
                setLoading(false);
            }
        };

        fetchRepositories();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-neutral-800 text-white px-4 py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-2">Meus Projetos</h1>
                    <p className="text-neutral-400 mt-4">Carregando projetos...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-neutral-800 text-white px-4 py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-2">Meus Projetos</h1>
                    <p className="text-red-400 mt-4">Erro: {error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-800 text-white px-4 py-12">
            <div className="max-w-3xl mx-auto">
                <div className="mb-12">
                    <div className='w-full justify-start flex mb-5'>
                        <a  href='../'
                            className='flex gap-2 justify-center items-center text-neutral-400'>
                            <span
                                className="material-symbols-outlined text-neutral-400"
                            >
                                arrow_back_ios
                            </span>
                            <p>Voltar</p>
                        </a>
                    </div>

                    <h1 className="text-4xl font-bold mb-3">Meus Projetos</h1>
                    <p className="text-neutral-400">
                        Todos os meus projetos no GitHub, organizados por relevância
                    </p>
                </div>

                <div className="space-y-3">
                    {repositories.map((repo) => (
                        <RepositoryCard key={repo.name} repo={repo} />
                    ))}
                </div>

                {repositories.length === 0 && (
                    <p className="text-center text-neutral-500 py-12">Nenhum projeto encontrado</p>
                )}
            </div>
        </div>
    );
}
