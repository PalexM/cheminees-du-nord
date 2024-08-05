"use client";

import React from 'react';
import { connect } from '../../node_modules/next/dist/esm/client/dev/noop-turbopack-hmr';

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Company", "About Us", "Team", "Products", "Blog"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10 bg-white">
  <div className="container mx-auto flex flex-col items-center">
    <a href="#" className="text-xl md:text-2xl text-gray-900 font-semibold text-center">
      Cheminées du Nord
    </a>
    <div className="flex flex-wrap justify-center items-center gap-4 mt-4 md:flex-row md:justify-between">
      <a href="#" className="text-base md:text-lg text-gray-700 hover:text-gray-900 transition-colors font-normal">
        Accueil
      </a>
      <a href="/contact" className="text-base md:text-lg text-gray-700 hover:text-gray-900 transition-colors font-normal">
        Contact
      </a>
      <a href="/installations" className="text-base md:text-lg text-gray-700 hover:text-gray-900 transition-colors font-normal">
        Poêles et Cheminées
      </a>
      <a href="/conduits" className="text-base md:text-lg text-gray-700 hover:text-gray-900 transition-colors font-normal">
        Conduits
      </a>
      <a href="/entretien" className="text-base md:text-lg text-gray-700 hover:text-gray-900 transition-colors font-normal">
        Nettoyage et Entretien
      </a>
      <a href="/reparation" className="text-base md:text-lg text-gray-700 hover:text-gray-900 transition-colors font-normal">
        Réparation de Poêles
      </a>
      <a href="/refection" className="text-base md:text-lg text-gray-700 hover:text-gray-900 transition-colors font-normal">
        Réfection Murs et Plafonds
      </a>
      <a href="/refection" className="text-base md:text-lg text-gray-700 hover:text-gray-900 transition-colors font-normal">
        Politique de Confidentialité
      </a>
      <a href="/refection" className="text-base md:text-lg text-gray-700 hover:text-gray-900 transition-colors font-normal">
        Mentions Légales
      </a>
    </div>
    <div className="flex flex-col items-center mt-4 md:flex-row md:gap-4">
      <a href="mailto:contact@cheminees-du-nord.fr" className="text-base md:text-lg text-gray-700 hover:text-gray-900 transition-colors font-normal">
        contact@cheminees-du-nord.fr
      </a>
      <a href="tel:+33123456789" className="text-base md:text-lg text-gray-700 hover:text-gray-900 transition-colors font-normal">
        06 58 28 57 56
      </a>
    </div>
    <div className="flex gap-2 mt-4">
      <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors" onClick={() => window.location.href = 'mailto:contact@cheminees-du-nord.fr'}>
        <i className="fas fa-envelope text-lg"></i>
      </button>
      <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
        <i className="fab fa-youtube text-lg"></i>
      </button>
      <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
        <i className="fab fa-instagram text-lg"></i>
      </button>
    </div>
    <p className="text-center mt-8 md:mt-12 text-sm md:text-lg text-gray-700 font-normal">
      &copy; {new Date().getFullYear()} Cheminées du Nord. Tous droits réservés.
    </p>
  </div>
</footer>




  );
}

export default Footer;