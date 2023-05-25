// Get the quantity and total price elements
const quantityElement = document.querySelector('.quality-inside span');
const totalPriceElement = document.querySelector('#total-price');

// Set the initial quantity and price
let quantity = 1;
let price = 400;

// Function to increase the quantity and update the total price
function increaseQuantity() {
  quantity++;
  quantityElement.textContent = quantity;
  totalPriceElement.textContent = `$${quantity * price}`;
}

// Attach event listener to the "+" button
document.querySelector('.quality-inside button:nth-child(3)').addEventListener('click', increaseQuantity);

// Function to decrease the quantity and update the total price
function decreaseQuantity() {
  if (quantity > 1) {
    quantity--;
    quantityElement.textContent = quantity;
    totalPriceElement.textContent = `$${quantity * price}`;
  }
}

// Attach event listener to the "-" button
document.querySelector('.quality-inside button:nth-child(1)').addEventListener('click', decreaseQuantity);







// Get all size buttons
const sizeButtons = document.querySelectorAll('.size-btn');

// Function to handle button click
function handleButtonClick(event) {
  // Remove active class from all buttons
  sizeButtons.forEach(button => {
    button.classList.remove('active');
  });

  // Add active class to the clicked button
  const clickedButton = event.target;
  clickedButton.classList.add('active');
}

// Attach event listener to each size button
sizeButtons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

// Add hover effect
sizeButtons.forEach(button => {
  button.addEventListener('mouseenter', function() {
    if (!this.classList.contains('active')) {
      this.style.backgroundColor = 'blue';
      this.style.color = 'white';
    }
  });

  button.addEventListener('mouseleave', function() {
    if (!this.classList.contains('active')) {
      this.style.backgroundColor = '';
      this.style.color = '';
    }
  });
});















// Desktop Nav
const cartIconDesktop = document.getElementById('cartCount');

// Set an initial cart count
let itemCountDesktop = 0;

// Add event listener to the desktop cart icon
cartIconDesktop.addEventListener('click', addToCartDesktop);

// Function to add an item to the desktop cart
function addToCartDesktop() {
  itemCountDesktop++;
  cartIconDesktop.textContent = itemCountDesktop;
}


// Mobile Nav
const cartIconMobile = document.getElementById('cartCountMobile');

// Set an initial cart count for mobile
let itemCountMobile = 0;

// Add event listener to the mobile cart icon
cartIconMobile.addEventListener('click', addToCartMobile);

// Function to add an item to the mobile cart
function addToCartMobile() {
  itemCountMobile++;
  cartIconMobile.textContent = itemCountMobile;
}
