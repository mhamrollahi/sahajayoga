import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const authRouter = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('in auth Routes file ... ',__dirname)

authRouter.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname,'..','..','/public/auth/login.html'))
});

authRouter.post("/login", (req, res) => {});

authRouter.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname,'..','..','/public/auth/register.html'))
});

authRouter.post("/register", (req, res) => {});

authRouter.get("/reset-password", (req, res) => {});

authRouter.post("/reset-password", (req, res) => {});

authRouter.get("/active", (req, res) => {
  res.sendFile(path.join(__dirname,'..','..','/public/auth/userActive.html'))
});

export default authRouter;
