
'use strict'

const frm = document.querySelector('[data-validation]')
const inputs =document.querySelectorAll('input, textarea')

console.log(frm.checkValidity())

const errMessages = {
  badInput : () => 'badInput',
  // customError : () => 'customError',
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
  // target.setCustomValidity('')

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

function setCustomValidityMessage(target,key){
  target.setCustomValidity(errMessages[key](target))
}

inputs.forEach(function(input){
  input.addEventListener('invalid',function(event){
    // event.preventDefault()
    const {target} = event

    // validityKeys.forEach(key=>{
      
    //   console.log(target.validity[key])
      
    //   if(target.validity[key]){
    //     setCustomValidityMessage(target,key)
    //   }
    // })

    if(target.validity.valueMissing){
      target.setCustomValidity('لطفا این فیلد را پر کنید!')
    }else if(target.validity.typeMismatch){
      target.setCustomValidity(`لطفا فرمت ${target.dataset.farsiname} را درست وارد کنید!`)
    }else if(target.validity.tooShort){
      target.setCustomValidity(`حداقل تعداد ${target.minLength} کاراکتر را باید وارد کنید!` ,)
    }else if(target.validity.tooLong){
      target.setCustomValidity(`حداکثر تعداد ${target.maxLength} کاراکتر را باید وارد کنید!` ,)
    }
    else{
      target.setCustomValidity('')
    }
    
  })
  
})