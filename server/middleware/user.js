import { validUser } from "../authjwt/jwt.js";

export function checkCookie(cookieName) {
  return (req, res, next) => {
    const token = req.cookies[cookieName];

    if (!token || typeof token !== "string") {
      return next(); // No token found, continue without user
    }
    try {
      const payload = validUser(token);
      if (!payload) {
        return next(); // Token is invalid, continue without user
      }
      req.user = payload;
      console.log("User is authenticated", req.user);
    } catch (err) {
      console.error("Token validation failed:", err.message || err);
      // Optionally: you could clear the invalid cookie or respond with an error
    }
    next();
  };
}
