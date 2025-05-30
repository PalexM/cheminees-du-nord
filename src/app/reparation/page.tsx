import { Metadata } from 'next';
import ReparationClient from './reparation-client';

// Métadonnées pour la page (côté serveur)
export const metadata = {
  title: 'Entretien et Réparation de Poêles | Service Professionnel de Maintenance',
  description: 'Services d\'entretien et réparation de poêles à bois et granulés par des techniciens qualifiés. Maintenance préventive et dépannage pour une performance optimale de votre système de chauffage.',
  keywords: ['réparation poêle', 'entretien poêle à bois', 'maintenance poêle granulés', 'dépannage poêle', 'réparation système chauffage', 'performance poêle'],
  alternates: {
    canonical: 'https://cheminees-du-nord.fr/reparation',
  },
  openGraph: {
    title: 'Service d\'Entretien et Réparation de Poêles',
    description: 'Nos techniciens qualifiés assurent l\'entretien et la réparation de vos poêles pour une performance optimale et durable de votre système de chauffage.',
    url: 'https://cheminees-du-nord.fr/reparation',
    siteName: 'Cheminées du Nord',
    images: [
      {
        url: 'https://cheminees-du-nord.fr/image/twitter-card.jpg',
        width: 1200,
        height: 630,
        alt: 'Entretien et réparation professionnels de poêles',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

// Composant page (côté serveur)
export default function ReparationPage() {
  // Données structurées pour le SEO (Schema.org)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Entretien et Réparation de Poêles',
    'serviceType': 'Maintenance et réparation de systèmes de chauffage',
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
    'description': 'Services professionnels d\'entretien et de réparation de poêles à bois et à granulés pour garantir leur performance optimale et leur longévité.'
  };

  return (
    <>
      {/* Script JSON-LD pour l'enrichissement des résultats de recherche */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Composant client */}
      <ReparationClient />
    </>
  );
}
