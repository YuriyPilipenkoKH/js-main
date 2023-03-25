import { renderGallery } from './render.js';
import {generator, getRandomHexColor} from  './hex.js'

const refs = {
    form: document.querySelector('.js-picker-form'),
    inputField: document.querySelector('.how-many'),
    buttonSubmit: document.querySelector('.btn-go'),
    palette: document.querySelector('.js-palette'),
}
let amount = 0 

refs.form.addEventListener('submit', onSearchForm);


function onSearchForm(e) {
    e.preventDefault();
    amount = Number(e.currentTarget.amount.value.trim());

    generator(amount)
    // refs.form.reset()
}

