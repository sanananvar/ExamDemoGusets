import { model, Schema } from "mongoose"

let ProductSchema = new Schema({
    desc:String,
    name:String,
    image:String
})

export let ProductModel =model("products5",ProductSchema)