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
const navLinks = document.querySelectorAll(".nav-link");
const navbarButton = document.getElementById("navbar-button");
const logo = document.getElementById("logo");
const themeIcon = document.getElementById("themeIcon");
// Власний alert
const customAlert = document.getElementById("custom-alert");
const customAlertContainer = document.getElementById("custom-alert-container");
const customAlertHeader = document.getElementById("custom-alert-header");
const customAlertMassage = document.getElementById("custom-alert-massage");
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
  // Видаляє клас "dark-theme" з body та встановлює світлі кольори для різних елементів
  body.classList.remove(DARK_THEME);
  body.style.background = "#f0f0f0";
  customAlert.style.backgroundColor = "#ffffff";
  customAlert.style.color = "#000000";
  navbar.style.backgroundColor = "#fff";
  navbar.style.color = "#000";
  navbarButton.style.backgroundColor = "#f0f0f0";
  navbarButton.style.color = "#000";
  calcHeader.style.color = "#000";
  calcDescription.style.color = "#000";
  convertor.style.color = "#000";
  calculator.style.backgroundColor = "#fff";
  convertor.style.backgroundColor = "#fff";
  guide.style.backgroundColor = "#fff";
  guide.style.color = "#000";

  // Фарбуємо всі елементи .nav-link в чорний колір
  navLinks.forEach((link) => {
    link.style.color = "#000000"; // Колір тексту для світлої теми
  });
}

// Встановлення темної теми
function setDarkTheme() {
  // Додає клас "dark-theme" до body та встановлює темні кольори для різних елементів
  body.classList.add(DARK_THEME);
  body.style.background = "#adadad";
  customAlert.style.backgroundColor = "#333";
  customAlert.style.color = "#ffffff";
  navbar.style.backgroundColor = "#333";
  navbar.style.color = "#fff";
  navbarButton.style.backgroundColor = "#adadad";
  navbarButton.style.color = "#fff";
  calcHeader.style.color = "#fff";
  calcDescription.style.color = "#fff";
  convertor.style.color = "#fff";
  calculator.style.backgroundColor = "#333";
  convertor.style.backgroundColor = "#333";
  guide.style.backgroundColor = "#333";
  guide.style.color = "#fff";

  // Фарбуємо всі елементи .nav-link в білий колір
  navLinks.forEach((link) => {
    link.style.color = "#ffffff"; // Колір тексту для темної теми
  });
}

// Встановлення іконки залежно від теми
function updateThemeIcon() {
  // Визначає, чи активна темна тема
  const isDark = body.classList.contains(DARK_THEME);
  // Встановлює відповідну іконку для темної або світлої теми
  const iconSrc = isDark ? "./IMG/moon.png" : "./IMG/sun.png";
  themeIcon.classList.add("hidden");
  setTimeout(() => {
    themeIcon.classList.remove("hidden");
    themeIcon.src = iconSrc;
  }, 300);
}

// Функція для відображення калькулятора
function showCalculator() {
  // Приховує всі інші елементи та відображає калькулятор
  hideAll();
  calculator.style.display = "block";
  setActiveNavLink("nav-link-calc");
}

// Функція для відображення конвертора
function showConvertor() {
  // Приховує всі інші елементи та відображає конвертор
  hideAll();
  convertor.style.display = "block";
  setActiveNavLink("nav-link-convert");
}

// Функція для відображення довідки
function showGuide() {
  // Приховує всі інші елементи та відображає довідку
  hideAll();
  guide.style.display = "block";
  setActiveNavLink("nav-link-guide");
}

// Функція для приховування всіх елементів
function hideAll() {
  // Приховує калькулятор, конвертор та довідку
  calculator.style.display = "none";
  convertor.style.display = "none";
  guide.style.display = "none";
}

// Функція для приховування власного alert
function toggleCustomAlert() {
  // Приховує власний alert
  customAlertContainer.style.display = "none";
}

// Функція для встановлення активного стану навігації
function setActiveNavLink(id) {
  // Видаляє клас "active" з усіх елементів навігації
  const navLinks = document.querySelectorAll(".nav-item .nav-link");
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Встановлює клас "active" для вказаного елемента навігації
  const activeLink = document.getElementById(id);
  activeLink.classList.add("active");

  // Перевіряє наявність класу "dark-theme" в body
  const isDarkTheme = body.classList.contains(DARK_THEME);

  // Встановлює відповідний колір тексту для активного елемента навігації залежно від теми
  if (isDarkTheme) {
    activeLink.style.color = "#ffffff"; // Колір тексту для темної теми
  } else {
    activeLink.style.color = "#000000"; // Колір тексту для світлої теми
  }

  // Зберігає активну вкладку в localStorage
  localStorage.setItem("activeNav", id);
}

// Функція для анімації логотипа при натисканні на нього
function logoAnimate() {
  // Отримує зображення логотипа та додає клас для анімації
  const logoImage = logo.querySelector(".navbar-logo");
  logoImage.classList.add("rotate-animation");
  // Видаляє клас для анімації через 1 секунду
  setTimeout(() => {
    logoImage.classList.remove("rotate-animation");
  }, 1000);
}

// Функція для зміни систем числення на протилежну в конверторі
// function changeNumberSystem() {
//   // Отримує елемент зі стрілкою для анімації
//   const arrow = document.getElementById("arrow");
//   arrow.classList.add("change-animation");

//   setTimeout(() => {
//     // Отримує поточні системи числення та їх значення
//     const [startSystem, resultSystem] = getConversionSystems();
//     const [startSystemValue, resultSystemValue] = getSystemValues(
//       startSystem,
//       resultSystem
//     );
//     const [startText, resultText] = getSystemTexts(startSystem, resultSystem);

//     // Змінюємо значення вводу та результату місцями
//     const input = document.getElementById("convert-input");
//     const result = document.getElementById("convert-result");
//     const inputValue = input.value;
//     const resultValue = result.value;
//     let tempValue = inputValue;
//     input.value = resultValue;
//     result.value = tempValue;

//     // Міняє місцями системи числення та їх значення
//     swapSystemValues(
//       startSystem,
//       resultSystem,
//       startSystemValue,
//       resultSystemValue
//     );
//     swapSystemTexts(startSystem, resultSystem, startText, resultText);

//     // Викликає події зміни для оновлення конвертора
//     triggerChangeEvents(startSystem, resultSystem);
//     arrow.classList.remove("change-animation");
//   }, 1000);
// }
function changeNumberSystem() {
  // Отримує елемент зі стрілкою для анімації
  const arrow = document.getElementById("arrow");
  arrow.classList.add("change-animation");

  setTimeout(() => {
    // Отримує поточні системи числення та їх значення
    const [startSystem, resultSystem] = getConversionSystems();
    const [startSystemValue, resultSystemValue] = getSystemValues(
      startSystem,
      resultSystem
    );
    const [startText, resultText] = getSystemTexts(startSystem, resultSystem);

    // Міняє місцями системи числення та їх значення
    swapSystemValues(
      startSystem,
      resultSystem,
      startSystemValue,
      resultSystemValue
    );
    swapSystemTexts(startSystem, resultSystem, startText, resultText);

    // Міняє місцями значення input'ів
    swapInputValues();

    // Викликає події зміни для оновлення конвертора
    triggerChangeEvents(startSystem, resultSystem);

    arrow.classList.remove("change-animation");
  }, 1000);
}

// Функція для отримання елементів систем числення
function getConversionSystems() {
  const startSystem = document.getElementById("convert-start-system");
  const resultSystem = document.getElementById("convert-result-system");
  return [startSystem, resultSystem];
}

// Функція для отримання значень систем числення
function getSystemValues(startSystem, resultSystem) {
  const startSystemValue = startSystem.value;
  const resultSystemValue = resultSystem.value;
  return [startSystemValue, resultSystemValue];
}

// Функція для отримання текстових позначень систем числення
function getSystemTexts(startSystem, resultSystem) {
  const startText = startSystem.options[startSystem.selectedIndex].text;
  const resultText = resultSystem.options[resultSystem.selectedIndex].text;
  return [startText, resultText];
}

// Функція для отримання елементів input'ів
function getInputElements() {
  const input = document.getElementById("convert-input");
  const result = document.getElementById("convert-result");
  return [input, result];
}

// Функція для обміну значень систем числення
function swapSystemValues(
  startSystem,
  resultSystem,
  startSystemValue,
  resultSystemValue
) {
  const temp = startSystemValue;
  startSystem.value = resultSystemValue;
  resultSystem.value = temp;
}

// Функція для обміну текстових позначень систем числення
function swapSystemTexts(startSystem, resultSystem, startText, resultText) {
  startSystem.options[startSystem.selectedIndex].text = resultText;
  resultSystem.options[resultSystem.selectedIndex].text = startText;
}

// Функція для обміну значень input'ів
function swapInputValues() {
  const [input, result] = getInputElements();
  const inputValue = input.value;
  const resultValue = result.value;
  input.value = resultValue;
  result.value = inputValue;
}

// Функція для викликання подій зміни систем числення
function triggerChangeEvents(startSystem, resultSystem) {
  startSystem.dispatchEvent(new Event("change"));
  resultSystem.dispatchEvent(new Event("change"));
}

// Виконується при старті сторінки
document.addEventListener("DOMContentLoaded", function () {
  // Встановлення теми при старті сторінки
  toggleTheme();
  // Приховування власного alert при старті сторінки
  customAlertContainer.style.display = "none";
  // Отримуємо URL ідентифікатор сторінки і встановлюємо активний стан навігації
  const currentURL = window.location.href;
  if (currentURL.includes("calculator")) {
    setActiveNavLink("nav-link-calc");
  } else if (currentURL.includes("convertor")) {
    setActiveNavLink("nav-link-convert");
  } else if (currentURL.includes("guide")) {
    setActiveNavLink("nav-link-guide");
  }
});
