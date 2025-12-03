import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - Electrical, Solar & Construction Materials",
  description:
    "Premium quality electrical equipment, solar panels, IT networking gear, security systems, plumbing supplies, and construction materials from trusted manufacturers. Request quotes for bulk orders.",
  keywords: [
    "electrical equipment Pakistan",
    "solar panels Karachi",
    "networking equipment",
    "CCTV cameras",
    "construction materials",
    "plumbing supplies",
    "industrial electrical supplies",
    "solar inverters",
    "cables and wires",
    "electrical accessories",
    "bulk electrical supplies",
  ],
  openGraph: {
    title: "Products & Equipment | Khan Brothers Engineering & Solutions",
    description:
      "Premium quality electrical, solar, IT, and construction materials from trusted manufacturers worldwide. Competitive pricing for bulk orders.",
    url: "https://kbengsolutions.com/products",
    type: "website",
    images: [
      {
        url: "/og-products.jpg",
        width: 1200,
        height: 630,
        alt: "Khan Brothers Engineering Products",
      },
    ],
  },
  alternates: {
    canonical: "https://kbengsolutions.com/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
