const addToCartButtons = document.querySelectorAll('item-3-button')
const cartItems = document.getElementsByClassName('grid')

function addToCart(event){
    const item = event.target.parentElement;
    const itemName = item.queeryselector('p').textContent;
    const itemPrice = item.queeryselector('h5').textContent;
    const cartItem = document.createElement('li');
    cartItem.textContent = '${itemName} - ${itemPrice}';
    cartItem.appendChild(cartItem);
}

Array.from(addToCartButtons).forEach(button=>{
    addToCartButtons.addEventListener('click', addTocart);
});


// nav bar 
document.addEventListener('DOMContentLoaded', () =>{
    // get references to menu icon, sidebar and close button elements
    const menuIcon = document.getElementById('menuIcon');
    const aside = document.getElementById('aside');
    const closeButton = document.getElementById('closeButton');
    // Add event listener to the menu icon
    menuIcon.addEventListener('click', toggleSidebar);
    // Add event listener to the close button
    closeButton.addEventListener('click', closeSidebar);
    // function to open the side bar
    function toggleSidebar(){
        aside.classList.toggle('active');
    }
     // function to close the side bar
    function closeSidebar(){
        aside.classList.remove('active');
    }
});


const searchInput = document.getElementById('search');

const catalogs = document.querySelectorAll('.item-1');

// Add event listener for input event
searchInput.addEventListener('input', function(event) {
  const searchTerm = event.target.value.toLowerCase();

  // loop through wears type and display search result
  catalogs.forEach(function(catalog) {
    const title = catalog.querySelector('p').textContent.toLowerCase();

    if (title.includes(searchTerm)) {
      catalog.style.display = 'block';
    } else {
      catalog.style.display = 'none';
    }
  });
});
