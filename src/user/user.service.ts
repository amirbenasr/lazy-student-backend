import { db } from "../utils/db.server";

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
