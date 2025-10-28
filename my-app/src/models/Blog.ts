import mongoose, { Schema, Document } from "mongoose";

export interface IBlog extends Document {
  title: string;
  backgroundImage: string;
  summary: string;
  detail: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    backgroundImage: {
      type: String,
      required: [true, "Background image is required"],
    },
    summary: {
      type: String,
      required: [true, "Summary is required"],
      trim: true,
    },
    detail: {
      type: String,
      required: [true, "Detail is required"],
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Blog ||
  mongoose.model<IBlog>("Blog", BlogSchema);
