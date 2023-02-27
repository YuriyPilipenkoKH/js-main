const arBtns = document.querySelectorAll('.arroww')
// console.log(arBtns);

const toRightArrow = `
<div class="arrow-wrap">
<svg viewBox="0 0 24 24"  height="24" width="22" class="right-arrow"><path d="M0 0h24v24H0z" fill="none"></path><path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path></svg>
</div>
`;

arBtns.forEach(el => {
    el.insertAdjacentHTML('beforeend', toRightArrow)
});

//=================Add Arrows & Classes===========================

const allBtns = document.querySelectorAll('.wrapper > button')
console.log(allBtns);

// allBtns.forEach(el => {
//     if(el.innerText === "Submit" || el.innerText === 'Open map') {
//         el.insertAdjacentHTML('beforeend', toRightArrow)
//         el.classList.add('arrow')
//     }


// })// innerText: "Submit"