// import {testData,index} from "../models/experienceModel.js";
import {index,testData} from "../models/experienceModel.js";

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
    index()

    res.send({
      success: true,
      message: "from experience Controller test Route .... Damam",
      Damet: testData,
    });
  }
}

export default new experienceController();
