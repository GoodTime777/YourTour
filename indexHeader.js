const header = document.querySelector(".header");
const nav = document.querySelector(".header__navigation");
const navFixed = document.querySelector(".navigation-scroll");
const bd=document.getElementsByTagName('body');


window.addEventListener("scroll", () => {
  const scrll = window.scrollY;
  console.log(window.scrollY);
  if (scrll >= 450) {
    nav.classList.add("navigation-scroll");
    //window.style.marginTop = 90 + "px";
    //    navFixed.style.transform='translateY(0%)'
    //  navFixed.style.transition='transform 1.5s'
  }else {   
    nav.classList.remove("navigation-scroll");
   //nav.classList.add("navigation-scroll-hide");
   //window.style.marginTop = 0 + "px";
    // navFixed.style.transform='translateY(0%)'
    // navFixed.style.transition='transform 1.5s'
  }
});
