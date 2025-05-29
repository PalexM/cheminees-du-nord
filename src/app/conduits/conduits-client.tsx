/* eslint-disable react/no-unescaped-entities */
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ConduitsClient = () => {
    return (
        <section 
            className="relative bg-white overflow-hidden py-16 md:py-20 lg:py-24" 
            style={{ backgroundImage: "url('/image/pattern-white.svg')", backgroundPosition: "center" }}
        >
            <div className="container px-4 mx-auto">
                {/* En-tête principal avec titre et description SEO-friendly */}
                <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight mb-6">
                        Création de Conduits de Cheminée
                    </h1>
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500"></div>
                    </div>
                    <p className="text-lg text-gray-700">
                        Installation professionnelle de conduits pour cheminées et poêles à bois, réalisée par des experts cheministes certifiés. Solutions adaptées pour rénovation et nouvelles installations dans l'Oise, le Nord et toute la région Hauts-de-France.
                    </p>
                </div>

                <div className="flex flex-wrap xl:items-start -mx-4">
                    {/* Partie texte */}
                    <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0 md:pr-12">
                        <h2 className="mb-6 text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight">
                            Conduits sécurisés et performants
                        </h2>
                        
                        <p className="text-lg mb-6 text-gray-700">
                            La création de conduits est une étape cruciale dans l'installation de cheminées et poêles. Notre équipe spécialisée propose une gamme complète de solutions sur mesure pour répondre à vos besoins spécifiques en matière d'évacuation des fumées. Que vous optiez pour des conduits extérieurs ou intérieurs, en acier inoxydable ou en céramique, nous concevons et installons des conduits qui garantissent une performance optimale tout en respectant les normes de sécurité les plus strictes.
                        </p>
                        
                        <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-green-600">
                            <h3 className="text-xl font-semibold mb-3">Nos solutions de conduits comprennent :</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li><strong>Tubage de conduits existants</strong> - Réhabilitation sécurisée de vos conduits anciens</li>
                                <li><strong>Création de conduits double paroi isolés</strong> - Performance optimale et sécurité maximale</li>
                                <li><strong>Installation de conduits pour poêles</strong> - Solutions adaptées pour bois et granulés</li>
                                <li><strong>Sorties de toit et souches</strong> - Fabrication sur mesure esthétique et fonctionnelle</li>
                                <li><strong>Réparation de conduits endommagés</strong> - Intervention rapide et durable</li>
                            </ul>
                        </div>
                        
                        <p className="text-lg mb-6 text-gray-700">
                            Pour les nouvelles constructions, nous planifions et intégrons les conduits dès les premières phases du projet, assurant une intégration harmonieuse et efficace avec votre architecture. Pour les rénovations, nous proposons des solutions adaptées pour remplacer ou moderniser vos conduits existants, améliorant ainsi l'efficacité énergétique et la sécurité de votre système de chauffage.
                        </p>
                        
                        <p className="text-lg mb-8 text-gray-700">
                            Nos services incluent également des options de conduits isolés pour une meilleure protection thermique et acoustique, ainsi que des solutions de nettoyage et d'entretien régulières pour maintenir la performance optimale de vos conduits au fil du temps. <strong>Tous nos travaux sont garantis et respectent scrupuleusement les normes DTU 24.1</strong>, vous assurant tranquillité d'esprit et conformité avec votre assurance habitation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <Link 
                                href="/contact" 
                                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition-colors duration-300"
                            >
                                Demander un devis gratuit
                                <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                            
                            <a 
                                href="tel:+33658285756" 
                                className="inline-flex items-center justify-center px-6 py-3 border border-green-600 text-green-700 hover:bg-green-50 font-medium rounded-lg transition-colors duration-300"
                            >
                                <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Appeler maintenant
                            </a>
                        </div>
                    </div>
                    
                    {/* Partie image avec badges */}
                    <div className="w-full md:w-1/2 px-4">
                        <div className="relative mx-auto md:mr-0 max-w-full">
                            {/* Image principale */}
                            <div className="relative overflow-hidden rounded-2xl shadow-xl">
                                <Image
                                    src="/image/realisations/img21.jpeg"
                                    alt="Installation professionnelle de conduits pour cheminée"
                                    width={600}
                                    height={750}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                                
                                {/* Élément décoratif */}
                                <div className="absolute -right-8 -bottom-8 z-10">
                                    <Image
                                        src="/image/dots.svg"
                                        alt=""
                                        width={144}
                                        height={144}
                                        className="w-28 lg:w-36 xl:w-40"
                                    />
                                </div>
                                
                                {/* Badge certification */}
                                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                                    <p className="text-sm font-medium text-gray-900">Installation certifiée DTU 24.1</p>
                                </div>
                            </div>
                            
                            {/* Galerie secondaire */}
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className="relative overflow-hidden rounded-lg shadow-md">
                                    <Image
                                        src="/image/realisations/img22.jpeg"
                                        alt="Détail de conduit double paroi isolé"
                                        width={280}
                                        height={200}
                                        className="w-full h-40 object-cover"
                                    />
                                </div>
                                <div className="relative overflow-hidden rounded-lg shadow-md">
                                    <Image
                                        src="/image/realisations/img20.jpeg"
                                        alt="Sortie de toit pour conduit de cheminée"
                                        width={280}
                                        height={200}
                                        className="w-full h-40 object-cover"
                                    />
                                </div>
                            </div>
                            
                            {/* Bandeau d'information */}
                            <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Intervention dans toute la région</h3>
                                <p className="text-gray-700">Installation et rénovation de conduits de cheminée par des professionnels certifiés. Conformité garantie avec toutes les normes de sécurité en vigueur.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Le reste du contenu comme précédemment... */}
                
                {/* Section types de conduits */}
                <div className="mt-16 lg:mt-24">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
                        Types de conduits que nous installons
                    </h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <h3 className="text-xl font-medium mb-3 border-b pb-2 border-amber-200">Conduits maçonnés</h3>
                            <p className="text-gray-600 mb-4">Conduits traditionnels en briques ou en béton, idéaux pour les nouvelles constructions. Offrent une excellente inertie thermique et une grande durabilité.</p>
                            <p className="italic text-sm text-gray-500">Convient pour : cheminées ouvertes, foyers fermés, poêles à bois traditionnels.</p>
                        </div>
                        
                        {/* Autres types de conduits... */}
                    </div>
                </div>

                {/* Autres sections... */}
                
                {/* Appel à l'action final */}
                <div className="mt-16 text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                        Besoin d'un conduit de cheminée sur mesure ?
                    </h2>
                    <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                        Nos experts sont disponibles pour étudier votre projet et vous proposer la solution la plus adaptée à vos besoins et à votre budget.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link 
                            href="/contact" 
                            className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition-colors duration-300"
                        >
                            Demander une étude personnalisée
                            <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                        <a
                            href="tel:+33658285756"
                            className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-600 text-green-700 hover:bg-green-50 font-medium rounded-lg transition-colors duration-300"
                        >
                            <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            06 58 28 57 56
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ConduitsClient;
