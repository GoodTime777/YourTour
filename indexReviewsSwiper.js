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
      spaceBetween: 0,
      loop: false,
      mousewheel: false,
    },
    1000: {
      spaceBetween: 18,
    },
    1920: {
      spaceBetween: 30,
    },
  },
});

function changeDirection() {
  window.innerWidth < 1000
    ? swiper.changeDirection("vertical")
    : swiper.changeDirection("horizontal");
}
changeDirection();

window.addEventListener("resize", () => {
  changeDirection();
});
