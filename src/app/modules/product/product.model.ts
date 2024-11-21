import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";

// create schema for product
const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: true,
    trim: true,
  },
  img_url: {
    type: String,
    required: [true, "Image URL is required"],
    trim: true,
  },
  brand: {
    type: String,
    required: [true, "Brand is required"],
    trim: true,
  },
  stock_quantity: {
    type: Number,
    required: [true, "Stock quantity is required"],
    min: [0, "Stock quantity cannot be less than 0"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be less than 0"],
  },
  rating: {
    type: Number,
    required: [true, "Rating is required"],
    min: [0, "Rating cannot be less than 0"],
    max: [5, "Rating cannot be more than 5"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  // quantity: {
  //   type: Number,
  //   default: 0,
  // },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// create model for product
export const ProductModel = model<TProduct>("Product", productSchema);
