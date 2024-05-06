// import {testData,index} from "../models/experienceModel.js";
import {list,createExperience,testData, deleteExperience,activeOrNotActive} from "../models/experienceModel.js";
import path from "path";
import { fileURLToPath } from "url";
import { experienceCreateValidators } from "../validators/experiences.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


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
      // console.log(errors);

      if(errors.length > 0 ){
        // req.flash('errors',errors)
       return res.render('experiences/showExperience',{layout:false,errors,hasError:errors.length > 0})
      }
      const result = await createExperience(experienceData)
      if(result[0].insertId){
        const success = 'خاطره شما با موفقیت ثبت شد.بعد از تایید در صفحه اصلی قایل مشاهده است.'
          // req.flash('success',success)
          // res.redirect('../../myExperience.html')
        return res.render('experiences/showExperience',{layout:false,success,hasError:errors.length > 0})
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


  async remove(req,res){
    try {
      const _id = req.params.expId
      if(parseInt(_id)===0){
        return res.redirect('experience/list')
      }
      const result = await deleteExperience(_id)
      res.redirect('/experience/list')
      
    } catch (error) {
      console.log(error)
    }
  }

  async activeOrNotActive(req,res){
    try {
      
      const _id = req.params.expId
      const _isActive = req.params.isActive
      if(parseInt(_id)===0){
        return res.redirect('experience/list')
      }

      const result = await activeOrNotActive(_id,_isActive)
      res.redirect('/experience/list')

    } catch (error) {
      console.log(error);
    }
  }



}


export default new experienceController();
