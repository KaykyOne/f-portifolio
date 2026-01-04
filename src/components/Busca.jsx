import React, { useState, useEffect } from 'react';

const componentes = [
  {
    nome: 'Projeto Integrador 1',
    tipo: 'matéria',
    origem: '4º Ano',
    sobre:
      'Disciplina prática focada na integração dos conhecimentos adquiridos ao longo do curso por meio de um projeto.',
    rota: 'pi',
  },
  {
    nome: 'Banco de Dados',
    tipo: 'matéria',
    origem: '4º Ano',
    sobre: 'Estudo de sistemas de gerenciamento de banco de dados, modelagem e linguagem SQL.',
    rota: 'bd',
  },
  {
    nome: 'Estrutura de Dados',
    tipo: 'matéria',
    origem: '4º Ano',
    sobre:
      'Explora estruturas como listas, filas, pilhas e árvores para otimização de algoritmos.',
    rota: 'ed',
  },
  {
    nome: 'Engenharia de Software',
    tipo: 'matéria',
    origem: '4º Ano',
    sobre:
      'Aborda metodologias e práticas para o desenvolvimento eficiente de software.',
    rota: 'es',
  },
  {
    nome: 'Interação Humano-Computador',
    tipo: 'matéria',
    origem: '4º Ano',
    sobre:
      'Estuda como tornar a interação entre usuários e sistemas mais intuitiva e eficiente.',
    rota: 'ihc',
  },
  {
    nome: 'Técnicas Avançadas de Programação',
    tipo: 'matéria',
    origem: '4º Ano',
    sobre:
      'Aprofunda conceitos de programação orientada a objetos, design patterns e boas práticas.',
    rota: 'tap',
  },
  {
    nome: 'Técnicas Avançadas de Programação Web',
    tipo: 'matéria',
    origem: '4º Ano',
    sobre:
      'Foca em desenvolvimento web moderno com frameworks, APIs e arquiteturas escaláveis.',
    rota: 'tapw',
  },
  {
    nome: 'Inteligência Corporativa',
    tipo: 'matéria',
    origem: '4º Ano',
    sobre:
      'Trata da análise de dados e uso de informação estratégica para decisões empresariais.',
    rota: 'ic',
  },
  {
    nome: 'Gestão Ágil',
    tipo: 'matéria',
    origem: '4º Ano',
    sobre: 'Apresenta metodologias ágeis como Scrum e Kanban para gerenciamento de projetos.',
    rota: 'ga',
  },
  {
    nome: 'Organização de Computadores',
    tipo: 'matéria',
    origem: '4º Ano',
    sobre:
      'Explica como os computadores funcionam internamente, com foco em arquitetura e hardware.',
    rota: 'oc',
  },
  {
    nome: 'Inglês',
    tipo: 'matéria',
    origem: '4º Ano',
    sobre:
      'Desenvolve a compreensão e comunicação na língua inglesa, com foco técnico e acadêmico.',
    rota: 'in',
  },
  {
    nome: 'Matemática Discreta',
    tipo: 'matéria',
    origem: '4º Ano',
    sobre:
      'Reforça conceitos matemáticos aplicados à computação, lógica e resolução de problemas.',
    rota: 'ma',
  },
];

export default function Busca() {
  const [componentesFiltrados, setcomponentesFiltrados] = useState(componentes);
  const [pesquisa, setPesquisa] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState('pesquisa'); // 'pesquisa', 'tipo', 'origem'

  useEffect(() => {
    let filtro = componentes;

    if (categoriaFiltro === 'pesquisa') {
      filtro = componentes.filter((material) =>
        material.nome.toLowerCase().includes(pesquisa.toLowerCase())
      );
    } else if (categoriaFiltro === 'tipo') {
      filtro = componentes.filter((material) =>
        material.tipo.toLowerCase().includes(pesquisa.toLowerCase())
      );
    } else if (categoriaFiltro === 'origem') {
      filtro = componentes.filter((material) =>
        material.origem.toLowerCase().includes(pesquisa.toLowerCase())
      );
    }

    setcomponentesFiltrados(filtro);
  }, [pesquisa, categoriaFiltro]);

  const renderItem = (item) => {
    return (
      <a
        key={item.nome}
        href={`/f-portifolio/materias/${item.rota}`}
        className="flex bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 p-4 rounded-md shadow-sm gap-4 hover:scale-[1.02] transition duration-300 hover:shadow-lg w-full cursor-pointer"
      >
        <div className="flex flex-col items-start gap-4 flex-1">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 capitalize">
            {item.nome}
          </h2>

          <div className="flex flex-wrap gap-2">
            <p className="capitalize w-max text-green-700 border border-green-700 bg-green-100 px-3 py-1 rounded-md text-sm font-medium flex items-center gap-1 dark:bg-green-900 dark:text-green-300 dark:border-green-300">
              <span className="material-icons text-base">category</span>
              {item.tipo}
            </p>
            <p className="capitalize w-max text-orange-700 border border-orange-700 bg-orange-100 px-3 py-1 rounded-md text-sm font-medium flex items-center gap-1 dark:bg-orange-900 dark:text-orange-300 dark:border-orange-300">
              <span className="material-icons text-base">public</span>
              {item.origem}
            </p>
          </div>

          <div className="flex gap-3">
            <div className="h-full w-2 bg-darkblue dark:bg-white rounded-md"></div>
            <p className="text-gray-700 dark:text-gray-300 text-justify text-sm">{item.sobre}</p>
          </div>

          <button className="text-sm mt-2 text-darkblue dark:text-cyan-400 hover:underline transition-all">
            Saiba mais!
          </button>
        </div>
      </a>
    );
  };

  const filterForTipo = (filtro) => {
    setPesquisa(filtro);
    setCategoriaFiltro('tipo');
  };

  const filterForOrigem = (filtro) => {
    setPesquisa(filtro);
    setCategoriaFiltro('origem');
  };

  const limparFiltros = () => {
    setPesquisa('');
    setcomponentesFiltrados(componentes);
    setCategoriaFiltro('pesquisa');
  };

  return (
    <div className="flex flex-col min-h-screen justify-start items-center bg-white dark:bg-zinc-900 transition-colors duration-500">
      <div className="flex flex-col items-center gap-2 w-10/12">
        <input
          className="bg-white dark:bg-gray-700 w-2/12 min-w-[300px] text-black dark:text-white rounded-md border border-gray-300 dark:border-zinc-600 p-2 mt-[100px]"
          placeholder="Pesquisa..."
          value={pesquisa}
          onChange={(e) => {
            setPesquisa(e.target.value);
            setCategoriaFiltro('pesquisa');
          }}
        />
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={() => filterForOrigem('4º Ano')}
              className="p-1 text-darkblue rounded-md shadow-2xl border border-gray-200 hover:bg-darkblue hover:text-white cursor-pointer transition duration-500 dark:text-cyan-300 dark:border-cyan-300 dark:hover:bg-cyan-500"
            >
              4º Ano
            </button>
            <button
              onClick={() => filterForTipo('matéria')}
              className="p-1 text-darkblue rounded-md shadow-2xl border border-gray-200 hover:bg-darkblue hover:text-white cursor-pointer transition duration-500 dark:text-cyan-300 dark:border-cyan-300 dark:hover:bg-cyan-500"
            >
              Matéria
            </button>
            <button
              onClick={limparFiltros}
              className="p-1 text-red-700 rounded-md shadow-2xl border border-gray-200 hover:bg-red-700 hover:text-white cursor-pointer transition duration-500 dark:text-red-400 dark:border-red-400 dark:hover:bg-red-600"
            >
              Limpar filtros
            </button>
          </div>
        </div>
      </div>

      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounded-md shadow-md min-h-[500px] items-start justify-start gap-5 w-full">
        {componentesFiltrados.map((materia) => renderItem(materia))}
      </div>
    </div>
  );
}
