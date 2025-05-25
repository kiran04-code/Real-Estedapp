// server/controller/user.js
import user from "../model/user.js";
 import bcrypt from "bcryptjs";
import { createToken, validUser } from "../authjwt/jwt.js";

export const createUser = async (req, res,next) => {
  try {
    const { username, email, password } = req.body;
    user.findOne({email})
    const hashpassword = bcrypt.hashSync(password,10) 
    const data = await user.create({
      username,
      email,
      password:hashpassword
    });
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
   res.cookie("access_Token", token).status(200).json({
  success: true,
  message: "Login successful",
  validUser,
});
console.log(req.user)
  } catch (error) {
    next(error)
  }
}
export async function google(req, res) {
  try {
    const { username, email, photo } = req.body;


    const validUser = await user.findOne({ email: email });

    if (validUser) {
      const token = createToken(validUser);
      return res
        .cookie("access_Token", token, { httpOnly: true })
        .status(200)
        .json({ success: true, message: "User logged in",  validUser});
    }

  
    const createPass = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
    const hashGenerated = bcrypt.hashSync(createPass, 10);
    console.log("Generated password for Google signup:", createPass);

  
    const newUser = await user.create({
      email,
      username,
      photo,
      password: hashGenerated,
    });

    const token = createToken(newUser);
    res
      .cookie("access_Token", token, { httpOnly: true })
      .status(200)
      .json({ success: true, message: "Signup successful", user: newUser });
  } catch (error) {
    console.error("Google Auth Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
}

export async function update(req,res,next){
  const {username,email,password} = req.body
  const userId = req.params.id
  try {
    const haspss = bcrypt.hashSync(password,10) 
    const data = await user.findOneAndUpdate(
  { _id: userId },
  {
    email: email,
    username: username,
    password: haspss, // make sure this is a hashed password
  },
  { new: true } // returns the updated document
);
    res.status(200).json({sucess:true,message:"Update Sucessfully",validUser:data})
  } catch (error) {
    next(error)
  }
}
export async function Delete(req,res,next){
    const Id = req.params.Id
    await user.findByIdAndDelete(Id)
    res.status(200).json("account Delete").clearCookie("access_token");
}