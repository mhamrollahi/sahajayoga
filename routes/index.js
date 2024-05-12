import experienceRouter from './experienceRouter.js'
import authRouter from './authRouters.js'

import express from 'express'

const router = express.Router()


router.use('/experience',experienceRouter)
router.use('/auth',authRouter)


export default router