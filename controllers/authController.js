import { serviceLogin, serviceRegister,serviceLoginByActiveUser } from "../services/authService.js";
import UserRole from "../models/userRole.js";
import { registerCreateValidators,checkUniqueEmailValidators } from "../validators/user.js";

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

      let user = await serviceLogin(email, password);
      
      if (!user) {
        req.flash("errors", "نام کاربری یا کلمه عبور نادرست می باشد.");
        return res.redirect("/auth/login");
      }
      
      user = await serviceLoginByActiveUser(email)
      if(!user){
        req.flash('errors','این کاربر فعال نیست ، لطفا منتظر بمانید...')
        return res.redirect('./login')
      }

      req.session.user = user;
      let pathToRedirect = ''
      
      switch(user.roleId){

        case UserRole.NEWER:
          pathToRedirect = `../user/edit/${user.id}`
          break
          
        case UserRole.USER:
          pathToRedirect = '/'
          break
            
        case UserRole.WRITER:
          pathToRedirect = '/'
          break
              
        case UserRole.ADMIN:
          pathToRedirect = '../user/list'
          break

        default:
          pathToRedirect = '/'
      }

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
        email,
        password,
        password_confirmation:password_confirmation
      }

      let errors = [] 
     
      errors = registerCreateValidators(registerData)
      if(errors.length>0){
        req.flash('errors',errors)
        return res.redirect('./register')
      }

      errors = await checkUniqueEmailValidators(registerData)
      if(errors.length > 0){
        req.flash('errors',errors)
        return res.redirect('./register')
      }
      
      const newUser = await serviceRegister(email,password)
      
      console.log(newUser)

      if(!newUser){
        req.flash('errors','در حال حاضر امکان ثبت نام شما وجود ندارد...!')
        return res.redirect('./register')
      }
      req.flash('success','ثبت نام با موفقیت انجام شد، لطفا وارد صفحه لاگین شوید.')
      return res.redirect('./register')

    } catch (error) {
      console.log(error);
    }
  }
}

export default new authController();
