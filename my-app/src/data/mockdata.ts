import { ProductCardProps } from "@/components/ProductCard";
import { ProjectCardProps } from "@/components/ProjectCard";
import IconTransfermarts from "@/assets/logo_transfermarts.svg";
import IconImageIntern from "@/assets/logo_imageintern.svg";
import IconPyra from "@/assets/logo_pyra.svg";

export interface ProjectDetailProps extends ProjectCardProps {
  slug: string;
  client: string;
  company: string;
  projectType: string;
  year: string;
  fullDescription: string;
  websiteUrl?: string;
  screenshots: string[];
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
      "Enhance your company's workforce management with a cutting-edge website. Enjoy seamless user experience, efficient employee management, and a competitive edge.",
    websiteUrl: "http://pyralifestyle.com/",
    logo: IconPyra,
    screenshots: [
      "https://framerusercontent.com/images/bkIbqK8NrKE2IUX0Z2OrtRR5g.png",
      "https://framerusercontent.com/images/lbQBycfSu2aE5kvANYnZQDTag.svg",
    ],
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
      "A comprehensive product design system that brings consistency and efficiency to your digital products. Modern, scalable, and user-friendly.",
    websiteUrl: "https://projectors.com",
    logo: "https://framerusercontent.com/images/lkLwoc5QonpfJtmxeyujVtespnI.svg",
    screenshots: [
      "https://framerusercontent.com/images/bkIbqK8NrKE2IUX0Z2OrtRR5g.png",
    ],
  },
  {
    slug: "infocus",
    title: "InFocus.com",
    description: "Brand Website, Chatbot, CRM",
    imageUrl:
      "https://framerusercontent.com/images/GYZJhZwKqD1jeRCg4q155yCAVM.svg",
    link: "/projects/infocus",
    client: "Jeremy F.",
    company: "Maxnerva US",
    projectType: "Consult, Design, Development, Operation",
    year: "2024=0",
    fullDescription:
      "Beautiful and engaging landing page design with custom illustrations. Create memorable first impressions and drive conversions with stunning visuals.",
    websiteUrl: "https://infocus.com/",
    logo: "https://framerusercontent.com/images/GYZJhZwKqD1jeRCg4q155yCAVM.svg",
    screenshots: [
      "https://framerusercontent.com/images/bkIbqK8NrKE2IUX0Z2OrtRR5g.png",
    ],
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
