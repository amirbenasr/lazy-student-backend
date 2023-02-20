import { User } from "@prisma/client";
import { db } from "../utils/db.server";

export const updateUser = async (args: any, identifier: string) => {
  const result = await db.user.update({
    data: args,
    where: {
      id: identifier,
    },
  });
  return result;
};

export const verifyUserByToken = async (token: string) => {
  let user;
  try {
    user = await db.user.findFirst({
      where: {
        verifToken: token,
      },
    });
    if (user) {
      user = await db.user.update({
        where: {
          email: user.email,
        },
        data: {
          verified: true,
          verifToken: null,
        },
      });
      return user;
    }
  } catch (error) {
    return null;
  }
  return user;
};
export const findUserByEmail = async (email: string) => {
  return await db.user.findUnique({
    where: {
      email,
    },
  });
};
export const findUserById = async (id: string) => {
  return await db.user.findUnique({
    where: {
      id,
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
