import React, { useState, useEffect } from 'react';

const componentes = [
  {
    nome: 'Projeto Integrador 1',
    tipo: 'matéria',
    origem: '4º Ano',
    sobre: 'Disciplina prática focada na integração dos conhecimentos adquiridos ao longo do curso por meio de um projeto.',
    rota: 'pi'
  },
  {
    nome: 'Banco de Dados',
    tipo: 'matéria',
    origem: '4º Ano',
    sobre: 'Estudo de sistemas de gerenciamento de banco de dados, modelagem e linguagem SQL.',
    rota: 'bd'
  },
  {
    nome: 'Estrutura de Dados',
    tipo: 'matéria',
    origem: '4º Ano',
    sobre: 'Explora estruturas como listas, filas, pilhas e árvores para otimização de algoritmos.',
    rota: 'ed'
  },
  {
    nome: 'Engenharia de Software',
    tipo: 'matéria',
    origem: '4º Ano',
    sobre: 'Aborda metodologias e práticas para o desenvolvimento eficiente de software.',
    rota: 'es'
  },
  {
    nome: 'Interação Humano-Computador',
    tipo: 'matéria',
    origem: '4º Ano',
    sobre: 'Estuda como tornar a interação entre usuários e sistemas mais intuitiva e eficiente.',
    rota: 'ihc'
  },
  {
    nome: 'Técnicas Avançadas de Programação',
    tipo: 'matéria',
    origem: '4º Ano',
    sobre: 'Aprofunda conceitos de programação orientada a objetos, design patterns e boas práticas.',
    rota: 'tap'
  },
  {
    nome: 'Técnicas Avançadas de Programação Web',
    tipo: 'matéria',
    origem: '4º Ano',
    sobre: 'Foca em desenvolvimento web moderno com frameworks, APIs e arquiteturas escaláveis.',
    rota: 'tapw'
  },
  {
    nome: 'Inteligência Corporativa',
    tipo: 'matéria',
    origem: '4º Ano',
    sobre: 'Trata da análise de dados e uso de informação estratégica para decisões empresariais.',
    rota: 'ic'
  },
  {
    nome: 'Gestão Ágil',
    tipo: 'matéria',
    origem: '4º Ano',
    sobre: 'Apresenta metodologias ágeis como Scrum e Kanban para gerenciamento de projetos.',
    rota: 'ga'
  },
  {
    nome: 'Organização de Computadores',
    tipo: 'matéria',
    origem: '4º Ano',
    sobre: 'Explica como os computadores funcionam internamente, com foco em arquitetura e hardware.',
    rota: 'oc'
  },
  {
    nome: 'Inglês',
    tipo: 'matéria',
    origem: '4º Ano',
    sobre: 'Desenvolve a compreensão e comunicação na língua inglesa, com foco técnico e acadêmico.',
    rota: 'in'
  },
  {
    nome: 'Matemática Discreta',
    tipo: 'matéria',
    origem: '4º Ano',
    sobre: 'Reforça conceitos matemáticos aplicados à computação, lógica e resolução de problemas.',
    rota: 'ma'
  },
];

export default function Busca() {
  const [componentesFiltrados, setcomponentesFiltrados] = useState(componentes);
  const [pesquisa, setPesquisa] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState('pesquisa');

  useEffect(() => {
    if (categoriaFiltro === 'pesquisa') {
      const filtro = componentes.filter((material) =>
        material.nome.toLowerCase().includes(pesquisa.toLowerCase())
      );
      setcomponentesFiltrados(filtro);
    }
  }, [pesquisa, categoriaFiltro]);

  const renderItem = (item) => {
    return (
      <a
        key={item.nome}
        href={`/f-portifolio/${item.rota}`}
        className="flex h-full   bg-gray-100 border border-gray-300 p-4 rounded-2xl shadow-sm gap-4 hover:scale-[1.02] transition duration-300 hover:shadow-lg w-full cursor-pointer"
      >
        <div className="flex flex-col items-start gap-4 flex-1">
          <h2 className="text-xl font-bold text-gray-800 capitalize">
            {item.nome}
          </h2>

          <div className="flex flex-wrap gap-2">
            <p className="capitalize w-max text-green-700 border border-green-700 bg-green-100 px-3 py-1 rounded-md text-sm font-medium flex items-center gap-1">
              <span className="material-icons text-base">category</span>
              {item.tipo}
            </p>
            <p className="capitalize w-max text-orange-700 border border-orange-700 bg-orange-100 px-3 py-1 rounded-md text-sm font-medium flex items-center gap-1">
              <span className="material-icons text-base">public</span>
              {item.origem}
            </p>
          </div>

          <div className="flex gap-3">
            <div className="h-full w-2 bg-darkblue rounded-xl"></div>
            <p className="text-gray-700 text-justify text-sm">
              {item.sobre}
            </p>
          </div>

          <button className="text-sm mt-2 text-darkblue hover:underline transition-all">
            Saiba mais!
          </button>
        </div>
      </a>

    );
  };

  const filterForTipo = (filtro) => {
    const res = componentes.filter((material) =>
      material.tipo.toLowerCase().includes(filtro.toLowerCase())
    );
    setcomponentesFiltrados(res);
    setCategoriaFiltro('tipo');
  };

  const filterForOrigem = (filtro) => {
    const res = componentes.filter((material) =>
      material.origem.toLowerCase().includes(filtro.toLowerCase())
    );
    setcomponentesFiltrados(res);
    setCategoriaFiltro('origem');
  };

  const limparFiltros = () => {
    setPesquisa('');
    setcomponentesFiltrados(componentes);
    setCategoriaFiltro('pesquisa');
  };

  return (
    <div className='flex flex-col min-h-screen justify-center items-center'>
      <div className='flex flex-col items-center gap-2 w-10/12'>
        <input
          className='bg-white w-2/12 min-w-[300px] text-black rounded-2xl border border-gray-300 p-2 mt-[20%] md:mt-[15%] lg:mt-[5%]'
          placeholder='Pesquisa...'
          value={pesquisa}
          onChange={(e) => {
            setPesquisa(e.target.value);
            setCategoriaFiltro('pesquisa');
          }}
        />
        <div className='flex flex-col items-center'>
          <div className='flex items-center gap-2 mt-2'>
            <button
              onClick={() => filterForOrigem('4º Ano')}
              className='p-1 text-darkblue rounded-md shadow-2xl border border-gray-200 hover:bg-darkblue hover:text-white cursor-pointer transition duration-500'
            >
              4º Ano
            </button>
            <button
              onClick={() => filterForTipo('matéria')}
              className='p-1 text-darkblue rounded-md shadow-2xl border border-gray-200 hover:bg-darkblue hover:text-white cursor-pointer transition duration-500'
            >
              Matéria
            </button>
            <button
              onClick={limparFiltros}
              className='p-1 text-red-700 rounded-md shadow-2xl border border-gray-200 hover:bg-red-700 hover:text-white cursor-pointer transition duration-500'
            >
              Limpar filtros
            </button>
          </div>
        </div>
      </div>

      <div className='p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 rounded-2xl shadow-md min-h-[500px] w-8/12 h-full items-start justify-start gap-2'>
        {componentesFiltrados.map((materia) => renderItem(materia))}
      </div>
    </div>
  );
}
