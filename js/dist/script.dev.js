"use strict";

// Navbar Menu
var menu = document.querySelector('#menu-btn');
var navbar = document.querySelector('.header .nav');
var header = document.querySelector('.header');

menu.onclick = function () {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll = function () {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if (window.scrollY > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
};
//# sourceMappingURL=script.dev.js.map
