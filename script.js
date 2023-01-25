const oneButton = document.querySelector("#button1");
const twoButton = document.querySelector("#button2");
const threeButton = document.querySelector("#button3");
const fourButton = document.querySelector("#button4");
const fiveButton = document.querySelector("#button5");
const sixButton = document.querySelector("#button6");
const sevenButton = document.querySelector("#button7");
const eightButton = document.querySelector("#button8");
const nineButton = document.querySelector("#button9");
const zeroButton = document.querySelector("#button0");
const buttonCE = document.querySelector("#buttonCE");
const buttonDiv = document.querySelector("#buttonDiv");
const buttonMult = document.querySelector("#buttonMult");
const buttonSub = document.querySelector("#buttonSub");
const buttonAdd = document.querySelector("#buttonAdd");
const buttonEqual = document.querySelector("#buttonEqual");
const calcNumber = document.querySelector(".calcNumber");

let display = [];

let click1 = (event) => {
  event.preventDefault();
  display += 1;
  calcNumber.innerHTML = display;
};
let click2 = (event) => {
  event.preventDefault();
  display += 2;
  calcNumber.innerHTML = display;
};
let click3 = (event) => {
  event.preventDefault();
  display += 3;
  calcNumber.innerHTML = display;
};
let click4 = (event) => {
  event.preventDefault();
  display += 4;
  calcNumber.innerHTML = display;
};
let click5 = (event) => {
  event.preventDefault();
  display += 5;
  calcNumber.innerHTML = display;
};
let click6 = (event) => {
  event.preventDefault();
  display += 6;
  calcNumber.innerHTML = display;
};
let click7 = (event) => {
  event.preventDefault();
  display += 7;
  calcNumber.innerHTML = display;
};
let click8 = (event) => {
  event.preventDefault();
  display += 8;
  calcNumber.innerHTML = display;
};
let click9 = (event) => {
  event.preventDefault();
  display += 9;
  calcNumber.innerHTML = display;
};
let click0 = (event) => {
  event.preventDefault();
  display += 0;
  calcNumber.innerHTML = display;
};
let clear = (event) => {
  event.preventDefault();
  display = [];
  calcNumber.innerHTML = display;
};
let divide = (event) => {
  event.preventDefault();
  display += "/";
  calcNumber.innerHTML = display;
};
let multiply = (event) => {
  event.preventDefault();
  display += "*";
  calcNumber.innerHTML = display;
};
let addition = (event) => {
  event.preventDefault();
  display += "+";
  calcNumber.innerHTML = display;
};
let subtract = (event) => {
  event.preventDefault();
  display += "-";
  calcNumber.innerHTML = display;
};
let equal = (event) => {
    event.preventDefault();
    let += eval(display.join(""));
    calcNumber.innerHTML = display;
  };
  

oneButton.addEventListener("click", click1);
twoButton.addEventListener("click", click2);
threeButton.addEventListener("click", click3);
fourButton.addEventListener("click", click4);
fiveButton.addEventListener("click", click5);
sixButton.addEventListener("click", click6);
sevenButton.addEventListener("click", click7);
eightButton.addEventListener("click", click8);
nineButton.addEventListener("click", click9);
zeroButton.addEventListener("click", click0);
buttonCE.addEventListener("click", clear);
buttonDiv.addEventListener("click", divide);
buttonMult.addEventListener("click", multiply);
buttonSub.addEventListener("click", subtract);
buttonAdd.addEventListener("click", addition);
buttonEqual.addEventListener("click", equal);
