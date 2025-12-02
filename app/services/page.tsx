// app/services/page.tsx
"use client";

import { FETCH_ALL_SERVICES } from "@/graphql/services";
import { useQuery } from "@apollo/client/react";
import Image from "next/image";
import heroImage from "../../assets/hero-image.png";
import { useState, useMemo } from "react";
import { Filter, X } from "lucide-react";

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

export default function Services() {
  const { data, loading, error } = useQuery(FETCH_ALL_SERVICES);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const services: Service[] = data?.fetchAllServices || [];

  // Get unique categories with count
  const categoriesWithCount = useMemo(() => {
    const categoryMap = new Map<string, number>();
    services.forEach((s) => {
      if (s.category) {
        categoryMap.set(s.category, (categoryMap.get(s.category) || 0) + 1);
      }
    });
    return Array.from(categoryMap.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [services]);

  // Filter services by category
  const filteredServices = useMemo(() => {
    if (selectedCategory === "all") return services;
    return services.filter((s) => s.category === selectedCategory);
  }, [services, selectedCategory]);

  return (
    <>
      {/* Page Header - Enhanced */}
      <div className="bg-primary py-24 md:py-32 relative overflow-hidden">
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
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive engineering solutions tailored to your specific
            industry needs with precision and excellence.
          </p>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Loading State */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-32">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent"></div>
              <span className="mt-6 text-lg text-gray-600 font-medium">
                Loading services...
              </span>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-32">
              <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md mx-auto">
                <svg
                  className="w-12 h-12 text-red-500 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <p className="text-red-600 text-lg font-medium">
                  Failed to load services
                </p>
                <p className="text-red-500 text-sm mt-2">
                  Please try again later or contact support.
                </p>
              </div>
            </div>
          )}

          {/* Main Content */}
          {!loading && !error && (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Category Sidebar - Desktop */}
              <div className="hidden lg:block w-72 flex-shrink-0">
                <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 sticky top-24">
                  <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                    <Filter size={20} />
                    Categories
                  </h3>

                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedCategory("all")}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between ${selectedCategory === "all"
                          ? "bg-primary text-white"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                        }`}
                    >
                      <span className="font-medium">All Services</span>
                      <span
                        className={`text-sm px-2 py-0.5 rounded-full ${selectedCategory === "all"
                            ? "bg-white/20"
                            : "bg-gray-200"
                          }`}
                      >
                        {services.length}
                      </span>
                    </button>

                    {categoriesWithCount.map((category) => (
                      <button
                        key={category.name}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between ${selectedCategory === category.name
                            ? "bg-primary text-white"
                            : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                          }`}
                      >
                        <span className="font-medium">{category.name}</span>
                        <span
                          className={`text-sm px-2 py-0.5 rounded-full ${selectedCategory === category.name
                              ? "bg-white/20"
                              : "bg-gray-200"
                            }`}
                        >
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Category Filter Button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setShowMobileFilter(true)}
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-between shadow-sm"
                >
                  <span className="flex items-center gap-2 text-gray-700">
                    <Filter size={20} />
                    {selectedCategory === "all"
                      ? "All Categories"
                      : selectedCategory}
                  </span>
                  <span className="text-sm text-gray-500">
                    {filteredServices.length} services
                  </span>
                </button>
              </div>

              {/* Mobile Category Modal */}
              {showMobileFilter && (
                <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
                  <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 max-h-[70vh] overflow-y-auto">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-primary">
                        Filter by Category
                      </h3>
                      <button
                        onClick={() => setShowMobileFilter(false)}
                        className="p-2 hover:bg-gray-100 rounded-lg"
                      >
                        <X size={24} />
                      </button>
                    </div>

                    <div className="space-y-2">
                      <button
                        onClick={() => {
                          setSelectedCategory("all");
                          setShowMobileFilter(false);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between ${selectedCategory === "all"
                            ? "bg-primary text-white"
                            : "bg-gray-50 text-gray-700"
                          }`}
                      >
                        <span className="font-medium">All Services</span>
                        <span
                          className={`text-sm px-2 py-0.5 rounded-full ${selectedCategory === "all"
                              ? "bg-white/20"
                              : "bg-gray-200"
                            }`}
                        >
                          {services.length}
                        </span>
                      </button>

                      {categoriesWithCount.map((category) => (
                        <button
                          key={category.name}
                          onClick={() => {
                            setSelectedCategory(category.name);
                            setShowMobileFilter(false);
                          }}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between ${selectedCategory === category.name
                              ? "bg-primary text-white"
                              : "bg-gray-50 text-gray-700"
                            }`}
                        >
                          <span className="font-medium">{category.name}</span>
                          <span
                            className={`text-sm px-2 py-0.5 rounded-full ${selectedCategory === category.name
                                ? "bg-white/20"
                                : "bg-gray-200"
                              }`}
                          >
                            {category.count}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Services Grid */}
              <div className="flex-1">
                {/* Results Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {selectedCategory === "all"
                        ? "All Services"
                        : selectedCategory}
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      Showing {filteredServices.length} of {services.length}{" "}
                      services
                    </p>
                  </div>

                  {selectedCategory !== "all" && (
                    <button
                      onClick={() => setSelectedCategory("all")}
                      className="text-sm text-primary hover:underline font-medium flex items-center gap-1"
                    >
                      <X size={16} />
                      Clear filter
                    </button>
                  )}
                </div>

                {/* Services Grid */}
                {filteredServices.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredServices.map((service, index) => (
                      <div
                        key={service.id}
                        className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden border border-gray-100 hover:border-primary/20 transform hover:-translate-y-1"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {/* Image Container */}
                        <div className="relative h-56 overflow-hidden bg-gray-100">
                          <Image
                            src={service.icon || FALLBACK_IMAGE}
                            alt={service.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {/* Category Badge */}
                          {service.category && (
                            <div className="absolute top-3 left-3">
                              <span className="bg-primary/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm shadow-lg">
                                {service.category}
                              </span>
                            </div>
                          )}
                          {/* Gradient Overlay on Hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
                            {service.description}
                          </p>

                          {/* Sub Services */}
                          {service.subServices.length > 0 && (
                            <div className="mt-auto pt-4 border-t border-gray-100">
                              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                                Specializations
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {service.subServices.slice(0, 3).map((sub) => (
                                  <span
                                    key={sub.id}
                                    className="text-xs bg-gray-100 hover:bg-primary hover:text-white text-gray-700 px-3 py-1.5 rounded-full transition-colors duration-200 font-medium"
                                  >
                                    {sub.name}
                                  </span>
                                ))}
                                {service.subServices.length > 3 && (
                                  <span className="text-xs text-gray-500 px-3 py-1.5 font-medium">
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
                ) : (
                  <div className="text-center py-20">
                    <div className="bg-gray-50 rounded-lg p-12 max-w-md mx-auto">
                      <svg
                        className="w-16 h-16 text-gray-400 mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        />
                      </svg>
                      <p className="text-gray-600 text-lg font-medium">
                        No services found in "{selectedCategory}"
                      </p>
                      <button
                        onClick={() => setSelectedCategory("all")}
                        className="mt-4 text-primary hover:underline font-medium"
                      >
                        View all services
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && services.length === 0 && (
            <div className="text-center py-32">
              <div className="bg-gray-50 rounded-lg p-12 max-w-md mx-auto">
                <svg
                  className="w-16 h-16 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                <p className="text-gray-600 text-lg font-medium">
                  No services available at the moment.
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Please check back later.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Process Workflow */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Workflow
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A streamlined process designed to deliver excellence from start to
              finish.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-20 left-0 w-full h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  desc: "Understanding your unique needs and requirements",
                  icon: "💬",
                },
                {
                  step: "02",
                  title: "Planning",
                  desc: "Detailed design and engineering blueprints",
                  icon: "📋",
                },
                {
                  step: "03",
                  title: "Execution",
                  desc: "Professional installation and comprehensive testing",
                  icon: "⚙️",
                },
                {
                  step: "04",
                  title: "Handover",
                  desc: "Quality assurance and final delivery",
                  icon: "✓",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-primary/30 transform hover:-translate-y-2"
                >
                  {/* Icon Circle */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>

                  {/* Emoji Icon */}
                  <div className="text-3xl mb-3">{item.icon}</div>

                  <h4 className="font-bold text-lg text-primary mb-3 group-hover:text-primary/80 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
