import { z } from "zod";

// Define the Blog schema
const blogValidationSchema = z.object({
  body: z.object({
    title: z
      .string()
      .min(1, "Title is required")
      .max(255, "Title cannot exceed 255 characters")
      .trim(),
    description: z.string().min(1, "Description is required"),
    images: z.string().url("Images must be a valid URL"),
    date: z.string().min(1, "Date is required").trim(),
    isDeleted: z.boolean().default(false),
  }),
});

export { blogValidationSchema };
