var quantity = 0;
var totalPrice = 0;

function decreaseQuantity() {
  if (quantity > 0) {
    quantity--;
    updateTotalPrice();
  }
}

function increaseQuantity() {
  quantity++;
  updateTotalPrice();
}

function updateTotalPrice() {
  totalPrice = quantity * 400;
  var totalPriceElement = document.getElementById("totalPrice");
  totalPriceElement.textContent = "$" + totalPrice;
}

updateTotalPrice(); // Set initial total price

var quantityElement = document.getElementById("quantity");
quantityElement.textContent = quantity;
