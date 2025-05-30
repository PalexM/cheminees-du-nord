import { Metadata } from 'next';
import RefactionClient from './refaction-client';

// Métadonnées pour la page (côté serveur)
export const metadata = {
  title: 'Réfection des Murs et des Plafonds | Services de Rénovation Intérieure',
  description: 'Service professionnel de réfection des murs et plafonds, complémentaire à l\'installation de poêles et cheminées. Rénovation et préparation de surfaces pour un intérieur coordonné.',
  keywords: ['réfection murs', 'rénovation plafonds', 'rénovation intérieure', 'préparation murs cheminée', 'plâtrerie', 'peinture intérieure'],
  alternates: {
    canonical: 'https://cheminees-du-nord.fr/refection',
  },
  openGraph: {
    title: 'Réfection Professionnelle des Murs et Plafonds',
    description: 'Services de rénovation des murs et des plafonds pour transformer votre intérieur. Préparation et finition parfaites lors de l\'installation de votre système de chauffage.',
    url: 'https://cheminees-du-nord.fr/refection',
    siteName: 'Cheminées du Nord',
    images: [
      {
        url: 'https://cheminees-du-nord.fr/image/twitter-card.jpg',
        width: 1200,
        height: 630,
        alt: 'Réfection des murs et des plafonds',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

// Composant page (côté serveur)
export default function RefactionPage() {
  // Données structurées pour le SEO (Schema.org)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Réfection des Murs et des Plafonds',
    'serviceType': 'Rénovation intérieure',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Cheminées du Nord',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '127 Rue Cavée Bruyet',
        'addressLocality': 'Labruyère',
        'postalCode': '60140',
        'addressCountry': 'FR'
      },
      'telephone': '+33658285756'
    },
    'areaServed': ['Oise', 'Nord', 'Hauts-de-France', 'Île-de-France'],
    'description': 'Service professionnel de réfection des murs et des plafonds, complémentaire à l\'installation de poêles, cheminées et conduits. Rénovation des surfaces pour un intérieur harmonieux.'
  };

  return (
    <>
      {/* Script JSON-LD pour l'enrichissement des résultats de recherche */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Composant client */}
      <RefactionClient />
    </>
  );
}
