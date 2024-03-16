import fs from 'fs/promises'


const errMessageMandatory = document.querySelectorAll("[data-err='mandatory']")
const errMessageFormatted = document.querySelectorAll("[data-err='formatted']")
const btnCancel = document.querySelector('#btnCancel')
const btnSubmit = document.querySelector('#btnSubmit')

console.log(errMessageMandatory)
console.log(errMessageFormatted)



errMessageMandatory.forEach((value, key) => {
  value.hidden = true
})
errMessageFormatted.forEach((value, key) => {
  value.hidden = true
})

const txtSubject = document.querySelector('#txtSubject')
const txtEmail = document.querySelector('#txtEmail')
const txtEexperience = document.querySelector('#txtEexperience')
const txtFullname = document.querySelector('#txtFullname')

txtSubject.addEventListener('input', (e) => {
  const { target } = e

  target.setCustomValidity('')
  errMessageMandatory[0].hidden = true

  if (target.validity.tooShort) {
    //txtSubject Error
    errMessageFormatted[0].hidden = false
    target.setCustomValidity(' عنوان باید بیش از 10 کاراکتر باشد')
  } else {
    errMessageFormatted[0].hidden = true
    target.setCustomValidity('')
  }
})

txtSubject.addEventListener('invalid', (e) => {
  const { target } = e

  if (target.validity.valueMissing) {
    target.setCustomValidity('لطفا عنوان را وارد کنید')
    errMessageMandatory[0].hidden = false
  }
})


txtEmail.addEventListener('invalid', (e) => {
  const { target } = e
  if (target.validity.valueMissing) {
    target.setCustomValidity('لطفا پست الکترونیکی را وارد کنید')
    errMessageMandatory[1].hidden = false
  }
})
txtEmail.addEventListener('input', (e) => {
  const { target } = e

  target.setCustomValidity('')
  errMessageMandatory[1].hidden = true

  console.log(target.validity)

  if (target.validity.typeMismatch) {
    //txtEmail Error
    errMessageFormatted[1].hidden = false
    errMessageMandatory[1].hidden = true
    target.setCustomValidity('فرمت پست الکترونیکی درست نمی باشد.')
    return
  } else {
    errMessageFormatted[1].hidden = true
    errMessageMandatory[1].hidden = true
    target.setCustomValidity('')
  }
})


txtEexperience.addEventListener('input', (e) => {
  const { target } = e

  target.setCustomValidity('')
  errMessageMandatory[2].hidden = true

  if (target.validity.tooShort) {
    //txtEexperience Error
    errMessageFormatted[2].hidden = false
    target.setCustomValidity('متن خاطره / تجربه باید بیش از 40 کاراکتر باشد')
  } else {
    errMessageFormatted[2].hidden = true
    target.setCustomValidity('')
  }
})
txtEexperience.addEventListener('invalid', (e) => {
  const { target } = e

  if (target.validity.valueMissing) {
    target.setCustomValidity('لطفا تجربه یا خاطره خود را وارد کنید')
    errMessageMandatory[2].hidden = false
  }
})


btnCancel.addEventListener('click', (e) => {
  errMessageMandatory.forEach((val, key) => {
    val.hidden = true
  })

  errMessageFormatted.forEach((val, key) => {
    val.hidden = true
  })

})

//Save New Record ....
btnSubmit.addEventListener('click',(e)=>{
  e.preventDefault()
  try{
    if(checkValidCaptcha){
    addNewExperience()
  }
  }catch(err){
    throw err
  }

})

//CAPTCHA VALIDATION :
//Start *********************
const captchaValue = document.querySelector('#captchaValue')
const captchaInput = document.querySelector('#captchaInput')
const btnReload = document.querySelector('.btnReload')

let allChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
  'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
  'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '<', '>', '|', '/', '~'];

function getCaptcha() {
  for (let i = 0; i < 5; i++) { //getting 6 random characters from the array
    let randomCharacter = allChars[Math.floor(Math.random() * allChars.length)];
    console.log(randomCharacter)
    captchaValue.innerText += `${randomCharacter}`; //passing 5 random characters inside captcha innerText
  }
}

getCaptcha();

function checkValidCaptcha(){
  btnSubmit.preventDefault(); //preventing button from it's default behaviour
  //adding space after each character of user entered values because I've added spaces while generating captcha
  let inputVal = captchaInput.value.split('').join(' ');
  if (inputVal == captchaValue.innerText) { //if captcha matched
    alert('Captcha is Valid !')
    return true
    statusTxt.style.color = "#4db2ec";
    statusTxt.innerText = "Nice! You don't appear to be a robot.";
  } else {
    alert('Captcha isnot Valid !!!')
    return false
  }
}


function removeContent() {
  captchaInput.value = "";
  captchaValue.innerText = "";
}

btnReload.addEventListener('click', (e) => {
  removeContent()
  getCaptcha()
})
//CAPTCHA VALIDATION :
//End *********************

//Save Record :
//Start *******************

const app = express()
const router = express.router()
const EXPERIENCE_LIST_FILE_PATH = './data/experience_list.json'
const experienceList = []

console.log('Save Record ...')

async function addNewExperience(){
  try{
    const newRecord = {
      id:experienceList.length,
      subject : txtSubject.value,
      Email : txtEmail.value,
      fullName : txtFullname.value,
      Description : txtEexperience.value,
      isActive : false,
      creationDate : ' ',
      updatedDate : ' ',
    }
    
    experienceList.push(newRecord)
    saveExperience()

  }catch(err){
    throw err
  }
}

async function saveExperience(){
  try{
    const experienceJSON = JSON.stringify(experiencesList)
    await fs.writeFile(EXPERIENCES_LIST_FILE_PATH,experienceJSON)

  }catch(err){
    throw err
  }
}

//Save Record :
//End *******************

