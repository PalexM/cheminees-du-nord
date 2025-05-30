import Hero from "./hero";
import Expertises from "./expertise";
import { cookies } from "next/headers";
import Environement from "./environement";
import SeoServices from "./services";
import SeoFaq from "./faq";

// Supprimez complètement l'exportation de metadata ici
// Next.js utilisera automatiquement celle du layout.tsx

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
