'use strict';
const menu = document.querySelector('.menu');
const linkItems = document.querySelector('.link-items')
const blurry = document.querySelector('.blurry')

menu.addEventListener('click', function() {

 menu.classList.toggle('openmenu');
 linkItems.classList.toggle('hidden');
 blurry.classList.toggle('hidden');
});

// PUTTING INTERSECTION OBSERVER API INTO PRACTICE
// IMPLEMENTING THE STICKY NAVIGATION

const header = document.querySelector('.header');
const navigationBar = document.querySelector('.navigation-bar')

const headerFtn = function(entries, observer) {
 const [entry] = entries;
 // console.log(entry)
 if(!entry.isIntersecting) {
  navigationBar.classList.add('nav-sticky')
 } else {
  navigationBar.classList.remove('nav-sticky')
 }
}

const sectionObserver = new IntersectionObserver(headerFtn, {
 root: null,
 threshold: 0,
 rootMargin: '-50px'
});

sectionObserver.observe(header);

//REVEALING SECTIONS ON SCROLL
// const sections = document.querySelectorAll('.section')

// const scrollFtn= function(entries, observe) {
//  const[entry] = entries;
//  console.log(entry)

//  if(!entry.isIntersecting) return;
 
//   entry.target.classList.remove('section-hidden');

//   // To Unobserve
//   elScroll.unobserve(entry.target)
// }

// const elScroll = new IntersectionObserver(scrollFtn, {
//  root: null,
//  threshold: 0.15,
// });

// sections.forEach(section => {
//  //To Observe the sections
//  elScroll.observe(section);

//  //To hide the sections
//  section.classList.add('section-hidden');
// })

// // WORKING ON DOTS
// const dots = document.querySelector('.dots');
// dots.addEventListener('click', (e) => {
//  // console.log(e.target.contain('.dot'))
// })

// WORKING ON SLIDER IN COMMENT SECTION
const btnLeft = document.querySelector('.btn--left');
const btnRight = document.querySelector('.btn--right');
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

// slider.style.transform = "scale(.5)"
// slider.style.overflow = 'visible'

let culSlide = 0;
const maxSlide = slides.length;

slides.forEach((sl, i) => {
 sl.style.transform = `translateX(${100 * i}%)`
})

//BUTTON RIGHT
btnRight.addEventListener('click', () => {
if(culSlide === maxSlide -1) {
 culSlide = 0;
 
} else {
 culSlide++;
}

slides.forEach((sl, i) => {
 sl.style.transform = `translateX(${100 * (i - culSlide)}%)`
})
})

// BUTTON LEFT 
btnLeft.addEventListener('click', () => {
 console.log(culSlide, maxSlide)
 if(culSlide === 0) {
  culSlide = maxSlide -1
 } else {
  culSlide--;
 }
 slides.forEach((sl, i) => {
 sl.style.transform = `translateX(${100 * (i - culSlide)}%)`
})
})

// USING THE LEFT AND RIGHT ARROW FOR SLIDE
//RIGHT KEY
document.addEventListener('keydown', (e) => {
 if (e.key === 'ArrowRight') {
  console.log('correct')
  if(culSlide === maxSlide -1) {
 culSlide = 0;
 
} else {
 culSlide++;
}

slides.forEach((sl, i) => {
 sl.style.transform = `translateX(${100 * (i - culSlide)}%)`
})
 }
})

//LEFT KEY
document.addEventListener('keydown', (e) => {
 if (e.key === 'ArrowLeft') {
   if(culSlide === 0) {
  culSlide = maxSlide -1
 } else {
  culSlide--;
 }

 slides.forEach((sl, i) => {
 sl.style.transform = `translateX(${100 * (i - culSlide)}%)`
})
 }
})