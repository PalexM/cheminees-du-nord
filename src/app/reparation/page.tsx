"use client";

import React from 'react';

const Reparation = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center" style={{ marginTop: "2vh" }}>
            <header className="text-center py-10">
                <h1 className="text-4xl font-bold text-blue-gray-900">
                    {" Entretien et Réparation de Poêles"}
                </h1>
            </header>
            <main className="flex flex-col items-center px-4 md:flex-row md:justify-between md:w-3/4">
                <div className="max-w-md mb-8 text-center md:text-left md:w-1/2 md:mb-0">
                    <h2 className="text-3xl font-bold mb-4 text-blue-gray-900">
                        {"  Expertise en Entretien et Réparation de Poêles pour une Performance Durable"}
                    </h2>
                    <p className="text-lg mb-4 text-gray-700">
                        {"  Nos services d'entretien et de réparation de poêles sont conçus pour prolonger la durée de vie de votre équipement tout en assurant une efficacité optimale. Que votre poêle nécessite un simple ajustement, une réparation ou un entretien périodique, notre équipe est formée pour identifier et résoudre efficacement tout problème. Nous utilisons des pièces de rechange de qualité et des techniques éprouvées pour garantir que votre poêle fonctionne de manière fiable et économe en énergie. Avec notre engagement envers la qualité et la satisfaction du client, nous sommes là pour vous aider à maintenir un environnement chaleureux et confortable toute l'année."}
                    </p>
                    <button className="py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg">
                        Nous-Contacter
                    </button>
                </div>
                <div className="md:w-1/2">
                    <img
                        src="/image/realisations/img18.jpeg"
                        alt="Entretien et Réparation de Poêles"
                        className="object-cover rounded-lg mx-auto"
                    />
                </div>
            </main>
        </div>
    );
}

export default Reparation;