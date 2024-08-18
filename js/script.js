/* CSSのクラスを変数に格納 */

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-sp");
const navLinks = document.querySelectorAll(".nav-sp li");

burger.addEventListener("click", () => { 
  nav.classList.toggle("nav-active");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinksFade 0.5s ease forwards ${index / 4  }s`; 
    }
  });

  burger.classList.toggle("toggle");

});
