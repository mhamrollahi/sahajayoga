import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const port = 3000
const router = express.Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log('dirName = ',__dirname)
console.log('fileName = ',__filename)

router.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.use(router)
app.use(express.static(__dirname));

app.listen(port,()=>{
  console.log(`Our app listening on port ${port}`)
})