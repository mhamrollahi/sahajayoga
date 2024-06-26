import experienceRouter from './experienceRouter.js'
import authRouter from './authRouters.js'
import userRouter from './userRouter.js'
import authMiddleware from '../middlewares/authMiddleware.js'
import frontRouter from './frontRouters.js';

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from 'express'

const router = express.Router()

router.use(express.static(path.join(__dirname, "../public")));

router.use('/experience',experienceRouter)
router.use('/auth',authRouter)
router.use('/user',[authMiddleware],userRouter)

export default router