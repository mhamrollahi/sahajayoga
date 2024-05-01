export function experienceCreateValidators(request ){

  const errors = []

  if(request.Title===''){
    errors.push('عنوان خاطره/تجربه نمی‌تواند خالی باشد!!')
  }
  if(request.Email===''){
    errors.push(' ایمیل نمی‌تواند خالی باشد!!')
  }
  if(request.Description===''){
    errors.push('متن خاطره/تجربه نمی‌تواند خالی باشد!!')
  }

  return errors
  
}