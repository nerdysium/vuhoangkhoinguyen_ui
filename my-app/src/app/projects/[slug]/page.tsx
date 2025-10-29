import ProjectCard from "@/components/ProjectCard";
import {
  listProjects,
  listProjectsDetail,
  ProjectDetailProps,
} from "@/data/mockdata";
import Image from "next/image";
import Link from "next/link";

type Params = Promise<{ slug: string }>;

type ProjectDetailPageProps = {
  params: Params;
};

const ProjectInfo = ({ project }: { project: ProjectDetailProps }) => {
  const info = [
    { label: "Client", value: project.client },
    { label: "Company", value: project.company },
    { label: "Project Type", value: project.projectType },
    { label: "Year", value: project.year },
  ];

  return (
    <div className="w-full bg-white dark:bg-[#252525] rounded-xl">
      <div className="w-full grid grid-cols-2 gap-y-4 gap-x-8 bg-[#f9f9f9] dark:bg-[#2e2e2e] rounded-2xl p-6 shadow-sm">
        {info.map((item) => (
          <div key={item.label}>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {item.label}
            </p>
            <p className="text-base font-medium text-gray-900 dark:text-white mt-0.5 truncate">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = listProjectsDetail.find((proj) => proj.slug === slug);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <section className="space-y-8">
      {/* Project Info Card */}
      <ProjectInfo project={project} />

      {/* Project Content */}
      <div className="flex flex-col gap-6 bg-white dark:bg-[#252525] rounded-3xl">
        {/* Logo */}
        <div className="px-4 md:px-6 flex flex-col gap-6">
          <div className="size-14 md:size-16 rounded-full flex items-center justify-center border border-amber-50">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={56}
              height={56}
              className="size-10/12 md:size-14 rounded-full"
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
            {project.fullDescription}
          </p>

          {/* Visit Website Button */}
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 w-max 
            bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Visit Website
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          )}
        </div>

        {/* Other Projects */}
        <section className="bg-[#F7F7F7] dark:bg-[#323232] rounded-xl p-4 md:p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></span>
              <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                Other Projects
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

        {/* Details */}
      </div>
    </section>
  );
}
