"use client";

import React from 'react';

const Refaction = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center" style={{ marginTop: "2vh" }}>
            <header className="text-center py-10">
                <h1 className="text-4xl font-bold text-blue-gray-900">
                    {"Réfection des Murs et des Plafonds"}
                </h1>
            </header>
            <main className="flex flex-col items-center px-4 md:flex-row md:justify-between md:w-3/4">
                <div className="max-w-md mb-8 text-center md:text-left md:w-1/2 md:mb-0">
                    <h2 className="text-3xl font-bold mb-4 text-blue-gray-900">
                        {"Réfection Expert des murs et des plafonds pour un intérieur parfaitement coordonné"}
                    </h2>
                    <p className="text-lg mb-4 text-gray-700">
                        {"Notre entreprise offre également des services spécialisés de réfection des murs et des plafonds, complémentaires à notre expertise dans l'installation de poêles, cheminées et conduits. Que ce soit pour préparer vos murs et plafonds avant l'installation d'un nouveau système de chauffage ou pour rénover l'esthétique de votre intérieur après des travaux, notre équipe expérimentée est là pour vous offrir des solutions sur mesure. Nous nous engageons à utiliser des matériaux de qualité et des techniques de pointe pour garantir des résultats durables et esthétiquement agréables. Faites confiance à notre expertise pour transformer votre espace avec professionnalisme et précision, en harmonie avec vos besoins et votre vision."}
                    </p>
                    <button className="py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg">
                        Nous-Contacter
                    </button>
                </div>
                <div className="md:w-1/2">
                    <img
                        src="/image/realisations/img30.jpeg"
                        alt="Réfection des murs et des plafonds"
                        className="object-cover rounded-lg mx-auto"
                    />
                </div>
            </main>
        </div>
    );
};

export default Refaction;