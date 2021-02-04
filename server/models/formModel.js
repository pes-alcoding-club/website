import mongoose from 'mongoose'

const formModelTemp=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

export default mongoose.model('register',formModelTemp)