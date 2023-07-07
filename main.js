const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const checkpoints = document.querySelectorAll(".scroll-checkpoint");
const links = document.querySelectorAll(".menu ul a");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
});

window.addEventListener("scroll", () => {
  if (pageYOffset > 50) {
    navbar.classList.add("navbar-active");
  } else {
    navbar.classList.remove("navbar-active");
  }
  for (let i = 0; i < checkpoints.length; i++) {
    if (pageYOffset > checkpoints[i].offsetTop - 50) {
      links.forEach((link) => link.classList.remove("active"));
      links[i].classList.add("active");
    }
  }
});
