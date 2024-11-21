/* eslint-disable @typescript-eslint/no-explicit-any */
import { TBlog } from "./blog.interface";
import { BlogModel } from "./blog.model";

// Create a Blog
const createBlog = async (payload: TBlog) => {
  const result = await BlogModel.create(payload);
  return result;
};

// Get all Blogs
const getAllBlogs = async () => {
  const result = await BlogModel.find({ isDeleted: false }); // Exclude deleted blogs
  return result;
};

// Get a single Blog
const getSingleBlog = async (_id: string) => {
  const result = await BlogModel.findOne({ _id });
  return result;
};

// Delete a Blog
const deleteSingleBlog = async (_id: string) => {
  const result = await BlogModel.findByIdAndUpdate(
    _id,
    { isDeleted: true },
    { new: true }
  );
  return result;
};

// Update a single Blog
const updateSingleBlog = async (
  _id: string,
  data: Partial<TBlog>
): Promise<TBlog | null> => {
  const result = await BlogModel.findByIdAndUpdate(_id, data, {
    new: true,
  });
  return result;
};

export const BlogServices = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  deleteSingleBlog,
  updateSingleBlog,
};
