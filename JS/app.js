// _____________________________
// _________ Елементи __________
// _____________________________
// Елементи калькулятора
const calcNumberSystem = document.getElementById("calc-number-system");
const calcFirstNumber = document.getElementById("calc-first-number");
const calcAction = document.getElementById("calc-action");
const calcSecondNumber = document.getElementById("calc-second-number");
const calcResult = document.getElementById("calc-result");
// Елементи конвертора
const convertStartSystem = document.getElementById("convert-start-system");
const convertInput = document.getElementById("convert-input");
const convertResultSystem = document.getElementById("convert-result-system");
const convertResult = document.getElementById("convert-result");

// _____________________________
// __________ Функції __________
// _____________________________
// Функція обчислення результату в калькуляторі
function calculate() {
  const numberSystem = calcNumberSystem.value
  const firstNumber = calcFirstNumber.value;
  const action = calcAction.value;
  const secondNumber = calcSecondNumber.value;
  // Виводимо значення у вікні alert
  alert("Система числення: " + numberSystem + "\n" +
        "Перше число: " + firstNumber + "\n" +
        "Дія: " + action + "\n" +
        "Друге число: " + secondNumber);
}

// Функція обчислення результату в конверторі
function convert() {
  const startSystem = convertStartSystem.value;
  const input = convertInput.value;
  const resultSystem = convertResultSystem.value;
  const result = convertResult.value;
  // Виводимо значення у вікні alert
  alert("Початкова система: " + startSystem + "\n" +
        "Введене значення: " + input + "\n" +
        "Результатна система: " + resultSystem + "\n" +
        "Результат: " + result);
}