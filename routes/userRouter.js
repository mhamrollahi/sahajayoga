import express from  'express'
import usersController from '../controllers/usersController.js'

const router = express.Router();

router.get('/list',usersController.list)

router.get('/create',usersController.create)
export default router