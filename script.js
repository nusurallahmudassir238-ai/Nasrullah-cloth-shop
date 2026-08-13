let cart = [];
let cartCount = 0;

// Add product to cart
function addToCart(productName, price) {

    cart.push({
        name: productName,
        price: price
    });

    cartCount++;

    document.getElementById("cartCount").textContent = cartCount;

    alert(productName + " cart mein add ho gaya!");
}

// Show cart
function showCart() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let cartMessage = "🛒 Your Cart\n\n";
    let total = 0;

    cart.forEach(function(item, index) {

        cartMessage +=
            (index + 1) +
            ". " +
            item.name +
            " - Rs. " +
            item.price +
            "\n";

        total += item.price;
    });

    cartMessage += "\n--------------------\n";
    cartMessage += "Total: Rs. " + total;

    alert(cartMessage);
}

// Contact form
function sendMessage(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    alert(
        "Thank you " +
        name +
        "! Your message has been received."
    );

    document.querySelector("form").reset();
}
