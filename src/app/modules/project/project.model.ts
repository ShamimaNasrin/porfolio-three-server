import { Schema, model } from "mongoose";
import { TProject } from "./project.interface";

// Create schema for project
const projectSchema = new Schema<TProject>({
  name: {
    type: String,
    required: [true, "Name is required"],
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
  company: {
    type: String,
    required: [true, "Company is required"],
    trim: true,
  },
  technologies: {
    type: String,
    required: [true, "Technologies are required"],
  },
  live_url: {
    type: String,
    required: [true, "Live URL is required"],
    trim: true,
  },
  clientgit_url: {
    type: String,
    required: [true, "Client Git URL is required"],
    trim: true,
  },
  servergit_url: {
    type: String,
    required: [true, "Server Git URL is required"],
    trim: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// Create model for project
export const ProjectModel = model<TProject>("Project", projectSchema);
