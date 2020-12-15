//selectors
let header = document.querySelector('.header');
let hamburguerMenu = document.querySelector('.hamburguer-menu');
let navLink = document.querySelector('.nav-item');

hamburguerMenu.addEventListener('click', function () {
    header.classList.toggle('menu-open');
})
// navLink.addEventListener('click', function() {

// })
