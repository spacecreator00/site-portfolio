let burger = document.querySelector('.burger');
let burgerBtn = document.querySelector('.burger-btn');
let burgerBtnClose = document.querySelector('.burger-btn-close');
let burgerMenuItems = document.querySelectorAll('.burger__menu-item');

function openBurgerMenu() {
    burger.style.display = 'block';
    burgerBtn.style.display = 'none';
    burgerBtnClose.style.display = 'block';
}

function closeBurgerMenu() {
    burger.style.display = 'none';
    burgerBtn.style.display = 'block';
    burgerBtnClose.style.display = 'none';
}

burgerMenuItems.forEach(
    item => item.addEventListener('click', closeBurgerMenu)
);

burgerBtn.addEventListener('click', openBurgerMenu);
burgerBtnClose.addEventListener('click', closeBurgerMenu);

