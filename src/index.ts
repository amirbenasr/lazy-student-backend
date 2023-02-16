import * as dotenv from "dotenv";
import express, { Request, Response, response } from "express";
import cors from "cors";

import { userRouter } from "./user/user.router";
import { projectRouter } from "./project/project.router";
import cookieParser from "cookie-parser";
import { profileRouter } from "./profile/profile.router";

import morgan from "morgan";
import { sendVerificationEmail } from "./utils/mailform";
import { findUser } from "./user/user.service";
dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT);

const app = express();
app.use(morgan("dev"));
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());
app.use("/users", userRouter);
app.use("/projects", projectRouter);
app.use("/profile", profileRouter);

app.listen(PORT || 3000, async () => {
  console.log(`Listening on port ${PORT} `);
});

app.get("/verify_email/:email", async (req: Request, res: Response) => {
  const email = req.params["email"];
  console.log(email);

  const user = await findUser(email);

  sendVerificationEmail(user!);

  if (user) return res.json("email sent succesffully");
  if (!user) return res.json("email not found");
});
