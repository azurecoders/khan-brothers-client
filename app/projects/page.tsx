import { MapPin } from "lucide-react";
import heroImage from "../../assets/hero-image.png";
import Image from "next/image";

export const Projects = () => {

  const INITIAL_PROJECTS = [
    {
      id: "1",
      title: "Industrial Solar Plant",
      location: "Industrial Zone A",
      type: "Solar Energy",
      status: "Completed",
      description:
        "1.5MW Solar Power Plant installation for a major textile manufacturing unit.",
      image: "https://images.unsplash.com/photo-1761839259494-71caddcdd6b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "2",
      title: "Commercial Complex Wiring",
      location: "City Center",
      type: "Electrical",
      status: "Completed",
      description:
        "Complete electrical infrastructure design and execution for a 10-story commercial building.",
      image: "https://images.unsplash.com/photo-1763246169636-4127600060b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "3",
      title: "Data Center Upgrade",
      location: "Tech Park",
      type: "IT Infrastructure",
      status: "In Progress",
      description:
        "Upgrading network backbone and server racks for a high-availability data center.",
      image: "https://images.unsplash.com/photo-1738165170747-ecc6e3a4d97c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <div className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src={heroImage} width={1920} height={1080} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Our Projects</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            A showcase of our engineering capabilities and successful deliveries.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INITIAL_PROJECTS.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md flex flex-col overflow-hidden">
                <div>
                  <Image src={project.image} alt={project.title} width={1080} height={1920} className="object-cover h-[300px]" />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-primary">{project.title}</h3>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-muted-foreground" />
                    <p className="text-muted-foreground text-sm">{project.location}</p>
                  </div>
                  <p className="text-muted-foreground text-sm">{project.description}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Projects
