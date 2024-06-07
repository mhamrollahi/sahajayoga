import express from "express";
import authController from '../controllers/authController.js'

const router = express.Router();

router.get("/login",authController.showLogin);

router.post("/login",authController.doLogin);

router.get("/register",authController.showRegister);

router.post("/register",authController.doRegister);

router.get('/logout',authController.logout)


export default router;
