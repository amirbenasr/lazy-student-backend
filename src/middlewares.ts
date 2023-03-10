import jwt_decode from "jwt-decode";

import { sign, verify } from "jsonwebtoken";

export const generateToken = async (payload: any) => {
  var accessToken = sign(payload, process.env.HASHING_SECRET!.toString());

  return accessToken;
};

export const verifyToken = async (req: any, res: any, next: any) => {
  const accessToken = req.cookies["lazy-token"];

  try {
    if (!accessToken) {
      return res
        .status(401)
        .json({ success: false, message: "not authorized" });
    }

    const verified = verify(accessToken, process.env.HASHING_SECRET!);

    if (verified) {
      var decodedToken: any;
      decodedToken = jwt_decode(accessToken);
      var user_id = decodedToken.user;

      req.authenticated = true;
      res.locals.id = user_id as string;
      req.params.user_id = user_id as string;
      console.log("reached here");

      return next();
    } else {
      console.log("malformed");

      return res.status(404).json("the access token is malformed");
    }
  } catch (error) {
    return res.json("the access token is malformed");
  }
};
