export function userCreateValidators(request ){

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

  return errors
  
}