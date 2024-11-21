import express from "express";
import validateRequest from "../../middlewares/validateRequest";

const router = express.Router();

// for creating Blog
router.post(
  "/",
  validateRequest(BlogValidationSchema),
  BlogControllers.createBlog
);

//get all Blog
router.get("/", BlogControllers.getAllBlogs);

// get a single Blog
router.get("/:experienceId", BlogControllers.getSingleBlog);

//delete a single Blog
router.delete("/:experienceId", BlogControllers.deleteSingleBlog);

// update a single Blog
router.put("/:experienceId", BlogControllers.updateSingleBlog);

export const BlogRoutes = router;
