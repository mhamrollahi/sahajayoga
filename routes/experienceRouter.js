import express from "express";
import experiencesController from "../controllers/experiencesController.js";

const router = express.Router();

router.get("/index", experiencesController.index);

router.get("/test", experiencesController.test);


export default router
