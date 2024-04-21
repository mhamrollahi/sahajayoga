import experienceRouter from './experienceRouter.js'
import authRouter from './authRouters.js'

import express from 'express'

const router = express.Router()

router.use('/auth',authRouter)
router.use(experienceRouter)


export default router