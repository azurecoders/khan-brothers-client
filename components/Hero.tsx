import Image from "next/image";
import Link from "next/link";
import heroImage from "../assets/hero-image.png";

export default function Home() {

  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Engineering Site"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40" />
      </div>

      <div className="container mx-auto px-4 z-10 relative text-white">
        <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
          <div className="inline-block px-4 py-1 bg-secondary/90 text-primary-foreground font-bold text-sm rounded-full mb-2 uppercase tracking-wider">
            Trust • Quality • Innovation
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
            Engineering Excellence with <span className="text-secondary">Reliable Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            We deliver high-performance engineering, construction, solar, and IT infrastructure solutions tailored to your industrial and commercial needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/contact">
              <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold h-14 px-8 text-lg rounded-md cursor-pointer">
                Request a Quote
              </button>
            </Link>
            <Link href="/projects">
              <button className="bg-transparent border border-white text-white hover:bg-white hover:text-primary font-semibold h-14 px-8 text-lg rounded-md cursor-pointer">
                View Our Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
