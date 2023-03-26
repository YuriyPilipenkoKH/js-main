import { renderGallery } from './render.js';
import {generator} from  './hex_gen.js'

const refs = {
    form: document.querySelector('.js-picker-form'),
    inputField: document.querySelector('.how-many'),
    buttonSubmit: document.querySelector('.btn-go'),
    palette: document.querySelector('.js-palette'),
}
let amount = 0 

refs.form.addEventListener('submit', onSearchForm);
refs.palette.addEventListener('click', onCardClick)


function onSearchForm(e) {
    e.preventDefault();
    amount = Number(e.currentTarget.amount.value.trim());

    const cards =  generator(amount)
    renderGallery(cards)

    // refs.form.reset()
console.log(cards);
}

function onCardClick(e) {
    e.preventDefault();
    if(!e.target.classList.contains('color-swatch')){
        return
    }
    console.log(e.target);
    const swatchEl = e.target;
   const parentColorCard = swatchEl.closest('.color-card') 

    removeActiveCardClass();
    addActiveCardClass(parentColorCard )
    setBodyColor(swatchEl.dataset.hex);
}


function setBodyColor(color) {
    document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
    const currentActiveCard = document.querySelector('.color-card.is-active');
   if(currentActiveCard) {
    currentActiveCard.classList.remove('is-active')
   }
}

function addActiveCardClass (card) {
    card.classList.add('is-active')
    
}



