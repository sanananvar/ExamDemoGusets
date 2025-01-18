import express from "express"
import { ProductController } from "../Controller/ProductController.js"

export const  route = express.Router()

route.get("/",ProductController.getAll)
route.get("/:id",ProductController.getById)
route.post("/",ProductController.post)
route.delete("/:id",ProductController.delete)
route.put("/:id",ProductController.update)