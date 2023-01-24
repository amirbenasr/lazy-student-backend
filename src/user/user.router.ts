import express from "express";

import * as UserService from "./user.service";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import * as PS from "../profile/profile.service";
import * as bcrypt from "bcrypt";

import { generateToken, verifyToken } from "../middlewares";

import cookieParser from "cookie-parser";
import { updateProfile } from "../profile/profile.service";
import { Profile } from "../profile.type";
import { randomUUID } from "crypto";

export const userRouter = express.Router();

userRouter.use(cookieParser());

// GET: List of all Users
userRouter.get("/", async (request: Request, response: Response) => {
  try {
    const users = await UserService.findUsers();
    return response.status(200).json(users);
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});

//POST: CREATE NEW USER

userRouter.post("/create", async (request: Request, response: Response) => {
  try {
    var user = request.body;
    let password;

    //hashing password
    password = await bcrypt.hash(user.password, 10);
    //assign it to user
    user.password = password;
    user.name = "user" + randomUUID();

    var created = await UserService.createUser(user);
    const profile: Profile = {
      bio: "lazy student..",
      fname: "happy",
      lname: "joe",
      userId: created.id,
      avatar: "monkey",
      country: "random",
      dob: new Date(),
    };
    var profileCreated = await PS.updateProfile(profile);
    response.status(200).json(created);
  } catch (error) {
    response.status(401).json({ error: error });
  }
});

userRouter.post("/login", async (request: Request, response: Response) => {
  //verify if credentials are correct
  var data;
  var user;
  data = request.body;
  console.log(data);

  user = await UserService.findUser(data.email);

  if (!(data.email && data.password) || !user) {
    return response
      .status(401)
      .json({ success: false, message: "verify your credentials" });
  }

  const dbPassword = user?.password;

  var matchy = await bcrypt.compare(data.password, dbPassword!);

  if (user && matchy) {
    //generating token and save it in cookie

    generateToken(user).then((token) => {
      response.status(200).json({ success: true, token });
    });
  } else {
    response
      .status(401)
      .json({ success: false, message: "verify your credentials" });
  }
});

userRouter.use("/profile", verifyToken, async (req: Request, res: Response) => {
  res.status(200).json("user is authenticated successfully");
});
userRouter.use("/userswithprofiles", verifyToken, async (req: Request, res: Response) => {

  res.status(200).json({ success: true, users: UserService.findUsersWithProfiles });
});
