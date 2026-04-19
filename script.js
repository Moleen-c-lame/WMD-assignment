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
