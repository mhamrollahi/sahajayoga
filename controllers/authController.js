
import login from '../services/authService.js'
import UserRole from '../models/userRole.js'

class authController{
  async showLogin(req,res){
    try {
      res.newRender('auth/login',{layout:'auth'})
    } catch (error) {
      console.log(error)
    }
  }

  async doLogin(req,res){
    try {
      const {email,password} = req.body

      const user = await login(email,password)
      if(!user){
        req.flash('errors','نام کاربری یا کلمه عبور نادرست می باشد.')
        return res.redirect('/auth/login')
      }
      req.session.user = user
      const pathToRedirect = user.roleId === UserRole.ADMIN ? '../experience/list' : '/'
      return res.redirect(pathToRedirect)

    } catch (error) {
      console.log(error)
    }
  }

  async showRegister(req,res){
    try {
      res.newRender('auth/register',{layout:'auth'})
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