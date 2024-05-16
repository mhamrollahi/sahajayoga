import serviceLogin from "../services/authService.js";
import UserRole from "../models/userRole.js";
import { registerCreateValidators,registerValidators } from "../validators/user.js";

class authController {
  async showLogin(req, res) {
    try {
      res.newRender("auth/login", { layout: "auth" });
    } catch (error) {
      console.log(error);
    }
  }

  async doLogin(req, res) {
    try {
      const { email, password } = req.body;

      const user = await serviceLogin(email, password);
      if (!user) {
        req.flash("errors", "نام کاربری یا کلمه عبور نادرست می باشد.");
        return res.redirect("/auth/login");
      }
      
      req.session.user = user;

      const pathToRedirect =
        user.roleId === UserRole.ADMIN ? "../user/list" : "/";
      return res.redirect(pathToRedirect);
    } catch (error) {
      console.log(error);
    }
  }

  async showRegister(req, res) {
    try {
      res.newRender("auth/register", { layout: "auth" });
    } catch (error) {
      console.log(error);
    }
  }

  async doRegister(req, res) {
    try {
      const { email, password,password_confirmation} = req.body;
      const registerData = {
        email:email,
        password:password,
        password_confirmation:password_confirmation
      }

      let errors = [] 
      errors = registerCreateValidators(registerData)
      if(errors.length>0){
        req.flash('errors',errors)
        return res.redirect('./register')
      }

      errors = registerValidators(registerData)
      if(errors.length>0){
        req.flash('errors',errors)
        return res.redirect('auth/register')
      }

      // const user = await serviceLogin(email, password);
      // if (!user) {
      //   req.flash("errors", "نام کاربری یا کلمه عبور نادرست می باشد.");
      //   return res.redirect("/auth/login");
      // }
      // req.session.user = user;
      // const pathToRedirect =
      //   user.roleId === UserRole.ADMIN ? "../experience/list" : "/";


    } catch (error) {
      console.log(error);
    }
  }
}

export default new authController();
