const navLinks = document.querySelectorAll("nav ul li a");
const hamburgerIcon = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

navLinks.forEach(link => {
    link.addEventListener("click", smoothScroll);
});

// Toggle the class "show" on the navigation menu when the hamburger icon is clicked
hamburgerIcon.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});
