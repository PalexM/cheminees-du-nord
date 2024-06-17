"use client";

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import Image from "next/image";

const sections = [
    {
        title: "Qualification RGE",
        description: "Cheminées du Nord possède la qualification RGE (Reconnu Garant de l'Environnement), un label de qualité attribué aux professionnels du bâtiment engagés dans des travaux de rénovation énergétique. Cette certification assure un travail de haute qualité effectué par des experts compétents, tout en vous permettant d'accéder à des aides financières pour vos projets de rénovation énergétique.",
        image: "/image/rge2.jpg", // Replace with the correct path if needed
        buttonText: "En Savoir Plus",
    },
    {
        title: "Éligible à la Prime Énergie",
        description: "En optant pour Cheminées du Nord pour vos installations de cheminées et poêles, vous pouvez profiter de la prime énergie. Cette subvention a pour objectif d'inciter les particuliers à entreprendre des travaux visant à économiser l'énergie. Nos produits, grâce à leur efficacité énergétique élevée, sont admissibles à cette prime, ce qui vous permet de réduire le coût initial de votre investissement.",
        image: "/image/money_save.jpg", // Replace with the correct path if needed
        buttonText: "Contactez Nous",
    },
    {
        title: "Programme de Parrainage",
        description: "Faites découvrir Cheminées du Nord à vos proches et bénéficiez de notre programme de parrainage. Pour chaque nouveau client que vous nous recommandez et qui réalise une installation, vous recevez un avantage exclusif en guise de remerciement. C'est notre façon de vous remercier de votre confiance et de votre fidélité.",
        image: "/image/phone.jpg", // Replace with the correct path if needed
        buttonText: "Contacter Nous",
    },
];

function InfoSection() {
    return (
        <section className="bg-white border border-gray-200 shadow-lg rounded-lg p-8 mt-8 flex flex-col md:flex-row justify-between items-center" style={{ marginTop: "100px" }}>
            <div className="flex flex-wrap justify-center gap-8 w-full">
                {sections.map((section, index) => (
                    <Card key={index} className="w-full md:max-w-[30%] overflow-hidden">
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 rounded-none text-center"
                        >

                            <img
                                src={section.image}
                                alt={section.title}
                                className="h-52 w-full object-cover rounded-t-lg"
                            />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                {section.title}
                            </Typography>
                            <Typography variant="lead" color="gray" className="font-normal mb-4">
                                {section.description}
                            </Typography>
                            <Button color="lightBlue" size="lg">
                                {section.buttonText}
                            </Button>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default InfoSection;
