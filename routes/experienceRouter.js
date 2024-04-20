import express from "express";
import experiencesController from "../controllers/experiencesController.js";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();
router.use(express.static(path.join(__dirname, "../public")));

router.get("/index", experiencesController.index);

router.get("/test", experiencesController.test);

router.get("/insert", experiencesController.insertExperience);

router.get("/myExperiencetest", (req, res,next) => {
  try {
    res.sendFile(path.join(__dirname, "../public/myExperience.html"));
  } catch (err) {
    console.log(err.message)
  }
});


export default router
