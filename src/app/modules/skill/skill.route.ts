import express from "express";
import validateRequest from "../../middlewares/validateRequest";

const router = express.Router();

// for creating Skill
router.post(
  "/",
  validateRequest(SkillValidationSchema),
  SkillControllers.createSkill
);

//get all Skill
router.get("/", SkillControllers.getAllSkills);

// get a single Skill
// router.get("/:experienceId", SkillControllers.getSingleSkill);

//delete a single Skill
router.delete("/:experienceId", SkillControllers.deleteSingleSkill);

// update a single Skill
// router.put("/:experienceId", SkillControllers.updateSingleSkill);

export const SkillRoutes = router;
