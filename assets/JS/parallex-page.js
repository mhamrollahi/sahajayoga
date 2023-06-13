"use strict";
const firstPage1 = document.querySelector(".first-page1");


console.log("firstpage 1 ", firstPage1);

const FIRST_PAGE_MAX_SCROLL = 700;
const FIRST_TRANS_MAX = 400;



let _width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientHeight;
let _height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

console.log("Width = ", _width);
console.log("Height = ", _height);

console.log("screen.width = ", screen.width);
console.log("screen.height = ", screen.height);

var rect = firstPage1.getBoundingClientRect();
console.log(
  "top = ",
  rect.top,
  "right = ",
  rect.right,
  "bottom = ",
  rect.bottom,
  "left = ",
  rect.left
);

document.addEventListener("scroll", function (event) {
  var rect = firstPage1.getBoundingClientRect();
  console.log(
    "top = ",
    rect.top,
    "right = ",
    rect.right,
    "bottom = ",
    rect.bottom,
    "left = ",
    rect.left
  );

  let scrolloffset = window.pageYOffset;
  console.log("scrolloffset = ", scrolloffset);

  if (scrolloffset <= FIRST_PAGE_MAX_SCROLL) {
    firstPage1.style.opacity = 1;
    firstPage1.hidden = false;

    let p = scrolloffset / FIRST_PAGE_MAX_SCROLL;
    let ySecondPage = scrolloffset - FIRST_TRANS_MAX;


    firstPage1.style.transform = `scale(${1 + 0.85 * p})`;
    // firstPage1.style.transform = `translateY(-${ySecondPage}px)`;
    // firstPage1.animate({'translateY':'-400px'},1000);
  


    // mainTitle.style.transform = `scale(${1 + 0.9 * p})`;
    // background.style.transform = `scale(${1 + 0.3 * p})`;
    // middleground.style.transform = `scale(${1 + p})`;
    // foreground.style.transform = `scale(${1 + 0.5 * p})`;
  }
});
