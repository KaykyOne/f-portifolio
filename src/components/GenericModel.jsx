import React from 'react';
import imgAlter from '../assets/images.jpg'

export default function GenericModel({ imgBack, titulo, subtitulo, valores, aprendizados, sobre, nomeProfessor, fotoProfessor, opniao }) {

    const renderValores = (item) => {
        return (
            <div className="flex bg-gray-50 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 p-4 rounded-md shadow-sm gap-3 hover:scale-102 transition duration-300 hover:shadow-lg">
                <div className="flex flex-col items-start gap-4">
                    <span className="material-icons text-5xl bg-darkblue dark:bg-white text-white dark:text-darkblue rounded-md p-4">
                        {item.icon}
                    </span>

                    <div className=" flex items-center gap-3 text-sm font-medium text-green-800 bg-green-100 border border-green-600 px-3 py-1 rounded-md">
                        Habilidade Ensinada
                        <span class="material-icons">
                            school
                        </span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                        {item.titulo}
                    </h2>
                    <div className='flex gap-4 flex-1'>
                        <div className='h-full w-5 bg-darkblue dark:bg-gray-400 rounded-md'></div>
                        <p className="text-gray-700 dark:text-gray-200 text-justify">
                            {item.texto}
                        </p>
                    </div>

                </div>
            </div>
        );
    };

    const SemMateria = () => {
        return (
            <div className='flex flex-col justify-center items-center'>
                <span class="material-icons !text-4xl">
                    info
                </span>
                <h1>Ops...Aparentemente não fiz nada ainda!</h1>
            </div>
        );
    };

    const renderAprendizado = (item) => {
        return (
            <a className="flex bg-gray-50 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 p-4 rounded-md shadow-sm gap-3 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all duration-500 cursor-pointer hover:shadow-lg" href={item.link || '#'} target={item.link ? "_blank" : ''}>
                <div className="flex flex-col md:flex-row justify-center items-start gap-4">
                    <img
                        className="rounded-md object-cover w-full min-w-[50px] max-w-[200px] h-auto max-h-[200px] shadow-md"
                        src={item.img ? item.img : imgAlter}
                        alt={item.titulo}
                    />


                    <div className="flex flex-col gap-2">

                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                            {item.titulo}
                        </h2>

                        <div className="flex gap-4">
                            <p className="text-gray-700 dark:text-gray-200 text-justify">
                                {item.texto}
                            </p>
                        </div>

                        <div className='flex gap-2'>
                            {item.link && (
                                <div className="flex gap-2 bg-orange-400 rounded-md p-2 w-max">
                                    <h1 className="text-orange-900">Link Disponível!</h1>
                                    <span className="material-icons text-orange-900">
                                        open_in_new
                                    </span>
                                </div>
                            )}
                        </div>


                    </div>
                </div>
            </a>
        );

    };

    const RenderProfessor = () => {
        return (
            <div className='flex flex-col md:flex-row w-full max-w-full  mx-auto justify-center items-center md:items-start bg-gray-50 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 p-4 rounded-md shadow-sm gap-4'>
                <div className='flex flex-col flex-1 text-center md:text-left'>
                    <h2 className='text-2xl font-semibold'>Professor</h2>
                    <h1 className='text-4xl md:text-5xl font-bold'>{nomeProfessor}</h1>
                    <p className="text-gray-600 dark:text-gray-200 mt-3">
                        Profissional experiente e dedicado ao ensino, trazendo conhecimento prático e teórico de forma clara e acessível.
                    </p>
                    <div className='flex flex-wrap justify-center md:justify-start gap-3 mt-4'>
                        <div className='flex items-center p-2 bg-pink-100 border border-pink-600 gap-2 rounded-md shadow-md text-pink-800'>
                            <h3>Ótima Oratória</h3>
                            <span className="material-icons">psychology</span>
                        </div>
                        <div className='flex items-center p-2 bg-yellow-100 border border-yellow-600 gap-2 rounded-md shadow-md text-yellow-800'>
                            <h3>Explicação Clara</h3>
                            <span className="material-icons">co_present</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };


    const RenderOpniao = () => {
        return (
            <div className='flex flex-col md:flex-row w-full max-w-full mx-auto justify-center items-center md:items-start bg-gray-50 dark:bg-zinc-800 dark:text-white border border-gray-300 dark:border-zinc-700 p-6 rounded-md shadow-sm gap-6'>

                <div className="flex-shrink-0">
                    <span className="material-icons text-4xl sm:text-5xl bg-darkblue text-white dark:bg-white dark:text-darkblue rounded-md p-3 sm:p-4">
                        chat
                    </span>
                </div>

                <div className="flex flex-col gap-4 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Minha Opinião</h2>
                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                        {opniao}
                    </p>
                </div>
            </div>
        );
    };



    return (
        <div className='flex flex-col flex-1 min-h-screen justify-center items-center'>
            <div
                className="flex flex-col h-[800px] w-full"
                style={{ backgroundImage: `url(${imgBack ? imgBack : '../assets/images.png'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='flex-1 grid grid-cols-1 md:grid-cols-3'>
                    <div className='flex-1 grid grid-cols-1 col-span-2 md:grid-cols-2 bg-black/85 items-center p-5'>
                        <div className='flex flex-col gap-4 md:ml-5'>
                            <h1 className='text-white text-3xl sm:text-4xl md:text-6xl font-bold '>{titulo}</h1>
                            <h2 className='text-white text-xl sm:text-2xl md:text-3xl'>{subtitulo}</h2>
                        </div>
                    </div>
                    <div className='flex-1 grid grid-cols-1 md:grid-cols-2 bg-black/85 items-center p-5'>

                    </div>
                </div>
                <div className='flex bg-black/85 items-center p-5 text-white gap-2 w-full justify-center'>
                    <h1>Arraste e confira</h1>
                    <span class="material-icons">
                        swipe
                    </span>
                </div>
            </div>

            <div className='w-full p-2 md:w-10/12'>
                <div className='bg-img w-full bg-transparent p-3 grid grid-cols-1 md:grid-cols-3 mt-10  '>
                    <div className='flex flex-col items-center justify-center gap-3 col-span-1'>
                        <span className="material-icons !text-9xl bg-black dark:invert text-white rounded-md hover:scale-105 transition-all duration-300 hover:-translate-y-2">
                            question_mark
                        </span>

                    </div>
                    <div className='flex flex-col p-2 gap-4 col-span-2'>
                        <h1 className='text-5xl font-bold'>Sobre:</h1>
                        <p className='text-justify'>{sobre}</p>
                        <div className='flex gap-2'>
                            <div className='flex p-2 bg-yellow-100 border border-yellow-600 gap-3 w-max rounded-md shadow-md text-yellow-800'>
                                <h3>Muito Importante</h3>
                                <span className="material-icons">
                                    verified
                                </span>
                            </div>
                            <div className='flex p-2 bg-blue-100 border border-blue-600 gap-3 w-max rounded-md shadow-md text-blue-800'>
                                <h3>Matéria Base</h3>
                                <span className="material-icons">
                                    align_vertical_bottom
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center mt-[2%]'>
                    <h1 className='capitalize text-5xl font-bold text-start w-full pl-5'>Valores da matéria</h1>
                    <p className='text-justify p-5'>As matérias não servem apenas para transmitir conteúdo, mas também para ensinar valores importantes para a vida. Ao lidar com diferentes temas, exercícios e atividades, desenvolvemos habilidades como disciplina, paciência, responsabilidade e respeito às diferenças.
                        Resolver problemas estimula o raciocínio e a persistência. Trabalhos em grupo ensinam cooperação, comunicação e empatia. Já a correção de erros mostra que aprender também envolve reconhecer falhas e buscar melhorar.
                        Mesmo que esses valores não estejam escritos no conteúdo da matéria, eles fazem parte do processo de aprendizagem e ajudam na formação pessoal e social de cada um.</p>
                    <div className='flex flex-col lg:flex-row gap-3 p-5'>
                        {valores.map(item => (
                            renderValores(item)
                        ))}
                    </div>
                </div>

                <div className='flex flex-col mb-4 p-4 gap-3 items-start'>
                    <div className='flex flex-col p-2 gap-2 w-full'>
                        <RenderProfessor />
                        <RenderOpniao />
                    </div>


                    <div className='flex flex-col items-center justify-center mt-[2%] w-full'>
                        <h1 className='capitalize text-2xl md:text-5xl font-bold text-start w-full pl-5'>Meus Aprendizados</h1>
                        <p className='text-justify p-5 w-full'>Aqui eu mostro algumas coisas que eu fiz nessa matéria:</p>
                        <div className='flex flex-col border border-gray-200 dark:border-zinc-700 rounded-md p-2 w-full gap-2'>
                            {aprendizados && aprendizados.length > 0 ? (
                                aprendizados.map(item => renderAprendizado(item))
                            ) : (
                                <SemMateria />
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}
