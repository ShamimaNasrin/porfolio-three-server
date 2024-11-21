import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { productValidationSchema } from "./product.zod.validation";

// create new product
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    // const result = await ProductServices.createProduct(productData);

    // Zod validation
    const zodParsedData = productValidationSchema.parse(productData);
    const result = await ProductServices.createProduct(zodParsedData);

    // send response
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err: unknown) {
    // console.log(err);
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: err,
    });
  }
};

// Get all products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const queryParams = req.query;
    const result = await ProductServices.getAllProduct(queryParams);

    if (result?.length) {
      res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Products not found!",
      });
    }
  } catch (err: unknown) {
    // console.log(err);
    res.status(500).json({
      success: false,
      message: "something went wrong fetching products!",
      error: err,
    });
  }
};

// Get a single product
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProduct(productId);

    if (result) {
      res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "No such product",
        data: result,
      });
    }
  } catch (err: unknown) {
    // console.log(err);
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: err,
    });
  }
};

// delete a single product
const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    if (!productId) {
      throw new Error("Invalid product");
    }
    const result = await ProductServices.deleteSingleProduct(productId);

    if (result) {
      res.status(200).json({
        success: true,
        message: "Product deleted successfully",
        data: result,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "No such product",
        data: result,
      });
    }
  } catch (err: unknown) {
    // console.log(err);
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: err,
    });
  }
};

//update a single product
const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updatedProduct = req.body;

    // Zod validation
    const zodParsedData = productValidationSchema.parse(updatedProduct);

    //update a single product
    const result = await ProductServices.updateSingleProduct(
      productId,
      zodParsedData
    );

    if (result) {
      res.status(200).json({
        success: true,
        message: "Product updated successfully!",
        data: result,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "No such product",
        // data: "",
      });
    }
  } catch (err: unknown) {
    // console.log(err);
    res.status(500).json({
      success: false,
      message: "Failed to update product!",
      error: err,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteSingleProduct,
  updateSingleProduct,
};
