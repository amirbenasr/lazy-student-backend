import express from "express";

import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { verifyToken } from "../middlewares";
import * as ProjectService from "./project.service";
import * as exclude from "../utils/exclude";
export const projectRouter = express.Router();

// GET: List of all projects by user email
projectRouter.get(
  "/",
  verifyToken,
  async (request: Request, response: Response) => {
    var id = response.locals.id;
    var projects;
    projects = await ProjectService.getProjects(id);

    if (!projects) {
      response.status(201).json("no projects found");
    } else {
      response.status(200).json(projects);
    }
  }
);

// GET PROJECT DETAILS BY ID

projectRouter.use("/:id", verifyToken, async (req: Request, res: Response) => {
  const projectId = Number.parseInt(req.params["id"]);

  const project = await ProjectService.getProjectDetails(projectId);
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
    try {
      var data = request.body;
      data.creatorId = response.locals.id;
      var result = await ProjectService.createProject(data);
      console.log(result);

      if (result) {
        response.json({ success: true, data: result });
      } else {
        response.json({ success: false, error: result });
      }
    } catch (error) {
      response.status(404).json({ error: error });
    }
  }
);

//GET : All projects with status pending

//POST : Join Project
projectRouter.use("/join", verifyToken, async (req: Request, res: Response) => {
  try {
    let projectId = req.body.projectId;
    let id = res.locals.id;
    let result = await ProjectService.joinProject(projectId, id);
    if (result != null) {
      res.status(200).json(result);
    } else {
      res.status(200).json("project already joined");
    }
  } catch (error) {
    res.status(401).json(error);
  }
});
