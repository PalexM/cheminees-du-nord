import { Metadata } from 'next';
import ContactClient from './contact-client';

// Métadonnées pour la page (côté serveur)
export const metadata = {
  title: 'Contact | Cheminées du Nord | Service Client',
  description: 'Contactez Cheminées du Nord pour toute demande concernant l\'installation, la réparation ou l\'entretien de votre cheminée ou poêle. Devis gratuit et conseils personnalisés.',
  keywords: ['contact cheministe', 'devis cheminée', 'installation poêle', 'contact Cheminées du Nord', 'service client cheminée'],
  alternates: {
    canonical: 'https://cheminees-du-nord.fr/contact',
  },
  openGraph: {
    title: 'Contactez Cheminées du Nord | Experts en Cheminées et Poêles',
    description: 'Besoin d\'un conseil, d\'un devis ou d\'une intervention ? Contactez notre équipe d\'experts par téléphone ou via notre formulaire en ligne.',
    url: 'https://cheminees-du-nord.fr/contact',
    siteName: 'Cheminées du Nord',
    locale: 'fr_FR',
    images: [
      {
        url: 'https://cheminees-du-nord.fr/image/twitter-card.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Cheminées du Nord',
      },
    ],
    type: 'website',
  },
};

// Composant page (côté serveur)
export default function ContactPage() {
  // Données structurées pour le SEO (Schema.org)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'description': 'Contactez Cheminées du Nord pour toute information sur nos services d\'installation, réparation et entretien de cheminées et poêles.',
    'mainEntity': {
      '@type': 'LocalBusiness',
      'name': 'Cheminées du Nord',
      'image': 'https://cheminees-du-nord.fr/image/logo_firma.png',
      'telephone': '+33658285756',
      'email': 'contact@cheminees-du-nord.fr',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '127 Rue Cavée Bruyet',
        'addressLocality': 'Labruyère',
        'postalCode': '60140',
        'addressCountry': 'FR'
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '08:00',
          'closes': '18:00'
        }
      ],
      'sameAs': [
        'https://www.facebook.com/profile.php?id=61564304302036',
        'https://www.instagram.com/chemineesdunordfr/',
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
      <ContactClient />
    </>
  );
}
