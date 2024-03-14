import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs/promises'

const app = express()
const port = 3000
const router = express.Router()
const experienceList = []


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log('dirName = ',__dirname)
console.log('fileName = ',__filename)

function loggerMiddleware(req,res,next){
  console.log('New Request = ',req.method,req.url)
}

function saveExperience(){

}

router.get('/test',(req,res)=>{
  res.sendFile(path.join(__dirname + '/myExperience.html'))
  // res.sendFile('myExperience.html')
})

app.use(router)
app.use(loggerMiddleware)

app.use(express.static(__dirname));

app.listen(port,()=>{
  console.log(`Our app listening on port ${port}`)
})