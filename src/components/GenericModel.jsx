import React from 'react';
import imgAlter from '../assets/images.jpg'

export default function GenericModel({ imgBack, titulo, subtitulo, valores, aprendizados, sobre, nomeProfessor, fotoProfessor, opniao }) {

    const renderValores = (item) => {
        return (
            <div className="flex bg-gray-100 border border-gray-300 p-4 rounded-2xl shadow-sm gap-3 hover:scale-102 transition duration-300 hover:shadow-lg">
                <div className="flex flex-col items-start gap-4">
                    <span className="material-icons text-5xl bg-darkblue text-white rounded-full p-4">
                        {item.icon}
                    </span>

                    <div className=" flex items-center gap-3 text-sm font-medium text-green-800 bg-green-100 border border-green-600 px-3 py-1 rounded-md">
                        Habilidade Ensinada
                        <span class="material-icons">
                            school
                        </span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-800">
                        {item.titulo}
                    </h2>
                    <div className='flex gap-4 flex-1'>
                        <div className='h-full w-5 bg-darkblue rounded-2xl'></div>
                        <p className="text-gray-700 text-justify">
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
            <div className="flex bg-gray-100 border border-gray-300 p-4 rounded-2xl shadow-sm gap-3 hover:bg-gray-200 transition-all duration-500 cursor-pointer hover:shadow-lg ">
                <div className="flex flex-col md:flex-row justify-center items-start gap-4">
                    <img
                        className="rounded-2xl object-cover w-full sm:w-[300px] h-auto max-h-[200px] shadow-md"
                        src={item.img ? item.img : imgAlter}
                        alt={item.titulo}
                    />


                    <div className="flex flex-col gap-2">

                        <h2 className="text-xl font-bold text-gray-800">
                            {item.titulo}
                        </h2>

                        <div className="flex gap-4">
                            <p className="text-gray-700 text-justify">
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
            </div>
        );

    };

    const RenderProfessor = () => {
        return (
            <div className='flex flex-col md:flex-row itece justify-center items-center md:items-start bg-gray-100 border border-gray-300 p-4 rounded-2xl shadow-sm gap-3'>
                <img className='flex p-1 bg-darkblue h-[200px] w-[200px] rounded-full' alt='foto Professor' src={fotoProfessor} />
                <div className='flex flex-col flex-1'>
                    <h2 className='text-2xl font-semibold'>Professor</h2>
                    <h1 className='text-5xl font-bold'>{nomeProfessor}</h1>
                    <p className="text-justify text-gray-600 ml-1 mt-3">
                        Profissional experiente e dedicado ao ensino, trazendo conhecimento prático e teórico de forma clara e acessível.
                    </p>
                    <div className='flex gap-2 mt-3'>
                        <div className='flex p-2 bg-pink-100 border border-pink-600 gap-3 w-max rounded-md shadow-md text-pink-800'>
                            <h3>Ótima Oratória</h3>
                            <span class="material-icons">
                                psychology
                            </span>
                        </div>
                        <div className='flex p-2 bg-yellow-100 border border-yellow-600 gap-3 w-max rounded-md shadow-md text-yellow-800'>
                            <h3>Explicação Clara</h3>
                            <span class="material-icons">
                                co_present
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const RenderOpniao = () => {
        return (
            <div className='flex flex-1 flex-col md:flex-row justify-center items-center md:items-start bg-gray-100 border border-gray-300 p-6 rounded-2xl shadow-sm gap-6'>

                {/* Espaço opcional para uma imagem ou ícone */}
                <div className="flex-shrink-0">
                    <span className="material-icons text-5xl bg-darkblue text-white rounded-full p-4">
                        chat
                    </span>
                </div>

                {/* Texto da opinião */}
                <div className="flex flex-col gap-4 text-justify">
                    <h2 className="text-4xl font-bold text-gray-800">Minha Opinião</h2>
                    <p className="text-gray-700 leading-relaxed">
                        {opniao}
                    </p>
                </div>
            </div>
        );
    };


    return (
        <div className='flex flex-col flex-1 min-h-screen'>
            <div
                className=" flex flex-col h-[500px]"
                style={{ backgroundImage: `url(${imgBack ? imgBack : '../assets/images.png'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className='flex-1 grid grid-cols-1 md:grid-cols-2 bg-black/85 items-center p-5'>
                    <div className='flex flex-col gap-4 mt-[10%] md:ml-5'>
                        <h1 className='text-white text-5xl md:text-7xl font-bold '>{titulo}</h1>
                        <h2 className='text-white text-2xl md:text-3xl'>{subtitulo}</h2>
                    </div>
                </div>
            </div>

            <div className='bg-img w-full bg-white p-3 grid grid-cols-1 md:grid-cols-3 mt-[2%]  '>
                <div className='flex flex-col items-center justify-center gap-3 col-span-1'>
                    <span className="material-icons !text-9xl bg-black text-white rounded-full">
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

            <div className='grid grid-cols-1 md:grid-cols-2 mb-4 p-4 gap-3 items-start'>
                <div className='flex flex-col gap-3'>
                    <RenderProfessor />
                    <RenderOpniao />
                </div>


                <div className='flex flex-col items-center justify-center mt-[2%]'>
                    <h1 className='capitalize text-5xl font-bold text-start w-full pl-5'>Meus Aprendizados</h1>
                    <p className='text-justify p-5 w-full'>Aqui eu mostro algumas coisas que eu fiz nessa matéria:</p>
                    <div className='flex flex-col border border-gray-200 p-2 w-full gap-2'>
                        {aprendizados && aprendizados.length > 0 ? (
                            aprendizados.map(item => renderAprendizado(item))
                        ) : (
                            <SemMateria />
                        )}
                    </div>
                </div>
            </div>

        </div>

    );
}
