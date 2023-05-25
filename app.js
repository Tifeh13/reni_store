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






// Get the search input element
const searchInput = document.querySelector('.search');

// Get the search results container element
const searchResultsContainer = document.querySelector('#searchResults');

// Function to handle the search
function handleSearch() {
  // Get the search query
  const query = searchInput.value.toLowerCase();

  // Perform the search logic (you can customize this based on your requirements)
  const searchResults = performSearch(query);

  // Display the search results
  displaySearchResults(searchResults);
}

// Function to perform the search (example implementation)
function performSearch(query) {
  // Retrieve the words from the web page (you can modify this based on your web page structure)
  const words = [];
  const elements = document.querySelectorAll('.catalog, .item-1, .item-2, .item-3');
  elements.forEach(element => {
    const textContent = element.textContent.toLowerCase();
    if (textContent.includes(query)) {
      words.push({
        word: textContent,
        element: element
      });
    }
  });

  return words;
}

// Function to display the search results
function displaySearchResults(results) {
  // Clear the previous search results
  searchResultsContainer.innerHTML = '';

  // Check if there are any results
  if (results.length === 0) {
    searchResultsContainer.textContent = 'No results found.';
    return;
  }

  // Create and append the search result elements
  results.forEach(result => {
    const resultItem = document.createElement('p');
    resultItem.textContent = result.word;
    resultItem.classList.add('search-result');
    resultItem.addEventListener('click', scrollToResult.bind(null, result.element));
    searchResultsContainer.appendChild(resultItem);
  });
}

// Function to scroll to the result and highlight the word
function scrollToResult(element) {
  element.classList.add('highlight');
  element.scrollIntoView({ behavior: 'smooth' });
}

// Add event listener to the search input
searchInput.addEventListener('input', handleSearch);












// increasing of size of image and decreasing
var currentPercentage = 0;
var image = document.getElementById("myImage");
var percentageElement = document.getElementById("percentage");

function decreaseImageSize() {
  if (currentPercentage > 0) {
    currentPercentage -= 50; // Decrease percentage by 50%
    updateImageSize();
  }
}

function increaseImageSize() {
  if (currentPercentage < 50) {
    currentPercentage += 50; // Increase percentage by 50%
    updateImageSize();
  }
}

function updateImageSize() {
  image.style.width = currentPercentage + "%";
  percentageElement.textContent = currentPercentage + "%";
}

