import mongoose, { Schema, model, models } from "mongoose";

export interface IProject {
  _id?: string;
  slug: string;
  title: string;
  description: string;
  logo: string;
  background?: string;
  projectType: string;
  client: string;
  company: string;
  year: string;
  fullDescription: string;
  websiteUrl?: string;
  detailHtml?: string;
  detailCss?: string;
  screenshots: string[];
  published: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    logo: {
      type: String,
      required: [true, "Logo is required"],
    },
    background: {
      type: String,
      default: "",
    },
    projectType: {
      type: String,
      required: [true, "Project type is required"],
    },
    client: {
      type: String,
      required: [true, "Client is required"],
    },
    company: {
      type: String,
      required: [true, "Company is required"],
    },
    year: {
      type: String,
      required: [true, "Year is required"],
    },
    fullDescription: {
      type: String,
      required: [true, "Full description is required"],
    },
    websiteUrl: {
      type: String,
      default: "",
    },
    detailHtml: {
      type: String,
      default: "",
    },
    detailCss: {
      type: String,
      default: "",
    },
    screenshots: {
      type: [String],
      default: [],
    },
    published: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Project = models.Project || model<IProject>("Project", ProjectSchema);

export default Project;
