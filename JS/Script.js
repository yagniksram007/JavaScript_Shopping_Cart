//document.body.style.background="red"
//document.getElementById("heading").innerHTML="Java class";
//document.getElementsByClassName("test").innerHtml="HTML"

// cart -Func
// let cartIcon = document.querySelector("#cart-Icon");
// let cart = document.querySelector(".cart");
// let hideCart = document.querySelector("#cart-cart");

//exit cart
// hidecart.onclick = () =>{
//   cart.classlist.add("cart-active");
// };

// Initialize an empty cart array
var cartItems = [];

function addToCart(productName, price) {
  alert('Item added to cart. Proceed to checkout.');
  
  // Create a cart item object
  var item = {
    name: productName,
    price: price
  };

  // Add the item to the cart array
  cartItems.push(item);

  // Update the cart display
  updateCartDisplay();
}

function updateCartDisplay() {
  // Get the cart items container element
  var cartItemsContainer = document.getElementById("cartItemsContainer");

  // Clear the container
  cartItemsContainer.innerHTML = "";

  // Loop through the cart items and display them
  cartItems.forEach(function(item) {
    // Create an element for each cart item
    var itemElement = document.createElement("div");
    itemElement.textContent = item.name + " - ₹ " + item.price;

    // Append the item element to the cart items container
    cartItemsContainer.appendChild(itemElement);
  });
}

function navBars(){
  fetch('Navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar').innerHTML = data;
      });
}

