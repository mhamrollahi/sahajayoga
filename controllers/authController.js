
import authService from '../services/authService.js'

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
      const {email,password} = req.body

      const isValidUser = await authService.login(email)

      res.send(req.body)

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