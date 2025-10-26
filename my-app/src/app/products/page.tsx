"use client";

import ProductCard from "@/components/ProductCard";
import { listProducts } from "@/data/mockdata";

export default function ProductsPage() {
  return (
    <>
      <section className="pt-5 bg-white dark:bg-[#252525] rounded-3xl mb-6">
        <div className="px-6">
          <div className="flex items-center gap-2 mb-10">
            <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></span>
            <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
              Products
            </h2>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Explore My Products
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8">
            Some of the digital products that I worked on as side projects,
            explore and try it now
          </p>
        </div>

        <div className="space-y-3 bg-[#F7F7F7] dark:bg-[#323232] rounded-xl p-6">
          {listProducts.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              domain={product.domain}
              imageUrl={product.imageUrl}
              link={product.link}
            />
          ))}
        </div>
      </section>
    </>
  );
}
