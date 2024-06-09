import { findByEmail } from "../models/authModel.js"

export function loginValidators(request){
  const errors = []
  
  if(request.email===''){
    errors.push(' ایمیل نمی‌تواند خالی باشد!!')
  }
  if(request.password===''){
    errors.push('پسورد نمی‌تواند خالی باشد!!')
  }

  return errors
}

export function userCreateValidators(request){

  const errors = []
  if(request.fullName===''){
    errors.push('نام کاربری نمی‌تواند خالی باشد.')
  }
  if(request.email===''){
    errors.push(' ایمیل نمی‌تواند خالی باشد!!')
  }
  if(request.password===''){
    errors.push('پسورد نمی‌تواند خالی باشد!!')
  }
  
  if(request.password.length<4){
    errors.push('کلمه عبور باید بیش از سه رقم باشد.')
  }


  return errors
  
}

export function registerCreateValidators(request){

  const errors = []
  if(request.email===''){
    errors.push(' ایمیل نمی‌تواند خالی باشد!!')
  }
  if(request.password===''){
    errors.push('پسورد نمی‌تواند خالی باشد!!')
  }
  if(request.password_confirmation===''){
    errors.push('تایید پسورد نمی‌تواند خالی باشد!!')
  }

  if(request.password.length<4){
    errors.push('کلمه عبور باید بیش از سه رقم باشد.')
  }

  if(request.password.localeCompare(request.password_confirmation)!=0){
    errors.push('کلمه عبور با تایید کلمه عبور یکسان نمی‌باشد.')
  }
  
  return errors
  
}

export async function  checkUniqueEmailValidators(request){
  const errors = []

  const {email} = request

  const user = await findByEmail(email)
  if(user){
    errors.push('این ایمیل وجود دارد، لطفا ایمیل دیگری را وارد کنید!!')
  }
  

  return errors

}