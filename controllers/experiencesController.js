// import {testData,index} from "../models/experienceModel.js";
import {list,createExperience,testData} from "../models/experienceModel.js";
import swal from 'sweetalert'
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


console.log('in experience Controllers file ...');
class experienceController {

  async list(req, res) {
    
     // res.send({message:'list function from experience controllers ....'})
    const allExperiences = await list()
    // console.log('in controller = one recorde =>>',allExperiences)
    
    // const {fullName,email,isActive,Title,Description} = allExperiences[0][0]
    // console.log('in controller = ',fullName,email,Title,Description)
    // res.send({fullName,email,isActive,Title,Description})
    // res.end()
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
      
      const result = await createExperience(experienceData)
      
      res.json({ 
        success: true,
        message: `تجربه جدید با کد ${result[0].insertId}  موفقیت آمیز ذخیره شد.`
       })

      //  fetch('/experience/create',{
      //   method: 'POST',
      //   body: FormData
      //  })
      //  .then(res=>res.json())
      //  .then(data => {
      //   if(data.success){
      //     swal({
      //       title: data.message,
      //       text: "دکمه بستن را کلیک کنید.",
      //       icon: "success",
      //       button: "بستن",
      //     });
      //   }
      //  })
      //  .catch(error=>console.log('Error : ',error))
      // res.status(200).send('OK')


      // res.sendFile(path.join(__dirname, "../public/myExperience.html"));
      
      // res.sendfile()
      // console.log({result})
      res.send({
        success:'true',
        message:`The new Experience saved by Id ${result[0].insertId}`
      })
      res.end()

    } catch (error) {
      console.log(error.message);
    }
  }
}

export default new experienceController();
