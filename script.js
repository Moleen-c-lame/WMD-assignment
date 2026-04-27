function showMessage() {
    alert("💖 Thank you for shopping with Hotties.Brandz!");
}
/*window.addEventListener("scroll", function () {
    let elements = document.querySelectorAll(".reveal");

    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add("active");
        }
    });
});*/
function showTab(el) {
    const women = document.getElementById("women");
    const men = document.getElementById("men");

    if (el.id === "women-shop-tab") {
        women.classList.remove("invisible");
        men.classList.add("invisible");
    } else {
        women.classList.add("invisible");
        men.classList.remove("invisible");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    showTab(document.getElementById("women-shop-tab"));
});

window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < 
window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});
let total = 0;

function addToCart(product, price, button) {
    // Prevent adding again
    if (button.classList.contains("added")) return;

    const cart = document.getElementById("cart-items");

    const li = document.createElement("li");

    const text = document.createElement("span");
    text.textContent = product + " - P" + price;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";

    removeBtn.onclick = function () {
    if (confirm("Remove this item from cart?")) {
        cart.removeChild(li);

        total -= price;
        document.getElementById("total").textContent = total;

        // 🔥 REMOVE FROM LOCAL STORAGE
        let cartData = JSON.parse(localStorage.getItem("cart")) || [];

        cartData = cartData.filter(item => 
            !(item.product === product && item.price === price)
        );

        localStorage.setItem("cart", JSON.stringify(cartData));

        // Restore button
        button.classList.remove("added");
        button.textContent = "Add to Cart";
        button.disabled = false;
    }
};
   

    li.appendChild(text);
    li.appendChild(removeBtn);
    cart.appendChild(li);

    total += price;
    document.getElementById("total").textContent = total;

    // Change button state
    button.classList.add("added");
    button.textContent = "Added ✔";
    button.disabled = true;
}
function clearCart() {
    let confirmClear = confirm("Are you sure you want to clear your cart?");

    if (confirmClear) {
        // Clear cart items
        document.getElementById("cart-items").innerHTML = "";

        //remove item
        localStorage.removeItem("cart");

        // Reset total
        total = 0;
        document.getElementById("total").textContent = total;

        // 🔥 RESET ALL BUTTONS
        const buttons = document.querySelectorAll(".add-btn");

        buttons.forEach(btn => {
            btn.classList.remove("added");
            btn.textContent = "Add to Cart";
            btn.disabled = false;
        });
    }
}
let cartData = JSON.parse(localStorage.getItem("cart")) || [];
// Check if item already exists
let existingItem = cartData.find(item => item.product === product);

if (existingItem) {
    existingItem.quantity += 1; // increase quantity
} else {
    cartData.push({ product, price, quantity: 1 });
}

localStorage.setItem("cart", JSON.stringify(cartData));

function loadCartPage() {
    const cartList = document.getElementById("cart-list");
    const totalEl = document.getElementById("cart-total");

    if (!cartList) return;

    let cartData = JSON.parse(localStorage.getItem("cart")) || [];
    cartList.innerHTML = "";

    let total = 0;

    cartData.forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <div class="cart-info">
                <strong>${item.product}</strong>
                <span>P${item.price} × ${item.quantity}</span>
            </div>

            <div class="cart-actions">
                <button onclick="decreaseQty(${index})">➖</button>
                <span>${item.quantity}</span>
                <button onclick="increaseQty(${index})">➕</button>
                <button onclick="removeItem(${index})" class="remove-btn">Remove</button>
            </div>
        `;

        cartList.appendChild(div);

        total += item.price * item.quantity;
    });

    totalEl.textContent = total;
}
   function increaseQty(index) {
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];

    cartData[index].quantity += 1;

    localStorage.setItem("cart", JSON.stringify(cartData));
    loadCartPage();
}
function decreaseQty(index) {
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];

    if (cartData[index].quantity > 1) {
        cartData[index].quantity -= 1;
    } else {
        // remove if quantity becomes 0
        cartData.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cartData));
    loadCartPage();
}
document.addEventListener("DOMContentLoaded", loadCartPage);

function submitOrder(event) {
    event.preventDefault();

    alert("🎉 Order placed successfully! We will contact you soon.");

    localStorage.removeItem("cart");

    window.location.href = "index.html";
}
function removeItem(index) {
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];

    if (confirm("Remove this item?")) {
        cartData.splice(index, 1);

        localStorage.setItem("cart", JSON.stringify(cartData));

        loadCartPage(); // refresh display
    }
}
