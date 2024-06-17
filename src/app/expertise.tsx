"use client";

import {
    Typography,
} from "@material-tailwind/react";
import { FireIcon } from "@heroicons/react/24/solid"; // Ensure you have the correct import for FireIcon

function Services() {
    const services = [
        {
            title: "Expertise et Savoir-Faire",
            description: "Nos techniciens qualifiés possèdent une expertise reconnue dans l'installation et l'entretien de cheminées et poêles. Nous utilisons des techniques éprouvées et des matériaux de haute qualité pour garantir une durabilité et une performance optimales.",
            icon: <FireIcon className="h-6 w-6 text-red-500 mx-auto mb-2" />,
        },
        {
            title: "Produits de Qualité",
            description: "Nous sélectionnons rigoureusement nos produits parmi les meilleures marques du marché. Chaque cheminée et poêle que nous proposons est testé pour répondre aux normes de sécurité et de performance les plus strictes.",
            icon: <FireIcon className="h-6 w-6 text-red-500 mx-auto mb-2" />,
        },
        {
            title: "Service Personnalisé",
            description: "Chez Cheminées du Nord, chaque projet est unique. Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins spécifiques et offrir des solutions personnalisées qui dépassent leurs attentes.",
            icon: <FireIcon className="h-6 w-6 text-red-500 mx-auto mb-2" />,
        },
    ];

    return (
        <section className="bg-white border border-gray-200 shadow-lg rounded-lg p-8 mt-8 flex flex-col md:flex-row justify-between items-center" style={{ marginTop: "100px" }}>
            <div className="flex-1 pr-8 hidden md:block" style={{ maxWidth: '50%' }}>
                <img
                    src="/image/cheminee.jpg" // Replace with the correct path if needed
                    alt="Fireplace"
                    className="object-cover rounded-lg mx-auto"
                    style={{ width: '100%', height: '600px', objectPosition: 'center 70%' }} // Adjust the size as needed
                />
            </div>
            <div className="flex-1">
                {services.map((service, index) => (
                    <div key={index} className="text-center mb-8">
                        <div className="mb-4">
                            {service.icon}
                        </div>
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            {service.title}
                        </Typography>
                        <Typography variant="lead" color="gray" className="font-normal">
                            {service.description}
                        </Typography>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;
