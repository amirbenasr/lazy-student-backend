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
import * as Geoip from "geoip-lite";
import { getEmailForm, sendVerificationEmail } from "../utils/mailform";

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

    user.password = password;

    var created = await UserService.createUser(user);

    const clientIp =
      request.socket.remoteAddress == "::ffff:127.0.0.1"
        ? /*"81.65.89.228"*/ "102.130.60.0"
        : (request.socket.remoteAddress as string);

    const profile: Profile = {
      bio: "",
      fname: created.username,
      lname: "",
      userId: created.id,
      avatar: "monkey",
      country: Geoip.lookup(clientIp)?.country,
      dob: new Date(),
    };

    // create profile after user insertion
    var profileCreated = await PS.updateProfile(profile);

    // send Verification email
    sendVerificationEmail(created);

    response.status(200).json(created);
  } catch (error) {
    console.log(error);
    response.status(401).json({ error: error });
  }
});

// verification api
userRouter.get("/verify/:token", async (req, res) => {
  const { token } = req.params;
  console.log(token);

  try {
    const user = await UserService.verifyUserByToken(token);
    if (user?.verified) {
      return res.redirect(301, "http://localhost:5173/login?verification=true");
    } else {
      res.json(JSON.stringify(user));
    }
  } catch (error) {
    res.json(error);
  }
});

userRouter.post("/login", async (request: Request, response: Response) => {
  //verify if credentials are correct
  var data;
  var user;
  data = request.body;

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
userRouter.use(
  "/userswithprofiles",
  verifyToken,
  async (req: Request, res: Response) => {
    res
      .status(200)
      .json({ success: true, users: UserService.findUsersWithProfiles });
  }
);
