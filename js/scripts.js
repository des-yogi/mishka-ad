"use strict";

var menuBtnToggle = document.querySelector('.main-nav__btn-toggle');
var menuPopup = document.querySelector('.main-nav__list');
//var menuCloseBtn = document.querySelector('.close-btn');

window.addEventListener('DOMContentLoaded', function(event) {

    if(menuBtnToggle.classList.contains('main-nav__btn-toggle--nojs')) {
      menuBtnToggle.classList.remove('main-nav__btn-toggle--nojs');
    }
    if(menuPopup.classList.contains('main-nav__list--nojs')) {
      menuPopup.classList.remove('main-nav__list--nojs');
    }
} );


menuBtnToggle.addEventListener("click", function(event) {
  event.preventDefault();
  menuBtnToggle.classList.toggle('main-nav__btn-toggle--nojs');
  menuPopup.classList.toggle('main-nav__list--nojs');
});

window.addEventListener('keydown', function(event) {
  if(event.keyCode == 27) {
    if(menuBtnToggle.classList.contains('main-nav__btn-toggle--nojs')) {
      menuBtnToggle.classList.remove('main-nav__btn-toggle--nojs');
    }
    if(menuPopup.classList.contains('main-nav__list--nojs')) {
      menuPopup.classList.remove('main-nav__list--nojs');
    }
  }
} );


