import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Electrical, Solar, IT & Construction Solutions",
  description:
    "Explore Khan Brothers Engineering comprehensive services: Electrical solutions, solar energy systems, IT networking, CCTV security, construction, plumbing, HVAC, and material supply in Karachi, Pakistan.",
  keywords: [
    "electrical services Karachi",
    "solar installation Pakistan",
    "IT networking services",
    "CCTV installation",
    "construction services",
    "plumbing services",
    "HVAC installation",
    "electrical contractor",
    "solar panel installation",
    "security systems",
    "engineering services Pakistan",
  ],
  openGraph: {
    title: "Engineering Services | Khan Brothers Engineering & Solutions",
    description:
      "Comprehensive engineering solutions: Electrical, Solar, IT, Security, Construction & more. Professional services tailored to your needs.",
    url: "https://kbengsolutions.com/services",
    type: "website",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Khan Brothers Engineering Services",
      },
    ],
  },
  alternates: {
    canonical: "https://kbengsolutions.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
