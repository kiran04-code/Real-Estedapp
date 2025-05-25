import express from "express"
import {listing} from "../controller/listing.js"
const  routess = express.Router()
routess.post("/listing",listing)
export default routess