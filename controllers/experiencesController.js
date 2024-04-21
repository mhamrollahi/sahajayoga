// import {testData,index} from "../models/experienceModel.js";
import {index,insertExperience,testData} from "../models/experienceModel.js";
import swal from 'sweetalert'
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


console.log('in experience Controllers file ...');
class experienceController {

  async index(req, res) {
    
     // res.send({message:'list function from experience controllers ....'})
    const allExperiences = await index()
    console.log('in controller = one recorde =>>',allExperiences[0][3])
    
    const {fullName,email,isActive,Title,Description} = allExperiences[0][0]
    console.log('in controller = ',fullName,email,Title,Description)
    res.send({fullName,email,isActive,Title,Description})
    res.end()
    // res.render("experience/index", { experiences: allExperiences });
  }

  test(req, res) {
    console.log('in experience Controller ...')
    res.send({
      success: true,
      message: "from experience Controller test Route .... Damam",
      data_from_model: testData,
    });
  }


 async insertExperience(req,res){
    // console.log('in experience Controllers and insert method ...!',req.body);
    
    try {
      const newRecord ={
        fullName: req.body.txtFullname,
        Email: req.body.txtEmail,
        Title: req.body.txtSubject,
        Description: req.body.txtExperience
      }

      const message = await insertExperience(newRecord)

      // res.status(200).send('OK')

      // swal({
      //   title: "تجربه / خاطره شما با موفقیت ثبت شد.",
      //   text: "دکمه بستن را کلیک کنید.",
      //   icon: "success",
      //   button: "بستن",
      // });

      // res.sendFile(path.join(__dirname, "../public/myExperience.html"));
      // res.json('{ success: true }')
      
      // res.sendfile()
      console.log('tamammmmmmmmmm shod babab .....')
      res.sendFile(path.join(__dirname, "../public/myExperience.html"));
      res.end()

    } catch (error) {
      console.log(error.message);
    }
  }
}

export default new experienceController();
