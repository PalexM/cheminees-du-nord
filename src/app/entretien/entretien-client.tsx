/* eslint-disable react/no-unescaped-entities */
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const EntretienClient = () => {
    return (
        <section className="relative bg-white overflow-hidden py-16 md:py-20" style={{ backgroundImage: "url('/image/pattern-white.svg')", backgroundPosition: "center" }}>
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight mb-4">
                        Nettoyage, Entretien et Ramonage de Conduits et Cheminées
                    </h1>
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500"></div>
                    </div>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Services professionnels de ramonage et d'entretien pour garantir la sécurité et la performance de votre installation de chauffage
                    </p>
                </div>
                
                <div className="flex flex-wrap xl:items-start -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0 md:pr-12">
                        <h2 className="mb-6 text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight">
                            Entretien régulier pour une sécurité optimale
                        </h2>
                        <p className="text-lg mb-6 text-gray-700">
                            Assurez-vous que vos cheminées et conduits fonctionnent de manière optimale avec nos services professionnels de nettoyage, entretien et ramonage. L'entretien régulier et le ramonage sont non seulement essentiels pour prévenir les risques d'incendie, mais ils sont également obligatoires selon la réglementation en vigueur. Un entretien régulier assure une efficacité énergétique maximale et prolonge la durée de vie de vos installations.
                        </p>
                        <p className="text-lg mb-6 text-gray-700">
                            Nos techniciens qualifiés utilisent des méthodes avancées et des équipements spécialisés pour éliminer efficacement les dépôts de suie, les obstructions et autres résidus nuisibles. En choisissant nos services, vous bénéficiez de plusieurs avantages:
                        </p>
                        
                        <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-green-600">
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-6 h-6 mt-1 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <p className="font-medium text-gray-900">Sécurité accrue</p>
                                        <p className="text-gray-700">Réduction des risques d'incendie et d'intoxication au monoxyde de carbone.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-6 h-6 mt-1 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <p className="font-medium text-gray-900">Efficacité énergétique</p>
                                        <p className="text-gray-700">Meilleure performance de vos systèmes de chauffage, réduisant ainsi vos coûts énergétiques.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-6 h-6 mt-1 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <p className="font-medium text-gray-900">Conformité réglementaire</p>
                                        <p className="text-gray-700">Respect des obligations légales de ramonage, évitant les amendes et les complications juridiques.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-6 h-6 mt-1 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <p className="font-medium text-gray-900">Tranquillité d'esprit</p>
                                        <p className="text-gray-700">Savoir que votre système de chauffage est entretenu selon les normes les plus strictes de sécurité et de performance.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                        <p className="text-lg text-gray-700 mb-8">
                            Faites confiance à notre expertise pour un entretien complet et professionnel de vos conduits et cheminées, garantissant un environnement sûr et confortable pour votre maison.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link 
                                href="/contact" 
                                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition-colors duration-300"
                            >
                                Prendre rendez-vous
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
                                    src="/image/realisations/img5.jpeg"
                                    alt="Ramonage professionnel de cheminée"
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
                                    <p className="text-sm font-medium text-gray-900">Service certifié avec garantie</p>
                                </div>
                            </div>
                            
                            {/* Information supplémentaire */}
                            <div className="mt-6 bg-gray-50 p-6 rounded-lg border border-gray-100">
                                <h3 className="font-semibold text-xl mb-3">Pourquoi faire confiance à nos services ?</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Techniciens certifiés et expérimentés</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Équipements et techniques modernes</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Certificat de ramonage conforme</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Service propre et soigné</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        {/* Ajouter des images secondaires */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="relative overflow-hidden rounded-lg shadow-md">
                                <Image
                                    src="/image/realisations/img6.jpeg"
                                    alt="Équipement professionnel de ramonage"
                                    width={280}
                                    height={200}
                                    className="w-full h-40 object-cover"
                                />
                            </div>
                            <div className="relative overflow-hidden rounded-lg shadow-md">
                                <Image
                                    src="/image/realisations/img7.jpeg"
                                    alt="Nettoyage de cheminée en cours"
                                    width={280}
                                    height={200}
                                    className="w-full h-40 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Section types de services de ramonage */}
                <div className="mt-20">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
                        Nos Services d'Entretien et de Ramonage
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-medium mb-3">Ramonage Réglementaire</h3>
                            <p className="text-gray-600">Ramonage complet du conduit avec délivrance d'un certificat officiel conformément à la réglementation en vigueur. Essentiel pour votre assurance habitation.</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-medium mb-3">Diagnostic par Caméra</h3>
                            <p className="text-gray-600">Inspection vidéo complète de votre conduit pour détecter avec précision les éventuels problèmes : fissures, obstructions ou défauts d'étanchéité.</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-medium mb-3">Entretien Complet</h3>
                            <p className="text-gray-600">Maintenance complète de votre installation : nettoyage de l'appareil, vérification des joints, contrôle des mécanismes et optimisation de la combustion.</p>
                        </div>
                    </div>
                </div>
                
                {/* Call to action */}
                <div className="mt-16 text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                        Besoin d'un entretien ou d'un ramonage ?
                    </h2>
                    <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                        N'attendez pas pour assurer la sécurité et la performance de votre installation de chauffage. Nos techniciens certifiés sont à votre service pour un entretien professionnel.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link 
                            href="/contact" 
                            className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition-colors duration-300"
                        >
                            Demander un devis
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
                
                {/* Zone de couverture - Important pour le SEO local */}
                <div className="mt-16 bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
                    <h2 className="text-2xl font-semibold mb-6 text-center">
                        Zones d'intervention pour vos besoins d'entretien
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-medium text-lg text-green-600 mb-3">Oise (60)</h3>
                            <p className="text-gray-600 leading-relaxed">
                                                                Labruyère, Compiègne, Beauvais, Senlis, Chantilly, Creil, Clermont, Noyon, Crépy-en-Valois, Pont-Sainte-Maxence et communes environnantes.
                            </p>
                        </div>
                        
                        <div>
                            <h3 className="font-medium text-lg text-green-600 mb-3">Nord (59)</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Lille, Valenciennes, Douai, Cambrai, Maubeuge, Dunkerque, Hazebrouck, Armentières, et l'ensemble du département.
                            </p>
                        </div>
                        
                        <div>
                            <h3 className="font-medium text-lg text-green-600 mb-3">Région Parisienne</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Paris, Roissy, Meaux, Pontoise, Cergy, Val d'Oise et l'ensemble de l'Île-de-France pour vos besoins d'entretien et de ramonage.
                            </p>
                            <p className="text-gray-500 text-sm mt-2">
                                <strong>Siège social :</strong> 127 Rue Cavée Bruyet, 60140 Labruyère
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Section informative sur l'obligation de ramonage */}
                <div className="mt-16 max-w-5xl mx-auto">
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                        <h3 className="text-xl font-semibold text-amber-800 mb-3">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Bon à savoir : Obligation légale de ramonage
                            </div>
                        </h3>
                        <p className="text-amber-800 mb-4">
                            Selon la réglementation française (Règlement Sanitaire Départemental Type - RSDT), le ramonage des conduits de fumée est obligatoire deux fois par an, dont une fois pendant la période de chauffe, pour tous les appareils de chauffage à combustion (bois, charbon, fuel, gaz).
                        </p>
                        <p className="text-amber-800">
                            Cette obligation légale vous protège contre les risques d'incendie et d'intoxication au monoxyde de carbone. De plus, en cas de sinistre, votre assurance habitation exigera un certificat de ramonage récent. Notre service inclut systématiquement la délivrance de ce certificat officiel.
                        </p>
                    </div>
                </div>
                
                {/* Lien vers la FAQ */}
                <div className="mt-16 text-center">
                    <p className="text-lg text-gray-700">
                        Vous avez d'autres questions concernant l'entretien de votre cheminée ou poêle ? 
                        <Link href="/faq" className="text-green-600 hover:text-green-700 ml-2 font-medium">
                            Consultez notre FAQ
                        </Link>
                    </p>
                </div>
                
                {/* Présentation de notre processus */}
                <div className="mt-16 mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
                        Notre Processus d'Entretien Professionnel
                    </h2>
                    
                    <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-xl font-bold text-green-600">1</span>
                            </div>
                            <h3 className="text-lg font-medium mb-2">Inspection</h3>
                            <p className="text-gray-600">Évaluation complète de l'état de votre conduit et de votre appareil</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-xl font-bold text-green-600">2</span>
                            </div>
                            <h3 className="text-lg font-medium mb-2">Nettoyage</h3>
                            <p className="text-gray-600">Élimination de tous les résidus de combustion et obstructions</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-xl font-bold text-green-600">3</span>
                            </div>
                            <h3 className="text-lg font-medium mb-2">Vérification</h3>
                            <p className="text-gray-600">Contrôle de l'étanchéité, du tirage et des éléments mécaniques</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-xl font-bold text-green-600">4</span>
                            </div>
                            <h3 className="text-lg font-medium mb-2">Certification</h3>
                            <p className="text-gray-600">Délivrance du certificat de ramonage obligatoire</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EntretienClient;
