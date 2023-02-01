import { Project } from "@prisma/client";
import { db } from "../utils/db.server";

export const createProject = async (data: any) => {
  try {
    var project = data;
    project.deadline = new Date(project.deadline);
    let result;
    result = await db.project.create({
      data: project as Project,
    });
    console.log("this is the reuslt" + result);

    return result;
  } catch (error) {
    return { error };
  }
};
export const getProjects = async (id: number) => {
  try {
    var projects;
    projects = await db.project.findMany({
      where: {
        creatorId: id,
      },
    });
    console.log(projects);

    return projects;
  } catch (error) {
    return error;
  }
};

export const getAllProjects = async () => {
  var projects = [];

  projects = await db.project.findMany();
  return projects;
};

export const joinProject = async (projectId: number, userId: number) => {
  let project;

  project = await db.project.findFirst({ where: { id: projectId } });

  if (project?.joinedId == null) {
    project = db.project.update({
      data: {
        joinedId: userId,
      },
      where: {
        id: projectId,
      },
    });
  } else {
    return null;
  }

  return project;
};

export const getProjectDetails = (id: number) => {
  console.log(id);

  if (id) {
    try {
      const project = db.project.findUnique({
        where: {
          id,
        },
        include: {
          createdBy: true,
          joinedBy: true,
        },
      });

      return project;
    } catch (error) {}
  } else {
    return null;
  }
};
