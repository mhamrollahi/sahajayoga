import express from "express";
import experiencesController from "../controller/experiencesController.js";

const router = express.Router();

router.get("/myExperience", experiencesController.index);

router.get("/test", experiencesController.test);


export default router
