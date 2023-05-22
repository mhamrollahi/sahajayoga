function myFunction(){
    var myDiv = document.getElementById("mynav");
    myDiv.classList.toggle("responsive");
}

let divCounter = document.getElementsByClassName('counter-div');
const counterSec1 = document.getElementById('counter-sec1');
const compSyles = window.getComputedStyle(counterSec1);
let posy = compSyles.getPropertyValue('background-position-y');

console.log('pos y =', posy);
const stylesheet = document.styleSheets[3];

console.log('styleSheets ==>', stylesheet);

const divParaRule = [...stylesheet.cssRules].find(
  (r) => r.selectorText === "section.counter-section-wrapper"
);

posy = posy.replace('%', '');

console.log('document.body.scrollHeight ==', document.body.scrollHeight);

const maxHeight = document.body.scrollHeight - window.innerHeight;
console.log('window = ', (window.pageYOffset * 100) / maxHeight);

function test1() {
  console.log('position y = ', posy);
  divParaRule.style.setProperty('background-position-y', posy + '%')
  posy = parseInt(posy) + 8;
}

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  console.log('Scroll = ' + scroll)
  console.log('pos y == ', posy);
  console.log('window = ', (window.pageYOffset * 100) / maxHeight);
  posy = Math.floor((window.pageYOffset * 100) / maxHeight);
  console.log('pos y after == ', posy);
  posy -= 40;
  divParaRule.style.setProperty('background-position-y', posy + '%')
});
