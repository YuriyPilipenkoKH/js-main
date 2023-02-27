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

// ====================Animation===============================

const btnContainer = `
<span class="btn-container"></span>
`

const allBtns = document.querySelectorAll('.wrapper > button')
console.log(allBtns);

allBtns.forEach(el => {

    if(el.innerText !== "How it’s made?") {
        el.insertAdjacentHTML('afterbegin', btnContainer)
        // el.classList.add('arrow')
    }

})// innerText: "Submit"

const allContainers  = document.querySelectorAll('.btn-container')
console.log(allContainers);

const container = document.querySelector('.btn-container')
console.log(container);

// function buttonAnimation () {

    
// }

// buttonAnimation()

function deleteCircleIcon(circle) {
    circle.remove()
}

function   createCircleIcon(posX,posY)  {

    const circle = document.createElement('div')
    circle.classList.add('circle')

    circle.style.left = `${posX}px`
    circle.style.top = `${posY}px`
    
    container.appendChild(circle)

    setTimeout(() => {
        deleteCircleIcon(circle)
    },1000)
}

function handleButtonClick(ev) {
    // console.log(ev);
    const offset = ev.target.getBoundingClientRect()
    // console.log(offset);  

    const posX = ev.pageX - offset.left
    const posY = ev.pageY - offset.top

    createCircleIcon(posX,posY)
}

const bodyTag = document.getElementsByTagName('body')
const buyBtn = document.querySelector('.buy')
// console.log(buyBtn);

buyBtn.addEventListener('mousedown',handleButtonClick)