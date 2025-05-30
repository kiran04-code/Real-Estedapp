import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET || "Kiran@9090"; // Use env var in production

export async function createToken(user) {
  const payload = {
    _id: user._id,
    email: user.email
  };

  const token = jwt.sign(payload, secretKey);
 return token;
}

export function validUser(token) {
  try {
    const payload = jwt.verify(token, secretKey);
    return payload;
  } catch (error) {
    throw new Error("Invalid token");
  }
}
