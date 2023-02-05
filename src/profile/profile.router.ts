import express from "express";

import type { Request, Response } from "express";

import multer from 'multer';
import { body, validationResult } from "express-validator";
import { verifyToken } from "../middlewares";
import * as ProfileService from "./profile.service";
import jwtDecode from "jwt-decode";
import { Profile } from "../profile.type";
import fs from 'fs';

export const profileRouter = express.Router();

profileRouter.get("/", verifyToken, async (req: Request, res: Response) => {
  const id = res.locals.id;
  console.log(id);

  const profile = await ProfileService.findProfileById(id);
  console.log(profile);

  if (profile) {
    console.log(profile);

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

  const userProfile = await ProfileService.findProfileById(userId);
  const username = userProfile?.user.username;

  console.log(userProfile)
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {

      var balayAudPath = 'uploads/' + username + '/profile'

      fs.mkdirSync(balayAudPath, { recursive: true })
      cb(null, balayAudPath)
    },
    filename: function (req, file, cb) {

      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
      console.log(file)
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
      cb(null, Date.now() + file.originalname) //Appending .jpg
    }
  })

  const upload = multer({ storage: storage }).single('avatar')

  const { fname, lname, dob, bio } = req.body;
  console.log("logging req body " + req.body);
  var avatar = "monkey";
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log('A Multer error occurred when uploading.')
    } else if (err) {

      console.log(err)
      console.log('An unknown error occurred when uploading.')
    }
    console.log('Everything went fine.')
  })


  const profile: Profile = {
    fname: fname,
    lname: lname,
    bio: bio,
    userId,
    avatar: avatar
  };
  if (!profile.dob) {
    profile.dob = null;
  }
  try {
    console.log(profile);

    const updated = ProfileService.updateProfile(profile);

    return res
      .status(401)
      .json({ succes: true, msg: "updated successfully", updated });
  } catch (error) {
    return res.status(404).json({ error });
  }
});
