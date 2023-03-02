
const refs = {

    arBtns: document.querySelectorAll('.arroww'),
    allContainers: document.querySelectorAll('.btn-container'),
    container: document.querySelector('.btn-container'),
    main: document.querySelector('.main'),
   
}

const btns = {
  
    all: document.querySelectorAll('.js-btn'),

    buy: document.querySelector('.buy'),
    read: document.querySelector('.read'),
    loc: document.querySelector('.loc'),
    fra: document.querySelector('.fra'),
    prod: document.querySelector('.prod'),
    sub: document.querySelector('.sub'),
    open: document.querySelector('.open'),
}


const toRightArrow = `
<div class="arrow-wrap">
<svg viewBox="0 0 24 24"  height="24" width="22" class="right-arrow"><path d="M0 0h24v24H0z" fill="none"></path><path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path></svg>
</div>
`;

refs.arBtns.forEach(el => {
    el.insertAdjacentHTML('beforeend', toRightArrow)
});

// ====================Animation===============================

const btnContainer = `
<span class="btn-container"></span>
`

// const allBtns = document.querySelectorAll('.wrapper > button')
// console.log(allBtns);


// ID to spans
btns.all.forEach((el,idx,arr) => {
    const span = el.getElementsByTagName('span')
    // console.log(span);

    if(el.innerText !== "How it’s made?") {
        el.insertAdjacentHTML('afterbegin', btnContainer)
        span[0].setAttribute('id', `0${idx + 1}`)
    }

})// innerText: "Submit"

btns.all.forEach(el => {
    // el.setAttribute("disabled", "")
})


// buyBtn.addEventListener('mousedown',handleButtonClick)

 refs.main.addEventListener('mousedown',handleButtonClick)



function handleButtonClick(ev) {
    // console.log(ev.target.className);
    console.log(ev.target.id);

    if(ev.target.className !== 'btn-container') {
return
    } 

        const offset = ev.target.getBoundingClientRect()
        // console.log(offset);  
    
        const posX = ev.pageX - offset.left
        const posY = ev.pageY - offset.top
    
        createCircleIcon(posX,posY,ev.target)
}


function   createCircleIcon(posX,posY,target)  {

    const circle = document.createElement('div')
    circle.classList.add('circle')

    circle.style.left = `${posX}px`
    circle.style.top = `${posY}px`
    
    target.appendChild(circle)

    setTimeout(() => {
        deleteCircleIcon(circle)
    },1000)
}

function deleteCircleIcon(circle) {
    circle.remove()
}