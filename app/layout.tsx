import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import ApolloProviderComponent from "@/components/ApolloProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const SITE_URL = "https://kbengsolutions.com";
const SITE_NAME = "Khan Brothers Engineering & Solutions";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1E40AF" },
    { media: "(prefers-color-scheme: dark)", color: "#1E3A8A" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Khan Brothers Engineering & Solutions | Electrical, Solar & Construction Services in Karachi",
    template: "%s | Khan Brothers Engineering",
  },
  description:
    "Khan Brothers Engineering & Solutions - Leading provider of electrical solutions, solar energy systems, IT networking, CCTV security, construction services, and industrial equipment in Karachi, Pakistan. Quality engineering since 2025.",
  keywords: [
    "electrical engineering Karachi",
    "solar energy systems Pakistan",
    "electrical contractor Karachi",
    "solar panel installation",
    "IT networking services",
    "CCTV installation Karachi",
    "construction services Pakistan",
    "industrial electrical solutions",
    "power distribution systems",
    "energy efficient solutions",
    "electrical maintenance",
    "solar power systems",
    "security systems installation",
    "plumbing services Karachi",
    "HVAC installation",
    "Khan Brothers Engineering",
    "KB Engineering Solutions",
  ],
  authors: [{ name: "Khan Brothers Engineering & Solutions", url: SITE_URL }],
  creator: "Khan Brothers Engineering & Solutions",
  publisher: "Khan Brothers Engineering & Solutions",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Khan Brothers Engineering & Solutions | Electrical, Solar & Construction Services",
    description:
      "Leading provider of electrical solutions, solar energy systems, IT networking, CCTV security, and construction services in Karachi, Pakistan. Quality engineering excellence.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Khan Brothers Engineering & Solutions - Engineering Excellence",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 600,
        height: 600,
        alt: "Khan Brothers Engineering Logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khan Brothers Engineering & Solutions",
    description:
      "Leading provider of electrical, solar, IT, and construction services in Karachi, Pakistan.",
    images: ["/twitter-image.jpg"],
    creator: "@kaborotherseng",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#1E40AF",
      },
    ],
  },
  manifest: "/manifest.json",
  category: "Engineering Services",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  other: {
    "msapplication-TileColor": "#1E40AF",
    "msapplication-config": "/browserconfig.xml",
    "google-site-verification": "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Khan Brothers Engineering & Solutions",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.jpeg`,
        width: 500,
        height: 500,
      },
      image: `${SITE_URL}/og-image.jpg`,
      description:
        "Khan Brothers Engineering & Solutions is a dedicated and renowned company specializing in electrical solutions, solar energy systems, IT networking, CCTV security, and construction services in Karachi, Pakistan.",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Shop # 1, Plot# 1910, Ground Floor, Sector 6J1, Main Awan Road, Jonajo Town, Manzoor Colony, Near Ghusia Masjid",
        addressLocality: "Karachi",
        addressRegion: "Sindh",
        postalCode: "75850",
        addressCountry: "PK",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+92-321-8980284",
          contactType: "sales",
          areaServed: "PK",
          availableLanguage: ["English", "Urdu"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+92-305-2498416",
          contactType: "customer support",
          areaServed: "PK",
          availableLanguage: ["English", "Urdu"],
        },
      ],
      email: "info@kbengsolutions.com",
      sameAs: [
        "https://www.facebook.com/khanbrotherseng",
        "https://www.linkedin.com/company/khanbrotherseng",
      ],
      foundingDate: "2025",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 10,
        maxValue: 50,
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Khan Brothers Engineering & Solutions",
      image: `${SITE_URL}/og-image.jpg`,
      url: SITE_URL,
      telephone: "+92-321-8980284",
      email: "info@kbengsolutions.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Shop # 1, Plot# 1910, Ground Floor, Sector 6J1, Main Awan Road, Jonajo Town, Manzoor Colony, Near Ghusia Masjid",
        addressLocality: "Karachi",
        addressRegion: "Sindh",
        postalCode: "75850",
        addressCountry: "PK",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 24.8302,
        longitude: 67.0667,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "14:00",
        },
      ],
      priceRange: "$$",
      servesCuisine: "Engineering Services",
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 24.8607,
          longitude: 67.0011,
        },
        geoRadius: "100000",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Engineering Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Electrical Solutions",
              description: "Complete electrical engineering and installation services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Solar Energy Systems",
              description: "Solar panel installation and renewable energy solutions",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "IT & Networking",
              description: "IT infrastructure and networking solutions",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "CCTV & Security",
              description: "Security systems and CCTV installation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Construction Services",
              description: "Civil and construction engineering services",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: "Engineering Excellence with Reliable Solutions",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <ApolloProviderComponent>
          <Toaster />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ApolloProviderComponent>
      </body>
    </html>
  );
}
