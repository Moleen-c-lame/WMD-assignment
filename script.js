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

// ==========================
// 🛒 ADD TO CART (SHOP PAGE)
// ==========================
function addToCart(product, price, button) {

    let cartData = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if item already exists
    let existingItem = cartData.find(item => item.product === product);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartData.push({ product, price, quantity: 1 });
    }

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cartData));

    // Update button UI
    if (button) {
        button.classList.add("added");
        button.textContent = "Added ✔";
        button.disabled = true;
    }

    alert(product + " added to cart 🛒");
}
// ==========================
// 🛒 ADD TO CART (SHOP PAGE)
// ==========================
function addToCart(product, price, button) {

    let cartData = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if item already exists
    let existingItem = cartData.find(item => item.product === product);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartData.push({ product, price, quantity: 1 });
    }

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cartData));

    // Update button UI
    if (button) {
        button.classList.add("added");
        button.textContent = "Added ✔";
        button.disabled = true;
    }

    alert(product + " added to cart 🛒");
}
// ==========================
// ➕ INCREASE QUANTITY
// ==========================
function increaseQty(index) {
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];

    cartData[index].quantity += 1;

    localStorage.setItem("cart", JSON.stringify(cartData));
    loadCartPage();
}
// ==========================
// ➖ DECREASE QUANTITY
// ==========================
function decreaseQty(index) {
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];

    if (cartData[index].quantity > 1) {
        cartData[index].quantity -= 1;
    } else {
        cartData.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cartData));
    loadCartPage();
}
// ==========================
// ❌ REMOVE ITEM
// ==========================
function removeItem(index) {
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];

    if (confirm("Remove this item?")) {
        cartData.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cartData));
        loadCartPage();
    }
}
// ==========================
// 🧹 CLEAR CART
// ==========================
function clearCart() {
    if (confirm("Are you sure you want to clear your cart?")) {
        localStorage.removeItem("cart");
        loadCartPage();
    }
}
// ==========================
// 📤 SUBMIT ORDER
// ==========================
function submitOrder(event) {
    event.preventDefault();

    alert("🎉 Order placed successfully!");

    localStorage.removeItem("cart");

    window.location.href = "index.html";
}
// ==========================
// 🚀 LOAD ON PAGE START
// ==========================
document.addEventListener("DOMContentLoaded", loadCartPage);
