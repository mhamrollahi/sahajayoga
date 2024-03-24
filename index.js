import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import loggerMiddleware from "./middleware.js";
import bodyParser from 'body-parser'
import authRouter from "./server/routes/authRouters.js"

import {
  addNewExperience,
  loadExperience,
} from "./public/assets/JS/src/services.js";

const app = express();
const port = 3000;
const router = express.Router();
const experiencesList = [];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("dirName = ", __dirname);
console.log("fileName = ", __filename);

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({urlencoded:false}))
app.use(bodyParser.json( ))
app.use(loggerMiddleware);

app.use(router);
app.use('/auth',authRouter)


const _loadExperience = await loadExperience();
experiencesList.push(..._loadExperience);


router.get("/myExperience", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/myExperience.html"));
});

router.post("/myExperience", (req, res, next) => {
  res.send(req.body);
  addNewExperience(req.body,experiencesList)
});


const startApp = () => {
  app.listen(port, () => {
    console.log(`Our app listening on port ${port}`);
  });
};

export default startApp;
