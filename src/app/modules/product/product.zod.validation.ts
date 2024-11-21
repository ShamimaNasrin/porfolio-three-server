import { z } from "zod";

// Define the Product schema
const productValidationSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(255, "Name cannot exceed 255 characters")
    .trim(),
  img_url: z.string().url("Image URL must be a valid URL"),
  brand: z
    .string()
    .min(1, "Brand is required")
    .max(255, "Brand cannot exceed 255 characters"),
  stock_quantity: z.number().min(0, "Stock quantity cannot be less than 0"),
  price: z.number().min(0, "Price cannot be less than 0"),
  rating: z
    .number()
    .min(0, "Rating cannot be less than 0")
    .max(5, "Rating cannot be more than 5"),
  description: z.string().min(1, "Description is required"),
  // quantity: z.number().default(0),
  isDeleted: z.boolean().default(false),
});

export { productValidationSchema };
