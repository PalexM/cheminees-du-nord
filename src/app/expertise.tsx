"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

function Services() {
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

    const services = [
        {
            id: "expertise",
            title: "Expertise & Savoir-Faire",
            description: "Nos techniciens certifiés maîtrisent l'installation et l'entretien des systèmes de chauffage de nouvelle génération, alliant techniques traditionnelles et innovations contemporaines.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
            )
        },
        {
            id: "qualite",
            title: "Excellence & Design",
            description: "Nous sélectionnons exclusivement des modèles primés pour leur design et performance. Chacun de nos produits répond aux normes environnementales les plus exigeantes et s'intègre parfaitement dans les intérieurs contemporains.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
            )
        },
        {
            id: "service",
            title: "Service Sur-Mesure",
            description: "Notre approche hautement personnalisée commence par une étude détaillée de votre espace et de vos besoins énergétiques. Nous concevons des solutions qui allient esthétique contemporaine et performance thermique optimale.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            )
        },
    ];

    return (
        <section 
            ref={sectionRef}
            className="bg-white py-20"

        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* En-tête de section élégant */}
                <div className="text-center mb-16 animate-on-scroll opacity-0 duration-700 translate-y-4" style={{ transitionDelay: '100ms' }}>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight mb-3">
                        Notre <span className="font-medium">Signature</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto"></div>
                </div>
                
                {/* Image à gauche, texte à droite */}
                <div className="flex flex-col lg:flex-row items-start gap-16">
                    {/* Image à gauche avec animations et style */}
                    <div className="lg:w-1/2 animate-on-scroll opacity-0 translate-x-8 duration-1000" style={{ transitionDelay: '200ms' }}>
                        <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl relative">
                            <div className="absolute inset-0">
                                <Image
                                    src="/image/cheminee.jpg"
                                    alt="Cheminée contemporaine design installée par Cheminées du Nord"
                                    fill
                                    priority={true}
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover h-full w-full"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            
                            {/* Badge sur l'image */}
                            <div className="absolute left-6 bottom-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                                <p className="text-sm font-medium text-gray-900">Installations certifiées RGE</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Services à droite avec animations et icônes */}
                    <div className="lg:w-1/2 animate-on-scroll opacity-0 translate-y-8 duration-1000" style={{ transitionDelay: '400ms' }}>
                        {services.map((service, index) => (
                            <div 
                                key={service.id} 
                                className="mb-12 last:mb-0 animate-on-scroll opacity-0 translate-y-4 duration-700"
                                style={{ transitionDelay: `${600 + index * 200}ms` }}
                            >
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 p-1">
                                        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center text-amber-600">
                                            {service.icon}
                                        </div>
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="text-xl lg:text-2xl font-medium text-gray-900 mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Ligne séparatrice élégante sauf pour le dernier élément */}
                                {index < services.length - 1 && (
                                    <div className="mt-10 border-b border-gray-100"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Lien centré en bas avec animation et style */}
                <div className="mt-16 text-center animate-on-scroll opacity-0 translate-y-4 duration-700" style={{ transitionDelay: '1000ms' }}>
                    <a 
                        href="/contact"
                        className="inline-flex items-center group"
                    >
                        <span className="text-orange-600 font-medium text-lg">Découvrir nos réalisations</span>
                        <span className="ml-3 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-orange-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </span>
                    </a>
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
                
                .translate-y-4 {
                    transform: translateY(16px);
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

export default Services;
