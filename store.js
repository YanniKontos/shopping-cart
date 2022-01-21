function removeItem(id) {
   const removeCart = document.getElementById(id);
   removeCart.remove()
}

let id = 0;

function addItemToBasket(imgSrc, price) {
   const page3 = document.getElementById('page-3');
   id += 1;
   const cartItem = `
      <div class="cart-items" id='${id}'>
      <img src="${imgSrc}" alt="#">
      <p>${price}</p>
      <button class='remove' onclick="removeItem('${id}')">Remove</button>
      </div>
   `;
   page3.innerHTML += cartItem;
}