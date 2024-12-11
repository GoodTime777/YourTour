const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".card__container-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const tabAttribute = e.target.getAttribute("data-tab");

    tabs.forEach((item) => {
      item.classList.remove("active");
    });

    tab.classList.add("active");

    cards.forEach((card) => {
      const cardAttribute = card.getAttribute("data-card");

      cardAttribute === tabAttribute
        ? card.classList.add("active-card")
        : card.classList.remove("active-card");
    });
  });
});
