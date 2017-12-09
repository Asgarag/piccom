var menu_switch = document.querySelector('.menu__switch');
var menu = document.querySelector('.menu__list');
var menu_list_items = document.querySelectorAll('.menu__list-item');
menu_switch.addEventListener("click", function(){
  menu.classList.toggle('menu__list_active')
})
