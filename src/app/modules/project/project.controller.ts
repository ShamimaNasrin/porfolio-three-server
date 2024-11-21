import catchAsync from "../../utils/catchAsync";
import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import AppError from "../../errors/AppError";
import { ProjectServices } from "./project.service";

// create A Project
const createProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.createProject(req.body);
  // console.log(result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project added successfully",
    data: result,
  });
});

// get A Project
const getSingleProject = catchAsync(async (req, res) => {
  const projectId = req.params.projectId;
  const result = await ProjectServices.getSingleProject(projectId);

  if (!result) {
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
      message: "Project retrieved successfully",
      data: result,
    });
  }
});

// get All Projects
const getAllProjects = catchAsync(async (req, res) => {
  const result = await ProjectServices.getAllProjects();

  if (!result) {
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
      message: "Project retrieved successfully",
      data: result,
    });
  }
});

// delete A Project
const deleteSingleProject = catchAsync(async (req, res) => {
  const projectId = req.params.projectId;
  if (!projectId) {
    throw new AppError(httpStatus.NOT_FOUND, "Invalid Project Id");
  }

  const result = await ProjectServices.deleteSingleProject(projectId);

  if (!result) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "No such Project",
      data: [],
    });
  } else {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project deleted successfully",
      data: result,
    });
  }
});

// update A Project
const updateSingleProject = catchAsync(async (req, res) => {
  const projectId = req.params.projectId;
  const updatedProject = req.body;

  const result = await ProjectServices.updateSingleProject(
    projectId,
    updatedProject
  );

  if (!result) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Project not found",
      data: [],
    });
  } else {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project updated successfully",
      data: result,
    });
  }
});

export const ProjectControllers = {
  createProject,
  getAllProjects,
  getSingleProject,
  deleteSingleProject,
  updateSingleProject,
};
