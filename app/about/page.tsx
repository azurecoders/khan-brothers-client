import { CheckCircle2, Target, Lightbulb, Shield, Users, Award, TargetIcon } from "lucide-react";
import heroImage from "../../assets/hero-image.png";
import Image from "next/image";

export default function About() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src={heroImage} width={1920} height={1080} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Building a legacy of trust and engineering excellence since 2025.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Company Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Khan Brothers is a dedicated and renowned company specializing in electrical solutions and services. With a proven track record of excellence in the field, we have established ourselves as a trusted partner for all your electrical needs. Our unwavering commitment to quality and innovation sets us apart in the industry. Based on a foundation of expertise and technical proficiency, Khan Brothers is your go-to source for a wide range of electrical services and solutions. From design and installation to maintenance and optimization, we are here to meet all your electrical requirements. At Khan Brothers, our focus is exclusively on the electrical domain. We bring a wealth of knowledge and experience to every project, ensuring that your electrical systems operate efficiently and reliably. Our team of skilled professionals is well-versed in the latest industry standards and practices, making us the ideal choice for your electrical projects.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand the critical role that electrical systems play in today’s world, whether in commercial, industrial, or residential settings. That’s why we are committed to delivering top-notch electrical solutions that not only meet but exceed your expectations. When you partner with Khan Brothers, you can be confident in the reliability and safety of your electrical infrastructure.  Our comprehensive range of electrical services covers everything from wiring, lighting, and power distribution to advanced automation and energy-efficient solutions. We are dedicated to providing innovative and sustainable electrical systems that not only enhance functionality but also reduce energy consumption and operational costs. Khan Brothers takes pride in its commitment to excellence, adherence to industry regulations, and the assurance of safety and reliability. When you choose us as your electrical partner, you're making a choice for quality, professionalism, and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="rounded-md border-t-8 border-primary p-8 space-y-4 shadow-md">
              <div className="rounded-full bg-primary/10 text-primary p-3 inline-block mb-4">
                <TargetIcon size={28} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Mission</h3>
              <p>To deliver high-performance, cost-effective, and sustainable project execution across electrical, solar, IT, and construction sectors, ensuring total client satisfaction through quality and integrity.</p>
            </div>

            <div className="rounded-md border-t-8 border-secondary p-8 space-y-4 shadow-md">
              <div className="rounded-full bg-secondary/10 text-secondary p-3 inline-block mb-4">
                <TargetIcon size={28} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-secondary mb-4">Our Vision</h3>
              <p>To become a premier engineering brand recognized globally for excellence, reliability, and innovation, setting new standards in the engineering and construction industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">The principles that guide every project we undertake.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Integrity", icon: Shield, text: "We conduct our business with the highest standards of honesty and transparency." },
              { title: "Quality", icon: Award, text: "We never compromise on quality, ensuring durable and safe solutions." },
              { title: "Innovation", icon: Lightbulb, text: "We embrace new technologies to deliver modern and efficient results." },
              { title: "Safety", icon: Shield, text: "The safety of our team and clients is our top priority in every operation." },
              { title: "Teamwork", icon: Users, text: "We believe in the power of collaboration to solve complex problems." },
              { title: "Customer Focus", icon: Target, text: "We listen to our clients and tailor our solutions to their specific needs." }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-border hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <value.icon className="h-6 w-6 text-secondary" />
                  <h4 className="font-bold text-lg text-primary">{value.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
