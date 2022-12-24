import { db } from "../utils/db.server";

export const createProject = async (data: any) => {
  try {
    var project = data;
    project.deadline = new Date(project.deadline);
    var result;
    result = await db.project.create({
      data: project,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getProjects = async (email: string) => {
  try {
    var projects;
    projects = await db.project.findMany({
      where: {
        createdBy: {
          email,
        },
      },
    });
    console.log(projects);

    return projects;
  } catch (error) {
    return error;
  }
};

export const joinProject = async (id: any) => {};
