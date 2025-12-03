import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get a Quote & Support",
  description:
    "Contact Khan Brothers Engineering & Solutions for quotes, inquiries, or support. Visit our office in Karachi or reach us via phone (+92 321 8980284) or email. We're here to help with your engineering needs.",
  keywords: [
    "contact Khan Brothers",
    "engineering quote Karachi",
    "electrical contractor contact",
    "get a quote",
    "engineering support Pakistan",
    "Karachi engineering company",
    "request quote electrical",
  ],
  openGraph: {
    title: "Contact Us | Khan Brothers Engineering & Solutions",
    description:
      "Get in touch for quotes, inquiries, or support. Our team is ready to assist with your engineering requirements.",
    url: "https://kbengsolutions.com/contact",
    type: "website",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Khan Brothers Engineering",
      },
    ],
  },
  alternates: {
    canonical: "https://kbengsolutions.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
