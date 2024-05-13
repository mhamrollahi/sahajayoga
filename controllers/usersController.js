import {createUser, findAll,findByEmail} from '../models/usersModel.js'
import {toPersianDate} from '../services/dateService.js'
import {userCreateValidators} from '../validators/user.js'

class usersController{
  
  async list(req,res){
    try {
      const usersData =await findAll()
      const presentedUser = usersData.map(users=>{
        users.created_at_persian = toPersianDate(users.created_at)
        return users
      })
      res.render('admin/usersList',{layout:'admin',usersData:presentedUser})

    } catch (error) {
      console.log(error);
    }
  }


  async create(req,res){
    try {
      res.render('admin/userCreate',{layout:'admin'})
    } catch (error) {
      console.log(error);
    }
  }

  async store(req,res){
    try {
      const userData ={
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password,
      }
      
      const errors = userCreateValidators(userData)
      // console.log(errors);
      if(errors.length > 0 ){
        // req.flash('errors',errors)
       return res.render('admin/userCreate',{layout:'admin',errors,hasError:errors.length > 0})
      }
      const result = await createUser(userData)
      if(result[0].insertId){
        const success = 'خاطره شما با موفقیت ثبت شد.بعد از تایید در صفحه اصلی قایل مشاهده است.'
          // req.flash('success',success) 
        const usersData1 =await findAll()
        const presentedUser = usersData1.map(users=>{
        users.created_at_persian = toPersianDate(users.created_at)
        return users
        })
          // res.redirect('../user/list',{success,hasError:errors.length > 0})
        return res.render('admin/usersList',{layout:'admin',success,hasError:errors.length > 0,usersData:presentedUser})
      }

    } catch (error) {
      console.log(error.message);
    }
  }

}

export default new usersController()