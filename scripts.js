// Language switcher functionality
function switchLanguage(lang) {
  const englishContent = document.getElementById("english-content");
  const spanishContent = document.getElementById("spanish-content");
  const englishOption = document.getElementById("en-option");
  const spanishOption = document.getElementById("es-option");

  if (lang === "en") {
    englishContent.style.display = "block";
    spanishContent.style.display = "none";
    englishOption.classList.add("active");
    spanishOption.classList.remove("active");
  } else {
    englishContent.style.display = "none";
    spanishContent.style.display = "block";
    englishOption.classList.remove("active");
    spanishOption.classList.add("active");
  }
}

// Add staggered animations to project cards
function animateProjectCards() {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card, index) => {
    card.style.animationDelay = `${0.1 + index * 0.1}s`;
  });
}

// Initialize animations when the page loads
window.addEventListener("load", () => {
  animateProjectCards();
});
