import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { blogValidationSchema } from "./blog.zod.validation";
import { BlogControllers } from "./blog.controller";

const router = express.Router();

// for creating Blog
router.post(
  "/",
  validateRequest(blogValidationSchema),
  BlogControllers.createBlog
);

//get all Blog
router.get("/", BlogControllers.getAllBlogs);

// get a single Blog
router.get("/:blogId", BlogControllers.getSingleBlog);

//delete a single Blog
router.delete("/:blogId", BlogControllers.deleteSingleBlog);

// update a single Blog
router.put("/:blogId", BlogControllers.updateSingleBlog);

export const BlogRoutes = router;
