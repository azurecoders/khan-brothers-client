import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import aboutImage from "../assets/about-image.png";

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image src={aboutImage} width={1080} height={1920} alt="Construction Team" className="w-full object-cover" />
              <div className="absolute bottom-0 left-0 bg-primary text-white p-6 md:p-8 max-w-xs">
                <p className="text-4xl font-bold font-heading mb-1">30+</p>
                <p className="text-sm uppercase tracking-wider font-medium text-gray-300">Years of Industry Experience</p>
              </div>
            </div>
            {/* Decorative pattern */}
            <div className="absolute -z-10 top-[-20px] left-[-20px] w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
          </div>

          <div className="lg:w-1/2 space-y-6">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Building the Future with Precision & Integrity
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {"Khan Brothers Engineering & Solutions is a premier engineering brand recognized for excellence. We don't just build structures or install systems; we engineer reliable solutions that empower businesses to operate efficiently."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "Certified Engineering Team",
                "Safety First Approach",
                "Cost-Effective Solutions",
                "On-Time Project Delivery"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link href="/about">
                <button className="bg-primary text-white hover:bg-primary/90 px-8 py-2 rounded-md cursor-pointer">
                  More About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
