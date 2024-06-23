export default function authMiddleware (req,res,next){

  // console.log(req.session.user)
  console.log("in authMiddleware -> req.session.hasOwnProperty('user') =  " ,req.session.hasOwnProperty('user'))

  if(!req.session.hasOwnProperty('user')){
    return res.redirect('/')
  }
  
  next()
}
