import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects - Completed Engineering & Construction Work",
  description:
    "Browse Khan Brothers Engineering completed projects across electrical, solar, IT, and construction sectors in Karachi and Pakistan. See our portfolio of successful engineering solutions.",
  keywords: [
    "engineering projects Karachi",
    "completed construction projects",
    "electrical project portfolio",
    "solar installation projects",
    "IT infrastructure projects",
    "engineering case studies",
    "project gallery Pakistan",
  ],
  openGraph: {
    title: "Project Portfolio | Khan Brothers Engineering & Solutions",
    description:
      "Explore our completed engineering, construction, and technology projects. Quality work delivered across Pakistan.",
    url: "https://kbengsolutions.com/projects",
    type: "website",
    images: [
      {
        url: "/og-projects.jpg",
        width: 1200,
        height: 630,
        alt: "Khan Brothers Engineering Projects",
      },
    ],
  },
  alternates: {
    canonical: "https://kbengsolutions.com/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
