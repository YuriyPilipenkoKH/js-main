export { renderGallery };
import { cards } from "./hex.js";

const gallery = document.querySelector('.palette');

function renderGallery(cards) {

    const markup = cards
      .map(card => {
        const { hex, rgb } = card;
        return `
        <div class="color-card">
        <div class="color-swatch"
            data-hex="${hex}";
            data-rgb="${rgb}";
            style = " background-color: #${hex};"
        ></div>
        <div class="color-meta">
            <p>HEX: ${hex}</p>
            <p>RGB: ${rgb}</p>
        </div>
    </div> 
        `;
      })
      .join('');
  
    gallery.insertAdjacentHTML('beforeend', markup);
  }

renderGallery(cards)