import Bot from "../Model/botmodel.js";
import User from "../Model/usermodel.js";
import botresponses from '../Data/botresponses.js'

export const chatbotController=async(req,res)=>{
    try {
        const { text }=req.body;
        if(!text?.trim()){
            return res.status(400).json({message: "input field is empty "})
        }
        //  create data here
        const user =await User.create({
            sender:'user',
            text
        })

        // your custom data fr chatbot 
        
        // text normalized when user send text
        const normalizetext = text.toLowerCase().trim();

        // bot response from botresponse variable

        const botresponse = botresponses[normalizetext] || "Sorry, i don't understand that ";

        const bot =await Bot.create({
            sender:"bot",
            text:botresponse
        })

        return res.status(200).json({
            userMessage:user.text,
            botMessage:bot.text
        })


    } catch (error) {
        console.log("server error from controller",error)
        return res.status(400).json({
            error: "internel server error"
        })
    }
}