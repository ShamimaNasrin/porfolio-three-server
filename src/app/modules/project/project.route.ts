import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { projectValidationSchema } from "./project.zod.validation";
import { ProjectControllers } from "./project.controller";

const router = express.Router();

// for creating Project
router.post(
  "/",
  validateRequest(projectValidationSchema),
  ProjectControllers.createProject
);

//get all Project
router.get("/", ProjectControllers.getAllProjects);

// get a single Project
router.get("/:projectId", ProjectControllers.getSingleProject);

//delete a single Project
router.delete("/:projectId", ProjectControllers.deleteSingleProject);

// update a single Project
router.put("/:projectId", ProjectControllers.updateSingleProject);
export const ProjectRoutes = router;
