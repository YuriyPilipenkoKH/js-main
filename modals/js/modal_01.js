const btns = document.querySelectorAll('.btn__m01')
// console.log(btns);

for (const btn of btns) {
    btn.addEventListener('click', function() {
        const card =  this.closest('.card')
        const dots = card.querySelector('.dots')
        const more = card.querySelector('.more')
        

        if(dots.style.display === 'none') {
            dots.style.display = 'inline'
            more.style.display = 'none'
            this.textContent = 'Reveal'
        } else {
            dots.style.display = 'none'
            more.style.display = 'inline'
            this.textContent = "Hide"
        }
    })
}