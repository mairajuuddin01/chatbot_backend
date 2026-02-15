import express from 'express'
import { chatbotController } from '../Controller/chatbotcontroller.js';
const router =express.Router();

router.post("/message",chatbotController)

export default router;