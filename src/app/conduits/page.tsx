import { Metadata } from 'next';
import ConduitsClient from './conduits-client';

// Métadonnées pour la page (côté serveur)
export const metadata = {
  title: 'Création et Installation de Conduits de Cheminée | Expert Cheministe',
  description: 'Spécialistes de la création de conduits pour cheminées et poêles. Installation, tubage, rénovation de conduits aux normes DTU 24.1. Devis gratuit par cheministes certifiés.',
  keywords: ['conduit cheminée', 'création conduit', 'installation conduit', 'tubage cheminée', 'conduit poêle à bois', 'rénovation conduit', 'conduit double paroi', 'norme DTU 24.1', 'cheministe professionnel'],
  alternates: {
    canonical: 'https://cheminees-du-nord.fr/conduits',
  },
  openGraph: {
    title: 'Conduits de Cheminée sur Mesure | Installation Professionnelle',
    description: 'Création et installation de conduits de cheminée par des experts certifiés. Solutions sur mesure pour tous types de cheminées et poêles à bois.',
    url: 'https://cheminees-du-nord.fr/conduits',
    siteName: 'Cheminées du Nord',
    images: [
      {
        url: 'https://cheminees-du-nord.fr/image/twitter-card.jpg',
        width: 1200,
        height: 630,
        alt: 'Installation professionnelle de conduits de cheminée',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experts en Création de Conduits de Cheminée',
    description: 'Installation sur mesure de conduits pour cheminées et poêles à bois. Solutions adaptées à votre habitation par des professionnels certifiés.',
    images: ['https://cheminees-du-nord.fr/image/twitter-card.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Composant page (côté serveur)
export default function ConduitsPage() {
  // Données structurées pour le SEO (Schema.org)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Création de conduits de cheminée',
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
      'telephone': '+33658285756',
      'priceRange': '€€',
      'image': 'https://cheminees-du-nord.fr/image/logo_firma.png'
    },
    'areaServed': ['Oise', 'Nord', 'Hauts-de-France', 'Île-de-France'],
    'serviceType': 'Installation de conduits de cheminée',
    'description': 'Création et installation professionnelle de conduits de cheminée aux normes. Tubage, conduits double paroi isolés, sorties de toit et solutions sur mesure.',
    'offers': {
      '@type': 'Offer',
      'availability': 'https://schema.org/InStock',
      'priceCurrency': 'EUR',
      'priceSpecification': {
        '@type': 'PriceSpecification',
        'description': 'Sur devis gratuit après visite technique'
      }
    }
  };

  return (
    <>
      {/* Script JSON-LD pour l'enrichissement des résultats de recherche */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Composant client */}
      <ConduitsClient />
    </>
  );
}
