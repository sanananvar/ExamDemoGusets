import { ProductModel } from "../Model/ProductModel.js"

export const ProductController={
    getAll:async (req,res)=>{
        let products =await ProductModel.find()
        res.send(
            products
        )
    },
    getById:async (req,res)=>{
        let id=req.params.id
        let myproduct = await ProductModel.findById(id)
        res.send({
            message:"found by id ",
            data:myproduct
        })
    },
    post:async(req,res)=>{
        let newproduct =  ProductModel(req.body)
        await newproduct.save()
        res.send({
            message:"posted"
        })
    },
    delete: async (req,res)=>{
        let {id} = req.params
        await ProductModel.findByIdAndDelete(id)
        res.send({
            message:"deleted"
        })
    },
    update:async(req,res)=>{
        let id = req.params.id
        let updateproduct = req.body
        let updated = await ProductModel.findByIdAndUpdate({_id:id},updateproduct,{new:true})
        res.send(updated)
    }
}