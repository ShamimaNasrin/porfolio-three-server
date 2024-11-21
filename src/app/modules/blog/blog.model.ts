import { Schema, model } from "mongoose";
import { TBlog } from "./blog.interface";

// Create schema for blog
const blogSchema = new Schema<TBlog>({
  title: {
    type: String,
    required: [true, "Title is required"],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  images: {
    type: String,
    required: [true, "Images are required"],
  },
  date: {
    type: String,
    required: [true, "Date is required"],
    trim: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// Create model for blog
export const BlogModel = model<TBlog>("Blog", blogSchema);
