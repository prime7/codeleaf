import type { Metadata } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import siteContent from "@/site.json"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  keywords: [
    "AI automation agency Alberta",
    "AI marketing agency Edmonton",
    "AI marketing agency Calgary",
    "AI chatbot Alberta",
    "AI voice agent Edmonton",
    "CRM automation Calgary",
    "lead generation AI Alberta",
    "workflow automation Edmonton",
    "AI consulting Alberta",
    "AI for small business Alberta",
    "AI trades Edmonton",
    "AI real estate Calgary",
    "AI healthcare Alberta",
    "AI energy sector Alberta",
    "PIPEDA compliant AI Canada",
  ],
  authors: [{ name: "CodeLeaf" }],
  creator: "CodeLeaf",
  publisher: "CodeLeaf",
  metadataBase: new URL("https://codeleaf.ca"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://codeleaf.ca",
    siteName: "CodeLeaf",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CodeLeaf - AI Automation Agency for Alberta Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "geo.region": "CA-AB",
    "geo.placename": "Edmonton",
    "geo.position": "53.5461;-113.4938",
    "ICBM": "53.5461, -113.4938",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CodeLeaf",
    description: siteContent.meta.description,
    url: "https://codeleaf.ca",
    telephone: siteContent.brand.phone,
    email: siteContent.brand.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Edmonton",
      addressRegion: "AB",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "53.5461",
      longitude: "-113.4938",
    },
    areaServed: [
      { "@type": "City", name: "Edmonton" },
      { "@type": "City", name: "Calgary" },
      { "@type": "City", name: "Red Deer" },
      { "@type": "City", name: "Lethbridge" },
      { "@type": "City", name: "St. Albert" },
      { "@type": "City", name: "Sherwood Park" },
      { "@type": "AdministrativeArea", name: "Alberta" },
    ],
    serviceType: [
      "AI Automation",
      "AI Chatbot Development",
      "AI Voice Agent Implementation",
      "CRM Automation",
      "Workflow Automation",
      "Lead Generation",
      "AI Consulting",
      "AI Search Optimization",
    ],
    priceRange: "$$$",
    openingHours: "Mo-Fr 08:00-18:00",
    sameAs: [
      "https://linkedin.com/company/codeleaf",
      "https://twitter.com/codeleaf",
      "https://github.com/codeleaf",
    ],
  }

  return (
    <html lang="en-CA" className="dark">
      <head>
        <link rel="alternate" hrefLang="en-ca" href="https://codeleaf.ca/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${spaceGrotesk.className} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
