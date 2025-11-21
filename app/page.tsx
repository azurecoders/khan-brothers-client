import About from "@/components/About";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhatsAppFloat from "@/components/WhatsappFloat";

export default function Home() {
  return (
    <>
      <WhatsAppFloat />
      <Hero />
      <Services />
      <About />
      <Stats />
      <CTA />
    </>
  );
}
