"use client";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-xs font-medium">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-3 w-3" /> {"+92 321 8980284, +92 305 2498416"}
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-3 w-3" />{" "}
              {"khanbrothers.engsolution@gmail.com"}
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src={"/KhanBrother_Logo.jpeg"}
              alt="KB Logo"
              className="h-10 w-10 object-contain rounded-sm"
            />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl leading-tight text-primary tracking-tight">
                KHAN BROTHERS
              </span>
              <span className="text-[10px] text-muted-foreground tracking-wider uppercase font-medium">
                Engineering & Solutions
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-secondary after:transition-all ${
                  isActive(link.href)
                    ? "text-primary font-bold after:w-full"
                    : "text-foreground/80"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link href="/contact">
            <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-2 px-4 rounded-sm transition-colors cursor-pointer">
              Contact Us
            </button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-background p-4 absolute w-full shadow-lg">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium block py-2 ${
                    isActive(link.href)
                      ? "text-primary font-bold"
                      : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold mt-2 px-4 py-2">
                Get a Quote
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
