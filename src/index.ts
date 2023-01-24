import * as dotenv from "dotenv";
import express, { response } from "express";
import cors from "cors";

import { userRouter } from "./user/user.router";
import { projectRouter } from "./project/project.router";
import cookieParser from "cookie-parser";
import { profileRouter } from "./profile/profile.router";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT);

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/users", userRouter);
app.use("/projects", projectRouter);
app.use("/profile", profileRouter);

app.listen(PORT || 3000, async () => {
  console.log(`Listening on port ${PORT} `);
});
