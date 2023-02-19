const showPasswordButn = document.querySelector('#show-pass')
const passwordInput = document.querySelector('#password')
const TIME_SHOW_PASSWORD = 5000;

console.log(showPasswordButn);
console.log(passwordInput);


if (showPasswordButn && passwordInput){  
    showPasswordButn.addEventListener('click', showPassword)
}

function showPassword () {
if (passwordInput.classList.contains('animate-password')) return

    passwordInput.setAttribute('type', 'text')
    passwordInput.classList.add('animate-password')


  let interval =  setInterval(function() {
        passwordInput.setAttribute('type','password' )
        passwordInput.classList.remove('animate-password')
        clearInterval(interval)
    }, TIME_SHOW_PASSWORD)
}
    
