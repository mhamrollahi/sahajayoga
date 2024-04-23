import dotenv from "dotenv";
import app from './bootstrap/index.js'

import {
  addNewExperience,
  loadExperience,
} from "./public/assets/JS/src/services.js";

dotenv.config()

const port = process.env.APP_PORT;
const experiencesList = [];

const _loadExperience = await loadExperience();
experiencesList.push(..._loadExperience);

app.get('/test1',(req,res)=>{
  res.send({
    success:true,
    message: 'damam garam'
  })
})

app.get('/test2',(req,res)=>{
  try {
    res.render('test2',{layout:false,userId:333})
  } catch (error) {
    console.log(err.message)    
  }
})

const startApp = () => {
  app.listen(port, () => {
    console.log(`Our app listening on port ${port}`);
  });
};

export default startApp;
