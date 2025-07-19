document.addEventListener('DOMContentLoaded', () => {
  const cartItems = document.getElementById('cart-items');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const sadDuck = document.getElementById('sadDuck');

  function updateCart() {
    if (cart.length === 0) {
      location.href = "./emptyCart.html";
      if (sadDuck) {
        sadDuck.style.display = 'block';
      }
    } else {
      cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        const img = document.createElement('img');
        img.src = item.imgSrc;
        cartItem.appendChild(img);
        cartItems.appendChild(cartItem);
      });
      // cart.forEach(item => {
      //   itemNames.push(item.name);
      //   itemImages.push(item.imgSrc);
      // });
      if (sadDuck) {
        sadDuck.style.display = 'none';
      }
    }
  }

  updateCart();
});

const get = () =>{
  console.log("get")
  location.href = "../../../RecipePage/Recipe.html"
}