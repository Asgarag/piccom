var menu_switches = document.querySelectorAll('.header__switch');
var menu = document.querySelector('.menu__list');
var info = document.querySelectorAll('.header__info');
var search = document.querySelector('.header__form');
menu_switches[2].addEventListener("click", function(){
  menu.classList.toggle('menu__list_active');
  search.classList.remove('header__form_active');
  info[0].classList.remove('header__info_active');
  info[1].classList.remove('header__info_active');
})
menu_switches[1].addEventListener("click", function(){
  search.classList.toggle('header__form_active');
  info[0].classList.remove('header__info_active');
  info[1].classList.remove('header__info_active');
  menu.classList.remove('menu__list_active');
})
menu_switches[0].addEventListener("click", function(){
  info[0].classList.toggle('header__info_active');
  info[1].classList.toggle('header__info_active');
  search.classList.remove('header__form_active');
  menu.classList.remove('menu__list_active');
})
