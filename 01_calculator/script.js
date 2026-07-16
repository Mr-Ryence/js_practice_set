const button = document.querySelector(".btn");
const display = document.querySelector("#display");
const firstbtn = document.querySelector("#first");
let result = "";
let newresult = 0; 
function first() {
  result = result + 1;
  display.value = result;
}
function second() {
  result = result + 2;
  display.value = result;
}
function third() {
  result = result + 3;
  display.value = result;
}
function fourth() {
  result = result + 4;
  display.value = result;
}
function fifth() {
  result = result + 5;
  display.value = result;
}
function sixth() {
  result = result + 6;
  display.value = result;
}
function seventh() {
  result = result + 7;
  display.value = result;
}
function Eighth() {
  result = result + 8;
  display.value = result;
}
function ninth() {
  result = result + 9;
  display.value = result;
}
function zero() {
  result = result + 0;
  display.value = result;
}
function dblzero() {
  result = result + 0;
  result = result + 0;
  display.value = result;
}
function add() {
  result = result + "+";
  display.value = result;
}
function sub() {
  result = result + "-";
  display.value = result;
}
function multi() {
  result = result + "*";
  display.value = result;
}
function dot() {
  result = result + ".";
  display.value = result;
}
function Clear() {
     result=" ";
  display.value =result;
}
function equal() {
     let New = eval(display.value); 
     display.value = New; 
     result=New;
}
