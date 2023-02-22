import express from "express";

import * as UserService from "./user.service";
import type { Request, Response } from "express";
import * as PS from "../profile/profile.service";
import * as bcrypt from "bcrypt";

import { generateToken, verifyToken } from "../middlewares";

import cookieParser from "cookie-parser";
import { Profile } from "../profile.type";
import * as Geoip from "geoip-lite";
import {
  getOnBoardingEmail,
  getPasswordResetEmail,
  sendEmail,
} from "../utils/mailform";
import jwtDecode from "jwt-decode";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import * as MailFormatter from "../mailer/server";
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

userRouter.post("/forget", async (req: Request, res: Response) => {
  const { email } = req.body;
  console.log(email);

  const user = await UserService.findUserByEmail(email);
  try {
    //we need to generate a jwt token
    const jwt = await generateToken({ user: user!.id });
    //update the user's field
    await UserService.updateUser({ resetToken: jwt }, user!.id);
    const url = "http://localhost:5173/reset?it=" + user?.resetToken;
    console.log(url);

    const html = await MailFormatter.default.passwordResetEmail(
      user?.username!,
      url
    );
    sendEmail(html, user!);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  } //generate the url containing that token
  return res.status(200).json({ success: true });
});

userRouter.post("/verify", async (req: Request, res: Response) => {
  const { token, password } = req.body;
  type omg = {
    user: string;
    iat: number;
  };
  //deconstruct the token
  const decodedToken = jwtDecode(token) as omg;
  const { iat, user: userId } = decodedToken;
  //verify if id exist - and the token is same
  const user = await UserService.findUserById(userId);

  if (user && user.resetToken == token) {
    console.log("we are able to update now");
    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    //update the user with new hashed password
    const result = await UserService.updateUser(
      { password: hashedPassword },
      user.id
    ).then((val) => {
      UserService.updateUser({ resetToken: null }, val.id);
    });
    console.log(result);

    //update token field to null
  }
  res.status(200).json({ msg: "password reset" });
});

userRouter.post("/create", async (request: Request, response: Response) => {
  try {
    var user = request.body;
    let password;

    //hashing password
    // const salt = await bcrypt.genSalt(process.env.HASHING_SECRET)
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
    await PS.updateProfile(profile);

    // send Verification email
    const url = `http://localhost:3000/users/verify/${created.verifToken}`;
    try {
      const html = await MailFormatter.default.onboardingEmail(
        created.username!,
        url
      );
      sendEmail(html, created);
    } catch (error) {
      console.log(error);
    }
    // const html = await onbo(created.username!, url);
    response.status(200).json({ success: true });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002")
        response.status(401).json({
          success: false,
          message:
            "user with the same " + error!.meta!.target + " already exists",
        });
    } else {
    }
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

  user = await UserService.findUserByEmail(data.email);

  if (!(data.email && data.password) || !user) {
    return response
      .status(401)
      .json({ success: false, message: "verify your credentials" });
  }

  const dbPassword = user?.password;

  var matchy = await bcrypt.compare(data.password, dbPassword!);

  if (user && matchy) {
    //generating token and save it in cookie

    generateToken({ user: user.id }).then((token) => {
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
