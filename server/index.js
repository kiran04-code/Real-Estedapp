const express = require("express")

const app = express()

const  port = 9005;


app.listen(port,(req,res)=>{
    console.log(`server is Running on Port ${port}`)
})
