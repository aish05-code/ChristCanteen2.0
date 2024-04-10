const items = [
    { name: "Masala Dosa", price: 50, image: "Masala Dosa.jpg" },
    { name: "Idli", price: 10, image: "Idli.jpg" },
    { name: "Vada", price: 10, image: "Vada.jpg" },
    { name: "Gobi fried rice", price: 70, image: "Gobi Fried Rice.jpg" },
    { name: "Veg Noodles", price: 60, image: "Veg-Noodles.jpg" },
    { name: "Parotta", price: 40, image: "Parotta.jpg" },
    { name: "Veg Biryani", price: 70, image: "Veg-Biryani.jpg" },
    { name: "Lemon Rice", price: 50, image: "Lemon-Rice.jpg" }
];

// Update the path of the images
const imagePath = "image/";

// Function to display items in the menu
function displayItems() {
    const itemsDiv = document.getElementById('items');
    itemsDiv.innerHTML = '';
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
            <img src="${imagePath}${item.image}" alt="${item.name}">
            <h4>${item.name}</h4>
            <p class="pricing">Price: Rs. ${item.price}</p>
            <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
        `;
        itemsDiv.appendChild(itemDiv);
    });
}


// Variable to hold cart items
let cart = [];

// Function to add item to cart
function addToCart(name, price) {
    cart.push({ name, price });
    displayCart();
    displayTotal();
}
// Function to display items in the cart
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach((item, index) => {
        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');

        // Create a container for item details and controls
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container');

        // Create a div for item image
        const itemImageContainer = document.createElement('div');
        itemImageContainer.classList.add('item-image-container');
        const itemImage = document.createElement('img');
        itemImage.src = `${imagePath}${item.image}`;
        itemImage.alt = item.name;
        itemImage.classList.add('cart-item-image');
        itemImageContainer.appendChild(itemImage);

        // Create a div for item details and price
        const itemDetailsAndPrice = document.createElement('div');
        itemDetailsAndPrice.classList.add('item-details-price');
        itemDetailsAndPrice.innerHTML = `
            <div class="item-details">
                <span>${item.name}</span>
            </div>
            <div class="item-price">
                <span>Price: Rs.${item.price}</span>
            </div>
        `;

        // Create a div for item controls
        const itemControls = document.createElement('div');
        itemControls.classList.add('item-controls');
        itemControls.innerHTML = `
            <button onclick="decreaseQuantity(${index})">-</button>
            <span>${item.quantity}</span>
            <button onclick="increaseQuantity(${index})">+</button>
            <button onclick="removeItemFromCart(${index})">Remove</button>
        `;

        // Append item image container, details and price, and controls to item container
        itemContainer.appendChild(itemImageContainer);
        itemContainer.appendChild(itemDetailsAndPrice);
        itemContainer.appendChild(itemControls);

        // Append item container to cart items list
        cartItem.appendChild(itemContainer);
        cartItems.appendChild(cartItem);
    });
}



// Function to add item to cart
function addToCart(name, price) {
    // Find the item in the items array
    const selectedItem = items.find(item => item.name === name);
    // Add the item to the cart with the image property
    cart.push({ name, price, image: selectedItem.image, quantity: 1, total: price });
    displayCart();
    displayTotal();
}


// Function to decrease quantity of item in cart
function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
        cart[index].total = cart[index].quantity * cart[index].price;
        displayCart();
        displayTotal();
    }
}

// Function to increase quantity of item in cart
function increaseQuantity(index) {
    cart[index].quantity++;
    cart[index].total = cart[index].quantity * cart[index].price;
    displayCart();
    displayTotal();
}

// Function to calculate and display total price
function displayTotal() {
    const totalPrice = cart.reduce((acc, item) => acc + item.total, 0);
    const totalDiv = document.getElementById('total');
    totalDiv.innerHTML = `Total: Rs. ${totalPrice.toFixed(2)}`;
}


// Function to remove item from cart
function removeItemFromCart(index) {
    cart.splice(index, 1);
    displayCart();
    displayTotal();
}
// Function to generate a random order number between 1 and 9999
function generateOrderNumber() {
    // Generate a random number between 1 and 9999
    const randomNumber = Math.floor(Math.random() * 9999) + 1;
    return `Order Number: ${randomNumber}`;
}

// Function for checkout
function checkout() {
    // Generate a random order number
    const orderNumber = generateOrderNumber();

    // Show alert with the order number and a thank you message
    alert(`Checkout complete! ${orderNumber}. Thank you for your order.`);

    // Clear the cart after checkout
    cart = [];
    displayCart();
    displayTotal();
}

// Function to sort items based on the selected option
function sortItems() {
    const sortSelect = document.getElementById('sort-select');
    const sortOption = sortSelect.value;

    if (sortOption === 'name') {
        items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'price') {
        items.sort((a, b) => a.price - b.price);
    }

    displayItems();
}

// Initial display of items
displayItems();
