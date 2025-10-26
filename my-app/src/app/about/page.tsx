"use client";

import ProductCard from "@/components/ProductCard";
import { listProducts } from "@/data/mockdata";

export default function AboutPage() {
  return (
    <>
      <section className="pt-5 bg-white dark:bg-[#252525] rounded-3xl mb-6">
        <div className="px-6">
          <div className="flex items-center gap-2 mb-10">
            <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></span>
            <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
              About
            </h2>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            It's Me Brian
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-base leading-8 mb-8">
            I'm Brian Do, a product designer with over 5 years of experience,
            currently residing in Jakarta, Indonesia. I have a deep passion for
            crafting purposeful interfaces and products. My main goal is to
            bridge the divide between people and technology, transforming
            intricate challenges into meaningful and seamless experiences.
          </p>

          <div className="bg-[#f5f5f5] dark:bg-[#1f1f1f] rounded-2xl overflow-hidden aspect-4/3">
            <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-amber-200 to-orange-300">
              <div className="text-8xl">👨‍💻</div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white dark:bg-[#252525] rounded-3xl mb-6 px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          More About Me
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Brian Do holds a bachelor's degree in Graphic Design from a
          prestigious university in the United States and has a relentless drive
          for staying up-to-date with the latest technologies and design trends.
          Actively involved in the design community, Brian regularly
          participates in diverse design conferences and meetups. <br /> When
          he's not immersed in design work, he finds solace in playing the
          guitar and exploring new coffee shops in his local area. Brian firmly
          believes in maintaining a healthy work-life balance, making sure to
          take breaks and reenergize his creativity. In his spare time, he also
          volunteers at a local animal shelter on weekends.
        </p>
      </div>

      <div className="bg-white dark:bg-[#252525] rounded-3xl mb-6 px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          My Side Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          I did passion side projects in the weekend, please take a look you
          will love it (i hope).
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
    </>
  );
}
