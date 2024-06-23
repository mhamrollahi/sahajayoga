
'use strict'
const frm = document.querySelector('[data-validation]')
console.log(frm.checkValidity())

const errMessages = {
  badInput : () => 'badInput',
  customError : () => 'customError',
  patternMismatch : (target) =>  'فرمت وارد شده اشتباه می‌باشد.',
  rangeOverflow : () => 'rangeOverflow',
  rangeUnderflow : () => 'rangeUnderflow',
  stepMismatch : () => 'stepMismatch',
  tooLong : (target) => `حداکثر تعداد ${target.maxLength} کاراکتر را باید وارد کنید!` ,
  tooShort :(target) => `حداقل تعداد ${target.minLength} کاراکتر را باید وارد کنید!` ,
  typeMismatch : (target)=> `فرمت ${target.dataset.farsiname} نادرست می‌باشد.` ,
  valueMissing : () => 'مقدار مورد نظر اجباری می‌باشد.',
}

const validityKeys = Object.keys(errMessages)
  
frm.addEventListener('input', (e) => { showErrors(e) })

function showErrors(e){
  const {target} = e
  
  const errorsEL = target.parentElement.querySelectorAll('.errMessage')

  errorsEL.forEach(el=>{
    el.remove()
  })

  validityKeys.forEach(key => {
    if(target.validity[key]){
      appendError(target,key)
    }
  })
}

function appendError(target,key){
  const errorEl = document.createElement('small');
  errorEl.innerText = errMessages[key](target);
  errorEl.classList.add('errMessage');
  target.parentElement.appendChild(errorEl);
}
