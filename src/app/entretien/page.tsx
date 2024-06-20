"use client";

import React from 'react';

const Entretien = () => {
    return (
        <section className="relative bg-white overflow-hidden" style={{ backgroundImage: "url('/image/pattern-white.svg')", backgroundPosition: "center" }}>
            <div className="py-12 md:py-16">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">
                            {"Nettoyage, Entretien et Ramonage de Conduits et Cheminées"}
                        </h1>
                    </div>
                    <div className="flex flex-wrap xl:items-start -mx-4">
                        <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0 md:pr-12">
                            <h2 className="mb-6 text-2xl md:text-3xl lg:text-4xl leading-tight font-bold tracking-tight">
                                {"Entretien Régulier et Ramonage pour la Sécurité de Votre Maison"}
                            </h2>
                            <p className="text-lg mb-4 text-gray-700">
                                {"Assurez-vous que vos cheminées et conduits fonctionnent de manière optimale avec nos services professionnels de nettoyage, entretien et ramonage. L'entretien régulier et le ramonage sont non seulement essentiels pour prévenir les risques d'incendie, mais ils sont également obligatoires selon la réglementation en vigueur. Un entretien régulier assure une efficacité énergétique maximale et prolonge la durée de vie de vos installations."}
                            </p>
                            <p className="text-lg mb-4 text-gray-700">
                                {"Nos techniciens qualifiés utilisent des méthodes avancées et des équipements spécialisés pour éliminer efficacement les dépôts de suie, les obstructions et autres résidus nuisibles. En choisissant nos services, vous bénéficiez de plusieurs avantages:"}
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
                                <a href="/contact">
                                    Nous-Contacter
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
                                    src="/image/realisations/img5.jpeg"
                                    alt="Stove Installation"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Entretien;