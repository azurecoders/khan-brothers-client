"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useQuery } from "@apollo/client/react";
import { FETCH_ALL_SERVICES } from "@/graphql/services";
import heroImage from "../../assets/hero-image.png";

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

// Fallback image if service has no icon
const FALLBACK_IMAGE = "/placeholder-service.jpg";

export default function Services() {
  const { data, loading, error } = useQuery(FETCH_ALL_SERVICES);

  const services: Service[] = data?.fetchAllServices || [];

  return (
    <>
      {/* Page Header */}
      <div className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={heroImage}
            width={1920}
            height={1080}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Comprehensive engineering solutions tailored to your specific
            industry needs.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
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
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-md flex flex-col overflow-hidden"
                >
                  <div className="relative h-[300px]">
                    <Image
                      src={service.icon || FALLBACK_IMAGE}
                      alt={service.name}
                      width={1920}
                      height={1080}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-primary">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground text-sm flex-1">
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
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && services.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">No services available.</p>
            </div>
          )}
        </div>
      </section>

      {/* Process Workflow */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              Our Workflow
            </h2>
            <p className="text-muted-foreground">
              How we deliver excellence from start to finish.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  desc: "Understanding your needs",
                },
                { step: "02", title: "Planning", desc: "Design & Engineering" },
                {
                  step: "03",
                  title: "Execution",
                  desc: "Installation & Testing",
                },
                { step: "04", title: "Handover", desc: "Quality Assurance" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-lg text-primary mb-2">
                    {item.title}
                  </h4>
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
