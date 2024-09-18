const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  speed: 800,
  mousewheel: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      spaceBetween: 18,
    },
    1024: {
      spaceBetween: 18,
    },
    1920: {
      spaceBetween: 30,
    },
  },
});

 if (window.innerWidth < 1024){
//задать высоту для swiper (~1060)
 }

function changeDirection() {
  window.innerWidth < 1024
    ? swiper.changeDirection("vertical")
    : swiper.changeDirection("horizontal");
}
changeDirection();

window.addEventListener("resize", () => {
  changeDirection();
});
