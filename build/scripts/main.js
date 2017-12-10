var menu_switches = document.querySelectorAll('.header__switch');
var menu = document.querySelector('.menu__list');
var info1 = document.querySelector('.header__info-1');
var info2 = document.querySelector('.header__info-2');
var search = document.querySelector('.header__form');
menu_switches[2].addEventListener("click", function(){
  menu.classList.toggle('menu__list_active')
})
menu_switches[1].addEventListener("click", function(){
  search.classList.toggle('header__form_active');
})
menu_switches[0].addEventListener("click", function(){
  info1.classList.toggle('header__info_active');
  info2.classList.toggle('header__form_active');
})
