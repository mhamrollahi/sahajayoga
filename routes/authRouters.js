import express from "express";
import authController from '../controllers/authController.js'

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();
router.use(express.static(path.join(__dirname, "../public")));


router.get("/login",authController.showLogin);

router.post("/login",authController.doLogin);

router.get("/register",authController.showRegister);

router.post("/register",authController.doRegister);


export default router;
