import express from "express";

import type { Request, Response } from "express";

import multer from "multer";
import { body, validationResult } from "express-validator";
import { verifyToken } from "../middlewares";
import * as ProfileService from "./profile.service";
import jwtDecode from "jwt-decode";
import { Profile } from "../profile.type";
import fs from "fs";
import { storageConfig } from "../utils/multer";

export const profileRouter = express.Router();

profileRouter.get("/", verifyToken, async (req: Request, res: Response) => {
  const id = res.locals.id;
  console.log(id);

  const profile = await ProfileService.findProfileById(id);

  if (profile) {
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

profileRouter.put(
  "/",
  [verifyToken, multer({ storage: storageConfig() }).single("avatar")],
  async (req: Request, res: Response) => {
    const userId = res.locals.id;

    const userProfile = await ProfileService.findProfileById(userId);
    // const upload =
    const username = userProfile?.user.username;

    const { fname, lname, bio } = req.body;
    const data = req.file;

    const profile: Profile = {
      fname: fname,
      lname: lname,
      bio: bio,
      userId,
    };
    if (data) {
      profile.avatar = "profile";
    }

    try {
      console.log(profile);

      const updated = ProfileService.updateProfile(profile);

      return res
        .status(201)
        .json({ succes: true, msg: "updated successfully" });
    } catch (error) {
      return res.status(404).json({ error });
    }
  }
);
