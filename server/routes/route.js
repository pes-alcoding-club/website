import express, { response } from 'express'
import formModelTemp from '../models/formModel.js'

const router=express.Router()

router.post('/register',(request,response)=>{
    const registerUser=new formModelTemp({
        name:request.body.name,
        email:request.body.email
    })
    registerUser.save().then(data=>{
        response.json(data)
    }).catch(error=>{
        response.json(error)
    })
})

export default router;