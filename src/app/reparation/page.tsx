"use client";

import React from 'react';

const Reparation = () => {
    return (
        <section className="relative bg-white overflow-hidden" style={{ backgroundImage: "url('/image/pattern-white.svg')", backgroundPosition: "center" }}>
            <div className="py-12 md:py-16">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">
                            {"Entretien et Réparation de Poêles"}
                        </h1>
                    </div>
                    <div className="flex flex-wrap xl:items-start -mx-4">
                        <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0 md:pr-12">
                            <h2 className="mb-6 text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight">
                                {"Expertise en entretien et réparation de poêles pour une performance durable"}
                            </h2>
                            <p className="text-lg mb-4 text-gray-700">
                                {"Nos services d'entretien et de réparation de poêles sont conçus pour prolonger la durée de vie de votre équipement tout en assurant une efficacité optimale. Que votre poêle nécessite un simple ajustement, une réparation ou un entretien périodique, notre équipe est formée pour identifier et résoudre efficacement tout problème. Nous utilisons des pièces de rechange de qualité et des techniques éprouvées pour garantir que votre poêle fonctionne de manière fiable et économe en énergie. Avec notre engagement envers la qualité et la satisfaction du client, nous sommes là pour vous aider à maintenir un environnement chaleureux et confortable toute l'année."}
                            </p>
                            <button className="py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg">
                                <a href="/contact">
                                Contactez-nous
                                </a>
                            </button>
                        </div>
                        <div className="w-full md:w-1/2 px-4 lg:px-12"> {/* Adjusted padding for larger screens */}
                            <div className="relative mx-auto md:mr-0 max-w-full">
                                <img
                                    className="absolute z-10 -right-7 -bottom-8 w-28 lg:w-36 xl:w-48"
                                    src="image/dots.svg"
                                    alt="Blue Dots"
                                />
                                <img
                                    className="relative w-full h-auto rounded-2xl object-cover"
                                    src="/image/realisations/img18.jpeg"
                                    alt="Entretien et Réparation de Poêles"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reparation;