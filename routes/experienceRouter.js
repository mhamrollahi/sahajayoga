import express from "express";
import experiencesController from "../controllers/experiencesController.js";

const router = express.Router();

router.get("/list", experiencesController.list);

router.post("/create", experiencesController.createExperience);

router.get('/delete/:expId', experiencesController.remove)

router.get('/edit/:expId', experiencesController.edit)

router.post('/update/:expId', experiencesController.update)

router.get('/active/:expId&:isActive', experiencesController.activeOrNotActive)

router.get("/showExperience", experiencesController.showExperience);


export default router
