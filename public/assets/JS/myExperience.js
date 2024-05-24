//myExperince javascript Code - Start
const errMessageMandatory = document.querySelectorAll("[data-err='mandatory']");
const errMessageFormatted = document.querySelectorAll("[data-err='formatted']");
const btnCancel = document.querySelector("#btnCancel");
const btnSubmit = document.querySelector("#btnSubmit");

const captchaValue = document.querySelector("#captchaValue");
const captchaInput = document.querySelector("#captchaInput");

errMessageMandatory.forEach((value, key) => {
  value.hidden = true;
});
errMessageFormatted.forEach((value, key) => {
  value.hidden = true;
});

const txtSubject = document.querySelector("#txtSubject");
const txtEmail = document.querySelector("#txtEmail");
const txtExperience = document.querySelector('#txtExperience')
const txtFullname = document.querySelector("#txtFullname");

txtSubject.addEventListener("input", (e) => {
  const { target } = e;

  target.setCustomValidity("");
  errMessageMandatory[0].hidden = true;

  if (target.validity.tooShort) {
    //txtSubject Error
    errMessageFormatted[0].hidden = false;
    target.setCustomValidity(" عنوان باید بیش از 10 کاراکتر باشد");
  } else {
    errMessageFormatted[0].hidden = true;
    target.setCustomValidity("");
  }
});

txtSubject.addEventListener("invalid", (e) => {
  const { target } = e;

  if (target.validity.valueMissing) {
    target.setCustomValidity("لطفا عنوان را وارد کنید");
    errMessageMandatory[0].hidden = false;
  }
});

txtEmail.addEventListener("invalid", (e) => {
  const { target } = e;
  if (target.validity.valueMissing) {
    target.setCustomValidity("لطفا پست الکترونیکی را وارد کنید");
    errMessageMandatory[1].hidden = false;
  }
});
txtEmail.addEventListener("input", (e) => {
  const { target } = e;

  target.setCustomValidity("");
  errMessageMandatory[1].hidden = true;

  // console.log(target.validity);

  if (target.validity.typeMismatch) {
    //txtEmail Error
    errMessageFormatted[1].hidden = false;
    errMessageMandatory[1].hidden = true;
    target.setCustomValidity("فرمت پست الکترونیکی درست نمی باشد.");
    return;
  } else {
    errMessageFormatted[1].hidden = true;
    errMessageMandatory[1].hidden = true;
    target.setCustomValidity("");
  }
});

txtExperience.addEventListener("input", (e) => {
  const { target } = e;

  target.setCustomValidity("");
  errMessageMandatory[2].hidden = true;

  if (target.validity.tooShort) {
    //txtExperience Error
    errMessageFormatted[2].hidden = false;
    target.setCustomValidity("متن خاطره / تجربه باید بیش از 40 کاراکتر باشد");
  } else {
    errMessageFormatted[2].hidden = true;
    target.setCustomValidity("");
  }
});
txtExperience.addEventListener("invalid", (e) => {
  const { target } = e;

  if (target.validity.valueMissing) {
    target.setCustomValidity("لطفا تجربه یا خاطره خود را وارد کنید");
    errMessageMandatory[2].hidden = false;
  }
});

captchaInput.addEventListener("invalid", (e) => {
  const { target } = e;

  if (target.validity.valueMissing) {
    target.setCustomValidity("لطفا عبارت کپچا را وارد کنید.");
  } else {
    target.setCustomValidity("");
  }
});

btnCancel.addEventListener("click", (e) => {
  errMessageMandatory.forEach((val, key) => {
    val.hidden = true;
  });

  errMessageFormatted.forEach((val, key) => {
    val.hidden = true;
  });
});

//Save New Record ....
btnSubmit.addEventListener("click", (e) => {
 
  try {
    if (checkValidCaptcha()) {
      console.log("inside a function submit ...");
      return;
    }
    e.preventDefault()

  } catch (err) {
    throw err;
  }
});

//CAPTCHA VALIDATION :
//Start *********************
const btnReload = document.querySelector(".btnReload");

let allChars = [
  "A","B","C","D","E","F","G","H","J","K","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
  "b","c","d","e","f","g","h","i","j","k","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1",
  "2","3","4","5","6","7","8","9"];

function getCaptcha() {
  for (let i = 0; i < 3; i++) {
    //getting 6 random characters from the array
    let randomCharacter = allChars[Math.floor(Math.random() * allChars.length)];
    captchaValue.innerText += `${randomCharacter}`; //passing 3 random characters inside captcha innerText
  }
}

getCaptcha();

function checkValidCaptcha() {
  //adding space after each character of user entered values because I've added spaces while generating captcha

  if (captchaInput.value.localeCompare(captchaValue.innerText) == 0) {
    //if captcha matched
    // alert('Captcha is Valid !')
    return true;
  } else {
    alert("Captcha isn't Valid !!!");
    return false;
  }
}

function removeContent() {
  captchaInput.value = "";
  captchaValue.innerText = "";
}

btnReload.addEventListener("click", (e) => {
  removeContent();
  getCaptcha();
});
//CAPTCHA VALIDATION :
//End *********************

//myExperince javascript Code - End