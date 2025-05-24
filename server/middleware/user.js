import { validUser } from "../authjwt/jwt.js";

export function checkCookie(cookieName) {
  return (req, res, next) => {
    const token = req.cookies[cookieName];

    if (!token || typeof token !== "string") {
      // If no token, just continue to the next middleware (unauthenticated)
      return next();
    }

      const payload = validUser(token); // should return decoded JWT payload
      req.user = payload;
      next(); // Call next regardless of token validity
  };
}
