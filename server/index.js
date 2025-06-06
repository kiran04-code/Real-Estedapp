import dotenv from 'dotenv';
dotenv.config();
import express  from "express"
import routes from "./routes/user.js"
import routess from './routes/listing.js';
import {DBConnections} from "./config/mongoose.js"
import { checkCookie } from './middleware/user.js';
import cookieParser from 'cookie-parser';
const app = express()

const  port = 9005;

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use(checkCookie("access_Token"))
DBConnections(process.env.MONGO_URI).then(()=>{
  console.log("MongoDB is Connected")
}).catch((err)=>{
    console.log("MongoDb  server Error",err)
  })
  app.get("/",(req,res)=>{
    res.render()
  })
  app.use("/api",routes)
  app.use("/api",routess)

  app.listen(port,(req,res)=>{
    console.log(`server is Running on Port ${port}`)
})
// error handleing middleware

app.use((err,req,res,next)=>{
const statusCode = err.statusCode || 500;
const message = err.message|| "internal Server Error!"
return res.status(statusCode).json({
    success:false,
    statusCode,
    err:message
   })
})