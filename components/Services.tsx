// components/Services.tsx (Homepage Section)
"use client";

import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@apollo/client/react";
import { FETCH_ALL_SERVICES } from "@/graphql/services";
import { useState, useMemo } from "react";

interface SubService {
  id: string;
  name: string;
  serviceId: string;
}

interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  subServices: SubService[];
}

const FALLBACK_IMAGE = "/placeholder-service.jpg";

const Services = () => {
  const { data, loading, error } = useQuery(FETCH_ALL_SERVICES);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const services: Service[] = data?.fetchAllServices || [];

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = new Set(
      services.map((s) => s.category).filter(Boolean)
    );
    return Array.from(uniqueCategories).sort();
  }, [services]);

  // Filter services by category
  const filteredServices = useMemo(() => {
    if (selectedCategory === "all") return services;
    return services.filter((s) => s.category === selectedCategory);
  }, [services, selectedCategory]);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Our Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide comprehensive multi-disciplinary engineering solutions
            designed for efficiency and longevity.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <span className="ml-4 text-lg text-gray-600">
              Loading services...
            </span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <p className="text-red-600 text-lg">
              Failed to load services. Please try again later.
            </p>
          </div>
        )}

        {/* Category Filter */}
        {!loading && !error && services.length > 0 && categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${selectedCategory === "all"
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
            >
              All Services
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Services Grid */}
        {!loading && !error && filteredServices.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-[300px]">
                  {service.icon ? (
                    <Image
                      src={service.icon}
                      alt={service.name}
                      width={1080}
                      height={1920}
                      className="object-cover h-full w-full"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Zap size={48} className="text-gray-400" />
                    </div>
                  )}
                  {/* Category Badge */}
                  {service.category && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                        {service.category}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-primary">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm flex-1 mt-2 line-clamp-4">
                    {service.description}
                  </p>

                  {/* Sub Services */}
                  {service.subServices.length > 0 && (
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {service.subServices.slice(0, 3).map((sub) => (
                          <span
                            key={sub.id}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                          >
                            {sub.name}
                          </span>
                        ))}
                        {service.subServices.length > 3 && (
                          <span className="text-xs text-gray-500">
                            +{service.subServices.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  <Link href="/services" className="mt-4">
                    <button className="flex items-center gap-2 text-secondary hover:gap-3 transition-all">
                      Learn More <ArrowRight size={18} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredServices.length === 0 && (
          <div className="text-center py-20">
            <Zap size={64} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-600 text-lg">
              {selectedCategory === "all"
                ? "No services available at the moment."
                : `No services found in "${selectedCategory}" category.`}
            </p>
            {selectedCategory !== "all" && (
              <button
                onClick={() => setSelectedCategory("all")}
                className="mt-4 text-primary hover:underline font-medium"
              >
                View all services
              </button>
            )}
          </div>
        )}

        {/* View All Services Button */}
        {!loading && !error && services.length > 0 && (
          <div className="text-center mt-12">
            <Link href="/services">
              <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-md transition-colors flex items-center gap-2 mx-auto">
                View All Services
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
