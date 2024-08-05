"use client";

import React from 'react';

const Refaction = () => {
    return (
        <section className="relative bg-white overflow-hidden" style={{ backgroundImage: "url('/image/pattern-white.svg')", backgroundPosition: "center" }}>
            <div className="py-12 md:py-16">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">
                            {"Réfection des Murs et des Plafonds"}
                        </h1>
                    </div>
                    <div className="flex flex-wrap xl:items-start -mx-4">
                        <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0 md:pr-12">
                            <h2 className="mb-6 text-2xl md:text-3xl lg:text-4xl leading-tight  tracking-tight">
                                {"Réfection des murs et des plafonds pour un intérieur parfaitement coordonné"}
                            </h2>
                            <p className="text-lg mb-4 text-gray-700">
                                {"Notre entreprise offre également des services spécialisés de réfection des murs et des plafonds, complémentaires à notre expertise dans l'installation de poêles, cheminées et conduits. Que ce soit pour préparer vos murs et plafonds avant l'installation d'un nouveau système de chauffage ou pour rénover l'esthétique de votre intérieur après travaux, notre équipe expérimentée est là pour vous offrir des solutions sur mesure. Nous nous engageons à utiliser des matériaux de qualité et des techniques de pointe pour garantir des résultats durables et esthétiquement agréables. Faites confiance à notre expertise pour transformer votre espace avec professionnalisme et précision, en harmonie avec vos besoins et votre vision."}
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
                                    src="/image/realisations/img30.jpeg"
                                    alt="Réfection des murs et des plafonds"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Refaction;