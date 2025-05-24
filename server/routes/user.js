import express from "express"
import {createUser ,checkAuth, google } from '../controller/user.js'
const routes = express.Router()

routes.post("/signup",createUser )
routes.post("/signin",checkAuth )
routes.post("/google",google )

export default routes

