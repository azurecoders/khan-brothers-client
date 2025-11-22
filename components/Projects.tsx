"use client";
import { useState } from "react";
import {
  Building2,
  Factory,
  Zap,
  Sun,
  Network,
  ShieldCheck,
  Calendar,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const CATEGORIES = [
    "All",
    "Electrical",
    "Solar",
    "Construction",
    "IT & Networking",
    "Security",
  ];

  const PROJECTS = [
    {
      id: "1",
      title: "Industrial Power Distribution - Textile Mill",
      category: "Electrical",
      location: "Karachi Industrial Area",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=80",
      description:
        "Complete 1500KVA electrical installation with HT/LT panels, transformer setup, and power distribution system for a large-scale textile manufacturing facility.",
      features: [
        "1500KVA Transformer Installation",
        "HT/LT Control Panels",
        "Busbar Trunking System",
        "Emergency Power Backup",
      ],
      icon: Factory,
    },
    {
      id: "2",
      title: "Commercial Complex Electrical Infrastructure",
      category: "Electrical",
      location: "DHA Phase 8, Karachi",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
      description:
        "End-to-end electrical design and installation for a modern 10-story commercial plaza including lighting, power distribution, and fire safety systems.",
      features: [
        "Complete Electrical Design",
        "LED Lighting Systems",
        "Fire Alarm Integration",
        "Energy Management System",
      ],
      icon: Building2,
    },
    {
      id: "3",
      title: "500KW Rooftop Solar Installation",
      category: "Solar",
      location: "Industrial Zone, Port Qasim",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=80",
      description:
        "Large-scale on-grid solar PV system with net metering for a manufacturing facility, reducing energy costs by 65% annually.",
      features: [
        "500KW Solar Array",
        "On-Grid Net Metering",
        "Remote Monitoring System",
        "25-Year Performance Warranty",
      ],
      icon: Sun,
    },
    {
      id: "4",
      title: "Corporate Office Solar Hybrid System",
      category: "Solar",
      location: "Clifton, Karachi",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&auto=format&fit=crop&q=80",
      description:
        "Hybrid solar solution with battery backup ensuring 24/7 power availability for a corporate headquarters building.",
      features: [
        "150KW Hybrid System",
        "Lithium Battery Storage",
        "Smart Energy Management",
        "Backup Power Integration",
      ],
      icon: Sun,
    },
    {
      id: "5",
      title: "Data Center Infrastructure Setup",
      category: "IT & Networking",
      location: "Gulshan-e-Iqbal, Karachi",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
      description:
        "Complete IT infrastructure including server racks, structured cabling, fiber optics, and networking equipment for a Tier-3 data center.",
      features: [
        "Fiber Optic Backbone",
        "42U Server Rack Setup",
        "Cat6A Structured Cabling",
        "Network Security Implementation",
      ],
      icon: Network,
    },
    {
      id: "6",
      title: "Hospital Network & CCTV Integration",
      category: "IT & Networking",
      location: "North Nazimabad, Karachi",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80",
      description:
        "Comprehensive networking and security surveillance system for a 150-bed hospital with 24/7 monitoring capabilities.",
      features: [
        "Hospital-wide LAN Setup",
        "100+ IP Camera Installation",
        "Centralized Monitoring Room",
        "Access Control Integration",
      ],
      icon: Network,
    },
    {
      id: "7",
      title: "Industrial Security & Surveillance",
      category: "Security",
      location: "SITE Industrial Area",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&auto=format&fit=crop&q=80",
      description:
        "Advanced security system with 4K cameras, facial recognition, and perimeter intrusion detection for a pharmaceutical manufacturing plant.",
      features: [
        "4K IP Camera System",
        "Facial Recognition Access",
        "Perimeter Intrusion Detection",
        "Cloud Backup Solution",
      ],
      icon: ShieldCheck,
    },
    {
      id: "8",
      title: "Residential Complex Security Solution",
      category: "Security",
      location: "Bahria Town, Karachi",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80",
      description:
        "Integrated security and access control for a gated residential community with 500+ units including CCTV and biometric entry systems.",
      features: [
        "200+ Camera Installation",
        "Biometric Access Control",
        "Video Intercom System",
        "Mobile App Integration",
      ],
      icon: ShieldCheck,
    },
    {
      id: "9",
      title: "High-Rise Building Construction",
      category: "Construction",
      location: "Gulistan-e-Johar, Karachi",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=80",
      description:
        "Civil construction and finishing work for a 15-story residential tower including structural, plumbing, and electrical coordination.",
      features: [
        "Complete Civil Works",
        "Structural Engineering",
        "MEP Coordination",
        "Interior Finishing",
      ],
      icon: Building2,
    },
    {
      id: "10",
      title: "Factory Renovation & Expansion",
      category: "Construction",
      location: "Landhi Industrial Area",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=80",
      description:
        "Complete renovation and 50% expansion of existing manufacturing facility with modern infrastructure and utilities.",
      features: [
        "50,000 sq.ft Expansion",
        "Structural Reinforcement",
        "Modern Utility Installation",
        "On-Time Project Delivery",
      ],
      icon: Factory,
    },
    {
      id: "11",
      title: "Smart Building Automation",
      category: "Electrical",
      location: "Defence, Karachi",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&auto=format&fit=crop&q=80",
      description:
        "Intelligent building management system with automated lighting, HVAC control, and energy monitoring for a premium office building.",
      features: [
        "Building Automation System",
        "Smart Lighting Control",
        "Energy Monitoring",
        "Mobile App Control",
      ],
      icon: Zap,
    },
    {
      id: "12",
      title: "Agricultural Solar Pumping System",
      category: "Solar",
      location: "Thatta District",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&auto=format&fit=crop&q=80",
      description:
        "Off-grid solar-powered water pumping solution for agricultural irrigation covering 500 acres of farmland.",
      features: [
        "50HP Solar Pump System",
        "Off-Grid Solution",
        "Water Storage Integration",
        "Remote Monitoring",
      ],
      icon: Sun,
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-4 mb-4">
            Featured Projects & Success Stories
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Explore our diverse portfolio of successfully delivered engineering
            projects across electrical, solar, IT, security, and construction
            sectors.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                activeCategory === category
                  ? "bg-secondary text-secondary-foreground shadow-md"
                  : "bg-white text-foreground hover:bg-secondary/10 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase flex items-center gap-2">
                    <IconComponent className="h-3 w-3" />
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Location & Date */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-secondary" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-secondary" />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 px-4 rounded-md transition-colors mt-auto">
                    View Project Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-10 text-white shadow-xl">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our
              engineering expertise and proven track record.
            </p>
            <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold h-12 px-8 rounded-md cursor-pointer transition-colors">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
