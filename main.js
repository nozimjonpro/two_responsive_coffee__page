const elHamburger =  document.querySelector('.header__menu-button')
const elHeader  = document.querySelector('.header')

 
elHamburger.addEventListener('click', () => {
    elHeader.classList.toggle('header--active')
})