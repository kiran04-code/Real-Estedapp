import JWt from "jsonwebtoken"
const scretKey = "kiran9090@"
export async function createToken(user){
    const pyload = {
        _id:user._id,
        email:user.email,
        password:user.password
    }
 const  token = JWt.sign(pyload,scretKey)
 return token 
}