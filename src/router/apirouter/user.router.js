import { Router } from "express";
import { User } from "../../models/User.js";

export const userRouter= Router()

userRouter.post('/',async (req,res,next)=>{
    try {
        const user= await User.register(req.body)
        res.json(user)                
    } catch (error) {
        next(error)
    }
}) 