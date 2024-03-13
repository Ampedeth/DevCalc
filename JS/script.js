// ________________________________________________________________________________________
// ___________________________________ Константи __________________________________________
// ________________________________________________________________________________________
const DARK_THEME = "dark-theme";
const LIGHT_THEME = "light-theme";

// ________________________________________________________________________________________
// ____________________________________ Елементи __________________________________________
// ________________________________________________________________________________________
// Стандартні елементи
const body = document.body;
const navbar = document.querySelector(".navbar");
const logo = document.getElementById("logo");
const themeIcon = document.getElementById("themeIcon");
// Елементи калькулятора
const calculator = document.getElementById("calculator");
const calcHeader = document.getElementById("calc-header");
const calcDescription = document.getElementById("calc-description");
// Елементи конвертора
const convertor = document.getElementById("convertor");
const convertorHeader = document.getElementById("convertor-header");
// Елементи довідки
const guide = document.getElementById("guide");
const guideHeader = document.getElementById("guide-header");

// ________________________________________________________________________________________
// ____________________________________ Функції ___________________________________________
// ________________________________________________________________________________________
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
  calcDescription.style.color = "#000";
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
  calcDescription.style.color = "#fff";
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

// Функція для зміни систем числення на протилежну в конверторі
// function changeNumberSystem() {
//   const arrow = document.getElementById("arrow");
//   arrow.classList.add("change-animation");

//   setTimeout(() => {
//     const startSystem = document.getElementById("convert-start-system");
//     const resultSystem = document.getElementById("convert-result-system");

//     // Отримання значення вибраної системи числення для першого числа
//     let startValue = startSystem.value;
//     let resultValue = resultSystem.value;
//     const temp = startValue;

//     // Отримання вибраних текстів селекторів
//     const startText = startSystem.options[startSystem.selectedIndex].text;
//     const resultText = resultSystem.options[resultSystem.selectedIndex].text;

//     // Зміна текстів опцій
//     startSystem.options[startSystem.selectedIndex].text = resultText;
//     resultSystem.options[resultSystem.selectedIndex].text = startText;
//     startValue = resultValue;
//     resultValue = temp;
//     startSystem.value = startValue;
//     resultSystem.value = resultValue;
//     // Оновлення значення вибраної опції
//     startSystem.dispatchEvent(new Event("change"));
//     resultSystem.dispatchEvent(new Event("change"));

//     arrow.classList.remove("change-animation");
//   }, 1000);
// }
function changeNumberSystem() {
  const arrow = document.getElementById("arrow");
  arrow.classList.add("change-animation");

  setTimeout(() => {
    const [startSystem, resultSystem] = getConversionSystems();
    const [startValue, resultValue] = getSystemValues(
      startSystem,
      resultSystem
    );
    const [startText, resultText] = getSystemTexts(startSystem, resultSystem);

    swapSystemValues(startSystem, resultSystem, startValue, resultValue);
    swapSystemTexts(startSystem, resultSystem, startText, resultText);

    triggerChangeEvents(startSystem, resultSystem);
    arrow.classList.remove("change-animation");
  }, 1000);
}

function getConversionSystems() {
  const startSystem = document.getElementById("convert-start-system");
  const resultSystem = document.getElementById("convert-result-system");
  return [startSystem, resultSystem];
}

function getSystemValues(startSystem, resultSystem) {
  const startValue = startSystem.value;
  const resultValue = resultSystem.value;
  return [startValue, resultValue];
}

function getSystemTexts(startSystem, resultSystem) {
  const startText = startSystem.options[startSystem.selectedIndex].text;
  const resultText = resultSystem.options[resultSystem.selectedIndex].text;
  return [startText, resultText];
}

function swapSystemValues(startSystem, resultSystem, startValue, resultValue) {
  const temp = startValue;
  startSystem.value = resultValue;
  resultSystem.value = temp;
}

function swapSystemTexts(startSystem, resultSystem, startText, resultText) {
  startSystem.options[startSystem.selectedIndex].text = resultText;
  resultSystem.options[resultSystem.selectedIndex].text = startText;
}

function triggerChangeEvents(startSystem, resultSystem) {
  startSystem.dispatchEvent(new Event("change"));
  resultSystem.dispatchEvent(new Event("change"));
}

// Задання теми при запуску сторінки
document.addEventListener("DOMContentLoaded", function () {
  toggleTheme();
});
