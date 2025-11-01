"use client";

import ProductCard from "@/components/ProductCard";
import IconAvatar from "@/assets/img_avatar.jpg";
import Image from "next/image";
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
            Hi, It's Nguyen
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-base leading-8 mb-8">
            I'm Nguyen Vu, a results-driven PM/PO with 4+ years accelerating
            product launches in e-commerce and health tech, currently based in
            Vietnam. Low ego, I work well with stakeholders and teams. My main
            goal is to optimize user experiences, drive strategic growth, and
            bridge business needs with technology, turning complex challenges
            into seamless solutions.
          </p>
          <Image
            src={IconAvatar}
            alt="Nguyen Vu"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto mt-6 rounded-xl"
          />
        </div>
      </section>

      <div className="bg-white dark:bg-[#252525] rounded-3xl mb-6 px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          More About Me
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-8 mb-8">
          Nguyen Vu holds a Bachelor of Business Administration from Hoa Sen
          University (2016-2020) and has certifications in Product Analytics,
          Product-led Growth, TOEIC 910, and HSK 2. Additional education
          includes Data Science and Artificial Intelligence from AI Vietnam
          (2023-2024). Skills include design tools like Figma; project tools
          like Jira, Confluence, Asana; methodologies like Agile, Scrum,
          Waterfall; management skills in research, A/B testing, stakeholder
          management; and technical skills in Python, JavaScript, SQL, prompt
          engineering, and LLMs testing.
        </p>
      </div>

      <div className="bg-white dark:bg-[#252525] rounded-3xl mb-6 px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          My Side Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-8 mb-8">
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
