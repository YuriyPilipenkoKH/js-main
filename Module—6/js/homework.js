const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];

const gal = document.querySelector('.gallery')

const myMarkup = images.map(el => `<a class="gallery__item" href="#" >
<img class="gallery__image" src="${el.url}" alt="${el.alt}">
</a>`).join('')

// console.log(myMarkup);

// gal.insertAdjacentHTML('afterbegin', myMarkup)
// ==================================================================

let counterValue = 0
const inc = document.querySelector('[data-action="increment"]')
const dec = document.querySelector('[data-action="decrement"]')

const counter = document.querySelector('#value')

dec.addEventListener('click', decrease)
inc.addEventListener('click', increase)

function decrease( ) {
    counterValue -= 1
    counter.textContent = counterValue
}

function increase( ) {
    counterValue += 1
    counter.textContent = counterValue
}