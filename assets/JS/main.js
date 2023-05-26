// function myFunction(){
//     var myDiv = document.getElementById("mynav");
//     myDiv.classList.toggle("responsive");
// }

// let divCounter = document.getElementsByClassName('counter-div');




const counterSec1 = document.getElementById('countersec1');

const compSyles = getComputedStyle(counterSec1);
let posy = compSyles.getPropertyValue('background-position-y');

console.log('pos y =', posy);
//باید شماره فایل استایل.سی اس اس رو بدیم ایندکس از صفر شروع می شه..
const stylesheet = document.styleSheets[5];

console.log('styleSheets ==>', stylesheet);

const divParaRule = [...stylesheet.cssRules].find(
  (r) => r.selectorText === "section.counter-section-wrapper"
);

posy = posy.replace('%', '');
console.log('pos y2 =', posy);
console.log('divPrarRule == ',divParaRule);

console.log('document.body.scrollHeight ==', document.body.scrollHeight);

const maxHeight = document.body.scrollHeight - window.innerHeight;
console.log('window = ', (window.pageYOffset * 100) / maxHeight);


window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  console.log('Scroll = ' + scroll)
  console.log('pos y == ', posy);
  console.log('window = ', (window.pageYOffset * 100) / maxHeight);
  posy = Math.floor((window.pageYOffset * 100) / maxHeight);
  console.log('pos y after == ', posy);
  posy -= 40;
  divParaRule.style.setProperty('background-position-y', posy + '%')
  // divParaRule.style.setProperty('background-position-y') = "20px";
});

//-------Start:Counter for Section 1

const counters = document.querySelectorAll('.counter-s1');

counters.forEach(counter => {
  function updateCount(){
    const target = +counter.getAttribute('data-count');
    const count = +counter.innerHTML;

    const inc = Math.floor((target - count )/100);

    if(count < target && inc > 0){
      counter.innerHTML = (count + inc);

      setTimeout(updateCount,300)
    }else{
      counter.innerHTML  = target;
    }
  }
  updateCount();
})

//-------End:Counter for Section 1