import { Metadata } from 'next';
import RealisationsClient from './realisations-client';

// Métadonnées pour la page (côté serveur)
export const metadata = {
  title: 'Nos Réalisations | Cheminées et Poêles Installés par Nos Experts',
  description: 'Découvrez notre galerie de réalisations de cheminées, poêles à bois et inserts installés par nos experts. Projets d\'installation et rénovation en Hauts-de-France et région parisienne.',
  keywords: ['réalisations cheminées', 'photos poêles à bois', 'installations cheminées', 'projets cheministe', 'galerie poêles'],
  alternates: {
    canonical: 'https://cheminees-du-nord.fr/realisations',
  },
  openGraph: {
    title: 'Galerie de Nos Réalisations | Cheminées et Poêles',
    description: 'Découvrez nos plus belles réalisations d\'installation de cheminées, poêles à bois et inserts par nos artisans qualifiés.',
    url: 'https://cheminees-du-nord.fr/realisations',
    siteName: 'Cheminées du Nord',
    images: [
      {
        url: 'https://cheminees-du-nord.fr/image/realisations/img.jpeg',
        width: 1200,
        height: 630,
        alt: 'Galerie de réalisations de cheminées et poêles',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

// Composant page (côté serveur)
export default function RealisationsPage() {
  return <RealisationsClient />;
}
