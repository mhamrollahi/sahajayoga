import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
// import fs from 'fs/promises'

const app = express()
const port = 3000
const router = express.Router()
const experiencesList = []


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log('dirName = ',__dirname)
console.log('fileName = ',__filename)

function loggerMiddleware(req,res,next){
  console.log('New Request = ',req.method,req.url)
}

// async function addNewExperience(){
//   try{
//     const newRecord = {
//       id : experiencesList.length,
//       subject : 'txtSubject.value',
//       Email : 'txtEmail.value',
//       fullName : 'txtFullname.value',
//       Description : 'txtEexperience.value',
//       isActive : false,
//       creationDate : ' ',
//       updatedDate : ' ',
//     }
    
//     experiencesList.push(newRecord)
//     saveExperience()

//   }catch(err){
//     throw err
//   }
// }

// async function loadExperience(){
//   try{
//     const experiencesListJSON = await fs.readFile(EXPERIENCES_LIST_FILE_PATH,'utf-8')
//     experiencesList.push(JSON.parse(...experiencesListJSON))
//   }catch(err){
//      throw err
//   }
// }

// async function saveExperience(){
//   try{
//     const experienceJSON = JSON.stringify(experiencesList)
//     await fs.writeFile(EXPERIENCES_LIST_FILE_PATH,'utf-8')

//   }catch(err){
//     throw err
//   }
// }

// router.get('/test',(req,res)=>{
//   res.sendFile(path.join(__dirname + '/myExperience.html'))
// })

app.use(express.static(path.join(__dirname,'public')));
app.use(router)
app.use(loggerMiddleware)

app.listen(port,()=>{
  console.log(`Our app listening on port ${port}`)
})



