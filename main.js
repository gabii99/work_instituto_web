//selectors
let header = document.querySelector('.header');
let hamburguerMenu = document.querySelector('.hamburguer-menu');

hamburguerMenu.addEventListener('click', function () {
    header.classList.toggle('menu-open');
})