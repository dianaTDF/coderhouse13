import { Schema, model } from "mongoose";

import mongoose from "mongoose";
import {randomUUID} from 'node:crypto'
import { encrypt } from "../utils/cripyograpy.js";

const collection ="User"
const schema = new mongoose.Schema({
    _id:{type:String, default:randomUUID},
    username:{type:String,required:true},
    first_name:{type:String,required:true},
    first_name:{type:String,required:true},
    age:{type:Number,required:true},
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true},
    picture:{type:String,default:''},
    //cart:{type:String,required:true},
    //role:{type:String,required:true}
},
{
    versionKey:false,
    strict:'throw',
    statics: {
        register: async function(userData){
            try {
                if(userData.password){
                    userData.password= encrypt(userData.password)
                }
                const user= await this.create(userData)
                return user.toObject()                    
            } catch (error) {
                const theError= new Error(error.message)
                theError['type']='INVALID_ARGUMENT'
                throw theError
            }
        }
    }
})

export const User = model(collection,schema)