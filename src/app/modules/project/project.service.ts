/* eslint-disable @typescript-eslint/no-explicit-any */

import { TProject } from "./project.interface";
import { ProjectModel } from "./project.model";

// Create a Project
const createProject = async (payload: TProject) => {
  const result = await ProjectModel.create(payload);
  return result;
};

// Get all Projects
const getAllProjects = async () => {
  const result = await ProjectModel.find({ isDeleted: false }); // Exclude deleted projects
  return result;
};

// Get a single Project
const getSingleProject = async (_id: string) => {
  const result = await ProjectModel.findOne({ _id });
  return result;
};

// Delete a Project
const deleteSingleProject = async (_id: string) => {
  const result = await ProjectModel.findByIdAndUpdate(
    _id,
    { isDeleted: true },
    { new: true }
  );
  return result;
};

// Update a single Project
const updateSingleProject = async (
  _id: string,
  data: Partial<TProject>
): Promise<TProject | null> => {
  const result = await ProjectModel.findByIdAndUpdate(_id, data, {
    new: true,
  });
  return result;
};

export const ProjectServices = {
  createProject,
  getAllProjects,
  getSingleProject,
  deleteSingleProject,
  updateSingleProject,
};
