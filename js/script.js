// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// #hamburger-menu clicked
document.querySelector("#hamburger-menu").onclick = function () {
  navbarNav.classList.toggle("active");
};

// Anyclick to hide side nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
