import { Profile } from "../profile.type";
import { db } from "../utils/db.server";

export const findProfileById = async (id: number) => {
  const profile = await db.profile.findFirst({
    where: {
      userId: id,
    },
    include: {
      user: {
        select: {
          username: true,
        },
      },
    },
  });
  return profile;
};

export const findProfileByUsername = async (username: string) => {
  const user = await db.user.findFirstOrThrow({
    where: {
      username: username,
    },
  });

  const profile = await db.profile.findFirstOrThrow({
    where: {
      userId: user.id,
    },
  });
  return profile;
};

export const updateProfile = async (data: Profile) => {
  const profile = await db.profile.findFirst({
    where: {
      userId: data.userId,
    },
  });
  if (profile) {
    console.log(data);

    const result = await db.profile.update({
      data,
      where: { userId: data.userId },
    });
    return result;
  } else {
    const result = await db.profile.create({
      data,
    });
    return result;
  }
};
