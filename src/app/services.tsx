"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Services = () => {
  // Refs pour les animations au scroll
  const sectionRef = useRef(null);
    
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

  // Structure de données pour les services avec images
  const serviceDetails = [
    {
      title: "Réparation de Cheminée",
      subtitle: "Nord (59) et Oise (60)",
      description: "Nos artisans cheministes interviennent pour tous types de réparations: étanchéité, fissures, problèmes de tirage ou remplacement de pièces pour votre cheminée ou poêle à bois.",
      imageSrc: "/image/realisations/img18.jpeg",
      imageAlt: "Réparation professionnelle de cheminée dans le Nord",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      keywords: ["réparation cheminée 59", "réparation cheminée 60", "cheministe Nord", "problème tirage"]
    },
    {
      title: "Rénovation de Cheminée",
      subtitle: "Hauts-de-France",
      description: "Transformez votre ancienne cheminée en un élément moderne et performant. Nos rénovations respectent les normes actuelles tout en préservant le charme de votre habitation.",
      imageSrc: "/image/realisations/img30.jpeg",
      imageAlt: "Rénovation élégante de cheminée dans les Hauts-de-France",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      keywords: ["rénovation cheminée Nord", "modernisation cheminée", "transformation cheminée ancienne"]
    },
    {
      title: "Installation de Poêles et Cheminées",
      subtitle: "Région Parisienne et Hauts-de-France",
      description: "Cheminées du Nord assure l'installation professionnelle de cheminées contemporaines et poêles à bois dans toute la région parisienne et les Hauts-de-France.",
      imageSrc: "/image/realisations/img12.jpeg",
      imageAlt: "Installation d'un poêle à bois moderne",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
      keywords: ["installation cheminée Oise", "pose poêle à bois région parisienne", "cheminée contemporaine"]
    },
    {
      title: "Création de Conduits",
      subtitle: "Tubage et réhabilitation",
      description: "Spécialistes de la création et réhabilitation de conduits, nous intervenons pour assurer un tirage optimal et une sécurité maximale de votre installation de chauffage.",
      imageSrc: "/image/realisations/img21.jpeg",
      imageAlt: "Installation professionnelle de tubage de cheminée",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      keywords: ["tubage cheminée 60", "réhabilitation conduit Nord", "conduit double paroi"]
    },
    {
      title: "Entretien et Ramonage",
      subtitle: "Service professionnel certifié",
      description: "Notre service d'entretien et de ramonage couvre toutes les communes autour de Labruyère, le Nord et la région parisienne, avec délivrance d'un certificat conforme aux exigences des assurances.",
      imageSrc: "/image/realisations/img5.jpeg",
      imageAlt: "Ramonage professionnel de cheminée",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      keywords: ["ramonage certifié", "entretien cheminée Nord", "certificat de ramonage"]
    },
    {
      title: "Design et Conseils",
      subtitle: "Solutions personnalisées",
      description: "Notre équipe vous accompagne dans le choix de votre système de chauffage et son intégration esthétique dans votre intérieur, pour un résultat parfaitement adapté à vos besoins.",
      imageSrc: "/image/realisations/img16.jpeg", 
      imageAlt: "Design moderne de cheminée intégrée dans un salon contemporain",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      keywords: ["design cheminée", "conseil chauffage", "intégration poêle", "cheminée sur mesure"]
    },

  ];

  // Zones d'intervention - important pour le SEO local
  const zones = {
    hautsDefrance: [
      "Lille", "Amiens", "Arras", "Beauvais", "Compiègne", "Creil", "Senlis", 
      "Chantilly", "Clermont", "Noyon", "Soissons", "Laon", "Saint-Quentin"
    ],
    ileDefrance: [
      "Paris", "Roissy", "Meaux", "Pontoise", "Cergy", "Goussainville", 
      "Sarcelles", "Gonesse", "L'Isle-Adam", "Fosses"
    ],
    procheLabruyere: [
      "Labruyère", "Rosoy", "Cinqueux", "Verderonne", "Liancourt", "Monceaux", 
      "Bailleval", "Angicourt", "Rieux", "Villers-Saint-Paul"
    ]
  };

  return (
    <section 
      ref={sectionRef}
      className=" py-20"
      id="nos-services-cheminee"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section SEO */}
        <div className="text-center mb-16 animate-on-scroll opacity-0 duration-700 translate-y-4" style={{ transitionDelay: '100ms' }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight mb-3">
            Cheministe Professionnel dans le <span className="font-medium"> {"Nord et l'Oise "}</span>
          </h2>
          <br></br>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            {" Entreprise de cheministe spécialisée dans la réparation, rénovation et installation de cheminées. Nous intervenons dans toute la région Hauts-de-France et l'Île-de-France. "}
          </p>
        </div>
        
        {/* Cartes de services avec images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {serviceDetails.map((service, index) => (
            <div 
              key={`service-${index}`}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all  animate-on-scroll opacity-0 translate-y-6 duration-700"
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Image du service */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    // Fallback pour image non trouvée
                    const target = e.target as HTMLImageElement;
                    target.src = "/image/default-service.jpg"; // Image par défaut
                    target.onerror = null; // Éviter les boucles infinies
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
                

                
                {/* Titre sur l'image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-medium text-white drop-shadow-md">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/90 mt-1 drop-shadow-md">
                    {service.subtitle}
                  </p>
                </div>
              </div>
              
              {/* Contenu de la carte */}
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Mots-clés SEO en badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {service.keywords.map((keyword, kIndex) => (
                    <span 
                      key={kIndex}
                      className="bg-amber-50 text-green-600 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Bouton d'appel */}
              <div className="px-6 pb-6">
                <Link
                  href="/contact"
                  className="block w-full py-3 px-4 text-center bg-green-600 text-white font-medium rounded-lg shadow-sm transition-all duration-300"
                >
                  Demander un devis gratuit
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Zones d'intervention - Important pour le SEO local */}
        <div className="mt-20 animate-on-scroll opacity-0 translate-y-4 duration-700" style={{ transitionDelay: '900ms' }}>
          <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">
           {"  Zones d'Intervention de Votre Cheministe "}
          </h3>
          
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-medium text-lg text-amber-600 mb-3">Hauts-de-France</h4>
                <p className="text-gray-600 leading-relaxed">
                  {zones.hautsDefrance.join(", ")}
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-lg text-amber-600 mb-3">Région Parisienne</h4>
                <p className="text-gray-600 leading-relaxed">
                  {zones.ileDefrance.join(", ")}
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-lg text-amber-600 mb-3">Autour de Labruyère (60)</h4>
                <p className="text-gray-600 leading-relaxed">
                  {zones.procheLabruyere.join(", ")}
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  <strong>Siège social :</strong> 127 Rue Cavée Bruyet, 60140 Labruyère
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to action pour appeler */}
        <div className="mt-16 text-center animate-on-scroll opacity-0 translate-y-4 duration-700" style={{ transitionDelay: '1000ms' }}>
          <h3 className="text-2xl font-medium text-gray-900 mb-4">
           {" Besoin d'un service de cheministe en urgence ? "}
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
           {"  Nos experts sont disponibles pour une intervention rapide dans le Nord, l'Oise et la région parisienne. Contactez-nous dès maintenant pour discuter de vos besoins. "}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+33658285756"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-full shadow-md transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Appeler maintenant
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-amber-500 text-amber-600 hover:bg-amber-50 font-medium rounded-full shadow-sm transition-all duration-300"
            >
              Demander un devis gratuit
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
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
        
        .translate-y-6 {
          transform: translateY(24px);
        }
        
        .opacity-0 {
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Services;
