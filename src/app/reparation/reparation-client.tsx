/* eslint-disable react/no-unescaped-entities */
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ReparationClient = () => {
    return (
        <section className="relative bg-white overflow-hidden py-16 md:py-20" style={{ backgroundImage: "url('/image/pattern-white.svg')", backgroundPosition: "center" }}>
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight mb-4">
                        Entretien et Réparation de Poêles
                    </h1>
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500"></div>
                    </div>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Maintenez la performance et prolongez la durée de vie de votre système de chauffage grâce à nos services d'entretien spécialisés
                    </p>
                </div>
                
                <div className="flex flex-wrap xl:items-start -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0 md:pr-12">
                        <h2 className="mb-6 text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight">
                            Expertise en entretien et réparation de poêles
                        </h2>
                        
                        <p className="text-lg mb-6 text-gray-700">
                            Nos services d'entretien et de réparation de poêles sont conçus pour prolonger la durée de vie de votre équipement tout en assurant une efficacité optimale. Que votre poêle nécessite un simple ajustement, une réparation ou un entretien périodique, notre équipe est formée pour identifier et résoudre efficacement tout problème.
                        </p>
                        
                        <p className="text-lg mb-6 text-gray-700">
                            Nous utilisons des pièces de rechange de qualité et des techniques éprouvées pour garantir que votre poêle fonctionne de manière fiable et économe en énergie. Avec notre engagement envers la qualité et la satisfaction du client, nous sommes là pour vous aider à maintenir un environnement chaleureux et confortable toute l'année.
                        </p>
                        
                        <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-green-600">
                            <h3 className="text-xl font-semibold mb-3">Nos services de maintenance incluent :</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span><strong>Entretien annuel</strong> de tous types de poêles (bois, granulés)</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span><strong>Diagnostic et réparation</strong> des dysfonctionnements</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span><strong>Remplacement de pièces</strong> usées ou défectueuses</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span><strong>Optimisation des performances</strong> et du rendement énergétique</span>
                                </li>
                            </ul>
                        </div>
                        
                        <Link 
                            href="/contact" 
                            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition-colors duration-300"
                        >
                            Demander une intervention
                            <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                    
                    <div className="w-full md:w-1/2 px-4 lg:px-12">
                        <div className="relative mx-auto md:mr-0 max-w-full">
                            {/* Image principale avec optimisation Next.js */}
                            <div className="relative overflow-hidden rounded-2xl shadow-xl">
                                <Image
                                    src="/image/realisations/img18.jpeg"
                                    alt="Entretien et réparation professionnels de poêle à bois"
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
                            </div>
                            
                            {/* Information supplémentaire */}
                            <div className="mt-6 bg-gray-50 p-5 rounded-lg border border-gray-100">
                                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Pourquoi entretenir votre poêle ?</h3>
                                <ul className="space-y-1">
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Sécurité et prévention des risques</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Économies d'énergie et de combustible</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Prolongation de la durée de vie</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Conformité avec les garanties fabricant</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Section texte supplémentaire pour SEO */}
                <div className="mt-16 max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-semibold mb-4">Un entretien régulier pour une performance durable</h2>
                    <p className="text-gray-700 mb-4">
                        L'entretien régulier de votre poêle est essentiel pour garantir sa longévité et son efficacité. 
                        Nos techniciens qualifiés effectuent un diagnostic complet et s'assurent que toutes les pièces 
                        fonctionnent correctement, vous permettant ainsi de profiter pleinement de votre système de chauffage 
                        en toute sécurité.
                    </p>
                    <p className="text-gray-700">
                        Faites confiance à notre expertise pour maintenir votre poêle en parfait état de fonctionnement 
                        tout au long de l'année. Nous intervenons rapidement dans toute la région pour vous offrir un service 
                        de qualité, que ce soit pour une maintenance préventive ou une réparation urgente.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ReparationClient;
