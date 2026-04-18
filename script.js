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
