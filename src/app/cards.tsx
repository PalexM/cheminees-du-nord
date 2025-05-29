"use client";

import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";

const sections = [
    {
        title: "Qualification RGE",
        description: "Notre certification RGE (Reconnu Garant de l'Environnement) atteste de notre expertise en rénovation énergétique. Elle vous garantit un travail de qualité et vous permet d'accéder aux aides financières de l'État pour vos projets.",
        image: "/image/rge2.jpg",
        altText: "Badge de certification RGE - Reconnu Garant de l'Environnement",
        buttonText: "En Savoir Plus",
        link: "https://france-renov.gouv.fr/recrutement/qualifications-rge#:~:text=La%20mention%20RGE%20%C2%AB%20Reconnu%20Garant,dans%20une%20d%C3%A9marche%20de%20qualit%C3%A9.",
        external: true,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
        )
    },
    {
        title: "Prime Énergie",
        description: "Nos poêles et cheminées à haute efficacité énergétique vous rendent éligible à la prime énergie, réduisant significativement votre investissement initial tout en vous permettant de réaliser des économies durables.",
        image: "/image/money_save.jpg",
        altText: "Économies financières grâce à la Prime Énergie pour vos installations de chauffage",
        buttonText: "Contactez Nous",
        link: "/contact",
        external: false,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>
        )
    },
    {
        title: "Programme Parrainage",
        description: "Recommandez nos services à vos proches et recevez des avantages exclusifs pour chaque installation réalisée. Notre façon de vous remercier pour votre confiance et votre fidélité.",
        image: "/image/phone.jpg",
        altText: "Programme de parrainage pour recommander des proches à Cheminées du Nord",
        buttonText: "Contactez Nous",
        link: "/contact",
        external: false,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
        )
    },
];

function InfoSection() {
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
            className="bg-white  mt-8"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* En-tête de section élégant */}
                <div className="text-center mb-16 animate-on-scroll opacity-0 duration-700 translate-y-4" style={{ transitionDelay: '100ms' }}>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight mb-3">
                        Nos <span className="font-medium">Avantages</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto"></div>
                </div>
                
                {/* Grille de cartes avec plus d'espacement */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 xl:gap-20 max-w-7xl mx-auto">
                    {sections.map((section, index) => (
                        <article 
                            key={`card-${index}`}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 animate-on-scroll opacity-0 translate-y-8"
                            style={{ transitionDelay: `${200 + index * 150}ms` }}
                        >
                            <div className="relative h-56 w-full overflow-hidden">
                                <Image
                                    src={section.image}
                                    alt={section.altText}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    priority={index === 0}
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex items-center">
                                        <div className="p-2 rounded-full bg-white/80 backdrop-blur-sm text-green-600">
                                            {section.icon}
                                        </div>
                                        <h3 className="ml-3 text-xl font-medium text-white drop-shadow-md">
                                            {section.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="p-7">
                                <p className="text-gray-600 leading-relaxed">
                                    {section.description}
                                </p>
                                <div className="mt-8 flex justify-center">
                                    {section.external ? (
                                        <a 
                                            href={section.link} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-5 py-2.5 bg-green-600 text-white font-medium rounded-full hover:from-emerald-600 hover:to-green-700 transition-all duration-300 shadow-sm"
                                            aria-label={`${section.buttonText} sur ${section.title}`}
                                        >
                                            {section.buttonText}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    ) : (
                                        <Link
                                            href={section.link}
                                            className="inline-flex items-center px-5 py-2.5 bg-green-600 text-white font-medium rounded-full hover:from-emerald-600 hover:to-green-700 transition-all duration-300 shadow-sm"
                                            aria-label={`${section.buttonText} sur ${section.title}`}
                                        >
                                            {section.buttonText}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
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
                
                .duration-500 {
                    transition-duration: 500ms;
                }
                
                .translate-y-4 {
                    transform: translateY(16px);
                }
                
                .translate-y-8 {
                    transform: translateY(32px);
                }
                
                .opacity-0 {
                    opacity: 0;
                }
            `}</style>
        </section>
    );
}

export default InfoSection;
