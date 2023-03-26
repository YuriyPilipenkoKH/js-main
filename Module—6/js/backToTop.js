import { icon_up } from "./markup.js";
export {scrollFunction,topFunction}

const mybutton = document.querySelector('.back-to-top');
mybutton.addEventListener('click', topFunction);

mybutton.innerHTML = icon_up

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}