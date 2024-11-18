const nav = document.querySelector(".header__navigation");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  console.log(window.scrollY);
  if (scroll >= 450) {
    nav.classList.add("navigation-scroll");
    nav.style.top = "0px";
   
  } else if (scroll >= 300 && scroll < 450) {
    nav.style.top = "-90px";
   
  } else {
    nav.style.top = "0px";
    nav.classList.remove("navigation-scroll");
  }
});
