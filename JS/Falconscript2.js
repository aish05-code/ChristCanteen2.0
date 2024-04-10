// Falconscript1.js

// Define an array to store cart items
let cartItems = [];

// Function to add items to the cart
function addToCart(itemName, price) {
    // Create an object representing the item
    const item = {
        name: itemName,
        price: price
    };

    // Add the item to the cart
    cartItems.push(item);

    // Update the cart display
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    // Clear the current cart display
    cartList.innerHTML = '';

    // Calculate the total price
    let total = 0;

    // Loop through each item in the cart
    cartItems.forEach(item => {
        // Create a list item for the cart
        const li = document.createElement('li');
        li.textContent = item.name + ' - Rs. ' + item.price;
        cartList.appendChild(li);

        // Add the item price to the total
        total += item.price;
    });

    // Display the total price
    totalElement.textContent = 'Total: Rs. ' + total;
}

// Function to handle checkout
function checkout() {
    // Here you can implement the logic for checkout, such as sending cart data to a server or displaying a confirmation message.
    alert('Thank you for your purchase!');
    // Clear the cart after checkout
    cartItems = [];
    updateCart(); // Update the cart display
}
