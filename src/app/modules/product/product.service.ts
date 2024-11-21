/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

// create product function
const createProduct = async (payload: TProduct) => {
  const isExists = await ProductModel.exists({ name: payload.name });
  if (isExists) {
    throw new Error("Item already exists");
  }
  const result = await ProductModel.create(payload);
  return result;
};

// get a single product
const getSingleProduct = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};

// get all products inclusding sorting, searching, filtering
const getAllProduct = async (queryParams: any) => {
  const { brand, search, sortBy, minPrice, maxPrice } = queryParams;

  const filter: any = { isDeleted: false };

  // by name or brand
  if (search) {
    filter.$or = [
      { name: { $regex: search, $options: "i" } },
      { brand: { $regex: search, $options: "i" } },
    ];
  }

  // by brand
  if (brand) {
    filter.brand = { $regex: brand, $options: "i" };
  }

  // by price range
  if (maxPrice) {
    filter.price = { ...filter.price, $lte: parseFloat(maxPrice) };
  }

  if (minPrice) {
    filter.price = { ...filter.price, $gte: parseFloat(minPrice) };
  }

  // sorting by price
  let sort: any = {};
  if (sortBy) {
    if (sortBy === "priceAsc") {
      sort.price = 1;
    } else if (sortBy === "priceDesc") {
      sort.price = -1;
    }
  }

  const result = await ProductModel.find(filter).sort(sort);
  return result;
};

// delete a product
const deleteSingleProduct = async (_id: string) => {
  const result = await ProductModel.findByIdAndDelete(_id, { isDeleted: true });
  return result;
};

// update a single product
const updateSingleProduct = async (_id: string, payload: Partial<TProduct>) => {
  const result = await ProductModel.findOneAndUpdate({ _id }, payload, {
    new: true,
  });
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  deleteSingleProduct,
  updateSingleProduct,
};
