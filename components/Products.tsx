"use client";

import {
  ShoppingCart,
  Package,
  Zap,
  Sun,
  Server,
  Shield,
  Wrench,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@apollo/client/react";
import { FETCH_ALL_PRODUCTS } from "@/graphql/product";
import { useMemo } from "react";

interface ProductImage {
  id: string;
  imageId: string;
  imageUrl: string;
  productId: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  price: string | null;
  category: string;
  images: ProductImage[];
}

// Category icons mapping
const CATEGORY_ICONS: { [key: string]: any } = {
  "Electrical Equipment": Zap,
  "Solar Products": Sun,
  "Networking & IT Hardware": Server,
  "Security Systems": Shield,
  "Plumbing Materials": Wrench,
  "Construction Materials": Package,
};

const Products = () => {
  const { data, loading, error } = useQuery(FETCH_ALL_PRODUCTS);

  const products: Product[] = data?.fetchAllProducts || [];

  // Group products by category
  const productsByCategory = useMemo(() => {
    const grouped: { [key: string]: Product[] } = {};
    products.forEach((product) => {
      if (!grouped[product.category]) {
        grouped[product.category] = [];
      }
      grouped[product.category].push(product);
    });
    return grouped;
  }, [products]);

  // Get icon component for a category
  const getIconComponent = (categoryName: string) => {
    const IconComponent = CATEGORY_ICONS[categoryName] || Package;
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

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <span className="ml-4 text-lg text-gray-600">
              Loading products...
            </span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <p className="text-red-600 text-lg">
              Failed to load products. Please try again later.
            </p>
          </div>
        )}

        {/* Product Categories */}
        {!loading && !error && products.length > 0 && (
          <div className="space-y-20">
            {Object.entries(productsByCategory).map(
              ([category, categoryProducts]) => (
                <div key={category}>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-secondary/10 text-secondary p-3 rounded-lg">
                      {getIconComponent(category)}
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">
                        {category}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {categoryProducts.length} product
                        {categoryProducts.length !== 1 ? "s" : ""} available
                      </p>
                    </div>
                  </div>

                  {/* Products Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categoryProducts.slice(0, 4).map((product) => (
                      <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                      >
                        {/* Product Image */}
                        <div className="relative h-[220px] overflow-hidden">
                          {product.images.length > 0 ? (
                            <Image
                              src={product.images[0].imageUrl}
                              alt={product.title}
                              width={800}
                              height={600}
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                              <Package size={48} className="text-gray-400" />
                            </div>
                          )}
                          {/* Price Badge */}
                          {product.price && (
                            <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                              PKR {product.price}
                            </div>
                          )}
                          {/* Image count badge */}
                          {product.images.length > 1 && (
                            <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                              +{product.images.length - 1} photos
                            </div>
                          )}
                        </div>

                        {/* Product Content */}
                        <div className="p-6 flex flex-col flex-grow">
                          <h4 className="text-lg font-bold text-primary mb-2 line-clamp-1">
                            {product.title}
                          </h4>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                            {product.description}
                          </p>

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
                  {categoryProducts.length > 4 && (
                    <div className="text-center mt-8">
                      <Link href="/products">
                        <button className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-8 rounded-md transition-all flex items-center gap-2 mx-auto cursor-pointer">
                          View All {category}
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && products.length === 0 && (
          <div className="text-center py-20">
            <Package size={64} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-600 text-lg">
              No products available at the moment.
            </p>
            <p className="text-gray-500 mt-2">
              Please check back later or contact us for inquiries.
            </p>
          </div>
        )}

        {/* View All Products Button */}
        {!loading && !error && products.length > 0 && (
          <div className="text-center mt-12">
            <Link href="/products">
              <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-md transition-colors flex items-center gap-2 mx-auto">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        )}

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
