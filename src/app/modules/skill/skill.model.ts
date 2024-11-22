import { Schema, model } from "mongoose";
import { TSkill } from "./skill.interface";

// Create schema for skill
const skillSchema = new Schema<TSkill>({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: true,
    trim: true,
  },
  // icon: {
  //   type: String,
  //   required: [true, "Icon is required"],
  //   trim: true,
  // },
  category: {
    type: String,
    required: [true, "Category is required"],
    enum: ["frontend", "backend", "tools"],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// Create model for skill
export const SkillModel = model<TSkill>("Skill", skillSchema);
