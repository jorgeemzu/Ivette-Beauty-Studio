const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const testimonial = document.querySelectorAll(".testimonial");
const testimonialNext = document.querySelector(".testimonial__btn--right");
const testimonialPrev = document.querySelector(".testimonial__btn--left");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

btnLeft.addEventListener("click", () => {
  counter--;
  carrusel();
});
btnRight.addEventListener("click", () => {
  counter++;
  carrusel();
});

function carrusel() {
  if (counter === slides.length) {
    counter = 0;
  }

  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides.forEach(slide => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

//carrusel testimonios

testimonial.forEach((test, index) => {
  test.style.left = `${index * 100}%`;
});

let testimonialCounter = 0;

testimonialNext.addEventListener("click", () => {
  testimonialCounter++;
  slideTestimonials();
});

testimonialPrev.addEventListener("click", () => {
  testimonialCounter--;
  slideTestimonials();
});

//carrusel de los testimonios
function slideTestimonials() {
  if (testimonialCounter === testimonial.length) {
    testimonialCounter = 0;
  }

  if (testimonialCounter < 0) {
    testimonialCounter = testimonial.length - 1;
  }

  testimonial.forEach(slide => {
    slide.style.transform = `translateX(-${testimonialCounter * 100}%)`;
    console.log(testimonialCounter * 100);
  });
}

function slideShow() {
  carrusel();
  counter++;
  slideTestimonials();
  testimonialCounter++;
}

//   setInterval(slideShow,5000);
