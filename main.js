document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".search-toggle");
  const searchBlock = document.querySelector(".header__search");

  toggleButton.addEventListener("click", () => {
    searchBlock.classList.add("visible");
    toggleButton.style.display = "none";
  });
});
const burgerBtn = document.querySelector('.header__burger');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = mobileMenu.querySelector('.close-btn');

burgerBtn.addEventListener('click', () => {
 mobileMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
 mobileMenu.style.display = 'none';
});

