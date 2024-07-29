import { grayeffect } from "./functions.js";
let nav = document.getElementById("nav_bar");
let mid = document.getElementsByClassName("mid")[0];
let login_btn = document.getElementById("login");
let signup_btn = document.getElementById("signup");

window.addEventListener("scroll", function () {
  if (pageYOffset > 0) {
    nav.style.backgroundColor = "white";
    nav.style.transitionDuration = ".3s";
    nav.style.position = "fixed";
    nav.style.width = "100%";
    nav.style.top = "0";
  } else {
    nav.style.backgroundColor = "";
    nav.style.height = "13vh";
  }
});
window.addEventListener("scroll", function () {
  if (pageYOffset > 300) {
    mid.style.display = "inline";
  } else {
    mid.style.display = "none";
  }
});

grayeffect();
login_btn.addEventListener("click", function () {
  window.open("../HTML/login.html");
});
signup_btn.addEventListener("click", function () {
  window.open("../HTML/login.html");
});
