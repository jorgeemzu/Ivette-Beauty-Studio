const navMenu = document.querySelector('.nav__menu--mobile');
const hamburger = document.querySelector('.hamburger')
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');




hamburger.addEventListener('click', showMenu);


function showMenu(){
    navMenu.classList.toggle('show__menu')

}


slides.forEach((slide, index) =>{
    slide.style.left = `${index * 100}%`
} )

let counter = 0;

btnLeft.addEventListener('click', () => {
    counter--;
    carrusel();

});
btnRight.addEventListener('click', () => {
    counter++;
    carrusel();
});

function carrusel(){

    if(counter === slides.length){
        counter = 0;
    }

    if(counter < 0){
        counter = slides.length -1
    }


    slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter * 100}%)`
        console.log(counter)
    })
}

function slideShow(){
        carrusel()
        counter++;
        console.log('work')
}

setInterval(slideShow,5000);