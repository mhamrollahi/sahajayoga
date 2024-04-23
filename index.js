import dotenv from "dotenv";
import app from './bootstrap/index.js'


import {
  addNewExperience,
  loadExperience,
} from "./public/assets/JS/src/services.js";

dotenv.config()

// const app = express();

const port = process.env.APP_PORT;
// const router = express.Router();
const experiencesList = [];

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(express.static(path.join(__dirname, "public")));

// app.use(bodyParser.urlencoded({ urlencoded: false }));
// app.use(bodyParser.json());
// app.use(loggerMiddleware);

// app.use(router);
// app.use(mainRouter)

// boot(app)

// app.use("/auth", authRouter);


const _loadExperience = await loadExperience();
experiencesList.push(..._loadExperience);

// router.get("/myExperience", (req, res,next) => {
//   try {
//     res.sendFile(path.join(__dirname, "/public/myExperience.html"));
//   } catch (err) {
//     console.log(err.message)
//   }
// });

// mainRouter.get('/index',experiencesController.index)


// app.get('/test2',(req,res,next)=>{
//   try{
//     throw new Error('Erroorrr ....')
//     res.send({
//       message:'salam khobi ...',
//       success: true
//     })
//   }catch(err){
//     console.log(err)
//   }
// })

// router.get('/test',(req,res,next)=>{
//   try{
//     throw new Error('Error Midahad .....')
//       res.send({
//         message:'تست می شود. ....',
//         success:true
//     })
//   }catch(err){
//     console.log(err.message)
//     res.end()
//   }

// })

// router.post("/myExperience", (req, res, next) => {
//   res.send(req.body);
//   addNewExperience(req.body, experiencesList);
// });

// app.use(router)


app.get('/test1',(req,res)=>{
  res.send({
    success:true,
    message: 'damam garam'
  })
})

app.get('/test2',(req,res)=>{
  try {
    res.render('test2',{layout:false,userId:333})
  } catch (error) {
    console.log(err.message)    
  }
})

const startApp = () => {
  app.listen(port, () => {
    console.log(`Our app listening on port ${port}`);
  });
};

export default startApp;
