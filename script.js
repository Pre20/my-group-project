let total = 0;

function addToCart(product, price) {
    let cart = document.getElementById("cart");

    let item = document.createElement("li");
    item.textContent = product + " - ₹" + price;

    cart.appendChild(item);

    total += price;
    document.getElementById("total").textContent = total;
}
