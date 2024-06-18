"use client";

import React from 'react';

function Environment() {
    return (
        <section className="bg-white border border-gray-200 shadow-lg rounded-lg p-8 mt-8 flex flex-col md:flex-row justify-between items-center" style={{ marginTop: "100px" }}>
            <div className="flex-1 pr-8">
                <div className="flex items-center justify-center mb-4">
                    <svg style={{ height: "36px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>leaf</title>
                        <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" fill="green" />
                    </svg>
                </div>
                <h2 className="text-center mb-4 text-blue-gray-900 text-3xl font-bold">
                    {"Économies d'Énergie et Écologie"}
                </h2>
                <p className="text-center text-gray-700 font-normal">
                    {"En optant pour nos cheminées et poêles à bois ou à pellets, vous faites le choix d'un chauffage écologique et économique. Nos produits sont conçus pour maximiser l'efficacité énergétique, ce qui permet de réduire significativement vos factures de chauffage. De plus, le bois et les pellets sont des sources d’énergie renouvelables et neutres en carbone, contribuant ainsi à la réduction de votre empreinte écologique. Investir dans un poêle à bois ou à pellets, c'est non seulement faire des économies à long terme, mais aussi participer activement à la protection de notre planète."}
                </p>
            </div>
            <div className="flex-1 hidden md:block">
                <img
                    src="/image/forest.jpg" // Replace with the correct path if needed
                    alt="Forest"
                    className="h-full w-full object-cover rounded-lg"
                />
            </div>
        </section>
    );
}

export default Environment;