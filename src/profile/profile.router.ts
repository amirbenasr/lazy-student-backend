import express from "express";

import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { verifyToken } from "../middlewares";
import * as ProfileService from "./profile.service";
import jwtDecode from "jwt-decode";
import { Profile } from "../profile.type";

export const profileRouter = express.Router();

profileRouter.get("/", verifyToken, async (req: Request, res: Response) => {
  const id = res.locals.id;
  console.log(id);

  const profile = await ProfileService.findProfileById(id);
  // console.log(profile);

  if (profile) {
    // console.log(profile);

    return res.json(profile);
  } else {
    return res.json({ success: false, message: "user not found" });
  }
});

profileRouter.get("/public/:username", async (req: Request, res: Response) => {
  const username = req.params["username"];
  try {
    const profile = await ProfileService.findProfileByUsername(username);
    return res.status(201).json(profile);
  } catch (error) {
    return res.status(404).json({ error });
  }
});

profileRouter.put("/", verifyToken, async (req: Request, res: Response) => {
  const userId = res.locals.id;
  const { fname, lname, dob, bio } = req.body;
  console.log("logging req body " + req.body);

  const profile: Profile = {
    fname,
    lname,
    bio,
    userId,
  };
  if (!profile.dob) {
    profile.dob = null;
  }
  try {
    // console.log(profile);

    const updated = ProfileService.updateProfile(profile);

    return res
      .status(401)
      .json({ succes: true, msg: "updated successfully", updated });
  } catch (error) {
    return res.status(404).json({ error });
  }
});
