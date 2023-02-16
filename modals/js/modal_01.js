const btns = document.querySelectorAll('.btn__m01')
// console.log(btns);

for (const btn of btns) {
    btn.addEventListener('click', function() {
        let card =  this.closest('.card')
        let dots = card.querySelector('.dots')
        let more = card.querySelector('.more')
        

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