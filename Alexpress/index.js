document.addEventListener("DOMContentLoaded", () => {

    let hamburger = document.querySelector("#header-hamburger-toggle");
    let hamburgerContent = document.querySelector("#header-hamburger-content");

    if (hamburger == null || hamburgerContent == null) {
        return;
    }
    
    hamburger.addEventListener("input", () => {
        hamburgerContent.classList.toggle("shown");
    });
});