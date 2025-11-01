import { ProductCardProps } from "@/components/ProductCard";
import { ProjectCardProps } from "@/components/ProjectCard";
import IconTransfermarts from "@/assets/logo_transfermarts.svg";
import IconImageIntern from "@/assets/logo_imageintern.svg";
import IconPyra from "@/assets/logo_pyra.svg";
import IconInfocus from "@/assets/logo_infocus.svg";

export interface ProjectDetailProps extends ProjectCardProps {
  slug: string;
  client: string;
  company: string;
  projectType: string;
  year: string;
  fullDescription: string;
  websiteUrl?: string;
  logo?: string;
}

export const listProjectsDetail: ProjectDetailProps[] = [
  {
    slug: "pyra-lifestyle",
    title: "Pyra Lifestyle",
    description: "Brand landing page, Chatbot",
    imageUrl: IconPyra,
    link: "/projects/pyra-lifestyle",
    client: "Hao N.",
    company: "Pyra Lifestyle",
    projectType: "Design, Development",
    year: "2025",
    fullDescription:
      "Sophisticated branding website for luxury scent products. Immerse in a world of crafted fragrances, car fresheners, and curated gifts featuring IFRA certified imported oils that are safe, sustainable, and designed to elevate everyday moments with elegance and exclusivity.",
    websiteUrl: "http://pyralifestyle.com/",
    logo: IconPyra,
  },
  {
    slug: "projectors",
    title: "Projectors.com",
    description: "Ecommerce Manager",
    imageUrl:
      "https://framerusercontent.com/images/lkLwoc5QonpfJtmxeyujVtespnI.svg",
    link: "/projects/projectors",
    client: "Jeremy F.",
    company: "Maxnerva US",
    projectType: "Consult, Design, Development, Operation",
    year: "2024",
    fullDescription:
      "User-friendly e-commerce platform specializing in high-quality projectors. Shop a diverse range of portable, outdoor, and home models with intuitive search, advanced filters, sorting options, and refurbished deals, designed to help you find and purchase the ideal projector for any setting effortlessly.",
    websiteUrl: "https://projectors.com",
    logo: "https://framerusercontent.com/images/lkLwoc5QonpfJtmxeyujVtespnI.svg",
  },
  {
    slug: "infocus",
    title: "InFocus.com",
    description: "Brand Website, Chatbot, CRM",
    imageUrl: IconInfocus,
    link: "/projects/infocus",
    client: "Jeremy F.",
    company: "Maxnerva US",
    projectType: "Consult, Design, Development, Operation",
    year: "2024=0",
    fullDescription:
      "Dynamic brand website dedicated to advanced visual technologies. Explore comprehensive product details, specifications, documentation, and support resources for projectors, interactive flat panels, and DVLED displays—tailored for commercial, educational, and home environments to deliver unforgettable experiences.",
    websiteUrl: "https://infocus.com/",
    logo: IconInfocus,
  },
];

export const listProjects: ProjectCardProps[] = listProjectsDetail.map(
  (project) => ({
    title: project.title,
    description: project.description,
    imageUrl: project.imageUrl,
    link: project.link,
  })
);

export const listProducts: ProductCardProps[] = [
  {
    title: "Transfermarts",
    domain: "Service",
    imageUrl: IconTransfermarts,
    link: "https://www.transfermarts.com",
  },
  {
    title: "Image Intern",
    domain: "Tools",
    imageUrl: IconImageIntern,
    link: "https://www.imageintern.com",
  },
];
