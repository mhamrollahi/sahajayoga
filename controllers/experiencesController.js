import experienceModel from "../models/experienceModel.js";

class experienceController {
  index(req, res) {
    // res.send({message:'list function from experience controllers ....'})
    const allExperiences = experienceModel.list();
    res.send(allExperiences)
    // res.render("experience/index", { experiences: allExperiences });
  }

  test(req, res) {
    console.log('in experience Controller ...')
    res.send({
      success: true,
      message: "from experience Controller test Route .... Damam",
      Damet: "Gharm ...",
    });
  }
}

export default new experienceController();
