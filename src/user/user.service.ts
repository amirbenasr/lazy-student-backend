import { Role } from "@prisma/client";
import { db } from "../utils/db.server";

export const findUser = async (email: string) => {
  return await db.user.findFirst({
    where: {
      email,
    },
  });
};

export const findUsers = async () => {
  return db.user.findMany();
};

export const createUser = async (user: any) => {
  return await db.user.create({
    data: user,
  });
};
