import { ProductCardProps } from "@/components/ProductCard";
import { ProjectCardProps } from "@/components/ProjectCard";

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
    slug: "morva-labs",
    title: "Morva labs",
    description: "Visual design, Branding",
    imageUrl:
      "https://framerusercontent.com/images/11rNeoQ4cbIflUKMKRcTruAT4.svg",
    link: "/projects/morva-labs",
    client: "Nur Praditya",
    company: "Morva labs",
    projectType: "Visual design, Branding",
    year: "2023",
    fullDescription:
      "Enhance your company's workforce management with a cutting-edge website. Enjoy seamless user experience, efficient employee management, and a competitive edge.",
    websiteUrl: "https://example.com",
    logo: "https://framerusercontent.com/images/11rNeoQ4cbIflUKMKRcTruAT4.svg",
    screenshots: [
      "https://framerusercontent.com/images/bkIbqK8NrKE2IUX0Z2OrtRR5g.png",
      "https://framerusercontent.com/images/lbQBycfSu2aE5kvANYnZQDTag.svg",
    ],
  },
  {
    slug: "rectangle",
    title: "Rectangle",
    description: "Product design, Icon design",
    imageUrl:
      "https://framerusercontent.com/images/lkLwoc5QonpfJtmxeyujVtespnI.svg",
    link: "/projects/rectangle",
    client: "John Doe",
    company: "Rectangle Inc",
    projectType: "Product design, Icon design",
    year: "2023",
    fullDescription:
      "A comprehensive product design system that brings consistency and efficiency to your digital products. Modern, scalable, and user-friendly.",
    websiteUrl: "https://example.com",
    logo: "https://framerusercontent.com/images/lkLwoc5QonpfJtmxeyujVtespnI.svg",
    screenshots: [
      "https://framerusercontent.com/images/bkIbqK8NrKE2IUX0Z2OrtRR5g.png",
    ],
  },
  {
    slug: "simply",
    title: "Simply",
    description: "Landing page, Illustration design",
    imageUrl:
      "https://framerusercontent.com/images/GYZJhZwKqD1jeRCg4q155yCAVM.svg",
    link: "/projects/simply",
    client: "Jane Smith",
    company: "Simply Design",
    projectType: "Landing page, Illustration design",
    year: "2024",
    fullDescription:
      "Beautiful and engaging landing page design with custom illustrations. Create memorable first impressions and drive conversions with stunning visuals.",
    websiteUrl: "https://example.com",
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
    title: "Portafo",
    domain: "Ecommerce",
    imageUrl:
      "https://framerusercontent.com/images/bkIbqK8NrKE2IUX0Z2OrtRR5g.png",
    link: "#",
  },
  {
    title: "Faktur Invoice",
    domain: "IoT",
    imageUrl:
      "https://framerusercontent.com/images/lbQBycfSu2aE5kvANYnZQDTag.svg",
    link: "#",
  },
  {
    title: "Goven",
    domain: "SAAS",
    imageUrl:
      "https://framerusercontent.com/images/lbQBycfSu2aE5kvANYnZQDTag.svg",
    link: "#",
  },
  {
    title: "Subtle Folio",
    domain: "Portfolio",
    imageUrl:
      "https://framerusercontent.com/images/lbQBycfSu2aE5kvANYnZQDTag.svg",
    link: "#",
  },
];
