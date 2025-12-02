"use client";

import { MapPin, FolderOpen, Filter, X } from "lucide-react";
import Image from "next/image";
import heroImage from "../../assets/hero-image.png";
import { useQuery } from "@apollo/client/react";
import { FETCH_ALL_PROJECTS } from "@/graphql/projects";
import { useMemo, useState } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  location: string;
  imageUrl: string;
  imageId: string;
  category: string;
}

export default function Projects() {
  const { data, loading, error } = useQuery(FETCH_ALL_PROJECTS);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const projects: Project[] = data?.fetchAllProjects || [];

  // Extract categories with counts
  const categoriesWithCount = useMemo(() => {
    const map = new Map<string, number>();
    projects.forEach((p) => {
      if (p.category) {
        map.set(p.category, (map.get(p.category) || 0) + 1);
      }
    });

    return Array.from(map.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [projects]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

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
            Explore completed engineering, construction, and technology projects.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-10">

          {/* SIDEBAR (Desktop Only) */}
          <div className="hidden lg:block w-72">
            <div className="bg-white p-6 rounded-xl shadow-md border sticky top-24">
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <Filter size={20} /> Categories
              </h3>

              <button
                onClick={() => setSelectedCategory("all")}
                className={`w-full px-4 py-3 rounded-lg flex justify-between items-center mb-2 ${selectedCategory === "all"
                    ? "bg-primary text-white"
                    : "bg-gray-50 hover:bg-gray-100"
                  }`}
              >
                <span>All Projects</span>
                <span className="text-sm px-2 py-1 bg-gray-200 rounded-full">
                  {projects.length}
                </span>
              </button>

              {categoriesWithCount.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`w-full px-4 py-3 rounded-lg flex justify-between items-center mb-2 ${selectedCategory === cat.name
                      ? "bg-primary text-white"
                      : "bg-gray-50 hover:bg-gray-100"
                    }`}
                >
                  <span>{cat.name}</span>
                  <span className="text-sm px-2 py-1 bg-gray-200 rounded-full">
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* MOBILE FILTER BUTTON */}
          <div className="lg:hidden">
            <button
              onClick={() => setShowMobileFilter(true)}
              className="w-full bg-white border px-4 py-3 rounded-lg shadow-sm flex justify-between items-center"
            >
              <span className="flex items-center gap-2">
                <Filter size={20} />
                {selectedCategory === "all" ? "All Categories" : selectedCategory}
              </span>
              <span className="text-sm text-gray-500">{filteredProjects.length} projects</span>
            </button>
          </div>

          {/* MOBILE FILTER MODAL */}
          {showMobileFilter && (
            <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
              <div className="absolute bottom-0 w-full bg-white p-6 rounded-t-2xl max-h-[70vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-primary">Filter Categories</h3>
                  <button onClick={() => setShowMobileFilter(false)} className="p-2">
                    <X size={22} />
                  </button>
                </div>

                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setShowMobileFilter(false);
                  }}
                  className={`w-full px-4 py-3 rounded-lg mb-2 ${selectedCategory === "all" ? "bg-primary text-white" : "bg-gray-50"
                    }`}
                >
                  All Projects
                </button>

                {categoriesWithCount.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => {
                      setSelectedCategory(cat.name);
                      setShowMobileFilter(false);
                    }}
                    className={`w-full px-4 py-3 rounded-lg mb-2 ${selectedCategory === cat.name ? "bg-primary text-white" : "bg-gray-50"
                      }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* PROJECTS GRID */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-primary">
                  {selectedCategory === "all" ? "All Projects" : selectedCategory}
                </h2>
                <p className="text-gray-500 text-sm">
                  Showing {filteredProjects.length} of {projects.length} projects
                </p>
              </div>

              {selectedCategory !== "all" && (
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="text-sm text-primary flex items-center gap-1"
                >
                  <X size={14} /> Clear filter
                </button>
              )}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="relative h-64">
                    <Image
                      src={project.imageUrl || "/placeholder.jpg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />

                    {project.category && (
                      <span className="absolute top-3 left-3 bg-primary text-white text-xs px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <MapPin size={16} /> {project.location}
                    </div>
                    <p className="text-gray-500 text-sm">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {!loading && !error && filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <FolderOpen size={64} className="mx-auto text-gray-300" />
                <p className="text-gray-600 mt-4">
                  No projects found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
