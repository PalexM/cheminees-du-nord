"use client";
import {
    Typography,
    Button
} from "@material-tailwind/react";

const Installations = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center" style={{ marginTop: "2vh" }}>
            <header className="text-center py-10">
                <Typography variant="h1" color="blue-gray" className="text-4xl font-bold">
                    {" Réfection des Murs et des Plafonds "}
                </Typography>
            </header>
            <main className="flex flex-col items-center px-4 md:flex-row md:justify-between md:w-3/4">
                <div className="max-w-md mb-8 text-center md:text-left md:w-1/2 md:mb-0">
                    <Typography variant="h2" color="blue-gray" className="text-3xl font-bold mb-4">
                        {" Réfection Expert des Murs et des Plafonds pour un Intérieur Parfaitement Coordonné "}
                    </Typography>
                    <Typography variant="lead" color="gray" className="text-lg mb-4">
                        {" Notre entreprise offre également des services spécialisés de réfection des murs et des plafonds, complémentaires à notre expertise dans l'installation de poêles, cheminées et conduits. Que ce soit pour préparer vos murs et plafonds avant l'installation d'un nouveau système de chauffage ou pour rénover l'esthétique de votre intérieur après des travaux, notre équipe expérimentée est là pour vous offrir des solutions sur mesure. Nous nous engageons à utiliser des matériaux de qualité et des techniques de pointe pour garantir des résultats durables et esthétiquement agréables. Faites confiance à notre expertise pour transformer votre espace avec professionnalisme et précision, en harmonie avec vos besoins et votre vision. "}                    </Typography>
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
                        src="/image/realisations/img30.jpeg"
                        alt="Installation de cheminée"
                        className="object-cover rounded-lg mx-auto"
                    />
                </div>
            </main>
        </div>
    );
}

export default Installations;
