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

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({extended:false}));
app.use(router);
app.use(loggerMiddleware);


function loggerMiddleware(req, res, next) {
  console.log("New Request = ", req.method, req.url);
}

const _loadExperience = await loadExperience();
experiencesList.push(..._loadExperience);

export function addNewExperience() {
  console.log("inside of index.js !! ABALFAZELLLLL ..... ");

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

    console.log("new rocord :", newRecord);

    experiencesList.push(newRecord);
    saveExperience(experiencesList);
  } catch (err) {
    throw err;
  }
}

// router.get("/", (req, res) => {
//   res.send("Baba to digeh ki hasti ....");
//   console.log("damet garmmm....");
// });

router.post("/new", (req, res) => {
  try {
    console.log("Add new Exprience ...");
    addNewExperience();
    res.send("New rocord added ...");
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

//Test for Save

router.get("/myExperience", (req, res) => {
  // res.send(`
  // <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  // <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  // <div class="container">
  //   <h1 class="text-center mt-3 mb-3">خودم دارم تست می کنم .گاییده شدم تا الان که یه چیزی فهمیدممم..</h1>
  //   <div class="card">
  //     <div class="card-header">Sample Form</div>
  //     <div class="card-body">
  //       <form method="POST" action="/test">
  //         <div class="mb-3">
  //           <label>First Name</label>
  //           <input type="text" name="first_name" id="first_name" class="form-control" />
  //         </div>
  //         <div class="mb-3">
  //           <label>Last Name</label>
  //           <input type="text" name="last_name" id="last_name" class="form-control" />
  //         </div>
  //         <div class="mb-3">
  //                   <label>Email Address</label>
  //                   <input type="text" name="email_address" id="email_address" class="form-control" />
  //                 </div>
  //                 <div class="mb-3">
  //                   <input type="submit" name="submit_button" class="btn btn-primary" value="Add" />
  //                 </div>
  //       </form>
  //     </div>
  //   </div>
  // </div>
  // `);

  res.sendFile(path.join(__dirname , "/public/myExperience.html"));


});

router.post("/myExperience", (req, res, next) => {
  console.log('inside of index.js file and post router ...!!!')
  res.send(req.body);
  console.log(req.body);

  // const { first_name, last_name, email_address } = req.body;

  // console.log(first_name, last_name, email_address);
});

//Test for Save

app.listen(port, () => {
  console.log(`Our app listening on port ${port}`);
});
