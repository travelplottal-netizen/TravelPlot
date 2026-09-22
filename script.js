// ==============================
// MOBILE MENU
// ==============================

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// ==============================
// CLOSE MOBILE MENU
// WHEN A LINK IS CLICKED
// ==============================

const navLinks = document.querySelectorAll("#nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});
