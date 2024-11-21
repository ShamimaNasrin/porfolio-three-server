import express from "express";
import validateRequest from "../../middlewares/validateRequest";

const router = express.Router();

// for creating Project
router.post(
  "/",
  validateRequest(ProjectValidationSchema),
  ProjectControllers.createProject
);

//get all Project
router.get("/", ProjectControllers.getAllProjects);

// get a single Project
router.get("/:experienceId", ProjectControllers.getSingleProject);

//delete a single Project
router.delete("/:experienceId", ProjectControllers.deleteSingleProject);

// update a single Project
router.put("/:experienceId", ProjectControllers.updateSingleProject);
export const ProjectRoutes = router;
