'use strict';
const menu = document.querySelector('.menu');
const linkItems = document.querySelector('.link-items')
const blurry = document.querySelector('.blurry')

menu.addEventListener('click', function() {

 menu.classList.toggle('openmenu');
 linkItems.classList.toggle('hidden');
 blurry.classList.toggle('hidden');
})