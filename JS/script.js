// _____________________________
// ________ Константи __________
// _____________________________
const DARK_THEME = "dark-theme";
const LIGHT_THEME = "light-theme";

// _____________________________
// _________ Елементи __________
// _____________________________
// Стандартні елементи
const body = document.body;
const navbar = document.querySelector(".navbar");
const logo = document.getElementById("logo");
const themeIcon = document.getElementById("themeIcon");
// Елементи калькулятора
const calculator = document.getElementById("calculator");
const calcHeader = document.getElementById("calc-header");
// Елементи конвертора
const convertor = document.getElementById("convertor");
const convertorHeader = document.getElementById("convertor-header");
// Елементи довідки
const guide = document.getElementById("guide");
const guideHeader = document.getElementById("guide-header");

// _____________________________
// __________ Функції __________
// _____________________________
// Функція перемикання теми
function toggleTheme() {
  const isDark = body.classList.contains(DARK_THEME);
  if (isDark) {
    setLightTheme();
  } else {
    setDarkTheme();
  }
  updateThemeIcon();
}

// Встановлення світлої теми
function setLightTheme() {
  body.classList.remove(DARK_THEME);
  body.style.background = "#f0f0f0";
  navbar.style.backgroundColor = "#fff";
  navbar.style.color = "#000";
  calcHeader.style.color = "#000";
  convertor.style.color = "#000";
  calculator.style.backgroundColor = "#fff";
  convertor.style.backgroundColor = "#fff";
  guide.style.backgroundColor = "#fff";
  guide.style.color = "#000";
}

// Встановлення темної теми
function setDarkTheme() {
  body.classList.add(DARK_THEME);
  body.style.background = "#adadad";
  navbar.style.backgroundColor = "#333";
  navbar.style.color = "#fff";
  calcHeader.style.color = "#fff";
  convertor.style.color = "#fff";
  calculator.style.backgroundColor = "#333";
  convertor.style.backgroundColor = "#333";
  guide.style.backgroundColor = "#333";
  guide.style.color = "#fff";
}

// Встановлення іконки залежно від теми
function updateThemeIcon() {
  const isDark = body.classList.contains(DARK_THEME);
  const iconSrc = isDark ? "./IMG/moon.png" : "./IMG/sun.png";
  themeIcon.classList.add("hidden");
  setTimeout(() => {
    themeIcon.classList.remove("hidden");
    themeIcon.src = iconSrc;
  }, 300);
}

// Функція для відображення калькулятора
function showCalculator() {
  hideAll();
  calculator.style.display = "block";
}

// Функція для відображення конвертора
function showConvertor() {
  hideAll();
  convertor.style.display = "block";
}

// Функція для відображення довідки
function showGuide() {
  hideAll();
  guide.style.display = "block";
}

// Функція для приховування всіх елементів
function hideAll() {
  calculator.style.display = "none";
  convertor.style.display = "none";
  guide.style.display = "none";
}

// Функція для анімації логотипа при натисканні на нього
function logoAnimate() {
  const logoImage = logo.querySelector(".navbar-logo");
  logoImage.classList.add("rotate-animation");
  setTimeout(() => {
    logoImage.classList.remove("rotate-animation");
  }, 1000);
}

// Задання теми при запуску сторінки
document.addEventListener("DOMContentLoaded", function () {
  toggleTheme();
});
