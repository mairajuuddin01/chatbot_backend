import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './Config/DB.js';
import router from './Routes/chatbotRoute.js';
import cors from 'cors'
const app =express()

// env file import here
dotenv.config();

// database import from config folder
connectDB();

// server testing
app.get('/',(req,res)=>{
    res.send("server is perfectly runing")
})


// middleware here 
app.use(cors())
app.use(express.json());
app.use('/api',router)



// server running
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server is runing on port num : ${port}`)
})