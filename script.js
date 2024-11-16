const cart = [];
const cartModal = document.getElementById("cart-modal");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const closeCartBtn = document.getElementById("close-cart");
const cartBtn = document.getElementById("cart-btn");
const checkoutBtn = document.getElementById("checkout");

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", (e) => {
    const product = e.target.closest(".product-card");
    const name = product.dataset.name;
    const price = parseFloat(product.dataset.price);

    cart.push({ name, price });
    updateCart();
    alert("Added to cart: " + name);
  });
});

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total.toFixed(2);
}

cartBtn.addEventListener("click", () => {
  cartModal.classList.add("visible");
});

closeCartBtn.addEventListener("click", () => {
  cartModal.classList.remove("visible");
});

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  alert(
    `Checkout successful! Your total is $${total}. Thank you for shopping!`
  );
  cart.length = 0;
  updateCart();
  cartModal.classList.remove("visible");
});
