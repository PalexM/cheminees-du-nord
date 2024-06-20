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
  title: "Cheminees du Nord",
  description:
    " Vente et installation de poêles à bois et granulés de bois, cheminées, inserts, foyers, barbecues, accessoires et conduits de fumée à dans toute la region Ile de France.",
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
