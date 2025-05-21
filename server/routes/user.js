import express from "express"
import {createUser ,checkAuth } from '../controller/user.js'
const routes = express.Router()

routes.post("/signup",createUser )
routes.post("/signin",checkAuth )

export default routes

