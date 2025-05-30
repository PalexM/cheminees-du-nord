import { Metadata } from "next";
import Hero from "./hero";
import { cookies } from "next/headers";
import Environement from "./environement";
import SeoServices from "./services";
import SeoFaq from "./faq";

// Renommez cette variable pour éviter les conflits
export const pageMetadata: Metadata = {
  title: "Cheminées du Nord | Votre expert cheministe dans le Nord, l'Oise et l'Île-de-France",
  description: "Installation, réparation et rénovation de cheminées et poêles à bois par des artisans qualifiés. Service de qualité dans le Nord (59), l'Oise (60), les Hauts-de-France et l'Île-de-France.",
};

export default function Campaign() {
  console.log(cookies())
  return (
    <>
      {/* Structure sémantique avec des balises HTML5 appropriées */}
      <main itemScope itemType="https://schema.org/WebPage">
        {/* Section héro avec attributs structurés */}
        <section 
          id="hero" 
          className="hero-section" 
          aria-label="Introduction"
        >
          <Hero />
        </section>
        
        {/* Section services avec attributs structurés */}
        <section 
          id="services" 
          className="services-section" 
          aria-label="Nos services de cheministe"
        >
          <SeoServices />
        </section>
        
        {/* Section FAQ avec balisage sémantique pour le SEO */}
        <section 
          id="faq" 
          className="faq-section" 
          aria-label="Questions fréquentes"
          itemScope 
          itemType="https://schema.org/FAQPage"
        >
          <SeoFaq />
        </section>
        
        {/* Section environnement avec attributs structurés */}
        <section 
          id="environnement" 
          className="environnement-section" 
          aria-label="Notre engagement écologique"
        >
          <Environement />
        </section>
      </main>
    </>
  );
}
