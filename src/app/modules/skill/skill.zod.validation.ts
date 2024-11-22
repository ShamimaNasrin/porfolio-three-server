import { z } from "zod";

// Define the Skill schema
const skillValidationSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, "Name is required")
      .max(255, "Name cannot exceed 255 characters")
      .trim(),
    category: z.enum(["frontend", "backend", "tools"]),
    // icon: z.string().min(1, "Icon is required").url("Icon must be a valid URL"),
    isDeleted: z.boolean().default(false),
  }),
});

export { skillValidationSchema };
