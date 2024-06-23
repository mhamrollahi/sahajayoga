import {
  list,
  createExperience, 
  deleteExperience,activeOrNotActive, 
  findById,
  editExperience} 
  from "../models/experienceModel.js";
import path from "path";
import { fileURLToPath } from "url";
import { experienceCreateValidators } from "../validators/experiences.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


class experienceController {

  async list(req, res) {
    
    
    const allExperiences = await list()
    
    res.adminRender('admin/experiencelist',{layout:'admin',allExperiences})
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
        req.flash('errors',errors)
       return res.redirect('../experience/showExperience')
      }
      const result = await createExperience(experienceData)
      if(result[0].insertId){
        const success = 'خاطره شما با موفقیت ثبت شد.بعد از تایید در صفحه اصلی قابل مشاهده است.'
          req.flash('success',success)
          // res.redirect('../../myExperience.html')
        return res.redirect('../experience/showExperience')
      }

    } catch (error) {
      console.log(error.message);
    }
  }

  showExperience(req,res){
    try {
      res.newRender('experience/showExperience',{layout:false})
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


  async edit(req,res){
    try {
      const _id = req.params.expId
      if(parseInt(_id)===0){
        return res.redirect('experience/list')
      }

      const experienceData = await findById(_id)
      
      res.adminRender('admin/experienceEdit',{experienceData})

    } catch (error) {
      console.log(error)
    }
  }
  
  async update(req,res){
    try {
      const _id = req.params.expId
      if(parseInt(_id)===0){
            return res.redirect('experience/list')
      }
      const experienceData ={
        fullName: req.body.txtFullname,
        Email: req.body.txtEmail,
        Title: req.body.txtSubject,
        Description: req.body.txtExperience,
        updated_at:new Date()
      }

      const result = editExperience(_id,experienceData)
      return res.redirect('../../experience/list')

  
    } catch (error) {
      console.log(error)
    }
  }

}


export default new experienceController();
