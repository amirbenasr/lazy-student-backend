import express from "express";

import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { verifyToken } from "../middlewares";
import * as ProjectService from "./project.service";
import * as exclude from "../utils/exclude";
import { Project, Status } from "@prisma/client";
export const projectRouter = express.Router();

// GET: List of all projects by user email
projectRouter.get(
  "/",
  verifyToken,
  async (request: Request, response: Response) => {
    var id = response.locals.id;
    console.log(id);

    var projects;
    projects = await ProjectService.getProjects(id);

    if (!projects) {
      response.status(201).json("no projects found");
    } else {
      response.status(200).json(projects);
    }
  }
);

// all student projects
projectRouter.get("/feed", async (req: Request, res: Response) => {
  let { status, order } = req.query as {
    status: Status | undefined;
    order: "asc" | "desc";
  };
  let projects: Project[] = [];
  try {
    status = status?.toUpperCase() as Status;
    projects = await ProjectService.getAllProjects(status, order);
    res.json(projects);
  } catch (error) {
    res.json({ projects });
  }
});

// GET PROJECT DETAILS BY ID

projectRouter.get("/:id", verifyToken, async (req: Request, res: Response) => {
  const projectId = Number.parseInt(req.params["id"]);
  const userId = res.locals.id;

  const project = await ProjectService.getProjectDetails(projectId);
  if (userId != project?.creatorId) {
    console.log(userId);
    console.log(project?.creatorId);

    return res.status(404).json({ succes: false });
  }

  console.log("project from router" + project);

  // excluding password field
  const userWithoutPassword = exclude.default(project?.createdBy, [
    "password",
  ] as never);
  const joinedBy = exclude.default(project?.joinedBy, ["password"] as never);
  return res.status(200).json(project);
});

//POST: CREATE NEW PROJECT

projectRouter.post(
  "/create",
  verifyToken,
  async (request: Request, response: Response) => {
    console.log("wtff ?");

    try {
      var data = request.body;

      data.creatorId = response.locals.id.toString();

      var result = await ProjectService.createProject(data);

      if (result) {
        return response.json({ success: true, data: result });
      } else {
        return response.json({ success: false, error: result });
      }
    } catch (error) {
      return response.status(404).json({ error: error });
    }
  }
);

//GET : All projects with status pending

//POST : Join Project
projectRouter.post(
  "/join",
  verifyToken,
  async (req: Request, res: Response) => {
    try {
      let projectId = req.body.projectId;
      let id = res.locals.id;
      let result = await ProjectService.joinProject(projectId, id);
      if (result != null) {
        return res.status(200).json(result);
      } else {
        return res.status(200).json("project already joined");
      }
    } catch (error) {
      return res.status(401).json(error);
    }
  }
);
