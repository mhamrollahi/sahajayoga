import dotenv from "dotenv";
import app from './bootstrap/index.js'

dotenv.config()

const port = process.env.APP_PORT;

app.get('/test1',(req,res)=>{
  res.send({
    success:true,
    message: 'damam garam'
  })
})

app.get('/test2',(req,res)=>{
  try {
    res.render('admin/dashboard',{layout:'admin',userName:'محمد حسن امراللهی'})
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
