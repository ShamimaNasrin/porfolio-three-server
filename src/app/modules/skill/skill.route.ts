import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { skillValidationSchema } from "./skill.zod.validation";
import { SkillControllers } from "./skill.controller";

const router = express.Router();

// for creating Skill
router.post(
  "/",
  validateRequest(skillValidationSchema),
  SkillControllers.createSkill
);

//get all Skill
router.get("/", SkillControllers.getAllSkills);

// get a single Skill
// router.get("/:skillId", SkillControllers.getSingleSkill);

//delete a single Skill
router.delete("/:skillId", SkillControllers.deleteSingleSkill);

// update a single Skill
// router.put("/:skillId", SkillControllers.updateSingleSkill);

export const SkillRoutes = router;
