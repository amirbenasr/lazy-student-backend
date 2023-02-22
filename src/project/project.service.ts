import { Project, Status, Technology } from "@prisma/client";
import { db } from "../utils/db.server";

export const createProject = async (data: any) => {
  try {
    console.log("hitting this ");

    var project = data;
    console.log(project);

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
export const getProjects = async (id: string) => {
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

export const getAllProjects = async (
  status?: Status,
  order: "asc" | "desc" = "asc",
  tech?: Technology
) => {
  var projects = [];

  projects = await db.project.findMany({
    where: {
      status,
      technology: tech,
    },
    orderBy: {
      createdAt: order,
    },
  });
  return projects;
};

export const joinProject = async (projectId: number, userId: string) => {
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
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("we cant be here");

    return null;
  }
};
