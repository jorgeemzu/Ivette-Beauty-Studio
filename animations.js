const animContainer = document.querySelector('.animation');
const animHeader = document.querySelector('.animation__header');



let tl = gsap.timeline({deafults: {ease: 'power2.out'}});


tl.from('.animation__header', {duration: 2,x: -200, opacity: 0})
tl.to('.animation', {duration: .7,yPercent: -100, delay: 1})
tl.from('.header',{duration: 2, opacity: 0, x: -50})