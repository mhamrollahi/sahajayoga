import express from  'express'
import usersController from '../controllers/usersController.js'

const router = express.Router();

router.get('/list',usersController.list)

router.get('/create',usersController.create)

router.post("/store", usersController.store);

// router.get('/delete/:userId', usersController.remove)

// router.get('/edit/:userId', usersController.edit)

// router.post('/update/:userId', usersController.update)

// router.get('/active/:userId&:isActive', usersController.activeOrNotActive)

export default router