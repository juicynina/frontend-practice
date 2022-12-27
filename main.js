const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuShoppingCart = document.querySelector('.navbar-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamburguesa.addEventListener('click', toggleMenuHamburguesa)
menuShoppingCart.addEventListener('click', toggleShoppingCart)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive')
    aside.classList.add('inactive')
} 

function toggleMenuHamburguesa() {
    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.add('inactive')
    aside.classList.add('inactive')
} 

function toggleShoppingCart() {
    aside.classList.toggle('inactive');
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
}