document.addEventListener("DOMContentLoaded", () => {
  const heroCard = document.querySelector(".hero-card");

  if (heroCard) {
    setInterval(() => {
      heroCard.classList.toggle("pulse");
    }, 2200);
  }
});
