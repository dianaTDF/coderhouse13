import { Router, json, urlencoded } from "express";
import { userRouter } from "./user.router.js";

export const router = new  Router()

router.use(json())
router.use(urlencoded({extended:true}))

router.use('/users',userRouter)
/* 
router.get('/',()=>{
    console.log("asdasda")
}) */

router.use((error, req,res,next)=>{
    switch(error.type){
        case 'INVALID_ARGUMENT':
            res.status(400)
            break
        default:
            res.status(500)
            break
    }
    res.json({
        status:'error',
        message:error.message
    })
})
