import {
  Facebook,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={"/logo.jpeg"}
                width={500}
                height={500}
                alt="KB Logo"
                className="h-20 w-auto object-contain bg-white rounded-sm p-0.5"
              />
              <span className="font-heading font-bold text-lg tracking-tight">
                KHAN BROTHERS
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Engineering Excellence with Reliable Solutions. We deliver
              high-performance, cost-effective, and sustainable project
              execution across electrical, solar, IT, and construction sectors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-secondary">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/">
                  <span className="hover:text-secondary transition-colors cursor-pointer flex items-center gap-2">
                    <ArrowRight className="h-3 w-3" /> Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="hover:text-secondary transition-colors cursor-pointer flex items-center gap-2">
                    <ArrowRight className="h-3 w-3" /> About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-secondary transition-colors cursor-pointer flex items-center gap-2">
                    <ArrowRight className="h-3 w-3" /> Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <span className="hover:text-secondary transition-colors cursor-pointer flex items-center gap-2">
                    <ArrowRight className="h-3 w-3" /> Projects
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <span className="hover:text-secondary transition-colors cursor-pointer flex items-center gap-2">
                    <ArrowRight className="h-3 w-3" /> Products
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-secondary transition-colors cursor-pointer flex items-center gap-2">
                    <ArrowRight className="h-3 w-3" /> Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-secondary">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>Electrical Solutions</li>
              <li>Solar Energy Systems</li>
              <li>IT & Networking</li>
              <li>Construction Services</li>
              <li>CCTV & Security</li>
              <li>Plumbing & Water Management</li>
              <li>Material Supply</li>
              <li>HVAC & Ventilation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-secondary">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span>
                  Shop # 1, Plot# 1910, Ground Floor, Sector 6J1, Main Awan Road, Jonajo Town, Manzoor Colony, Near Ghusia Masjid
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>+92 321 8980284</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>+92 305 2498416</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>info@kbengsolutions.com</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-white transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-white transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Khan Brothers Engineering &
            Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
