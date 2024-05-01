// import {testData,index} from "../models/experienceModel.js";
import { error } from "console";
import {list,createExperience,testData} from "../models/experienceModel.js";
import path from "path";
import { fileURLToPath } from "url";
import { experienceCreateValidators } from "../validators/experiences.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


console.log('in experience Controllers file ...');
class experienceController {

  async list(req, res) {
    
    const allExperiences = await list()
    res.render('admin/experiencelist',{layout:'admin',allExperiences})
  }

  test(req, res) {
    console.log('in experience Controller ...')
    res.send({
      success: true,
      message: "from experience Controller test Route .... Damam",
      data_from_model: testData,
    });
  }


 async createExperience(req,res){

   try {
      const experienceData ={
        fullName: req.body.txtFullname,
        Email: req.body.txtEmail,
        Title: req.body.txtSubject,
        Description: req.body.txtExperience
      }
      
      const errors = experienceCreateValidators(experienceData)
      console.log(errors);

      if(errors.length > 0 ){
        // req.flash('errors',errors)
        res.redirect('experiences/showExperience',{layout:false,errors,hasError:errors.length>0})
      }else{
        const result = await createExperience(experienceData)
        if(result[0].insertId){
          const success = 'خاطره شما با موفقیت ثبت شد.بعد از تایید در صفحه اصلی قایل مشاهده است.'
          // req.flash('success',success)
          // res.redirect('../../myExperience.html')
          res.redirect('experiences/showExperience' , {layout:false,success,hasError:errors.length>0})
        }
       
        // res.send({
        //   success:'true',
        //   message:`The new Experience saved by Id ${result[0].insertId}`
        // })
        // res.end()
      }

    } catch (error) {
      console.log(error.message);
    }
  }

  showExperience(req,res){
    try {
      res.render('experiences/showExperience',{layout:false,errors,hasError})
    } catch (error) {
      console.log(error)      
    }
  }
}



export default new experienceController();
