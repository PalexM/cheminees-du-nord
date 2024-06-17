"use client";
import {
    Typography,
    Button
} from "@material-tailwind/react";

const Conduits = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center" style={{ marginTop: "2vh" }}>
            <header className="text-center py-10">
                <Typography variant="h1" color="blue-gray" className="text-4xl font-bold">
                    Création de Conduits
                </Typography>
            </header>
            <main className="flex flex-col items-center px-4 md:flex-row md:justify-between md:w-3/4">
                <div className="max-w-md mb-8 text-center md:text-left md:w-1/2 md:mb-0">
                    <Typography variant="h2" color="blue-gray" className="text-3xl font-bold mb-4">
                        Conduits Sur Mesure pour Votre Sécurité et Confort
                    </Typography>
                    <Typography variant="lead" color="gray" className="text-lg mb-4">
                        La création de conduits est une étape cruciale dans l'installation de cheminées et poêles. Notre équipe spécialisée propose une gamme complète de solutions sur mesure pour répondre à vos besoins spécifiques en matière d'évacuation des fumées. Que vous optiez pour des conduits extérieurs ou intérieurs, en acier inoxydable ou en céramique, nous concevons et installons des conduits qui garantissent une performance optimale tout en respectant les normes de sécurité les plus strictes.                    </Typography>

                    <Typography variant="lead" color="gray" className="text-lg mb-4">
                        Pour les nouvelles constructions, nous planifions et intégrons les conduits dès les premières phases du projet, assurant une intégration harmonieuse et efficace avec votre architecture. Pour les rénovations, nous proposons des solutions adaptées pour remplacer ou moderniser vos conduits existants, améliorant ainsi l'efficacité énergétique et la sécurité de votre système de chauffage.
                    </Typography>

                    <Typography variant="lead" color="gray" className="text-lg mb-4">
                        Nos services incluent également des options de conduits isolés pour une meilleure protection thermique et acoustique, ainsi que des solutions de nettoyage et d'entretien régulières pour maintenir la performance optimale de vos conduits au fil du temps. Avec notre expertise approfondie et notre engagement envers la qualité, vous pouvez avoir l'assurance que votre installation fonctionnera de manière fiable et efficace pendant de nombreuses années.
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
                        src="/image/realisations/img21.jpeg"
                        alt="création de conduits"
                        className="object-cover rounded-lg mx-auto"
                    />
                </div>
            </main>
        </div>
    );
}

export default Conduits;
