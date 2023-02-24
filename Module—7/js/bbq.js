document.body.insertAdjacentHTML(
    'beforeend',
    `<div class="container">
      <h2 class="title">Скільки коштує мясо на шашлики?</h2>
      <form action="#" class="form">
        <label for="price">Ціна грн</label>
        <input type="text" id="price" name="price" value="89">
        <label for="quantity">Кількість<span class="amount">1</span>кг</label>
        <input type="range" id="quantity" name="quantity" value="1" min="1", max="20">
      </form>
      <p class="text-right"><span class="total">0</span> грн</p>
    </div>
  `,
  );
  
  const formRef = document.querySelector('form.form');
  
  formRef.addEventListener('input', (e) => {
    calculateTotalPrice();
  
    if (e.target.id === 'quantity') {
      updateAmount(e.target.value);
    }
  });
  
  calculateTotalPrice();
  
  function updateAmount(value) {
    const amountRef = document.querySelector('form .amount');
  
    amountRef.textContent = value;
  }
  
  function calculateTotalPrice() {
    const priceRef = document.querySelector('form #price');
    const quantityRef = document.querySelector('form #quantity');
    const totalRef = document.querySelector('.container .total');
  
    const price = parseFloat(priceRef.value);
    const quantity = Number(quantityRef.value);
  
    totalRef.textContent = (price * quantity).toFixed(2);
  }