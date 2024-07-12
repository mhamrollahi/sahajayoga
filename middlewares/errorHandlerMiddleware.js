const errorHandlerMiddleware = (req,res,next)=>{
  res.status(404).send({
    code:'Not Fund',
    status:404,
    message:'requested resource not be fund!... , '
  })
}

export default errorHandlerMiddleware