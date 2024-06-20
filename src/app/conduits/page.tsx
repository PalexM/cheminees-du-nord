"use client";

import React from 'react';

const Conduits = () => {
    return (
        <section className="relative bg-white overflow-hidden" style={{ backgroundImage: "url('/image/pattern-white.svg')", backgroundPosition: "center" }}>
            <div className="py-12 md:py-16">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">
                            {'Création de Conduits'}
                        </h1>
                    </div>
                    <div className="flex flex-wrap xl:items-start -mx-4">
                        <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0 md:pr-12">
                            <h2 className="mb-6 text-2xl md:text-3xl lg:text-4xl leading-tight font-bold tracking-tight">
                                {"Conduits Sur Mesure pour Votre Sécurité et Confort"}
                            </h2>
                            <p className="text-lg mb-4 text-gray-700">
                                {"La création de conduits est une étape cruciale dans l'installation de cheminées et poêles. Notre équipe spécialisée propose une gamme complète de solutions sur mesure pour répondre à vos besoins spécifiques en matière d'évacuation des fumées. Que vous optiez pour des conduits extérieurs ou intérieurs, en acier inoxydable ou en céramique, nous concevons et installons des conduits qui garantissent une performance optimale tout en respectant les normes de sécurité les plus strictes."}
                            </p>
                            <p className="text-lg mb-4 text-gray-700">
                                {"Pour les nouvelles constructions, nous planifions et intégrons les conduits dès les premières phases du projet, assurant une intégration harmonieuse et efficace avec votre architecture. Pour les rénovations, nous proposons des solutions adaptées pour remplacer ou moderniser vos conduits existants, améliorant ainsi l'efficacité énergétique et la sécurité de votre système de chauffage."}
                            </p>
                            <p className="text-lg mb-4 text-gray-700">
                                {"Nos services incluent également des options de conduits isolés pour une meilleure protection thermique et acoustique, ainsi que des solutions de nettoyage et d'entretien régulières pour maintenir la performance optimale de vos conduits au fil du temps. Avec notre expertise approfondie et notre engagement envers la qualité, vous pouvez avoir l'assurance que votre installation fonctionnera de manière fiable et efficace pendant de nombreuses années."}
                            </p>

                            <button className="py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg">
                                Nous-Contacter
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
                                    src="/image/realisations/img21.jpeg"
                                    alt="création de conduits"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Conduits;


