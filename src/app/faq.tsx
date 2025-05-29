"use client";

import React, { useEffect, useRef, useState } from 'react';

const SeoFaq = () => {
  // Refs pour les animations au scroll
  const sectionRef = useRef(null);
  
  // État pour le suivi des questions ouvertes
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
    
  useEffect(() => {
    if (!window.IntersectionObserver) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  // Basculer l'état de la question
  const toggleQuestion = (index: number) => {
    if (openQuestion === index) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(index);
    }
  };

  // Questions fréquentes révisées sans prix fixes
const faqItems = [
  {
    question: "Comment réparer une cheminée qui fume dans la maison ?",
    answer: "Une cheminée qui fume dans votre intérieur peut être causée par plusieurs facteurs : un conduit obstrué, un tirage insuffisant, ou un déséquilibre de pression dans la maison. La première étape est de vérifier si le conduit est propre et dégagé. Si le problème persiste après un ramonage récent, il peut s'agir d'un problème structurel du conduit ou d'un mauvais dimensionnement. Ne prenez pas de risques avec ce problème qui peut entraîner une intoxication au monoxyde de carbone. Nos techniciens spécialisés peuvent réaliser un diagnostic complet avec une caméra d'inspection et proposer la solution adaptée : installation d'un extracteur de fumée, rehaussement du conduit ou rénovation plus approfondie. Contactez-nous pour une intervention rapide et un diagnostic personnalisé de votre installation."
  },
  {
    question: "Comment rénover une vieille cheminée qui ne fonctionne plus ?",
    answer: "Rénover une vieille cheminée inutilisée permet de retrouver un élément de chauffage efficace et esthétique. La première étape consiste à évaluer l'état du conduit et de la structure. Dans la plupart des cas, nous procédons à un tubage du conduit pour garantir la sécurité et l'efficacité, puis nous rénovons l'âtre avec des matériaux réfractaires. Nous pouvons ensuite installer un insert ou un foyer fermé moderne qui transformera votre ancienne cheminée en un système de chauffage performant avec un rendement jusqu'à 5 fois supérieur. L'habillage est personnalisable selon votre style d'intérieur, du plus traditionnel au plus contemporain. Chaque rénovation est unique et nécessite une étude préalable - contactez-nous pour une visite technique gratuite et un projet sur mesure."
  },
  {
    question: "Faut-il un tubage pour installer un insert de cheminée ?",
    answer: "Oui, le tubage est généralement nécessaire pour l'installation d'un insert de cheminée, et c'est même une obligation selon les normes DTU 24.1. Le tubage remplit plusieurs fonctions essentielles : il assure l'étanchéité du conduit, évite les risques d'incendie liés aux fissures, améliore le tirage et protège la maçonnerie contre la corrosion due aux condensats acides. Sans tubage adapté, votre assurance pourrait refuser de vous couvrir en cas de sinistre. Nous utilisons différents types de tubages (inox, acier émaillé, flexible ou rigide) selon la configuration de votre conduit et le type d'insert choisi. Pour déterminer la solution la plus adaptée à votre cheminée, notre équipe réalise une inspection approfondie du conduit. Contactez-nous pour un diagnostic précis de votre installation."
  },
  {
    question: "Comment savoir si ma cheminée est dangereuse ?",
    answer: "Plusieurs signes doivent vous alerter sur la dangerosité potentielle de votre cheminée : présence de suie excessive ou de goudron (créosote) dans le foyer ou sur les murs adjacents, fissures visibles dans l'âtre ou la cheminée, odeur de fumée persistante même sans feu, noircissement des murs autour de la cheminée, ou refoulement de fumée dans la pièce. Ces symptômes peuvent indiquer des problèmes graves comme un conduit obstrué, une mauvaise étanchéité ou des dommages structurels qui augmentent les risques d'incendie ou d'intoxication au monoxyde de carbone. Ne prenez aucun risque avec votre sécurité - si vous constatez l'un de ces signes, cessez d'utiliser votre cheminée et faites-la inspecter immédiatement par nos professionnels qui disposent des outils et de l'expertise nécessaires pour un diagnostic complet."
  },
  {
    question: "Quel entretien pour une cheminée avec insert ?",
    answer: "L'entretien d'une cheminée avec insert comprend plusieurs actions essentielles : le ramonage du conduit deux fois par an (obligation légale), le nettoyage de la vitre avec des produits spécifiques, le vidage régulier du cendrier, la vérification des joints d'étanchéité, et le contrôle du mécanisme d'ouverture. Une fois par an, nous recommandons un entretien complet par un professionnel qui vérifiera également l'état des briques réfractaires, le bon fonctionnement du système de ventilation et l'absence de corrosion. Un entretien régulier garantit la sécurité, la performance et la longévité de votre installation. Notre service d'entretien inclut la délivrance d'un certificat de ramonage pour votre assurance et des conseils personnalisés pour optimiser l'utilisation de votre insert. Contactez-nous pour planifier votre entretien annuel avec un spécialiste certifié."
  },
  {
    question: "Comment choisir entre un poêle à bois et un insert de cheminée ?",
    answer: "Le choix entre un poêle à bois et un insert dépend principalement de votre situation. Un insert s'intègre dans une cheminée existante, préservant ainsi son emplacement et son apparence tout en améliorant considérablement son rendement. Il est idéal si vous souhaitez conserver l'esthétique d'une cheminée traditionnelle. Un poêle à bois, lui, peut être installé presque n'importe où (avec un conduit adapté) et offre plus de flexibilité en termes d'emplacement et de design. Il dégage généralement plus de chaleur dans la pièce car ses côtés sont aussi chauffants. Votre choix devrait considérer l'existence d'une cheminée, l'esthétique recherchée, la performance de chauffe nécessaire et la configuration de votre espace. Pour vous aider à faire le meilleur choix selon votre situation spécifique, nos conseillers peuvent réaliser une étude personnalisée à votre domicile, gratuitement et sans engagement."
  },
  {
    question: "Ma cheminée est-elle aux normes actuelles ?",
    answer: "Les normes pour les cheminées et appareils de chauffage au bois se sont considérablement renforcées ces dernières années, notamment avec les réglementations thermiques et les normes de sécurité DTU 24.1. Une cheminée aux normes doit respecter des critères précis : distance minimale aux matériaux combustibles, section et hauteur du conduit adaptées, présence d'une plaque signalétique, bon état du tubage, conformité aux réglementations locales et respect des règles d'évacuation des fumées. Les cheminées anciennes ne respectent souvent pas ces critères et peuvent présenter des risques pour votre sécurité ou vous exposer à des problèmes avec votre assurance en cas de sinistre. Pour vérifier si votre installation est conforme, nos techniciens réalisent un diagnostic complet et vous proposent les éventuelles mises aux normes nécessaires. Contactez-nous pour un bilan de conformité de votre cheminée."
  },
  {
    question: "Pourquoi ma cheminée ne tire pas bien ?",
    answer: "Un mauvais tirage de cheminée peut être causé par plusieurs facteurs : un conduit trop court ou de diamètre inadapté, une obstruction partielle (nids d'oiseaux, débris), un défaut d'isolation du conduit, ou des problèmes de ventilation dans la maison. Les maisons modernes très isolées créent souvent une dépression qui complique le tirage naturel. Notre équipe utilise des testeurs de tirage et des caméras d'inspection pour identifier précisément la cause de votre problème. Les solutions peuvent inclure l'installation d'une entrée d'air dédiée, le tubage du conduit, la pose d'un extracteur de fumées ou l'ajustement de la hauteur de la souche. Chaque situation étant unique, nos experts se déplacent à votre domicile pour un diagnostic personnalisé et vous proposent la solution la plus adaptée à votre configuration. N'hésitez pas à nous contacter pour résoudre définitivement ce problème qui affecte votre confort et votre sécurité."
  }
];


  return (
    <section 
      ref={sectionRef}
      className=" py-20"
      id="faq-cheminee-nord"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre de section */}
        <div className="text-center mb-16 animate-on-scroll opacity-0 duration-700 translate-y-4" style={{ transitionDelay: '100ms' }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight mb-3">
            FAQ <span className="font-medium">Cheministe</span>
          </h2>
          <br></br>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          {"  Découvrez nos réponses aux questions fréquentes sur la réparation, rénovation et entretien de cheminées dans le Nord (59), l'Oise (60) et toute la région Hauts-de-France et Île-de-France. "}
          </p>
        </div>
        
        
        
        {/* Questions structurées avec toggle pour une meilleure expérience utilisateur */}
        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={`faq-${index}`}
              className="mb-6 animate-on-scroll opacity-0 translate-y-4 duration-700"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                className={`w-full text-left p-6 rounded-lg shadow-sm flex justify-between items-start ${openQuestion === index ? 'bg-amber-50' : 'bg-white'}`}
                onClick={() => toggleQuestion(index)}
                aria-expanded={openQuestion === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 
                  className="font-medium text-lg text-gray-900"
                  itemProp="name"
                >
                  {item.question}
                </h3>
                <span className={`ml-4 flex-shrink-0 transition-transform duration-300 ${openQuestion === index ? 'rotate-180' : ''}`}>
                  <svg className="h-6 w-6 text-amber-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${openQuestion === index ? 'max-h-screen opacity-100 pt-2 pb-6' : 'max-h-0 opacity-0'}`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className="p-6 pt-2 bg-white rounded-b-lg text-gray-600 leading-relaxed" itemProp="text">
                  {item.answer}
                  
                  {/* Appel à l'action subtil en fin de réponse */}
                  <p className="mt-4 text-green-600 font-medium">
                   { "  Besoin d'une réponse personnalisée ? "} <a href="tel:+33658285756" className="underline hover:text-green-800">Appelez-nous au 06 58 28 57 56</a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Encart de contact pour conversion - version plus incitative */}
        <div className="mt-16 bg-white border border-amber-200 rounded-xl p-8 shadow-sm max-w-4xl mx-auto animate-on-scroll opacity-0 translate-y-4 duration-700" style={{ transitionDelay: '900ms' }}>
          <div className="text-center">
            <div className="inline-block p-3 bg-amber-100 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-medium text-gray-900 mb-4">
            {"  Vous avez d'autres questions spécifiques ? "}
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Chaque projet de cheminée est unique et mérite une attention personnalisée. Notre équipe de cheministes experts est à votre disposition pour une consultation gratuite et sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+33658285756" 
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md shadow-md transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Parler à un expert
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-amber-500 text-amber-600 hover:bg-amber-50 font-medium rounded-md transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Attributs structurés invisibles pour le SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      })}} />
      
      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
        
        .duration-700 {
          transition-duration: 700ms;
        }
        
        .translate-y-4 {
          transform: translateY(16px);
        }
        
        .opacity-0 {
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default SeoFaq;
