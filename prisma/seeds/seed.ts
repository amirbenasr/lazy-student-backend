import { PrismaClient } from "@prisma/client";

import * as bcrypt from "bcrypt";
const prisma = new PrismaClient();
async function main() {
  const amir = await prisma.user.upsert({
    where: { email: "amir@prisma.io" },
    update: {
      Profile: {
        create: {
          fname: "Amir",
          lname: "Ben Naser",
          dob: new Date(),
          country: "Sokra",
          bio: "I am gay !",
          avatar: "monkey",
        },
      },
    },
    create: {
      email: "amir@prisma.io",
      username: "Amir",
      password: await bcrypt.hash("Samir", 10),
      Profile: {
        create: {
          fname: "Amir",
          lname: "Ben Naser",
          dob: new Date(),
          country: "Sokra",
          bio: "I am gay !",
          avatar: "monkey",
        },
      },
    },
  });
  const chams = await prisma.user.upsert({
    where: { email: "chams@prisma.io" },
    update: {
      Profile: {
        create: {
          fname: "Chamsdine",
          lname: "El Benna",
          dob: new Date(),
          country: "Ariana",
          bio: "I am not gay !",
          avatar: "monkey",
        },
      },
    },
    create: {
      email: "chams@prisma.io",
      username: "Chams",
      password: await bcrypt.hash("Samir", 10),
      Profile: {
        create: {
          fname: "Chamsdine",
          lname: "El Benna",
          dob: new Date(),
          country: "Ariana",
          bio: "I am not gay !",
          avatar: "monkey",
        },
      },
    },
  });
  console.log({ amir, chams });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
