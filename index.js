import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import loggerMiddleware from "./middleware.js";
import bodyParser from "body-parser";
import mainRouter  from "./routes/index.js";
import dotenv from "dotenv";

import {
  addNewExperience,
  loadExperience,
} from "./public/assets/JS/src/services.js";

dotenv.config()

const app = express();
const port = process.env.APP_PORT;
const router = express.Router();
const experiencesList = [];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ urlencoded: false }));
app.use(bodyParser.json());
app.use(loggerMiddleware);

app.use(router);
app.use(mainRouter)

// app.use("/auth", authRouter);


const _loadExperience = await loadExperience();
experiencesList.push(..._loadExperience);

router.get("/myExperience", (req, res,next) => {
  try {
    res.sendFile(path.join(__dirname, "/public/myExperience.html"));
  } catch (err) {
    console.log(err.message)
  }
});




// app.get('/test2',(req,res,next)=>{
//   try{
//     throw new Error('Erroorrr ....')
//     res.send({
//       message:'salam khobi ...',
//       success: true
//     })
//   }catch(err){
//     console.log(err)
//   }
// })

// router.get('/test',(req,res,next)=>{
//   try{
//     throw new Error('Error Midahad .....')
//       res.send({
//         message:'تست می شود. ....',
//         success:true
//     })
//   }catch(err){
//     console.log(err.message)
//     res.end()
//   }

// })

router.post("/myExperience", (req, res, next) => {
  res.send(req.body);
  addNewExperience(req.body, experiencesList);
});

const startApp = () => {
  app.listen(port, () => {
    console.log(`Our app listening on port ${port}`);
  });
};

export default startApp;
