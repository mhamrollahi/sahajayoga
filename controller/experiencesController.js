import experienceModel from '../model/experienceModel.js'

class experienceController{
  index(req,res){
    const allExperiences = experienceModel.all()
    res.render('experience/index',{experiences: allExperiences})
  }
}

export default new experienceController;