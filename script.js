function toggleMenu() {
    document.querySelector(".nav").classList.toggle("show");
}
function showMessage() {
    alert("💖 Thank you for shopping with Hotties.Brandz!");
}

function showTab(el) {
    const women = document.getElementById("women");
    const men = document.getElementById("men");

    // stop error if elements don't exist
    if (!el || !women || !men) return;

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


// ADD TO CART (SHOP PAGE)
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

     //  VISUAL FEEDBACK (better than alert)
    button.textContent = "Added ✔";
    button.classList.add("added");

    setTimeout(() => {
        button.textContent = "Add to Cart";
        button.classList.remove("added");
    }, 1500);

    // Update button UI
    if (button) {
        button.classList.add("added");
        button.textContent = "Added ✔";
        button.disabled = true;
    }

    alert(product + " added to cart 🛒");
    updateCartCount();
}

// LOAD CART (CART PAGE)
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

   
    
// INCREASE QUANTITY
function increaseQty(index) {
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];

    cartData[index].quantity += 1;

    localStorage.setItem("cart", JSON.stringify(cartData));
    loadCartPage();
    updateCartCount();
}

// DECREASE QUANTITY
function decreaseQty(index) {
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];

    if (cartData[index].quantity > 1) {
        cartData[index].quantity -= 1;
    } else {
        cartData.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cartData));
    loadCartPage();
    updateCartCount();
}

// REMOVE ITEM
function removeItem(index) {
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];

    if (confirm("Remove this item?")) {
        cartData.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cartData));
        loadCartPage();
        updateCartCount();
    }
}

// CLEAR CART
function clearCart() {
    if (confirm("Are you sure you want to clear your cart?")) {
        localStorage.removeItem("cart");
        loadCartPage();
        updateCartCount();
    }
}

// REMOVE ELEMENTS
function removeElements(elements) {
    elements.forEach(function(el) {
        el.remove();
    });
}

// SUBMIT ORDER
function submitOrder(event) {
    event.preventDefault();

    if (getCartCount() > 0){
        var itemsToRemove1 = document.querySelectorAll('.cart-actions');
        var itemsToRemove2 = document.querySelectorAll('.clear-btn');

        // Remove both sets
        removeElements(itemsToRemove1);
        removeElements(itemsToRemove2);

        document.getElementById('order-form').classList.add('invisible');
        document.getElementById('success-banner').classList.remove('invisible');
        //alert(" Order placed successfully!");

        localStorage.removeItem("cart");
        updateCartCount();

        //window.location.href = "index.html";
    }else{
        alert("⚠️ Your cart is empty, Please add items to cart to place order!");
    }
}

function getCartCount() {
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];

    let count = 0;

    cartData.forEach(item => {
        count += item.quantity;
    });

    return count;
}


function updateCartCount() {
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];

    let count = 0;

    cartData.forEach(item => {
        count += item.quantity;
    });

    const countEl = document.getElementById("cart-count");
    if (countEl) countEl.textContent = count;
}

// LOAD ON PAGE START
document.addEventListener("DOMContentLoaded", () => {
    loadCartPage();
    updateCartCount();
});
document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll(".nav a");

    let path = window.location.pathname.toLowerCase();

    // Loop through nav links
    links.forEach(link => {

        let linkPage = link.getAttribute("href").toLowerCase();

        if (path.includes(linkPage)) {
            link.classList.add("active");
        }

    });

    // Homepage special case
    if (path.endsWith("/") || path.endsWith("index.html")) {

        const homeLink = document.querySelector('.nav a[href="index.html"]');

        if (homeLink) {
            homeLink.classList.add("active");
        }
    }

});
function submitFeedback(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const rating = document.getElementById("rating").value;

    const review = {
        name: name,
        email: email,
        message: message,
        rating: rating
    };

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.push(review);

    localStorage.setItem("reviews", JSON.stringify(reviews));

    alert("Feedback submitted successfully!");

    // Clear form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    document.getElementById("rating").value = "";
}
``
function loadReviews() {
    const container = document.getElementById("reviews-container");

    if (!container) return;

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    
    container.innerHTML = "";

    reviews.forEach((review, index) => {
        
       //  Convert number to stars
        let stars = "⭐".repeat(review.rating);

        const card = document.createElement("div");
        card.classList.add("review-card");

        card.innerHTML = `
            <p>"${review.message}"</p>
            <div class="stars">${stars}</div>
            <h4>- ${review.name}</h4>
            <button onclick="deleteReview(${index})" class="delete-btn">Remove</button>
        `;
        container.appendChild(card);
    });
}
 // Run when page loads
window.onload = loadReviews;

function setRating(value) {
    document.getElementById("rating").value = value;

    const stars = document.querySelectorAll(".star-rating span");

    stars.forEach((star, index) => {
        if (index < value) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });
}

function deleteReview(index) {
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.splice(index, 1); // remove selected review

    localStorage.setItem("reviews", JSON.stringify(reviews));

    loadReviews(); //refresh display
}
