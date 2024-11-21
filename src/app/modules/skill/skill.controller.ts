import catchAsync from "../../utils/catchAsync";
import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import AppError from "../../errors/AppError";
import { SkillServices } from "./skill.service";

// Create a Skill
const createSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.createSkill(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill added successfully",
    data: result,
  });
});

// // Get a Single Skill
// const getSingleSkill = catchAsync(async (req, res) => {
//   const skillId = req.params.skillId;
//   const result = await SkillServices.getSingleSkill(skillId);

//   if (!result) {
//     sendResponse(res, {
//       statusCode: httpStatus.NOT_FOUND,
//       success: false,
//       message: "No Data Found",
//       data: [],
//     });
//   } else {
//     sendResponse(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: "Skill retrieved successfully",
//       data: result,
//     });
//   }
// });

// Get All Skills
const getAllSkills = catchAsync(async (req, res) => {
  const result = await SkillServices.getAllSkills();

  if (!result || result.length === 0) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "No Data Found",
      data: [],
    });
  } else {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Skills retrieved successfully",
      data: result,
    });
  }
});

// Delete a Single Skill
const deleteSingleSkill = catchAsync(async (req, res) => {
  const skillId = req.params.skillId;
  if (!skillId) {
    throw new AppError(httpStatus.NOT_FOUND, "Invalid Skill Id");
  }

  const result = await SkillServices.deleteSingleSkill(skillId);

  if (!result) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "No such Skill",
      data: [],
    });
  } else {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Skill deleted successfully",
      data: result,
    });
  }
});

// // Update a Single Skill
// const updateSingleSkill = catchAsync(async (req, res) => {
//   const skillId = req.params.skillId;
//   const updatedSkill = req.body;

//   const result = await SkillServices.updateSingleSkill(skillId, updatedSkill);

//   if (!result) {
//     sendResponse(res, {
//       statusCode: httpStatus.NOT_FOUND,
//       success: false,
//       message: "Skill not found",
//       data: [],
//     });
//   } else {
//     sendResponse(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: "Skill updated successfully",
//       data: result,
//     });
//   }
// });

export const SkillControllers = {
  createSkill,
  getAllSkills,
  deleteSingleSkill,
};
