const exception = (error,req,res,next)=>{
  
  const status = req.status || 500
  
  res.send({
    code : 'Exception Error',
    status,
    en_message: error.message,
    fa_massage: 'خطایی در عملیات مورد نظر رخ داده است، لحظه‌ای بعد امتحان کنید...'
  })
}

export default exception