import express from 'express'
import frontsController from '../controllers/frontsController.js'

const router = express.Router()

console.log('in front ROUTER ....')

router.get('/',frontsController.index)   


export default router