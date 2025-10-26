"use client";

import ProjectCard from "@/components/ProjectCard";
import { listProjects } from "@/data/mockdata";

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-5 bg-white dark:bg-[#252525] rounded-3xl mb-6">
        <div className="px-6">
          <div className="flex items-center gap-2 mb-10">
            <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></span>
            <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
              Projects
            </h2>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            My Works
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8">
            Discover my portfolio, where purposeful interfaces meet captivating
            design. My work strives to enhance experiences and inspire.
          </p>
        </div>

        <div className="space-y-3 bg-[#F7F7F7] dark:bg-[#323232] rounded-xl p-6">
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
    </>
  );
}
