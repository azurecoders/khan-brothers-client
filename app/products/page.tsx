"use client";

import { ShoppingCart, Package, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@apollo/client/react";
import { FETCH_ALL_PRODUCTS } from "@/graphql/product";
import heroImage from "../../assets/hero-image.png";
import { useState } from "react";

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
  images: ProductImage[];
}

const FALLBACK_IMAGE = "/placeholder-product.jpg";

export default function Products() {
  const { data, loading, error } = useQuery(FETCH_ALL_PRODUCTS);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const products: Product[] = data?.fetchAllProducts || [];

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProduct && selectedProduct.images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === selectedProduct.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct && selectedProduct.images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      );
    }
  };

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
            Our Products
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Premium quality materials and equipment from trusted manufacturers
            worldwide.
          </p>
        </div>
      </div>

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

          {/* Products Grid */}
          {!loading && !error && products.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col cursor-pointer"
                  onClick={() => openModal(product)}
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

                    {/* Price */}
                    {product.price && (
                      <div className="mb-4">
                        <span className="text-xl font-bold text-primary">
                          {product.price}
                        </span>
                      </div>
                    )}

                    {/* CTA Button */}
                    <Link href="/contact" onClick={(e) => e.stopPropagation()}>
                      <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 px-4 rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer">
                        <ShoppingCart className="h-4 w-4" />
                        Request Quote
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
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

          {/* View All Button */}
          {!loading && !error && products.length > 0 && (
            <div className="text-center mt-12">
              <Link href="/contact">
                <button className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-8 rounded-md transition-all flex items-center gap-2 mx-auto cursor-pointer">
                  Request Product Catalog
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

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={closeModal}>
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-primary">{selectedProduct.title}</h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Image Gallery */}
              {selectedProduct.images.length > 0 ? (
                <div className="mb-6">
                  {/* Main Image */}
                  <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={selectedProduct.images[currentImageIndex].imageUrl}
                      alt={selectedProduct.title}
                      width={1200}
                      height={800}
                      className="w-full h-full object-contain"
                    />

                    {/* Navigation Arrows */}
                    {selectedProduct.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                        >
                          <ChevronRight className="h-6 w-6" />
                        </button>

                        {/* Image Counter */}
                        <div className="absolute bottom-4 right-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                          {currentImageIndex + 1} / {selectedProduct.images.length}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Thumbnail Gallery */}
                  {selectedProduct.images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {selectedProduct.images.map((img, index) => (
                        <button
                          key={img.id}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${index === currentImageIndex
                              ? 'border-primary scale-105'
                              : 'border-gray-200 hover:border-gray-400'
                            }`}
                        >
                          <Image
                            src={img.imageUrl}
                            alt={`${selectedProduct.title} ${index + 1}`}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Package size={80} className="text-gray-400" />
                </div>
              )}

              {/* Product Details */}
              <div className="space-y-4">
                {/* Price */}
                {selectedProduct.price && (
                  <div>
                    <span className="text-3xl font-bold text-primary">
                      {selectedProduct.price}
                    </span>
                  </div>
                )}

                {/* Description */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Description</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Link href="/contact" className="flex-1">
                    <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      Request Quote
                    </button>
                  </Link>
                  <button
                    onClick={closeModal}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-md transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
