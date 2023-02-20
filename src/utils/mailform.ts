import { Profile, User } from "@prisma/client";
import * as nodemailer from "nodemailer";
import { resetEmail, welcomeEmail } from "./mailhtml";

export const sendEmail = (content: string, created: User | undefined) => {
  if (!created) {
    return;
  }
  var transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: { user: "amirbennasr@gmail.com", pass: "dhzoqffztvgxnivb" },
  });

  //   create verification url

  var mailOptions = {
    // TODO: 'change from email to server config'
    from: "amirbennasr@gmail.com", // sender address
    to: created.email, // list of receivers
    subject: "Activate Your New Account", // Subject line
    html: content,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(info);
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
export const getPasswordResetEmail = (name: string, token: string) => {
  // front end
  const url = "http://localhost:5173/reset?it=" + token;
  const username = name;

  return resetEmail(username, url);
};

export const getOnBoardingEmail = (created: any) => {
  const { username: name, verifToken, email } = created;
  const url = `http://localhost:3000/users/verify/${verifToken}`;
  return welcomeEmail(name, url);
};
