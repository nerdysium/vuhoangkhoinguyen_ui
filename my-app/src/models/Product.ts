import mongoose, { Schema, model, models } from "mongoose";

export interface IProduct {
  _id?: string;
  title: string;
  domain: string;
  logo: string;
  url: string;
  published: boolean;
  order: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    domain: {
      type: String,
      required: [true, "Domain is required"],
    },
    logo: {
      type: String,
      required: [true, "Logo is required"],
    },
    url: {
      type: String,
      required: [true, "URL is required"],
    },
    published: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = models.Product || model<IProduct>("Product", ProductSchema);

export default Product;
