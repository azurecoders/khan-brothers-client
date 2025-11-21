import { ArrowRight } from "lucide-react";
import Image from "next/image";
import heroImage from "../../assets/hero-image.png";

const INITIAL_SERVICES = [
  {
    id: "1",
    title: "Electrical Solutions",
    description:
      "Comprehensive industrial, commercial, and residential electrical installations, maintenance, and load analysis.",
    icon: "Zap",
    image: "https://images.unsplash.com/photo-1761839262867-af53d08b0eb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8", // Will need to map this to generated image
  },
  {
    id: "2",
    title: "Solar Energy Systems",
    description:
      "Turnkey solar solutions including on-grid, off-grid, and hybrid systems for sustainable energy.",
    icon: "Sun",
    image: "https://images.unsplash.com/photo-1762997455163-98123f974331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
  },
  {
    id: "3",
    title: "IT & Networking",
    description:
      "Advanced networking, structured cabling, server setups, and IT infrastructure design.",
    icon: "Server",
    image: "https://images.unsplash.com/photo-1763386840769-8484a2a02442?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
  },
  {
    id: "4",
    title: "Construction Services",
    description:
      "Civil works, interior renovation, and structural engineering for modern infrastructure.",
    icon: "HardHat",
    image: "https://images.unsplash.com/photo-1761839257870-06874bda71b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
  },
  {
    id: "5",
    title: "CCTV & Security",
    description:
      "State-of-the-art surveillance and access control systems for enhanced security.",
    icon: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1763241287143-047ab2696b1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6",
    title: "Mechanical & Plumbing",
    description:
      "Expert mechanical installations and plumbing system designs for commercial facilities.",
    icon: "Wrench",
    image: "https://images.unsplash.com/photo-1761839257469-96c78a7c2dd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D",
  },
]

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src={heroImage} width={1920} height={1080} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Comprehensive engineering solutions tailored to your specific industry needs.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INITIAL_SERVICES.map((service) => {

              return (
                <div key={service.id} className="bg-white rounded-lg shadow-md flex flex-col overflow-hidden">
                  <div>
                    <Image src={service.image} alt={service.title} width={1080} height={1920} className="object-cover h-[300px]" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                    <button className="mt-4 flex items-center gap-2 text-secondary">Learn More <ArrowRight size={18} /></button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Workflow */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Our Workflow</h2>
            <p className="text-muted-foreground">How we deliver excellence from start to finish.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Consultation", desc: "Understanding your needs" },
                { step: "02", title: "Planning", desc: "Design & Engineering" },
                { step: "03", title: "Execution", desc: "Installation & Testing" },
                { step: "04", title: "Handover", desc: "Quality Assurance" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-lg text-primary mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
