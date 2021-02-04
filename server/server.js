import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import routes from './routes/route.js'


dotenv.config()

const app=express()


mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log("Database Connected"))

app.use(express.json())

app.use(cors())

app.use('/api',routes)

app.listen(4000,()=>console.log("Server is up and running"))
