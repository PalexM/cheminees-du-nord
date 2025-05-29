/* eslint-disable react/no-unescaped-entities */
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const InstallationsClient = () => {
    return (
        <section className="relative bg-white overflow-hidden py-16 md:py-20" style={{ backgroundImage: "url('/image/pattern-white.svg')", backgroundPosition: "center" }}>
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight mb-4">
                        Pose et Installation de Poêles et Cheminées
                    </h1>
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500"></div>
                    </div>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Solutions de chauffage personnalisées, installées par des experts certifiés pour votre confort et votre sécurité
                    </p>
                </div>
                
                <div className="flex flex-wrap xl:items-start -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0 md:pr-12">
                        <h2 className="mb-6 text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight">
                            Installation expert de solutions de chauffage
                        </h2>
                        
                        <p className="text-lg mb-6 text-gray-700">
                            Notre entreprise se spécialise dans l'installation professionnelle de poêles et cheminées, offrant une gamme complète de services pour répondre à vos besoins spécifiques. Que vous souhaitiez ajouter une touche chaleureuse et élégante à votre intérieur avec une cheminée traditionnelle en pierre ou opter pour un poêle moderne à haute efficacité énergétique, nous sommes là pour vous aider.
                        </p>
                        
                        <p className="text-lg mb-6 text-gray-700">
                            Nos installateurs expérimentés assurent non seulement une installation sûre et conforme aux normes, mais également une esthétique qui s'intègre harmonieusement à votre espace. Nous nous engageons à vous fournir des solutions de chauffage durable et économique, tout en mettant l'accent sur la sécurité et la satisfaction du client.
                        </p>
                        
                        <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-green-600">
                            <h3 className="text-xl font-semibold mb-3">Nos services d'installation comprennent :</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span><strong>Installation de poêles à bois</strong> - traditionnels ou contemporains</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span><strong>Pose de poêles à granulés</strong> - solutions automatisées et performantes</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span><strong>Installation d'inserts</strong> - pour améliorer votre cheminée existante</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span><strong>Création de cheminées sur mesure</strong> - design personnalisé selon vos goûts</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link 
                                href="/contact" 
                                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition-colors duration-300"
                            >
                                Demander un devis
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
                    
                    <div className="w-full md:w-1/2 px-4">
                        <div className="relative mx-auto md:mr-0 max-w-full">
                            {/* Image principale avec optimisation Next.js */}
                            <div className="relative overflow-hidden rounded-2xl shadow-xl">
                                <Image
                                    src="/image/realisations/img12.jpeg"
                                    alt="Installation professionnelle de poêle à bois"
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
                                    <p className="text-sm font-medium text-gray-900">Installateur certifié RGE</p>
                                </div>
                            </div>
                            
                            {/* Galerie secondaire */}
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className="relative overflow-hidden rounded-lg shadow-md">
                                    <Image
                                        src="/image/realisations/img11.jpeg"
                                        alt="Installation d'un insert de cheminée"
                                        width={280}
                                        height={200}
                                        className="w-full h-40 object-cover"
                                    />
                                </div>
                                <div className="relative overflow-hidden rounded-lg shadow-md">
                                    <Image
                                        src="/image/realisations/img13.jpeg"
                                        alt="Pose de poêle à granulés design"
                                        width={280}
                                        height={200}
                                        className="w-full h-40 object-cover"
                                    />
                                </div>
                            </div>
                            
                            {/* Information supplémentaire */}
                            <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Pourquoi nous choisir</h3>
                                <ul className="space-y-1">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Installateurs certifiés et expérimentés</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Installation aux normes DTU 24.1</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Accompagnement pour les aides financières</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Zone de couverture - Important pour le SEO local */}
                <div className="mt-16 bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
                    <h2 className="text-xl font-semibold mb-6 text-center">
                        Zones d'intervention pour vos installations
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-medium text-lg text-green-600 mb-3">Oise (60)</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Labruyère, Compiègne, Beauvais, Senlis, Chantilly, Creil, Clermont, Noyon et communes environnantes.
                            </p>
                        </div>
                        
                        <div>
                            <h3 className="font-medium text-lg text-green-600 mb-3">Nord (59)</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Lille, Valenciennes, Douai, Cambrai, Maubeuge, Dunkerque et l'ensemble du département.
                            </p>
                        </div>
                        
                        <div>
                            <h3 className="font-medium text-lg text-green-600 mb-3">Région Parisienne</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Paris, Roissy, Meaux, Pontoise, Cergy et l'ensemble de l'Île-de-France.
                            </p>
                            <p className="text-gray-500 text-sm mt-2">
                                <strong>Siège social :</strong> 127 Rue Cavée Bruyet, 60140 Labruyère
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstallationsClient;
