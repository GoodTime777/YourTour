const nav = document.querySelector(".header__navigation");
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  if (scroll >= 450) {
    nav.classList.add("navigation-scroll");
    nav.style.top = "0px";
    header.style.paddingTop = "90px";
  } else if (scroll >= 350 && scroll < 450) {
    nav.style.top = "-88px";
  } else {
    nav.style.top = "0px";
    header.style.paddingTop = "0px";
    nav.classList.remove("navigation-scroll");
  }
});
