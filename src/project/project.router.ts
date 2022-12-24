import express from "express";

import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const projectRouter = express.Router();

// GET: List of all projects by user
projectRouter.get("/", async (request: Request, response: Response) => {});

//POST: CREATE NEW PROJECT

projectRouter.post(
  "/create",
  async (request: Request, response: Response) => {}
);
