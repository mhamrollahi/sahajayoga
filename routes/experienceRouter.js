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

router.get("/myExperience", (req,res,next) => {
  try {
    console.log('in myyyyyyyyyyyy ....')
    
    res.sendFile(path.join(__dirname, "/public/myExperience.html"));
    if(res.success){
      alert('okay ....')
    }
    
  } catch (err) {
    console.log(err.message)
  }
});

router.post("/create", experiencesController.createExperience);

export default router
