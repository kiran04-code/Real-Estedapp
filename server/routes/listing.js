import express from "express"
import {listing} from "../controller/listing.js"
import upload from "../config/multer.js"
const  routess = express.Router()
routess.post("/listing",upload.single("ImageUrls"),listing)
export default routess