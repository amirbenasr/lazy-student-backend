import jwt_decode from "jwt-decode";

import { sign, verify } from "jsonwebtoken";

export const generateToken = async (user: any) => {
  var accessToken = sign({ user: user.id }, "secret-lounge");

  return accessToken;
};

export const verifyToken = async (req: any, res: any, next: any) => {
  const accessToken = req.cookies["lazy-token"];
  console.log(accessToken);

  try {
    if (!accessToken) {
      return res
        .status(401)
        .json({ success: false, message: "not authorized" });
    }

    const verified = verify(accessToken, "secret-lounge");

    if (verified) {
      var decodedToken: any;
      decodedToken = jwt_decode(accessToken);
      var user_id = decodedToken.user;
      req.authenticated = true;
      res.locals.id = user_id;
      return next();
    } else {
      return res.status(404).json("the access token is malformed");
    }
  } catch (error) {
    return res.json("the access token is malformed");
  }
};
