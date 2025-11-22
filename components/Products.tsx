import {
  ShoppingCart,
  Package,
  Zap,
  Sun,
  Server,
  Cable,
  Shield,
  Wrench,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  const PRODUCT_CATEGORIES = [
    {
      id: "1",
      category: "Electrical Equipment",
      icon: "Zap",
      products: [
        {
          id: "elec-1",
          name: "Industrial Transformers",
          description:
            "High-capacity transformers for industrial applications, 100KVA to 5000KVA.",
          image:
            "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=80",
          features: ["CE Certified", "Energy Efficient", "Long Lifespan"],
        },
        {
          id: "elec-2",
          name: "HT/LT Control Panels",
          description:
            "Customized control panels with advanced protection and monitoring systems.",
          image:
            "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=80",
          features: ["Custom Design", "Safety Features", "Quality Assured"],
        },
        {
          id: "elec-3",
          name: "Cable & Wiring Solutions",
          description:
            "Premium quality cables for overhead, underground, and industrial installations.",
          image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
          features: ["Fire Resistant", "ISO Certified", "Various Sizes"],
        },
        {
          id: "elec-4",
          name: "Generator & UPS Systems",
          description:
            "Reliable backup power solutions from 10KVA to 1000KVA capacity.",
          image:
            "https://images.unsplash.com/photo-1625521224880-7d7e513f353a?w=800&auto=format&fit=crop&q=80",
          features: ["Automatic Start", "Fuel Efficient", "Silent Operation"],
        },
      ],
    },
    {
      id: "2",
      category: "Solar Products",
      icon: "Sun",
      products: [
        {
          id: "solar-1",
          name: "Solar PV Panels",
          description:
            "High-efficiency monocrystalline and polycrystalline solar panels, 300W-550W.",
          image:
            "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=80",
          features: [
            "25-Year Warranty",
            "High Efficiency",
            "Weather Resistant",
          ],
        },
        {
          id: "solar-2",
          name: "Solar Inverters",
          description:
            "On-grid and hybrid inverters with MPPT technology for maximum power output.",
          image:
            "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800&auto=format&fit=crop&q=80",
          features: ["MPPT Technology", "Smart Monitoring", "Grid Compatible"],
        },
        {
          id: "solar-3",
          name: "Solar Battery Systems",
          description:
            "Deep cycle batteries and lithium-ion storage solutions for reliable backup.",
          image:
            "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?w=800&auto=format&fit=crop&q=80",
          features: ["Long Cycle Life", "Fast Charging", "Maintenance Free"],
        },
        {
          id: "solar-4",
          name: "Solar Mounting Structures",
          description:
            "Durable aluminum and galvanized steel mounting systems for all roof types.",
          image:
            "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format&fit=crop&q=80",
          features: ["Corrosion Resistant", "Easy Installation", "Wind Rated"],
        },
      ],
    },
    {
      id: "3",
      category: "Networking & IT Hardware",
      icon: "Server",
      products: [
        {
          id: "it-1",
          name: "Network Switches & Routers",
          description:
            "Enterprise-grade switches and routers for robust network infrastructure.",
          image:
            "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80",
          features: ["Gigabit Speed", "PoE Support", "Managed/Unmanaged"],
        },
        {
          id: "it-2",
          name: "Fiber Optic Cables",
          description:
            "Single-mode and multi-mode fiber optic cables for high-speed data transmission.",
          image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
          features: ["High Bandwidth", "Long Distance", "Low Latency"],
        },
        {
          id: "it-3",
          name: "Server Racks & Cabinets",
          description:
            "Professional server racks and network cabinets with cable management.",
          image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc27?w=800&auto=format&fit=crop&q=80",
          features: ["Various Sizes", "Cooling Options", "Lockable Design"],
        },
        {
          id: "it-4",
          name: "Network Cabling Solutions",
          description:
            "Cat6, Cat6a, and Cat7 structured cabling for modern network installations.",
          image:
            "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=800&auto=format&fit=crop&q=80",
          features: ["High Speed", "Shielded/Unshielded", "Certified Quality"],
        },
      ],
    },
    {
      id: "4",
      category: "Security Systems",
      icon: "Shield",
      products: [
        {
          id: "sec-1",
          name: "IP CCTV Cameras",
          description:
            "HD and 4K IP cameras with night vision and motion detection capabilities.",
          image:
            "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&auto=format&fit=crop&q=80",
          features: ["4K Resolution", "Night Vision", "Weatherproof"],
        },
        {
          id: "sec-2",
          name: "NVR & DVR Systems",
          description:
            "Network and digital video recorders with cloud backup support.",
          image:
            "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop&q=80",
          features: ["Multi-Channel", "Remote Access", "Cloud Backup"],
        },
        {
          id: "sec-3",
          name: "Access Control Systems",
          description:
            "Biometric and card-based access control for secure entry management.",
          image:
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=80",
          features: ["Biometric Options", "Multi-User", "Audit Trail"],
        },
        {
          id: "sec-4",
          name: "Intercom & PBX Systems",
          description:
            "IP-based intercom and telephone exchange systems for seamless communication.",
          image:
            "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&auto=format&fit=crop&q=80",
          features: ["IP Compatible", "Multi-Line", "Video Support"],
        },
      ],
    },
    {
      id: "5",
      category: "Plumbing Materials",
      icon: "Wrench",
      products: [
        {
          id: "plumb-1",
          name: "Industrial Pumps",
          description:
            "Submersible and centrifugal pumps for water supply and drainage systems.",
          image:
            "https://images.unsplash.com/photo-1581092918484-8313e1f6d5e9?w=800&auto=format&fit=crop&q=80",
          features: ["High Capacity", "Energy Efficient", "Durable Build"],
        },
        {
          id: "plumb-2",
          name: "PVC & CPVC Piping",
          description:
            "Premium quality pipes and fittings for water supply and drainage.",
          image:
            "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=80",
          features: ["Chemical Resistant", "Long Lasting", "Easy Installation"],
        },
        {
          id: "plumb-3",
          name: "Water Tanks & Storage",
          description:
            "Polyethylene and stainless steel water storage tanks in various capacities.",
          image:
            "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&auto=format&fit=crop&q=80",
          features: ["UV Resistant", "Food Grade", "Various Sizes"],
        },
        {
          id: "plumb-4",
          name: "Bathroom & Kitchen Fixtures",
          description:
            "Modern fixtures including faucets, sinks, and sanitary ware.",
          image:
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80",
          features: ["Modern Design", "Water Saving", "Corrosion Proof"],
        },
      ],
    },
    {
      id: "6",
      category: "Construction Materials",
      icon: "Package",
      products: [
        {
          id: "const-1",
          name: "Steel & Reinforcement",
          description:
            "High-grade steel bars, beams, and reinforcement materials for construction.",
          image:
            "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=80",
          features: ["High Strength", "IS Standard", "Corrosion Resistant"],
        },
        {
          id: "const-2",
          name: "Cement & Concrete",
          description:
            "Premium quality cement and ready-mix concrete for structural applications.",
          image:
            "https://images.unsplash.com/photo-1581092160562-40aa08e78840?w=800&auto=format&fit=crop&q=80",
          features: ["OPC & PPC", "Quick Setting", "High Durability"],
        },
        {
          id: "const-3",
          name: "Tiles & Flooring",
          description:
            "Ceramic, porcelain, and vitrified tiles for floors and walls.",
          image:
            "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&auto=format&fit=crop&q=80",
          features: ["Slip Resistant", "Various Designs", "Easy Maintenance"],
        },
        {
          id: "const-4",
          name: "Paint & Coatings",
          description:
            "Industrial and decorative paints with weather-resistant properties.",
          image:
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=80",
          features: ["Washable", "Eco-Friendly", "Long Lasting"],
        },
      ],
    },
  ];

  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: any } = {
      Zap: Zap,
      Sun: Sun,
      Server: Server,
      Shield: Shield,
      Wrench: Wrench,
      Package: Package,
    };
    const IconComponent = icons[iconName] || Package;
    return <IconComponent className="h-6 w-6" />;
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm">
            Our Product Range
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-4 mb-4">
            Premium Quality Materials & Equipment
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We supply top-tier electrical, solar, networking, security,
            plumbing, and construction materials from trusted manufacturers
            worldwide.
          </p>
        </div>

        {/* Product Categories */}
        <div className="space-y-20">
          {PRODUCT_CATEGORIES.map((category, categoryIndex) => (
            <div key={category.id}>
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-secondary/10 text-secondary p-3 rounded-lg">
                  {getIconComponent(category.icon)}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">
                    {category.category}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.products.length} products available
                  </p>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    {/* Product Image */}
                    <div className="relative h-[220px] overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase">
                        In Stock
                      </div>
                    </div>

                    {/* Product Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="text-lg font-bold text-primary mb-2 line-clamp-1">
                        {product.name}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-4">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0" />
                            <span className="text-xs text-foreground">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Link href="/contact">
                        <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 px-4 rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer">
                          <ShoppingCart className="h-4 w-4" />
                          Request Quote
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Button for Category */}
              <div className="text-center mt-8">
                <Link href="/contact">
                  <button className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-8 rounded-md transition-all flex items-center gap-2 mx-auto cursor-pointer">
                    View All {category.category}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-3xl font-heading font-bold">
              Need Custom Products or Bulk Orders?
            </h3>
            <p className="text-white/90 text-lg">
              We provide customized solutions and competitive pricing for bulk
              orders. Contact our sales team for a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact">
                <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold h-12 px-8 rounded-md cursor-pointer transition-colors">
                  Contact Sales Team
                </button>
              </Link>
              <Link href="/services">
                <button className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold h-12 px-8 rounded-md cursor-pointer transition-all">
                  View Our Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
