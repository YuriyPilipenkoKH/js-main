import { renderGallery , notifyBodyColor} from './render.js';
import {generator} from  './hex_gen.js'

const refs = {
    form: document.querySelector('.js-picker-form'),
    inputField: document.querySelector('.how-many'),
    buttonSubmit: document.querySelector('.btn-go'),
    palette: document.querySelector('.js-palette'),
    notifier: document.querySelector('.notifier'),
}
let amount = 0 

console.log(refs.notifier);

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


// by Repeta
function onCardClick(e) {
    e.preventDefault();
    if(!e.target.classList.contains('color-swatch')){
        return
    }
    // console.log(e.target);
    const swatchEl = e.target;
   const parentColorCard = swatchEl.closest('.color-card')
   
   const h = swatchEl.dataset.hex
   const r = swatchEl.dataset.rgb
   console.log(h);

    removeActiveCardClass();
    addActiveCardClass(parentColorCard )
    setBodyColor(h);
    notifyBodyColor(h,r) 
    refs.notifier.style.color = h
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
//-------------------



