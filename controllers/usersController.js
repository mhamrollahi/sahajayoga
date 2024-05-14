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
      res.adminRender('admin/usersList',{usersData:presentedUser})

    } catch (error) {
      console.log(error);
    }
  }


  async create(req,res){
    try {
      res.adminRender('admin/userCreate')
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
      

      if(errors.length > 0 ){
        req.flash('errors',errors)
        return res.redirect('../user/create')
      }

      const result = await createUser(userData)
      if(result[0].insertId){
        const success = 'کاربر شما با موفقیت ثبت شد.'
        req.flash('success',success)
        return res.redirect('../user/list')
      }

    } catch (error) {
      console.log(error.message);
    }
  }

}

export default new usersController()