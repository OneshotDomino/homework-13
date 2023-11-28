const burger = document.querySelector('.burger-menu');
const nav = document.querySelector('.navigation');
burger.addEventListener('click', function(){
    burger.classList.toggle('burger-menu_active');
    nav.classList.toggle('navigation_active')
});
