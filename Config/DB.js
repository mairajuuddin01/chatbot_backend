import mongoose from 'mongoose'
export const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        .then(()=>console.log("database connected successfully "))
        .catch(()=>console.log("failed to connect DB...."))
        
    } catch (error) {
        console.log("server error from config ",error) 
    }
}