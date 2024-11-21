import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import AppError from "../../errors/AppError";
import { BlogServices } from "./blog.service";

// Create a Blog
const createBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.createBlog(req.body);

  sendResponse(res, {
    statusCode: 200, // HTTP 200 OK
    success: true,
    message: "Blog added successfully",
    data: result,
  });
});

// Get a Single Blog
const getSingleBlog = catchAsync(async (req, res) => {
  const blogId = req.params.blogId;
  const result = await BlogServices.getSingleBlog(blogId);

  if (!result) {
    sendResponse(res, {
      statusCode: 404, // HTTP 404 Not Found
      success: false,
      message: "No Data Found",
      data: [],
    });
  } else {
    sendResponse(res, {
      statusCode: 200, // HTTP 200 OK
      success: true,
      message: "Blog retrieved successfully",
      data: result,
    });
  }
});

// Get All Blogs
const getAllBlogs = catchAsync(async (req, res) => {
  const result = await BlogServices.getAllBlogs();

  if (!result || result.length === 0) {
    sendResponse(res, {
      statusCode: 404, // HTTP 404 Not Found
      success: false,
      message: "No Data Found",
      data: [],
    });
  } else {
    sendResponse(res, {
      statusCode: 200, // HTTP 200 OK
      success: true,
      message: "Blogs retrieved successfully",
      data: result,
    });
  }
});

// Delete a Single Blog
const deleteSingleBlog = catchAsync(async (req, res) => {
  const blogId = req.params.blogId;
  if (!blogId) {
    throw new AppError(404, "Invalid Blog Id"); // HTTP 404 Not Found
  }

  const result = await BlogServices.deleteSingleBlog(blogId);

  if (!result) {
    sendResponse(res, {
      statusCode: 404, // HTTP 404 Not Found
      success: false,
      message: "No such Blog",
      data: [],
    });
  } else {
    sendResponse(res, {
      statusCode: 200, // HTTP 200 OK
      success: true,
      message: "Blog deleted successfully",
      data: result,
    });
  }
});

// Update a Single Blog
const updateSingleBlog = catchAsync(async (req, res) => {
  const blogId = req.params.blogId;
  const updatedBlog = req.body;

  const result = await BlogServices.updateSingleBlog(blogId, updatedBlog);

  if (!result) {
    sendResponse(res, {
      statusCode: 404, // HTTP 404 Not Found
      success: false,
      message: "Blog not found",
      data: [],
    });
  } else {
    sendResponse(res, {
      statusCode: 200, // HTTP 200 OK
      success: true,
      message: "Blog updated successfully",
      data: result,
    });
  }
});

export const BlogControllers = {
  createBlog,
  getSingleBlog,
  getAllBlogs,
  deleteSingleBlog,
  updateSingleBlog,
};
