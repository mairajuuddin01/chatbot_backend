import mongoose from "mongoose";

const botschema = new mongoose.Schema({
    sender:{
        type:String,
        required:true,
        enum:["bot"]
    },

    text:{
        type:String,
        required:true,
    },
    timestamp:{
        type:Date,
        default:Date.now
    }
})

const Bot= mongoose.model("Bot",botschema) 
export default Bot;