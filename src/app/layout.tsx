import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { StickyNavbar, Layout, Footer } from "@/components";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cheminées du Nord | Expert en installation et réparation de cheminées dans le Nord, l'Oise et l'Île-de-France",
  description: "Entreprise de cheministe professionnelle spécialisée en installation, réparation et rénovation de cheminées et poêles à bois dans le Nord (59), l'Oise (60) et toute la région Hauts-de-France et Île-de-France.",
  keywords: "cheministe, cheminée, poêle à bois, réparation cheminée, installation cheminée, Nord, Oise, Hauts-de-France, Île-de-France, Paris, Labruyère, ramonage, tubage",
  alternates: {
    canonical: "https://www.cheminees-du-nord.fr/",
  },
  openGraph: {
    title: "Cheminées du Nord | Expert en installation et réparation de cheminées",
    description: "Installation, réparation et rénovation de cheminées et poêles à bois dans le Nord (59), l'Oise (60), la région Hauts-de-France et l'Île-de-France par des artisans qualifiés.",
    url: "https://www.cheminees-du-nord.fr/",
    siteName: "Cheminées du Nord",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://cheminees-du-nord.fr/image/twitter-card.jpg", // Remplacez par votre image réelle
        width: 1200,
        height: 630,
        alt: "Cheminées du Nord - Installation professionnelle",
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheminées du Nord | Expert cheministe dans les Hauts-de-France et l'Île-de-France",
    description: "Installation et réparation de cheminées et poêles à bois par des artisans qualifiés dans le Nord, l'Oise, et la région parisienne.",
    images: ["https://cheminees-du-nord.fr/image/twitter-card.jpg"], // Même image que OG
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Meta tags supplémentaires pour améliorer la visibilité */}
        <meta name="author" content="Cheminées du Nord" />
        <meta name="geo.region" content="FR-HDF" />
        <meta name="geo.placename" content="Labruyère, Hauts-de-France" />
        <meta name="geo.position" content="49.3344;2.5521" />
        <meta name="ICBM" content="49.3344, 2.5521" />
        <meta name="revisit-after" content="7 days" />

        {/* Schema.org LocalBusiness avec liens structurés pour Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Cheminées du Nord",
              "image": "https://www.cheminees-du-nord.fr/images/logo-cheminees-du-nord.png",
              "url": "https://www.cheminees-du-nord.fr",
              "telephone": "0658285756",
              "email": "contact@cheminees-du-nord.fr",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "127 Rue Cavée Bruyet",
                "addressLocality": "Labruyère",
                "addressRegion": "Hauts-de-France",
                "postalCode": "60140",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 49.3344,
                "longitude": 2.5521
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                'https://www.facebook.com/profile.php?id=61564304302036',
                'https://www.instagram.com/chemineesdunordfr/',
              ],
              "priceRange": "€€",
              "description": "Entreprise de cheministe spécialisée dans la réparation, rénovation et installation de cheminées dans le Nord (59), l'Oise (60), les Hauts-de-France et l'Île-de-France.",
              "areaServed": ["Nord", "Oise", "Hauts-de-France", "Île-de-France", "Paris", "Région Parisienne"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services de cheministe",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Réparation de cheminée",
                      "description": "Intervention pour tous types de réparations: étanchéité, fissures, problèmes de tirage ou remplacement de pièces"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Rénovation de cheminée",
                      "description": "Transformation d'anciennes cheminées en éléments modernes et performants, respectant les normes actuelles"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Installation de poêle à bois",
                      "description": "Installation professionnelle de poêles à bois et de cheminées contemporaines"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tubage de cheminée",
                      "description": "Création et réhabilitation de conduits pour assurer un tirage optimal et une sécurité maximale"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Ramonage professionnel",
                      "description": "Service d'entretien et de ramonage certifié avec délivrance d'un certificat conforme aux exigences des assurances"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* Schema.org SiteNavigationElement pour la navigation principale */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": ["Accueil", "Services", "Réalisations", "Contact", "Devis"],
              "url": [
                "https://www.cheminees-du-nord.fr/",
                "https://cheminees-du-nord.fr/conduits",
                "https://cheminees-du-nord.fr/entretien",
                "https://cheminees-du-nord.fr/reparation",
                "https://www.cheminees-du-nord.fr/devis",
                "https://cheminees-du-nord.fr/refection",
                "https://cheminees-du-nord.fr/refection",
                "https://cheminees-du-nord.fr/realisations",
                "https://cheminees-du-nord.fr/contact"
              ]
            })
          }}
        />

        {/* Schema.org BreadcrumbList pour le fil d'Ariane */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Accueil",
                  "item": "https://www.cheminees-du-nord.fr/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Pose et Installation de Poêles et Cheminées",
                  "item": "https://cheminees-du-nord.fr/installations"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Création de Conduits de Cheminée",
                  "item": "https://cheminees-du-nord.fr/conduits"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Entretien et Ramonage",
                  "item": "https://cheminees-du-nord.fr/entretien"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Entretien et Réparation",
                  "item": "https://cheminees-du-nord.fr/entretien"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Réparation de Cheminées",
                  "item": "https://cheminees-du-nord.fr/reparation"
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "name": "Réfection des Murs et des Plafonds",
                  "item": "https://www.cheminees-du-nord.fr/refection"
                },
                {
                  "@type": "ListItem",
                  "position": 7,
                  "name": "Réalisations",
                  "item": "https://cheminees-du-nord.fr/realisations"
                },
                {
                  "@type": "ListItem",
                  "position": 8,
                  "name": "Contact",
                  "item": "https://cheminees-du-nord.fr/contact"
                }
              ]
            })
          }}
        />

        {/* Schema.org pour la FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Comment réparer une cheminée qui fume dans la maison ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Une cheminée qui fume peut être causée par plusieurs facteurs : un conduit obstrué, un tirage insuffisant ou une mauvaise installation. Nos experts interviennent pour diagnostiquer précisément l'origine du problème et y apporter une solution adaptée. Nous vérifions l'état du conduit, la qualité du tirage et proposons des solutions comme le ramonage, le tubage ou l'installation d'un extracteur si nécessaire."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Comment rénover une vieille cheminée qui ne fonctionne plus ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La rénovation d'une cheminée ancienne commence par un diagnostic complet pour identifier les problèmes. Elle peut inclure le tubage du conduit, l'installation d'un insert moderne, la réfection du foyer ou la mise aux normes complète selon les réglementations en vigueur. Nos artisans respectent le charme de votre cheminée tout en améliorant ses performances et sa sécurité."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Faut-il un tubage pour installer un insert de cheminée ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, l'installation d'un insert nécessite généralement un tubage du conduit. Le tubage permet d'assurer l'étanchéité, d'optimiser le tirage et de garantir la sécurité de l'installation en évacuant efficacement les fumées et les gaz de combustion. C'est une obligation réglementaire dans la plupart des cas pour être conforme aux normes actuelles."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Comment savoir si ma cheminée est dangereuse ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Plusieurs signes peuvent indiquer qu'une cheminée présente un danger : présence de fissures dans le conduit, fumée qui revient dans la pièce, odeurs anormales, traces de suie excessive, matériaux dégradés ou absence de ramonage récent. Un diagnostic professionnel est recommandé si vous constatez ces symptômes ou si votre installation est ancienne et n'a pas été contrôlée depuis longtemps."
                  }
                }
              ]
            })
          }}
        />
        
        {/* Schema.org WebSite pour les fonctionnalités de recherche */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://www.cheminees-du-nord.fr/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.cheminees-du-nord.fr/recherche?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={roboto.className}>
        <StickyNavbar />
        <Layout>
          {children}
          <SpeedInsights />
          <Analytics />
        </Layout>
        <Footer />
      </body>
    </html>
  );
}
