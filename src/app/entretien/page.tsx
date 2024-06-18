"use client";

import React from 'react';

const Entretien = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center">
            <header className="text-center py-10">
                <h1 className="text-4xl font-bold text-blue-gray-900">
                    {" Nettoyage, Entretien et Ramonage de Conduits et Cheminées"}
                </h1>
            </header>
            <main className="flex flex-col items-center px-4 md:flex-row md:justify-between md:w-3/4">
                <div className="max-w-md mb-8 text-center md:text-left md:w-2/2 md:mb-0">
                    <h2 className="text-3xl font-bold mb-4 text-blue-gray-900">
                        {" Entretien Régulier et Ramonage pour la Sécurité de Votre Maison"}
                    </h2>
                    <p className="text-lg mb-4 text-gray-700">
                        {" Assurez-vous que vos cheminées et conduits fonctionnent de manière optimale avec nos services professionnels de nettoyage, entretien et ramonage. L'entretien régulier et le ramonage sont non seulement essentiels pour prévenir les risques d'incendie, mais ils sont également obligatoires selon la réglementation en vigueur. Un entretien régulier assure une efficacité énergétique maximale et prolonge la durée de vie de vos installations."}
                    </p>
                    <p className="text-lg mb-4 text-gray-700">
                        {" Nos techniciens qualifiés utilisent des méthodes avancées et des équipements spécialisés pour éliminer efficacement les dépôts de suie, les obstructions et autres résidus nuisibles. En choisissant nos services, vous bénéficiez de plusieurs avantages:"}
                    </p>
                    <ul className="list-disc list-inside mb-4 text-left">
                        <li><b>{"Sécurité accrue : Réduction des risques d'incendie et d'intoxication au monoxyde de carbone."}</b></li>
                        <li><b>{"Efficacité énergétique : Meilleure performance de vos systèmes de chauffage, réduisant ainsi vos coûts énergétiques."}</b></li>
                        <li><b>{"Conformité réglementaire : Respect des obligations légales de ramonage, évitant les amendes et les complications juridiques."}</b></li>
                        <li><b>{"Tranquillité d'esprit : Savoir que votre système de chauffage est entretenu selon les normes les plus strictes de sécurité et de performance."}</b></li>
                    </ul>
                    <p className="text-lg text-gray-700 mb-4">
                        {"Faites confiance à notre expertise pour un entretien complet et professionnel de vos conduits et cheminées, garantissant un environnement sûr et confortable pour votre maison."}
                    </p>
                    <button className="py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg mb-4">
                        Nous-Contacter
                    </button>
                </div>
                <div className="md:w-1/2">
                    <img
                        src="/image/realisations/img5.jpeg"
                        alt="Stove Installation"
                        className="object-cover rounded-lg mx-auto"
                    />
                </div>
            </main>
        </div>
    );
};

export default Entretien;