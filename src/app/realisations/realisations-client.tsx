/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// Liste des images
const images = [
    {
        src: "/image/realisations/img.jpeg",
        alt: "Cheminée moderne avec poêle à bois",
    },
    {
        src: "/image/realisations/img1.jpeg",
        alt: "Installation de cheminée contemporaine",
    },
    {
        src: "/image/realisations/img2.jpeg",
        alt: "Cheminée design moderne",
    },
    {
        src: "/image/realisations/img3.jpeg",
        alt: "Poêle à bois dans une cheminée moderne",
    },
    {
        src: "/image/realisations/img4.jpeg",
        alt: "Cheminée avec conduit en acier",
    },
    {
        src: "/image/realisations/img5.jpeg",
        alt: "Cheminée élégante et moderne",
    },
    {
        src: "/image/realisations/img6.jpeg",
        alt: "Installation de poêle à bois",
    },
    {
        src: "/image/realisations/img7.jpeg",
        alt: "Cheminée avec poêle à bois intégré",
    },
    {
        src: "/image/realisations/img8.jpeg",
        alt: "Design moderne de cheminée",
    },
    {
        src: "/image/realisations/img9.jpeg",
        alt: "Cheminée en pierre moderne",
    },
    {
        src: "/image/realisations/img10.jpeg",
        alt: "Poêle à bois contemporain",
    },
    {
        src: "/image/realisations/img11.jpeg",
        alt: "Cheminée avec poêle intégré",
    },
    {
        src: "/image/realisations/img12.jpeg",
        alt: "Conduit de cheminée moderne",
    },
    {
        src: "/image/realisations/img13.jpeg",
        alt: "Cheminée en métal moderne",
    },
    {
        src: "/image/realisations/img14.jpeg",
        alt: "Cheminée avec poêle et conduit",
    },
    {
        src: "/image/realisations/img15.jpeg",
        alt: "Poêle à bois design moderne",
    },
    {
        src: "/image/realisations/img16.jpeg",
        alt: "Installation de cheminée en pierre",
    },
    {
        src: "/image/realisations/img17.jpeg",
        alt: "Cheminée avec poêle à bois contemporain",
    },
    {
        src: "/image/realisations/img18.jpeg",
        alt: "Cheminée moderne et élégante",
    },
    {
        src: "/image/realisations/img19.jpeg",
        alt: "Design de cheminée contemporaine",
    },
    {
        src: "/image/realisations/img20.jpeg",
        alt: "Cheminée avec installation de poêle",
    },
    {
        src: "/image/realisations/img21.jpeg",
        alt: "Poêle à bois intégré dans une cheminée",
    },
    {
        src: "/image/realisations/img22.jpeg",
        alt: "Cheminée moderne avec conduit en acier",
    },
    {
        src: "/image/realisations/img23.jpeg",
        alt: "Cheminée et poêle à bois",
    },
    {
        src: "/image/realisations/img24.jpeg",
        alt: "Installation contemporaine de cheminée",
    },
    {
        src: "/image/realisations/img25.jpeg",
        alt: "Cheminée moderne en pierre",
    },
    {
        src: "/image/realisations/img26.jpeg",
        alt: "Conduit de cheminée élégant",
    },
    {
        src: "/image/realisations/img27.jpeg",
        alt: "Poêle à bois moderne",
    },
    {
        src: "/image/realisations/img28.jpeg",
        alt: "Cheminée avec poêle à bois et conduit",
    },
    {
        src: "/image/realisations/img29.jpeg",
        alt: "Design élégant de cheminée",
    },
    {
        src: "/image/realisations/img30.jpeg",
        alt: "Cheminée contemporaine avec poêle",
    },
    {
        src: "/image/realisations/img31.jpeg",
        alt: "Cheminée moderne en métal",
    },
    {
        src: "/image/realisations/img32.jpeg",
        alt: "Poêle à bois avec cheminée intégrée",
    },
];

const RealisationsClient = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    // Ouvrir l'image en plein écran
    const openModal = (index: number) => {
        setSelectedImage(index);
        document.body.style.overflow = 'hidden';
    };

    // Fermer l'image plein écran
    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section className="bg-white py-16 md:py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight mb-4">
                        Nos Réalisations
                    </h1>
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500"></div>
                    </div>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Découvrez nos plus belles installations de cheminées et poêles à bois réalisées par nos experts
                    </p>
                </div>
                
                {/* Galerie d'images en grid responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                        <div 
                            key={index} 
                            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-[1.02]"
                            onClick={() => openModal(index)}
                        >
                            <div className="aspect-square relative">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity"></div>
                            </div>
                            
                            {/* Légende masquée qui apparaît au survol */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transform translate-y-full hover:translate-y-0 transition-transform">
                                <p className="text-white text-sm">{image.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Texte informatif pour le SEO en bas de la galerie */}
                <div className="mt-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-4">Nos installations sur mesure</h2>
                    <p className="text-gray-600 mb-4">
                        Chaque projet visible dans notre galerie a été réalisé par nos artisans cheministes expérimentés. 
                        Nous intervenons dans toute la région Hauts-de-France et en région parisienne pour l'installation 
                        de poêles à bois, cheminées contemporaines et inserts de haute qualité.
                    </p>
                    <p className="text-gray-600">
                        Que vous cherchiez l'inspiration pour votre futur projet ou que vous souhaitiez voir la qualité 
                        de notre travail, cette galerie témoigne de notre expertise et de notre savoir-faire dans le domaine 
                        des installations de chauffage au bois.
                    </p>
                </div>
                
                {/* Contact CTA */}
                <div className="mt-12 text-center">
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition-colors duration-300"
                    >
                        Discuter de votre projet
                        <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
            
            {/* Modal d'image plein écran */}
            {selectedImage !== null && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
                    onClick={closeModal}
                >
                    <div className="relative max-w-5xl w-full h-full flex items-center justify-center p-4">
                        <button
                            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
                            onClick={closeModal}
                        >
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                        <div className="w-full h-full relative" onClick={(e) => e.stopPropagation()}>
                            <Image
                                src={images[selectedImage].src}
                                alt={images[selectedImage].alt}
                                fill
                                sizes="100vw"
                                className="object-contain"
                                priority
                            />
                        </div>
                        
                        {/* Navigation d'image */}
                        {selectedImage > 0 && (
                            <button
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage(selectedImage - 1);
                                }}
                            >
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        )}
                        
                        {selectedImage < images.length - 1 && (
                            <button
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage(selectedImage + 1);
                                }}
                            >
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default RealisationsClient;
