import express from 'express'
import { chatbotController } from '../Controller/chatbotcontroller.js';
const router =express.Router();

router.post("/bot",chatbotController)

export default router;