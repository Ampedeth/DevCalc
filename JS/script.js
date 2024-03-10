// Визначення елементів 
const body = document.body;
const navbar = document.querySelector('.navbar');
const themeIcon = document.getElementById('themeIcon');
const header = document.getElementById('header');
const mainBlock = document.querySelector('.calculator');  
const selectNumberSystem = document.getElementById('select-label-number-system');
const selectAction = document.getElementById('select-label-action');
const result = document.getElementById('result');

// Функція перемикання теми
function toggleTheme() {
  // Перевірка поточної теми
  const isDark = body.classList.contains('dark-theme');
  // Встановлення стилів
  if (isDark) {
    // Світла тема
    body.classList.remove('dark-theme');
    navbar.style.backgroundColor = "#fff";
    navbar.style.color = "#000";
    header.style.color = "#000";
    mainBlock.style.backgroundColor = "#fff";
    body.style.background = "#f0f0f0";
    selectNumberSystem.style.color = "#000";
    selectAction.style.color = "#000";  
    result.style.color = "#000";
  }
  else {
    // Темна тема  
    body.classList.add('dark-theme');
    navbar.style.backgroundColor = "#333";
    navbar.style.color = "#fff";
    header.style.color = "#fff";
    mainBlock.style.backgroundColor = "#333";
    body.style.background = "#adadad";
    selectNumberSystem.style.color = "#fff";
    selectAction.style.color = "#000";
    result.style.color = "#fff";
  }

  // Оновлення іконки теми
  if (isDark) {
    themeIcon.src = "./IMG/moon.png";
  } else {
    themeIcon.src = "./IMG/sun.png";
  }

  themeIcon.classList.add('hidden');

  setTimeout(() => {
    themeIcon.classList.remove('hidden'); 
  }, 300);

}