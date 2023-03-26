export { renderGallery };


const gallery = document.querySelector('.palette');

function renderGallery(cards) {

    const markup = cards
      .map((card,idx) => {
        const { hex, rgb } = card;
        return `
        <div class="color-card">
        <div class="color-swatch"
            data-hex="#${hex}";
            data-rgb="${rgb}";
            style = " background-color: #${hex};"
        ></div>
        <div class="color-meta">
            <p>ID: ${idx+1}</p>
            <p>HEX: ${hex}</p>
            <p>RGB: ${rgb}</p>
        </div>
    </div> 
        `;
      })
      .join('');
  
    gallery.innerHTML = markup
  }

// renderGallery(cards)