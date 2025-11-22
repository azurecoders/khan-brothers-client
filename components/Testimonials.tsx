"use client";
import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const TESTIMONIALS = [
    {
      id: "1",
      name: "Ahmed Malik",
      position: "CEO, TechVision Industries",
      company: "Manufacturing Sector",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      rating: 5,
      text: "Khan Brothers transformed our entire electrical infrastructure with precision and attention to detail. Their team demonstrated exceptional technical prowess and completed our 500KVA installation ahead of schedule. The level of professionalism and commitment to excellence truly sets them apart.",
      project: "Industrial Electrical Installation",
    },
    {
      id: "2",
      name: "Sarah Khan",
      position: "Operations Director",
      company: "Textile Manufacturing Ltd.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
      rating: 5,
      text: "We engaged Khan Brothers for a complete solar energy solution for our manufacturing facility. Their innovative approach and technical expertise resulted in a 60% reduction in our energy costs. The project was delivered on time with exceptional quality standards.",
      project: "500KW Solar Installation",
    },
    {
      id: "3",
      name: "Muhammad Raza",
      position: "IT Manager",
      company: "Financial Services Group",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
      rating: 5,
      text: "Their networking and IT infrastructure services are world-class. Khan Brothers implemented our entire data center setup with fiber optics and structured cabling. The reliability and professionalism they brought to the project was outstanding.",
      project: "Data Center Infrastructure",
    },
    {
      id: "4",
      name: "Fatima Ahmed",
      position: "Facility Manager",
      company: "Healthcare Center",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80",
      rating: 5,
      text: "We needed a comprehensive security and surveillance system for our healthcare facility. Khan Brothers delivered an integrated CCTV and access control solution that exceeded our expectations. Their after-sales support has been exemplary.",
      project: "Security Systems Integration",
    },
    {
      id: "5",
      name: "Imran Siddiqui",
      position: "Project Director",
      company: "Real Estate Development",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
      rating: 5,
      text: "From electrical design to execution, Khan Brothers handled our commercial complex project with remarkable efficiency. Their problem-solving skills and adaptability to changing requirements made them an invaluable partner throughout the construction phase.",
      project: "Commercial Complex Development",
    },
    {
      id: "6",
      name: "Ayesha Noor",
      position: "Plant Manager",
      company: "Food Processing Industry",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&auto=format&fit=crop&q=80",
      rating: 5,
      text: "Their expertise in industrial electrical systems and automation is unmatched. Khan Brothers installed our complete production line electrical infrastructure with zero downtime during commissioning. A truly customer-centric and proactive team.",
      project: "Industrial Automation & Electrical",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

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

        {/* Main Testimonial Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 bg-secondary text-white p-4 rounded-full shadow-lg">
              <Quote className="h-8 w-8" />
            </div>

            {/* Testimonial Content */}
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mt-6">
              {/* Client Image */}
              <div className="flex-shrink-0">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-secondary/20">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Rating Stars */}
                <div className="flex gap-1 justify-center md:justify-start mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-secondary text-secondary"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                  "{currentTestimonial.text}"
                </p>

                {/* Client Info */}
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-primary font-heading">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-secondary font-semibold">
                    {currentTestimonial.position}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {currentTestimonial.company}
                  </p>
                  <div className="inline-block mt-2 px-4 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                    Project: {currentTestimonial.project}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
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
          </div>

          {/* Dots Navigation */}
          <div className="flex gap-2 justify-center mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`transition-all ${
                  index === currentIndex
                    ? "bg-secondary w-8 h-3"
                    : "bg-gray-300 hover:bg-gray-400 w-3 h-3"
                } rounded-full`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

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
