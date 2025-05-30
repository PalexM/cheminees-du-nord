import { Metadata } from 'next';
import InstallationsClient from './installations-client';

// Métadonnées pour la page (côté serveur)
export const metadata = {
  title: 'Installation de Poêles et Cheminées | Service Professionnel de Pose',
  description: 'Experts en pose et installation de poêles à bois, cheminées sur mesure et inserts. Service complet d\'installation aux normes par des professionnels qualifiés dans toute la région Hauts-de-France.',
  keywords: ['installation poêle', 'pose cheminée', 'installation insert', 'cheminée sur mesure', 'pose poêle à bois', 'installation poêle granulés', 'cheministe professionnel', 'installation aux normes DTU'],
  alternates: {
    canonical: 'https://votresite.com/installations',
  },
  openGraph: {
    title: 'Installation Professionnelle de Poêles et Cheminées',
    description: 'Faites installer votre poêle ou cheminée par nos experts certifiés. Solutions sur mesure, installation aux normes et garantie de qualité.',
    url: 'https://votresite.com/installations',
    siteName: 'Cheminées du Nord',
    images: [
      {
        url: 'https://cheminees-du-nord.fr/image/twitter-card.jpg',
        width: 1200,
        height: 630,
        alt: 'Installation professionnelle de poêle à bois',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experts en Installation de Poêles et Cheminées',
    description: 'Faites confiance à nos techniciens certifiés pour l\'installation de votre poêle à bois, insert ou cheminée. Service complet et pose aux normes.',
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
export default function InstallationsPage() {
  // Données structurées pour le SEO (Schema.org)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Installation de Poêles et Cheminées',
    'serviceType': 'Pose et installation de systèmes de chauffage',
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
      'priceRange': '€€€',
      'image': 'https://votresite.com/image/logo_firma.png'
    },
    'areaServed': ['Oise', 'Nord', 'Hauts-de-France', 'Île-de-France'],
    'description': 'Service professionnel d\'installation et pose de poêles à bois, poêles à granulés, inserts et cheminées. Installation aux normes DTU 24.1 par des techniciens certifiés.',
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Services d\'installation',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Installation de poêle à bois'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Pose d\'insert de cheminée'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Installation de poêle à granulés'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Création de cheminée sur mesure'
          }
        }
      ]
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
      <InstallationsClient />
    </>
  );
}
