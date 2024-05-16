import express from  'express'

const app = express()

app.use((req,res,next)=>{

  
  const errors = req.flash('errors')
  const success = req.flash('success')
  const hasError = errors.length > 0
  
  res.newRender = (template,options)=>{
    options = {...options,hasError,errors,success}
    res.render(template,options)
  }
  
  res.adminRender = (template ,options)=>{
    options = {...options,layout:'admin',hasError,errors,success}
    res.render(template,options)
  }

  next()
})

export default app