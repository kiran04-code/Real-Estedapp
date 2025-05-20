// server/controller/user.js
import user from "../model/user.js";
 import bcrypt from "bcryptjs";

export const createUser = async (req, res,next) => {
  try {
    const { username, email, password } = req.body;
    const hashpassword = bcrypt.hashSync(password,10) 
    const data = await user.create({
      username,
      email,
      password:hashpassword
    });
    console.log(data);
    res.status(201).send("User created successfully");
  } catch (error) {
    next(error)
  }
};

