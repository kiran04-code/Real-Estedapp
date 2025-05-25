import express from "express"
import {createUser ,checkAuth, google, update,Delete, Signout} from '../controller/user.js'

const routes = express.Router()

routes.post("/signup",createUser )
routes.post("/signin",checkAuth )
routes.post("/google",google )
routes.post("/update/:id",update )
routes.delete("/delete/:id",Delete )
routes.get("/signout",Signout )

export default routes

