import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Services = () => {
  const INITIAL_SERVICES = [
    {
      id: "1",
      title: "Electrical & Industrial Services",
      description:
        "Khan Brothers delivers complete industrial, commercial, and residential electrical solutions, including LV/MV systems, transformers, HT/LT panels, cable laying, and power distribution. We also provide industrial lighting, earthing, ATS panels, generators, fire alarm systems, and full testing, commissioning, and AMC services.",
      icon: "Zap",
      image:
        "https://telstarinc.com/wp-content/uploads/2018/11/electric-control-system-image.jpg",
    },
    {
      id: "2",
      title: "Solar Energy Systems",
      description:
        "We deliver complete solar solutions, including on-grid, off-grid, and hybrid systems with inverters and batteries. Our team handles installation, wiring, and net metering, ensuring sustainable energy production, long-term reliability, and optimized performance for residential, commercial, and industrial clients across regions.",
      icon: "Sun",
      image:
        "https://cdn-geefn.nitrocdn.com/lbWmxsOXDXNJWHGLJwtGzaqyPmykLBRz/assets/images/optimized/rev-d0558ec/synergycorp.com.pk/wp-content/uploads/2023/10/Solar-Solutions-in-Pakistan.gif",
    },
    {
      id: "3",
      title: "IT & Networking Solutions",
      description:
        "Khan Brothers provides networking and IT solutions, including structured LAN/WAN cabling, fiber optic installation, server and router configuration, and data center setup. Our services ensure stable connectivity, secure communication, optimized performance, and long-term reliability for businesses, facilities, and industrial environments.",
      icon: "Server",
      image:
        "https://archosengineering.com/wp-content/uploads/2024/01/ElectricalandComputerEngineering2-1170x740.jpg",
    },
    {
      id: "4",
      title: "Construction & Civil Works",
      description:
        "Khan Brothers delivers construction and civil works, including residential, commercial, and industrial projects, renovation, finishing, and structural services. We ensure quality workmanship, durability, compliance, and reliable execution, supported by maintenance contracts that enhance building longevity, safety, and overall performance standards.",
      icon: "HardHat",
      image:
        "https://premierebuilderscorp.com/wp-content/uploads/2022/09/Building-Electrical-Installation-1.jpg",
    },

    {
      id: "5",
      title: "Security & Surveillance",
      description:
        "We provide advanced security and surveillance solutions, including CCTV systems, IP cameras, access control, intercom, and PBX setups. Our installations enhance monitoring, access management, communication reliability, and overall safety for residential, commercial, and industrial clients requiring dependable protection and security.",
      icon: "ShieldCheck",
      image:
        "https://eyemaxsecurity.com/wp-content/uploads/2019/11/CCTV-camera-install-973x430.jpg",
    },

    {
      id: "6",
      title: "Plumbing & Water Management",
      description:
        "Khan Brothers offers plumbing and water management services, including residential, commercial, and industrial plumbing, pump installation, piping systems, and ongoing maintenance. We ensure efficient water flow, durable installations, reliable performance, and long-term functionality tailored to operational requirements of various facilities.",
      icon: "Wrench",
      image:
        "https://img.freepik.com/premium-photo/team-construction-workers-installing-plumbing-pipes-working-together-ensure-proper-water-flow-drainage_1214173-32857.jpg",
    },

    {
      id: "7",
      title: "Material Supply",
      description:
        "We supply electrical, solar, networking, plumbing, and construction materials, ensuring quality, durability, and compliance with industry standards. Our product range supports contractors, businesses, and industrial clients with reliable, cost-effective materials for engineering projects requiring dependable performance and consistent overall results.",
      icon: "Package",
      image:
        "https://mecaluxcom.cdnwm.com/documents/20128/474023/M1P6-Blogp-logistics-engagement-rate+-+Image1.jpg/bb227b2d-a866-411e-9e8a-e9d0ee99fe67?t=1644959391000&e=jpg&imdensity=1&imwidth=1024",
    },

    {
      id: "8",
      title: "HVAC & Ventilation",
      description:
        "Khan Brothers provides professional HVAC and ventilation solutions for industrial, commercial, and residential facilities. Services include heating, cooling, ducting, climate control, exhaust setups, and efficient mechanical ventilation designed to ensure long-term performance, clean airflow, comfort, and reliable engineering support.",
      icon: "Wind",
      image:
        "https://caddcentre.com/blog/wp-content/uploads/2018/08/HVAC-2.jpg",
    },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INITIAL_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md flex flex-col overflow-hidden"
            >
              <div>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={1080}
                  height={1920}
                  className="object-cover h-[300px]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
                <button className="mt-4 flex items-center gap-2 text-secondary">
                  Learn More <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
