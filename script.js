function showMessage() {
    alert("💖 Thank you for shopping with Hotties.Brandz!");
}
window.addEventListener("scroll", function () {
    let elements = document.querySelectorAll(".reveal");

    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add("active");
        }
    });
});

function showTab(e){
    var id = e.id;

    if (id == "women-shop-tab"){
        document.getElementById('women').classList.remove('invisible');
        document.getElementById('men').classList.add('invisible');
    }else if (id == "men-shop-tab"){
        document.getElementById('women').classList.add('invisible');
        document.getElementById('men').classList.remove('invisible');
    }
}
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});
let total = 0;

function addToCart(product, price) {
    const cart = document.getElementById("cart-items");

    const li = document.createElement("li");   

    // Create text
    const text = document.createElement("span");
    text.textContent = product + " - P" + price;

    // Create remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";

    // Remove item when clicked
    removeBtn.onclick = function () {
        cart.removeChild(li);
        total -= price;
        document.getElementById("total").textContent = total;
    };

    li.appendChild(text);
    li.appendChild(removeBtn);
    cart.appendChild(li);

    total += price;
    document.getElementById("total").textContent = total;
}
function clearCart() {
    document.getElementById("cart-items").innerHTML = "";
    total = 0;
    document.getElementById("total").textContent = total;
    if(confirm("Clear all items?")) { ... }
}
