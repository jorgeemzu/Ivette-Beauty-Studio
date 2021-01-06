const navMenu = document.querySelector('.nav__menu--mobile');
const hamburger = document.querySelector('.hamburger')




hamburger.addEventListener('click', showMenu);


function showMenu(){
    navMenu.classList.toggle('show__menu')
    console.log('why')
}