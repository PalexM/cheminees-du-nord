"use client";

import React from 'react';

const Installations = () => {
    return (
        <section className="relative bg-white overflow-hidden" style={{ backgroundImage: "url('/image/pattern-white.svg')", backgroundPosition: "center" }}>
            <div className="py-12 md:py-16">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">
                            {"Pose et Installation de Poêles et Cheminées"}
                        </h1>
                    </div>
                    <div className="flex flex-wrap xl:items-start -mx-4">
                        <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0 md:pr-12">
                            <h2 className="mb-6 text-2xl md:text-3xl lg:text-4xl leading-tight font-bold tracking-tight">
                                {"Installation Expert de Poêles et Cheminées sur Mesure"}
                            </h2>
                            <p className="text-lg mb-4 text-gray-700">
                                {"Notre entreprise se spécialise dans l'installation professionnelle de poêles et cheminées, offrant une gamme complète de services pour répondre à vos besoins spécifiques. Que vous souhaitiez ajouter une touche chaleureuse et élégante à votre intérieur avec une cheminée traditionnelle en pierre ou opter pour un poêle moderne à haute efficacité énergétique, nous sommes là pour vous aider. Nos installateurs expérimentés assurent non seulement une installation sûre et conforme aux normes, mais également une esthétique impeccable qui s'intègre harmonieusement à votre espace. Nous nous engageons à vous fournir des solutions de chauffage durable et économique, tout en mettant l'accent sur la sécurité et la satisfaction du client."}
                            </p>
                            <button className="py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg">
                                <a href="/contact">
                                    Nous-Contacter
                                </a>
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
                                    src="/image/realisations/img12.jpeg"
                                    alt="Installation de cheminée"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Installations;