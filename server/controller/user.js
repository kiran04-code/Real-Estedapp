// server/controller/user.js
import user from "../model/user.js";
 import bcrypt from "bcryptjs";
import { createToken } from "../authjwt/jwt.js";

export const createUser = async (req, res,next) => {
  try {
    const { username, email, password } = req.body;
    const data2 = user.findOne({email})
    const hashpassword = bcrypt.hashSync(password,10) 
    const data = await user.create({
      username,
      email,
      password:hashpassword
    });
    console.log(data);
    res.status(201).json(data)
  } catch (error) {
    next(error)
  }
};

export  async function checkAuth(req,res,next){
  const {email,password} = req.body
  try {
    const validUser = await user.findOne({ email:email})
      if (!validUser) {
      return res.status(403).json({ error: "User Not Found!" });
    }
    const  hashpassword = bcrypt.compareSync(password,validUser.password)
    if(!hashpassword){
      return res.status(401).json({error:"password is Incorrect"})
    }
    const token = createToken(validUser)
    res.cookie("access_Token" ,token).status(200).json(validUser);
  } catch (error) {
    next(error)
  }
}