import express from "express"
import {listing} from "../controller/listing.js"
const  routess = express.Router()
routess.get("/listing",listing)
export default routess