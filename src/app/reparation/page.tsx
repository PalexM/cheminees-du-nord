"use client";
import {
    Typography,
    Button
} from "@material-tailwind/react";

const Reparation = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center" style={{ marginTop: "2vh" }}>
            <header className="text-center py-10">
                <Typography variant="h1" color="blue-gray" className="text-4xl font-bold">
                    Entretien et Réparation de Poêles
                </Typography>
            </header>
            <main className="flex flex-col items-center px-4 md:flex-row md:justify-between md:w-3/4">
                <div className="max-w-md mb-8 text-center md:text-left md:w-1/2 md:mb-0">
                    <Typography variant="h2" color="blue-gray" className="text-3xl font-bold mb-4">
                        Expertise en Entretien et Réparation de Poêles pour une Performance Durable
                    </Typography>
                    <Typography variant="lead" color="gray" className="text-lg mb-4">
                        Nos services d'entretien et de réparation de poêles sont conçus pour prolonger la durée de vie de votre équipement tout en assurant une efficacité optimale. Que votre poêle nécessite un simple ajustement, une réparation ou un entretien périodique, notre équipe est formée pour identifier et résoudre efficacement tout problème. Nous utilisons des pièces de rechange de qualité et des techniques éprouvées pour garantir que votre poêle fonctionne de manière fiable et économe en énergie. Avec notre engagement envers la qualité et la satisfaction du client, nous sommes là pour vous aider à maintenir un environnement chaleureux et confortable toute l'année.
                    </Typography>
                    <Button
                        variant="filled"
                        color="orange"
                        className="bg-orange-500 hover:bg-orange-600 text-white"
                    >
                        Nous-Contacter
                    </Button>
                </div>
                <div className="md:w-1/2">
                    <img
                        src="/image/realisations/img18.jpeg"
                        alt="Installation de cheminée"
                        className="object-cover rounded-lg mx-auto"
                    />
                </div>
            </main>
        </div>
    );
}

export default Reparation;