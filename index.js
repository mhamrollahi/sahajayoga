import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import {
  generateNewExperienceID,
  loadExperience,
  saveExperience,
} from "./public/assets/JS/src/services.js";

const app = express();
const port = 3000;
const router = express.Router();
const experiencesList = [];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("dirName = ", __dirname);
console.log("fileName = ", __filename);

function loggerMiddleware(req, res, next) {
  console.log("New Request = ", req.method, req.url);
}

const _loadExperience = await loadExperience()
experiencesList.push(..._loadExperience)


function addNewExperience() {
  console.log("in addNewExprience function ...");
  const id = generateNewExperienceID(experiencesList);

  try {
    const newRecord = {
      id: id,
      subject: `txtSubject.value - ${id}`,
      Email: `txtEmail.value - ${id}`,
      fullName: `txtFullname.value - ${id}`,
      Description: `txtEexperience.value - ${id}`,
      isActive: false,
      creationDate: " ",
      updatedDate: " ",
    };

    console.log('new rocord :',newRecord)

    experiencesList.push(newRecord);
    saveExperience(experiencesList);

  } catch (err) {
    throw err;
  }
}


router.post("/new", (req, res) => {
  try {

    console.log("Add new Exprience ...");
    addNewExperience();
    res.send('New rocord added ...')

  } catch (err) {
    throw err;
  }
});

// async function loadExperience(){
//   try{
//     const experiencesListJSON = await fs.readFile(EXPERIENCES_LIST_FILE_PATH,'utf-8')
//     experiencesList.push(JSON.parse(...experiencesListJSON))
//   }catch(err){
//      throw err
//   }
// }

// router.get('/test',(req,res)=>{
//   res.sendFile(path.join(__dirname + '/myExperience.html'))
// })

// app.use(express.static(path.join(__dirname, "public")));
app.use(router);
app.use(loggerMiddleware);

app.listen(port, () => {
  console.log(`Our app listening on port ${port}`);
});
