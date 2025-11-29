import About from "@/components/About";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import WhatsAppFloat from "@/components/WhatsappFloat";

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
