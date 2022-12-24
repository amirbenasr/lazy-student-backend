// export const test = (req: any, res: any, next: any) => {
//   console.log(req.body);
//   if (req.body.email != "amirbennasr@gmail.com") {
//     return res.status(401).json("can't proceed");
//   } else {
//     next();
//   }
// };

import { sign, verify } from "jsonwebtoken";

export const generateToken = async (user: any) => {
  var accessToken = sign({ user: user.email }, "secret-lounge");

  return accessToken;
};

export const verifyToken = async (req: any, res: any, next: any) => {
  const accessToken = req.cookies["lazy-cookie"];

  try {
    if (!accessToken) {
      return res.status(401).json("no access token provided");
    }
    const verified = verify(accessToken, "secret-lounge");

    if (verified) {
      console.log(accessToken);
      req.authenticated = true;
      return next();
    } else {
      return res.status(404).json("the access token is malformed");
    }
  } catch (error) {
    return res.json("the access token is malformed");
  }
};
