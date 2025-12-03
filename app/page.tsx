import About from "@/components/About";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import WhatsAppFloat from "@/components/WhatsappFloat";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khan Brothers Engineering & Solutions | Electrical, Solar & Construction Services in Karachi",
  description:
    "Khan Brothers Engineering & Solutions - Your trusted partner for electrical solutions, solar energy systems, IT networking, CCTV security, construction services, and industrial equipment in Karachi, Pakistan. Quality engineering excellence since 2025.",
  alternates: {
    canonical: "https://kbengsolutions.com",
  },
};

export default function Home() {
  return (
    <>
      <WhatsAppFloat />
      <Hero />
      <Services />
      <About />
      <Products />
      <Projects />
      <Testimonials />
      <Stats />
      <CTA />
    </>
  );
}
