import express from "express";
import validateRequest from "../../middlewares/validateRequest";

const router = express.Router();

// for creating Experience
router.post(
  "/",
  validateRequest(ExperienceValidationSchema),
  ExperienceControllers.createExperience
);

//get all Experience
// router.get("/", ExperienceControllers.getAllExperiences);

// get a single Experience
router.get("/:experienceId", ExperienceControllers.getSingleExperience);

//delete a single Experience
router.delete("/:experienceId", ExperienceControllers.deleteSingleExperience);

// update a single Experience
router.put("/:experienceId", ExperienceControllers.updateSingleExperience);

export const ExperienceRoutes = router;
