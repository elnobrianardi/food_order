import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv'
import foodRouter from './routes/foodRoute.js'
dotenv.config()



// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB()

// api endppoints
app.use('/api/food', foodRouter)
app.use('/images', express.static('uploads'))

app.get('/',(req,res)=>{
    res.status(200).send('API Working')
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

