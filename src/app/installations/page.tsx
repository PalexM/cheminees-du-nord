"use client";

import React from 'react';

const Installations = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center" style={{ marginTop: "2vh" }}>
            <header className="text-center py-10">
                <h1 className="text-4xl font-bold text-blue-gray-900">
                    {" Pose et Installation de Poêles et Cheminées "}
                </h1>
            </header>
            <main className="flex flex-col items-center px-4 md:flex-row md:justify-between md:w-3/4">
                <div className="max-w-md mb-8 text-center md:text-left md:w-1/2 md:mb-0">
                    <h2 className="text-3xl font-bold mb-4 text-blue-gray-900">
                        {" Installation Expert de Poêles et Cheminées sur Mesure "}
                    </h2>
                    <p className="text-lg mb-4 text-gray-700">
                        {" Notre entreprise se spécialise dans l'installation professionnelle de poêles et cheminées, offrant une gamme complète de services pour répondre à vos besoins spécifiques. Que vous souhaitiez ajouter une touche chaleureuse et élégante à votre intérieur avec une cheminée traditionnelle en pierre ou opter pour un poêle moderne à haute efficacité énergétique, nous sommes là pour vous aider. Nos installateurs expérimentés assurent non seulement une installation sûre et conforme aux normes, mais également une esthétique impeccable qui s'intègre harmonieusement à votre espace. Nous nous engageons à vous fournir des solutions de chauffage durable et économique, tout en mettant l'accent sur la sécurité et la satisfaction du client."}
                    </p>
                    <button className="py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg">
                        Nous-Contacter
                    </button>
                </div>
                <div className="md:w-1/2">
                    <img
                        src="/image/realisations/img12.jpeg"
                        alt="Installation de cheminée"
                        className="object-cover rounded-lg mx-auto"
                    />
                </div>
            </main>
        </div>
    );
}

export default Installations;