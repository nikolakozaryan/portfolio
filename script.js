const lang = document.querySelectorAll('span'),
    burger = document.querySelector('.burger-menu'),
    burgerBasis = document.querySelector('.burger-basis'),
    menu = document.querySelector('.menu'),
    menuItems = document.querySelectorAll('nav a'),
    background = document.querySelector('.background')

burger.addEventListener('click', () => {
    burgerBasis.classList.toggle('active-burger');
    menu.classList.toggle('active-menu');
    background.classList.toggle('active-bg');
})

menuItems.forEach(item => item.addEventListener('click', () => {
    burgerBasis.classList.toggle('active-burger');
    menu.classList.toggle('active-menu');
    background.classList.remove('active-bg');
}))

lang.forEach(item => item.addEventListener('click', () => {
    lang.forEach(item => item.classList.toggle('gold'))
}))