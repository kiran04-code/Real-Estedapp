import express from "express"
import {createUser } from '../controller/user.js'
const routes = express.Router()

routes.post("/signup",createUser )

export default routes

