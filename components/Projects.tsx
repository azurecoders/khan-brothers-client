"use client";

import { MapPin, FolderOpen, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@apollo/client/react";
import { FETCH_ALL_PROJECTS } from "@/graphql/projects";

interface Project {
  id: string;
  title: string;
  description: string;
  location: string;
  imageUrl: string;
  imageId: string;
  category: string; // Added category support
}

const Projects = () => {
  const { data, loading, error } = useQuery(FETCH_ALL_PROJECTS);

  const projects: Project[] = data?.fetchAllProjects || [];

  // Show only first 6 projects on homepage
  const displayedProjects = projects.slice(0, 6);

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

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <span className="ml-4 text-lg text-gray-600">
              Loading projects...
            </span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <p className="text-red-600 text-lg">
              Failed to load projects. Please try again later.
            </p>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && displayedProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">

                  {/* Category Badge */}
                  {project.category && (
                    <span className="absolute top-3 left-3 z-10 bg-primary text-white text-xs px-3 py-1 rounded-full shadow">
                      {project.category}
                    </span>
                  )}

                  {project.imageUrl ? (
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <FolderOpen size={48} className="text-gray-400" />
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span>{project.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                    {project.description}
                  </p>

                  {/* View Details Button */}
                  <Link href={`/projects`}>
                    <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 px-4 rounded-md transition-colors mt-auto">
                      View Project Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && projects.length === 0 && (
          <div className="text-center py-20">
            <FolderOpen size={64} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-600 text-lg">
              No projects available at the moment.
            </p>
            <p className="text-gray-500 mt-2">
              Please check back later to see our latest work.
            </p>
          </div>
        )}

        {/* View All Projects Button */}
        {!loading && !error && projects.length > 0 && (
          <div className="text-center mt-12">
            <Link href="/projects">
              <button className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-8 rounded-md transition-all flex items-center gap-2 mx-auto cursor-pointer">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-10 text-white shadow-xl">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              {"Let's discuss how we can bring your vision to life with our engineering expertise and proven track record."}
            </p>
            <Link href="/contact">
              <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold h-12 px-8 rounded-md cursor-pointer transition-colors">
                Schedule a Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
