"use client";

import Image from "next/image";

const sections = [
    {
        title: "Qualification RGE",
        description: "Cheminées du Nord possède la qualification RGE (Reconnu Garant de l'Environnement), un label de qualité attribué aux professionnels du bâtiment engagés dans des travaux de rénovation énergétique. Cette certification assure un travail de haute qualité effectué par des experts compétents, tout en vous permettant d'accéder à des aides financières pour vos projets de rénovation énergétique.",
        image: "/image/rge2.jpg",
        buttonText: "En Savoir Plus",
        link: "https://france-renov.gouv.fr/recrutement/qualifications-rge#:~:text=La%20mention%20RGE%20%C2%AB%20Reconnu%20Garant,dans%20une%20d%C3%A9marche%20de%20qualit%C3%A9." // Adaugă link-ul specific
    },
    {
        title: "Éligible à la Prime Énergie",
        description: "En optant pour Cheminées du Nord pour vos installations de cheminées et poêles, vous pouvez profiter de la prime énergie. Cette subvention a pour objectif d'inciter les particuliers à entreprendre des travaux visant à économiser l'énergie. Nos produits, grâce à leur efficacité énergétique élevée, sont admissibles à cette prime, ce qui vous permet de réduire le coût initial de votre investissement.",
        image: "/image/money_save.jpg",
        buttonText: "Contactez Nous",
        link: "/contact" // Adaugă link-ul specific
    },
    {
        title: "Programme de Parrainage",
        description: "Faites découvrir Cheminées du Nord à vos proches et bénéficiez de notre programme de parrainage. Pour chaque nouveau client que vous nous recommandez et qui réalise une installation, vous recevez un avantage exclusif en guise de remerciement. C'est notre façon de vous remercier de votre confiance et de votre fidélité.",
        image: "/image/phone.jpg",
        buttonText: "Contactez Nous",
        link: "/contact" // Adaugă link-ul specific
    },
];

function InfoSection() {
    return (
        <section className="bg-white border border-gray-200 shadow-lg rounded-lg p-8 mt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center gap-8 w-full">
                {sections.map((section, index) => (
                    <div key={`card-${index}`} className="w-full md:max-w-[30%] overflow-hidden border border-gray-200 shadow-sm rounded-lg">
                        <div className="m-0 rounded-none text-center">
                            <img
                                src={section.image}
                                alt={section.title}
                                className="h-52 w-full object-cover rounded-t-lg"
                            />
                        </div>
                        <div className="p-4 text-center">
                            <h4 className="text-blue-gray-900 mb-2 text-xl font-bold">
                                {section.title}
                            </h4>
                            <p className="text-gray-700 font-normal mb-4">
                                {section.description}
                            </p>
                            <a href={section.link} className="inline-block py-2 px-4 text-white bg-blue-500 hover:bg-blue-600 rounded-lg">
                                {section.buttonText}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default InfoSection;
