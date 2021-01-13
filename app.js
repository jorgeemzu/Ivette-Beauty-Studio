const navMenu = document.querySelector('.nav__menu--mobile');
const hamburger = document.querySelector('.hamburger')
const slides = document.querySelectorAll('.slide');
// const btnLeft = document.querySelector('.slider__btn--left');
// const btnRight = document.querySelector('.slider__btn--right');
// const testimonial = document.querySelectorAll('.testimonial')
// const testimonialNext = document.querySelector('.testimonial__btn--right')
// const testimonialPrev = document.querySelector('.testimonial__btn--left')
const fadeLeft = document.querySelectorAll('.left')
const fadeRight = document.querySelectorAll('.right')  
const stagger = document.querySelectorAll('.stagger')
const staggerLogros = document.querySelectorAll('.stagger__logros')




hamburger.addEventListener('click', showMenu);

function showMenu(){
    navMenu.classList.toggle('show__menu')

}

//carrusel para la seccion del hero

// slides.forEach((slide, index) =>{
//     slide.style.left = `${index * 100}%`
// } )



// let counter = 0;


// btnLeft.addEventListener('click', () => {
//     counter--;
//     carrusel();

// });
// btnRight.addEventListener('click', () => {
//     counter++;
//     carrusel();
// });




// function carrusel(){

//     if(counter === slides.length){
//         counter = 0;
//     }

//     if(counter < 0){
//         counter = slides.length -1
//     }


//     slides.forEach(slide => {
//         slide.style.transform = `translateX(-${counter * 100}%)`
        
//     })
// }

// //carrusel testimonios

// testimonial.forEach((test, index) => {
//     test.style.left = `${index * 100}%`;
// })


// let testimonialCounter = 0;


// testimonialNext.addEventListener('click', () =>{
//     testimonialCounter++;
//     slideTestimonials()
// })

// testimonialPrev.addEventListener('click', () =>{
//     testimonialCounter--;
//     slideTestimonials()
// })


// //carrusel de los testimonios
// function slideTestimonials(){

//     if(testimonialCounter === testimonial.length){
//         testimonialCounter = 0;
//     }

//     if(testimonialCounter < 0){
//         testimonialCounter = testimonial.length -1
//     }


//     testimonial.forEach(slide => {
//         slide.style.transform = `translateX(-${testimonialCounter * 100}%)`
//         console.log(testimonialCounter * 100)
//     })

// }

// function slideShow(){
//         carrusel()
//         counter++;
//         slideTestimonials()
//         testimonialCounter++
// }

//  setInterval(slideShow,5000);

 const appearOptions = {
     threshold: 0.5,
     rootMargin: "0px 0px 50px 0px"
 }

 const appearOnScroll = new IntersectionObserver
 (function( entries, appearOnScroll){
     entries.forEach(entry =>{
         if(!entry.isIntersecting){
             return;
         } else{
             entry.target.classList.add('fade__apear')
             appearOnScroll.unobserve(entry.target)
         }
     })
 }, appearOptions);

 fadeLeft.forEach(fader =>{
     appearOnScroll.observe(fader)
 });

 fadeRight.forEach(fader =>{
    appearOnScroll.observe(fader)
});

const appearStagger = new IntersectionObserver(
    function(entries, appearStagger){
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            } else{
                entry.target.classList.add('appear__stagger');
                gsap.to('.appear__stagger', {duration: 0.8, opacity: 1, stagger: 0.5})
                appearStagger.unobserve(entry.target)
                
            }
        })
    }, appearOptions);


    // stagger.forEach(fader =>{
    //     appearStagger.observe(fader);
    // })

    staggerLogros.forEach(fader =>{
        appearStagger.observe(fader);
    })

    