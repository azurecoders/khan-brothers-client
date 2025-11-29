"use client";

import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@apollo/client/react";
import { FETCH_ALL_SERVICES } from "@/graphql/services";

interface SubService {
  id: string;
  name: string;
  serviceId: string;
}

interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  subServices: SubService[];
}

const FALLBACK_IMAGE = "/placeholder-service.jpg";

const Services = () => {
  const { data, loading, error } = useQuery(FETCH_ALL_SERVICES);

  const services: Service[] = data?.fetchAllServices || [];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        {/* Services Grid */}
        {!loading && !error && services.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
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
        {!loading && !error && services.length === 0 && (
          <div className="text-center py-20">
            <Zap size={64} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-600 text-lg">
              No services available at the moment.
            </p>
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
