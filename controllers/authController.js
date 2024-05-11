// import {} from '../models/authModel.js'


class authController{
  async showLogin(req,res){
    try {
      res.render('auth/login',{layout:'auth'})
    } catch (error) {
      console.log(error)
    }
  }

  async doLogin(req,res){
    try {
      
    } catch (error) {
      console.log(error)
    }
  }

  async showRegister(req,res){
    try {
      
    } catch (error) {
      console.log(error)
    }
  }

  async doRegister(req,res){
    try {
      
    } catch (error) {
      console.log(error)
    }
  }

}

export default new authController()