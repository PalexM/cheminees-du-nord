"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Environment() {
    // Refs pour les animations au scroll
    const sectionRef = useRef(null);
    
    useEffect(() => {
        if (!window.IntersectionObserver) return;
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.2 }
        );
        
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.observe(el));
        
        return () => elements.forEach(el => observer.unobserve(el));
    }, []);

    return (
        <section 
            ref={sectionRef}
            className="bg-white py-12 mt-8"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Conteneur avec flexbox et plus d'espace entre les colonnes */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                    {/* Contenu textuel */}
                    <div className="md:w-1/2 p-8 md:p-10 lg:p-12 flex flex-col justify-center animate-on-scroll opacity-0 translate-y-8 duration-700" style={{ transitionDelay: '100ms' }}>
                        <div className="flex items-center justify-center mb-6">
                            <div className="h-16 w-16 rounded-full bg-green-50 flex items-center justify-center">
                                <svg className="h-8 w-8 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                                </svg>
                            </div>
                        </div>
                        <h2 className="text-center text-3xl font-light text-gray-900 tracking-tight mb-4">
                            <span className="font-medium">{" Économies d'Énergie "}</span> et Écologie
                        </h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto mb-6"></div>
                        <p className="text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto">
                           {" En optant pour nos cheminées et poêles, vous choisissez un chauffage écologique et économique. Nos produits maximisent l'efficacité énergétique, réduisant vos factures tout en utilisant des sources d'énergie renouvelables et neutres en carbone. Un investissement intelligent pour votre budget et pour la planète. "}
                        </p>
                        <div className="mt-6 text-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center px-5 py-2.5 bg-green-600 text-white font-medium rounded-full hover:from-emerald-600 hover:to-green-700 transition-all duration-300 shadow-sm"
                            >
                                Contactez Nous
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                        <div className="mt-6 text-center text-sm text-gray-500">
                            <p>Découvrez également des initiatives écologiques locales sur{' '}
                                <Link href="https://explorez.eu/" rel="nofollow" className="text-green-600 hover:underline">
                                    Explorez.eu
                                </Link>
                            </p>
                        </div>
                    </div>
                    
                    {/* Image */}
                    <div className="md:w-1/2 relative h-[300px] md:h-auto animate-on-scroll opacity-0 translate-x-8 duration-1000" style={{ transitionDelay: '300ms' }}>
                        <div className="absolute inset-0">
                            <Image
                                src="/image/forest.jpg"
                                alt="Forêt représentant l'engagement écologique de nos solutions de chauffage"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent opacity-60"></div>
                        
                        {/* Badge sur l'image */}
                        <div className="absolute right-6 bottom-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                            <p className="text-sm font-medium text-gray-900">Solutions écologiques</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .animate-in {
                    opacity: 1 !important;
                    transform: translate(0, 0) !important;
                }
                
                .duration-700 {
                    transition-duration: 700ms;
                }
                
                .duration-1000 {
                    transition-duration: 1000ms;
                }
                
                .translate-y-8 {
                    transform: translateY(32px);
                }
                
                .translate-x-8 {
                    transform: translateX(32px);
                }
                
                .opacity-0 {
                    opacity: 0;
                }
            `}</style>
        </section>
    );
}

export default Environment;
