import { validUser } from "../authjwt/jwt.js";

export function checkCookie(cookieName) {
  return (req, res, next) => {
    const token = req.cookies[cookieName];

    if (!token || typeof token !== "string") {
      return next();
    }

      const payload = validUser(token); 
      req.user = payload;
      console.log("User is authenticated", req.user);
      next(); 
  };
}
