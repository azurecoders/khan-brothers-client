"use client";

import { MapPin, FolderOpen } from "lucide-react";
import Image from "next/image";
import { useQuery } from "@apollo/client/react";
import { FETCH_ALL_PROJECTS } from "@/graphql/projects";
import heroImage from "../../assets/hero-image.png";

interface Project {
  id: string;
  title: string;
  description: string;
  location: string;
  imageUrl: string;
  imageId: string;
}

const FALLBACK_IMAGE = "/placeholder-project.jpg";

export default function Projects() {
  const { data, loading, error } = useQuery(FETCH_ALL_PROJECTS);

  const projects: Project[] = data?.fetchAllProjects || [];

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
            Our Projects
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            A showcase of our engineering capabilities and successful
            deliveries.
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
          {!loading && !error && projects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-md flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-[300px]">
                    {project.imageUrl ? (
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        width={1080}
                        height={1920}
                        className="object-cover h-full w-full"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <FolderOpen size={48} className="text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-primary">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-muted-foreground" />
                      <p className="text-muted-foreground text-sm">
                        {project.location}
                      </p>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
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
        </div>
      </section>
    </>
  );
}
