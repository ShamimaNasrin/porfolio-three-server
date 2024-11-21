import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import AppError from "../../errors/AppError";
import { ProjectServices } from "./project.service";

// Create a Project
const createProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.createProject(req.body);
  // console.log(result);

  sendResponse(res, {
    statusCode: 200, // HTTP 200 OK
    success: true,
    message: "Project added successfully",
    data: result,
  });
});

// Get a Single Project
const getSingleProject = catchAsync(async (req, res) => {
  const projectId = req.params.projectId;
  const result = await ProjectServices.getSingleProject(projectId);

  if (!result) {
    sendResponse(res, {
      statusCode: 404, // HTTP 404 Not Found
      success: false,
      message: "No Data Found",
      data: [],
    });
  } else {
    sendResponse(res, {
      statusCode: 200, // HTTP 200 OK
      success: true,
      message: "Project retrieved successfully",
      data: result,
    });
  }
});

// Get All Projects
const getAllProjects = catchAsync(async (req, res) => {
  const result = await ProjectServices.getAllProjects();

  if (!result || result.length === 0) {
    sendResponse(res, {
      statusCode: 404, // HTTP 404 Not Found
      success: false,
      message: "No Data Found",
      data: [],
    });
  } else {
    sendResponse(res, {
      statusCode: 200, // HTTP 200 OK
      success: true,
      message: "Projects retrieved successfully",
      data: result,
    });
  }
});

// Delete a Single Project
const deleteSingleProject = catchAsync(async (req, res) => {
  const projectId = req.params.projectId;
  if (!projectId) {
    throw new AppError(404, "Invalid Project Id"); // HTTP 404 Not Found
  }

  const result = await ProjectServices.deleteSingleProject(projectId);

  if (!result) {
    sendResponse(res, {
      statusCode: 404, // HTTP 404 Not Found
      success: false,
      message: "No such Project",
      data: [],
    });
  } else {
    sendResponse(res, {
      statusCode: 200, // HTTP 200 OK
      success: true,
      message: "Project deleted successfully",
      data: result,
    });
  }
});

// Update a Single Project
const updateSingleProject = catchAsync(async (req, res) => {
  const projectId = req.params.projectId;
  const updatedProject = req.body;

  const result = await ProjectServices.updateSingleProject(
    projectId,
    updatedProject
  );

  if (!result) {
    sendResponse(res, {
      statusCode: 404, // HTTP 404 Not Found
      success: false,
      message: "Project not found",
      data: [],
    });
  } else {
    sendResponse(res, {
      statusCode: 200, // HTTP 200 OK
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
