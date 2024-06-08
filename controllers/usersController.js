import {createUser, findAll,activeOrNotActive,findById,editUser, deleteUser} from '../models/usersModel.js'
import {toPersianDate} from '../services/dateService.js'
import {userCreateValidators} from '../validators/user.js'
import UserRole from '../models/userRole.js'
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

  async activeOrNotActive(req,res){
    try {
      
      const _id = req.params.userId
      const _isActive = req.params.isActive
      if(parseInt(_id)===0){
        return res.redirect('user/list')
      }

      const result = await activeOrNotActive(_id,_isActive)
      res.redirect('/user/list')

    } catch (error) {
      console.log(error);
    }
  }

  async edit(req,res){
    try {
      const _id = req.params.userId
      if(parseInt(_id)===0){
        return res.redirect('user/list')
      }

      const userData = await findById(_id)
      
      console.log(userData)

      res.adminRender('admin/userEdit',{userData})

    } catch (error) {
      console.log(error)
    }
  }
  
  async update(req,res){
    try {
      const _id = req.params.userId
      if(parseInt(_id)===0){
            return res.redirect('user/list')
      }
      const userData ={
        fullName: req.body.fullName,
        roleId: UserRole.USER,
        updated_at:new Date()
      }

      const result = editUser(_id,userData)
      return res.redirect('../../user/list')

  
    } catch (error) {
      console.log(error)
    }
  }

  async remove(req,res){
    try {
      const _id = req.params.userId
      if(parseInt(_id)===0){
        return res.redirect('user/list')
      }
      const result = await deleteUser(_id)
      res.redirect('/user/list')
    } catch (error) {
      console.log(error)
    }
  }


}


export default new usersController()