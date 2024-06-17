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
                    Pose et Installation de Poêles et Cheminées
                </Typography>
            </header>
            <main className="flex flex-col items-center px-4 md:flex-row md:justify-between md:w-3/4">
                <div className="max-w-md mb-8 text-center md:text-left md:w-1/2 md:mb-0">
                    <Typography variant="h2" color="blue-gray" className="text-3xl font-bold mb-4">
                        Installation Expert de Poêles et Cheminées sur Mesure
                    </Typography>
                    <Typography variant="lead" color="gray" className="text-lg mb-4">
                        Notre entreprise se spécialise dans l'installation professionnelle de poêles et cheminées, offrant une gamme complète de services pour répondre à vos besoins spécifiques. Que vous souhaitiez ajouter une touche chaleureuse et élégante à votre intérieur avec une cheminée traditionnelle en pierre ou opter pour un poêle moderne à haute efficacité énergétique, nous sommes là pour vous aider. Nos installateurs expérimentés assurent non seulement une installation sûre et conforme aux normes, mais également une esthétique impeccable qui s'intègre harmonieusement à votre espace. Nous nous engageons à vous fournir des solutions de chauffage durable et économique, tout en mettant l'accent sur la sécurité et la satisfaction du client.
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
