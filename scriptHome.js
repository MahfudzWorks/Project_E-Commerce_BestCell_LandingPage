let currentIndex = 0;

function slideRight() {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slider img");
  currentIndex = (currentIndex + 1) % slides.length;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function slideLeft() {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slider img");
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
