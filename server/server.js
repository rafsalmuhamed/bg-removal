import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'

// App config
const PORT = process.env.port || 4000
const app= express()

await connectDB()

// middleware
app.use(express.json())
app.use(cors())

// api routes
app.get('/',(req,res)=>res.send('API Is working'))

app.listen(PORT, ()=>console.log("server Running on Port" + PORT))