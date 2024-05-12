import {findAll,findByEmail} from '../models/usersModel.js'
import {toPersianDate} from '../services/dateService.js'

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

}

export default new usersController()