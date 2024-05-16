import express from "express";
import experiencesController from "../controllers/experiencesController.js";
import authMiddleware from '../middlewares/authMiddleware.js'

const router = express.Router();

router.get("/list",[authMiddleware], experiencesController.list);

router.post("/create", experiencesController.createExperience);

router.get('/delete/:expId',[authMiddleware], experiencesController.remove)

router.get('/edit/:expId',[authMiddleware], experiencesController.edit)

router.post('/update/:expId',[authMiddleware], experiencesController.update)

router.get('/active/:expId&:isActive',[authMiddleware], experiencesController.activeOrNotActive)

router.get("/showExperience", experiencesController.showExperience);


export default router
