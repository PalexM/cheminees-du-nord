/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import Hero from "./hero";
import Expertises from "./expertise";
import { cookies } from "next/headers";
import Environement from "./environement";
import InfoSection from "./cards";
import SeoServices from "./services";
import SeoFaq from "./faq";

// Métadonnées spécifiques à la page d'accueil
export const metadata: Metadata = {
  title: "Cheminées du Nord | Votre expert cheministe dans le Nord, l'Oise et l'Île-de-France",
  description: "Installation, réparation et rénovation de cheminées et poêles à bois par des artisans qualifiés. Service de qualité dans le Nord (59), l'Oise (60), les Hauts-de-France et l'Île-de-France.",
};

export default function Campaign() {
  console.log(cookies())
  return (
    <>
      {/* Structure sémantique avec des balises HTML5 appropriées */}
      <main itemScope itemType="https://schema.org/WebPage">
        <Hero />
        
        <section id="services" aria-label="Nos services de cheministe">
          <h2 className="sr-only">Services de cheministe professionnel dans le Nord, l'Oise et l'Île-de-France</h2>
          <SeoServices />
        </section>
        
        <section id="environnement" aria-label="Notre engagement écologique">
          <Environement />
        </section>
      </main>
    </>
  );
}
