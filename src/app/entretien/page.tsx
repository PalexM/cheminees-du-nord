import { Metadata } from 'next';
import EntretienClient from './entretien-client';

// Métadonnées pour la page (côté serveur)
export const metadata = {
  title: 'Ramonage et Entretien de Cheminées | Nettoyage de Conduits Professionnel',
  description: 'Service professionnel de ramonage, nettoyage et entretien de conduits et cheminées. Intervention par des spécialistes certifiés pour assurer sécurité et performance de votre installation.',
  keywords: ['ramonage cheminée', 'entretien conduit', 'nettoyage cheminée', 'ramonage obligatoire', 'ramoneur certifié', 'sécurité cheminée', 'certificat de ramonage', 'prévention incendie'],
  alternates: {
    canonical: 'https://cheminees-du-nord.fr/entretien',
  },
  openGraph: {
    title: 'Ramonage et Entretien de Cheminées | Service Professionnel',
    description: 'Entretenez votre cheminée grâce à nos services professionnels de ramonage et nettoyage. Conformité garantie et sécurité optimale pour votre foyer.',
    url: 'https://cheminees-du-nord.fr/entretien',
    siteName: 'Cheminées du Nord',
    images: [
      {
        url: 'https://cheminees-du-nord.fr/image/realisations/img5.jpeg',
        width: 1200,
        height: 630,
        alt: 'Entretien et ramonage professionnel de cheminée',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service d\'Entretien et Ramonage de Cheminées',
    description: 'Entretien professionnel et ramonage de cheminées pour garantir sécurité et performance. Service certifié et conforme à la réglementation.',
    images: ['https://cheminees-du-nord.fr/image/realisations/img5.jpeg'],
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
export default function EntretienPage() {
  // Données structurées pour le SEO (Schema.org)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Nettoyage et Ramonage de Cheminées',
    'serviceType': 'Entretien et ramonage de conduits',
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
    'description': 'Service professionnel de ramonage, nettoyage et entretien de conduits de cheminée par des techniciens certifiés. Respect des normes en vigueur et délivrance d\'un certificat de ramonage.',
    'offers': {
      '@type': 'Offer',
      'availability': 'https://schema.org/InStock',
      'priceCurrency': 'EUR',
      'priceSpecification': {
        '@type': 'PriceSpecification',
        'description': 'Sur devis selon type d\'installation et complexité du travail'
      }
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Services d\'entretien de cheminée',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Ramonage de conduit de cheminée'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Nettoyage et dégraissage de hotte'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Inspection caméra des conduits'
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
      <EntretienClient />
    </>
  );
}
