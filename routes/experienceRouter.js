import express from "express";
import experiencesController from "../controllers/experiencesController.js";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();
router.use(express.static(path.join(__dirname, "../public")));

router.get("/list", experiencesController.list);

router.post("/create", experiencesController.createExperience);

// router.get("/showExperience", experiencesController.showExperience);

router.get("/test", experiencesController.test);

export default router
