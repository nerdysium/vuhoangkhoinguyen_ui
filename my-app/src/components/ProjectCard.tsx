import Image from "next/image";
import Link from "next/link";

export type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Link
      href={props.link}
      className="flex items-center gap-4 p-5 bg-white dark:bg-[#252525] rounded-2xl transition-all duration-300
       group hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.12)]"
    >
      <div className="size-14 md:size-16 rounded-full flex items-center justify-center border border-amber-50">
        <Image
          src={props.imageUrl}
          alt={props.title}
          width={56}
          height={56}
          className="size-12 md:size-14 rounded-full"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-gray-900 dark:text-white font-semibold mb-1 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
          {props.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {props.description}
        </p>
      </div>

      <svg
        className="w-5 h-5 text-gray-400 dark:text-gray-500 shrink-0 transform transition-transform duration-300 
        group-hover:scale-125 group-hover:translate-x-1 group-hover:text-black group-hover:dark:text-white"
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
  );
};

export default ProjectCard;
