"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star, User } from "lucide-react";
import Image from "next/image";
import { useQuery } from "@apollo/client/react";
import { FETCH_ALL_TESTIMONIALS } from "@/graphql/testimonials";

interface Testimonial {
  id: string;
  name: string;
  designation: string;
  message: string;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data, loading, error } = useQuery(FETCH_ALL_TESTIMONIALS);

  const testimonials: Testimonial[] = data?.fetchAllTestimonials || [];

  const nextTestimonial = () => {
    if (testimonials.length === 0) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    if (testimonials.length === 0) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  // Get initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-4 mb-4">
            What Our Clients Say About Us
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Trusted by leading businesses across Pakistan for delivering
            engineering excellence and reliable solutions.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <span className="ml-4 text-lg text-gray-600">
              Loading testimonials...
            </span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <p className="text-red-600 text-lg">
              Failed to load testimonials. Please try again later.
            </p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && testimonials.length === 0 && (
          <div className="text-center py-20">
            <Quote size={64} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-600 text-lg">
              No testimonials available at the moment.
            </p>
          </div>
        )}

        {/* Main Testimonial Card */}
        {!loading && !error && testimonials.length > 0 && currentTestimonial && (
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8 bg-secondary text-white p-4 rounded-full shadow-lg">
                <Quote className="h-8 w-8" />
              </div>

              {/* Testimonial Content */}
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mt-6">
                {/* Client Avatar */}
                <div className="flex-shrink-0">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-secondary/20 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-white text-2xl md:text-3xl font-bold">
                      {getInitials(currentTestimonial.name)}
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating Stars */}
                  <div className="flex gap-1 justify-center md:justify-start mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-secondary text-secondary"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                    "{currentTestimonial.message}"
                  </p>

                  {/* Client Info */}
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-primary font-heading">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-secondary font-semibold">
                      {currentTestimonial.designation}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              {testimonials.length > 1 && (
                <div className="flex gap-4 justify-center md:justify-end mt-8">
                  <button
                    onClick={prevTestimonial}
                    className="bg-primary hover:bg-primary/90 text-white p-3 rounded-full transition-colors shadow-md"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="bg-primary hover:bg-primary/90 text-white p-3 rounded-full transition-colors shadow-md"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Dots Navigation */}
            {testimonials.length > 1 && (
              <div className="flex gap-2 justify-center mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`transition-all ${index === currentIndex
                        ? "bg-secondary w-8 h-3"
                        : "bg-gray-300 hover:bg-gray-400 w-3 h-3"
                      } rounded-full`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl md:text-4xl font-bold text-secondary font-heading mb-2">
              500+
            </div>
            <p className="text-muted-foreground text-sm">Projects Completed</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl md:text-4xl font-bold text-secondary font-heading mb-2">
              98%
            </div>
            <p className="text-muted-foreground text-sm">Client Satisfaction</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl md:text-4xl font-bold text-secondary font-heading mb-2">
              30+
            </div>
            <p className="text-muted-foreground text-sm">Years Experience</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl md:text-4xl font-bold text-secondary font-heading mb-2">
              200+
            </div>
            <p className="text-muted-foreground text-sm">Corporate Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
