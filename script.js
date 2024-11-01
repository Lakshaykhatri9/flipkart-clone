let hamburger = document.querySelector(".hamburger");
let navbar = document.querySelector(".navbar");
let cross = document.querySelector(".cross");
const signup = document.querySelector(".login-div");


hamburger.addEventListener("click", () => {
    navbar.classList.add("navbar-show");
});

cross.addEventListener("click", () => {
    navbar.classList.remove("navbar-show");
});

signup.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "pages/signUp.html";
});