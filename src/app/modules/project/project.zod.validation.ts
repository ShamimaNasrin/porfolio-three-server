import { z } from "zod";

// Define the Project schema
const projectValidationSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, "Name is required")
      .max(255, "Name cannot exceed 255 characters")
      .trim(),
    description: z.string().min(1, "Description is required"),
    images: z.string().url("Images must be a valid URL"),
    company: z
      .string()
      .min(1, "Company is required")
      .max(255, "Company cannot exceed 255 characters"),
    technologies: z.string().min(1, "Technologies are required"),
    live_url: z.string().url("Live URL must be a valid URL"),
    clientgit_url: z.string().url("Client Git URL must be a valid URL"),
    servergit_url: z.string().url("Server Git URL must be a valid URL"),
    isDeleted: z.boolean().default(false),
  }),
});

export { projectValidationSchema };
