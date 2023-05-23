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



// window.addEventListener('DOMcontentLoaded',()=>{
//     const searchInput = document.getElementById('search');
//     const searchButton = document.getElementById('searchButton')
//     const searchResults = document.getElementById('searchResults');

//     searchButton.addEventListener('click', performSearch);


// function performSearch(){
//     const searchText = searchInput.value.trim().toLowerCase();
//     const storedItems = JSON.parse(localStorage.getItem('items')) || [];
//     const items = storedItems.filter(item => item.toLocaleLowerCase().includes(searchText));

//     displaySearchResults(items);
// }

//     function displaySearchResults(items){
//         searchResults.innerHTML = '';
//         items.forEach((item)=>{
//             const highlightedText = item.replace(new RegExp(searchInput.value, 'gi'), (match) => '<span class="highlight"${match}</span>');
//             const li = document.createElement('li');
//                 li.innerHTML=highlightedText;
//                 searchResults.appendChild(li);
            
//         });
//         }
//     });


function searchs(){
    let Search = document.getElementById('search').value;
    let paragraph = document.getElementById('paragraph');


    console.log (search)
}