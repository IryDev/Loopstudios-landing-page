var hamburgerMenu = document.querySelector(".burger");
var navbarLinks = document.querySelector(".nav-links");

function volet() {
  navbarLinks.classList.toggle("mobile-menu");

}

hamburgerMenu.addEventListener("click", volet);
