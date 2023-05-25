document.addEventListener('DOMContentLoaded', () => {
    // Mobile cart variables
    const cartCountMobile = document.getElementById('cartCount');
    let cartItemsCountMobile = 0;
  
    // Function to update the cart count
    function updateCartCount() {
      cartCountMobile.innerText = cartItemsCountMobile;
    }
  
    // Add event listeners to the "Add to cart" buttons
    const addToCartButtons = document.querySelectorAll('.item-3-button');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Increment the cart count
        cartItemsCountMobile++;
  
        // Update the cart count
        updateCartCount();
      });
    });
  });

  

  // JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Cart class
    class Cart {
      constructor() {
        this.cartItems = 0;
        this.cartIcon = document.getElementById('cart');
        this.cartCount = document.querySelector('.cart-count');
      }
  
      updateCartCount() {
        this.cartCount.textContent = this.cartItems;
      }
  
      addToCart() {
        this.cartItems++;
        this.updateCartCount();
      }
    }
  
    // Create a new instance of the Cart class
    const cart = new Cart();
  
    // Add event listeners to the "Add to cart" buttons
    const addToCartButtons = document.querySelectorAll('.item-3-button');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        cart.addToCart();
      });
    });
  });
  