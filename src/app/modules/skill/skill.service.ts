/* eslint-disable @typescript-eslint/no-explicit-any */
import { TSkill } from "./skill.interface";
import { SkillModel } from "./skill.model";

// Create a Skill
const createSkill = async (payload: TSkill) => {
  const result = await SkillModel.create(payload);
  return result;
};

// Get all Skills
const getAllSkills = async () => {
  const result = await SkillModel.find({ isDeleted: false }); // Exclude deleted skills
  return result;
};

// // Get a single Skill
// const getSingleSkill = async (_id: string) => {
//   const result = await SkillModel.findOne({ _id });
//   return result;
// };

// Delete a Skill
const deleteSingleSkill = async (_id: string) => {
  const result = await SkillModel.findByIdAndUpdate(
    _id,
    { isDeleted: true },
    { new: true }
  );
  return result;
};

// // Update a single Skill
// const updateASkill = async (
//   _id: string,
//   data: Partial<TSkill>
// ): Promise<TSkill | null> => {
//   const result = await SkillModel.findByIdAndUpdate(_id, data, {
//     new: true,
//   });
//   return result;
// };

export const SkillServices = {
  createSkill,
  getAllSkills,
  deleteSingleSkill,
};
