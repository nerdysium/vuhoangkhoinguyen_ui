"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import ProductCard from "./ProductCard";
import { listProducts, listProjects } from "@/data/mockdata";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("hello@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section className="pt-5 w-full flex flex-col items-center justify-start gap-8 bg-white dark:bg-[#252525] rounded-3xl px-6 mb-6">
        {/* Top part */}
        <div className="w-full flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></span>
            <span className="text-lg font-semibold text-gray-600 dark:text-gray-400">
              Product Manager
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-3 md:py-1.5 bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-semibold rounded-full">
            <span className="size-1.5 bg-green-500 dark:bg-green-400 rounded-full"></span>
            <span className="hidden md:block">AVAILABLE FOR WORK</span>
          </div>
        </div>

        {/* Bottom Part */}
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-0 mb-7 md:mb-0">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              I'm Khoi Nguyen
            </h1>

            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-base">
              Product designer from Jakarta, ID.
              <br />
              Currently designing at Rectangle.
            </p>

            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="px-5 py-3 bg-gray-900 dark:bg-[#323232] hover:bg-black dark:hover:bg-[#3a3a3a] text-white dark:text-gray-200 text-sm font-medium rounded-xl transition-colors flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Hire Me
              </Link>
              <button
                onClick={copyEmail}
                className="px-5 py-3 bg-gray-100 dark:bg-[#323232] hover:bg-gray-200 dark:hover:bg-[#3a3a3a] text-gray-900 dark:text-gray-200 text-sm font-medium rounded-xl transition-colors flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                {copied ? "Copied!" : "Copy Email"}
              </button>
            </div>
          </div>

          <div className="shrink-0">
            <div className="size-36 rounded-full bg-linear-to-br from-gray-100 to-gray-300 flex items-center justify-center overflow-hidden ring-4 ring-gray-100 dark:ring-[#323232]">
              <Image
                src="https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-avatar-ngau-69.jpg"
                alt="Avatar"
                width={144}
                height={144}
                className="size-[94%] object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-[#F7F7F7] dark:bg-[#323232] rounded-xl p-4 md:p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></span>
            <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
              Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors flex items-center gap-2"
          >
            View All
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        <div className="space-y-3">
          {listProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              link={project.link}
            />
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="bg-[#F7F7F7] dark:bg-[#323232] rounded-xl p-4 md:p-6">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></span>
          <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
            Products
          </h2>
        </div>

        <div className="space-y-3">
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
