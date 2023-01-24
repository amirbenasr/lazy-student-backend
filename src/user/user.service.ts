import { Role } from "@prisma/client";
import { db } from "../utils/db.server";

export const findUser = async (email: string) => {
  return await db.user.findUnique({
    where: {
      email,
    },
  });
};

export const findUsers = async () => {
  return db.user.findMany();
};

export const findUsersWithProfiles = async () => {

  return db.user.findMany({ include: { Profile: {} } });
};
export const createUser = async (user: any) => {
  return await db.user.create({
    data: user,
  });
};
