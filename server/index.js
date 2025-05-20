import dotenv from 'dotenv';
dotenv.config();
import express  from "express"
import routes from "./routes/user.js"
import DBConnections from "./config/mongoose.js"

const app = express()

const  port = 9005;

app.use(express.urlencoded({extended:true}))
app.use(express.json())
DBConnections(process.env.MONGO_URI)
  .then(() => {
    console.log("Server can start now");
  })
  .catch(err => {
    console.error("Failed to connect to DB:", err);
  });
  app.get("/",(req,res)=>{
    res.render()
  })
  app.use("/api",routes)

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