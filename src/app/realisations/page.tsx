import React from 'react';

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


const Realisations = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {images.map((image, index) => (
            <div key={index} className="grid gap-4">
                <img
                    className="h-auto max-w-full rounded-lg object-cover object-center"
                    src={image.src}
                    alt={image.alt}
                />
            </div>
        ))}
    </div>
);

export default Realisations;