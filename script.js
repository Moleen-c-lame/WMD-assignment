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
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
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
