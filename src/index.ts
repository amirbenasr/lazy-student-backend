import * as dotenv from "dotenv";
import express, { response } from "express";
import cors from "cors";

import { userRouter } from "./user/user.router";
import { projectRouter } from "./project/project.router";
import cookieParser from "cookie-parser";

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
app.use("/project", projectRouter);

app.listen(PORT, async () => {
  console.log(`Listening on port ${PORT} `);
});
