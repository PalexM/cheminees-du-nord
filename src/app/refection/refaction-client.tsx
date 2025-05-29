/* eslint-disable react/no-unescaped-entities */
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RefactionClient = () => {
    return (
        <section className="relative bg-white overflow-hidden py-16 md:py-20" style={{ backgroundImage: "url('/image/pattern-white.svg')", backgroundPosition: "center" }}>
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight mb-4">
                        Réfection des Murs et des Plafonds
                    </h1>
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500"></div>
                    </div>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Transformez votre intérieur avec nos services professionnels de rénovation et finition
                    </p>
                </div>
                
                <div className="flex flex-wrap xl:items-start -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0 md:pr-12">
                        <h2 className="mb-6 text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight">
                            Réfection pour un intérieur parfaitement coordonné
                        </h2>
                        
                        <p className="text-lg mb-6 text-gray-700">
                            Notre entreprise offre également des services spécialisés de réfection des murs et des plafonds, complémentaires à notre expertise dans l'installation de poêles, cheminées et conduits. Que ce soit pour préparer vos murs et plafonds avant l'installation d'un nouveau système de chauffage ou pour rénover l'esthétique de votre intérieur après travaux, notre équipe expérimentée est là pour vous offrir des solutions sur mesure.
                        </p>
                        
                        <p className="text-lg mb-6 text-gray-700">
                            Nous nous engageons à utiliser des matériaux de qualité et des techniques de pointe pour garantir des résultats durables et esthétiquement agréables. Faites confiance à notre expertise pour transformer votre espace avec professionnalisme et précision, en harmonie avec vos besoins et votre vision.
                        </p>
                        
                        <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-green-600">
                            <h3 className="text-xl font-semibold mb-3">Nos services de réfection incluent :</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span><strong>Préparation des murs</strong> avant et après installation de systèmes de chauffage</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span><strong>Plâtrerie</strong> et réparation des surfaces endommagées</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span><strong>Peinture et finitions</strong> adaptées à votre décoration intérieure</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span><strong>Rénovation complète</strong> pour une intégration parfaite de vos équipements de chauffage</span>
                                </li>
                            </ul>
                        </div>
                        
                        <Link 
                            href="/contact" 
                            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition-colors duration-300"
                        >
                            Demander un devis
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
                                    src="/image/realisations/img30.jpeg"
                                    alt="Réfection des murs et plafonds pour installation de cheminée"
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
                                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Avantages de notre service</h3>
                                <ul className="space-y-1">
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Intégration parfaite avec vos travaux de chauffage</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Matériaux de qualité professionnelle</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Équipe expérimentée et polyvalente</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Finitions soignées et durables</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Section texte supplémentaire pour SEO */}
                <div className="mt-16 max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-semibold mb-4">Un service complet pour votre intérieur</h2>
                    <p className="text-gray-700 mb-4">
                        La réfection des murs et des plafonds est une étape essentielle lors de l'installation ou de la rénovation 
                        de votre système de chauffage. Nos artisans expérimentés s'assurent que l'intégration de votre poêle 
                        ou cheminée s'accorde parfaitement avec votre décoration intérieure, créant un ensemble harmonieux 
                        et fonctionnel.
                    </p>
                    <p className="text-gray-700">
                        En choisissant notre service complet, vous bénéficiez d'un interlocuteur unique pour l'ensemble 
                        de votre projet, de l'installation de votre système de chauffage à la finition des murs et plafonds, 
                        vous garantissant ainsi un résultat cohérent et de qualité.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RefactionClient;
