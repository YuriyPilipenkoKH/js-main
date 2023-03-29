const inputs = document.querySelectorAll('input[type="number"]')
console.log(inputs);

[...inputs].map( el => el.addEventListener('wheel', onWheeling))

function onWheeling(e) {
    e.preventDefault()
    const att =  this.getAttribute('step')
    const step = att ? +att  : 1

     if(e.deltaY > 0) {
        this.value = (+this.value) +step
     }
     else {
        this.value = (+this.value) -step
     }
}   