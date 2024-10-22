document.addEventListener('DOMContentLoaded', () => {
    let link = document.querySelector("#site-link");
    let markVisitedButton = document.querySelector("#mark-visited");


    markVisitedButton.addEventListener("click", () => {
        link.classList.toggle("visited");
    });
});