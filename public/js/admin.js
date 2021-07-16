/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./resources/js/admin.js ***!
  \*******************************/
var btn = document.querySelector('#btn');
var sidebar = document.querySelector(".sidebar");

btn.onclick = function () {
  sidebar.classList.toggle("active");
  console.log("clicked");
};

var pname = document.getElementById('name').value;
var email_address = document.getElementById('email_address').value;
var password = document.getElementById('password').value; // let pname = document.getElementById('name').value
// let desc = document.getElementById('desc').value

console.log(pname);
console.log(email_address);
console.log(password);
/******/ })()
;