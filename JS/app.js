// ________________________________________________________________________________________
// ____________________________________ Елементи __________________________________________
// ________________________________________________________________________________________
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

// ________________________________________________________________________________________
// ____________________________________ Функції ___________________________________________
// ________________________________________________________________________________________
// Функція обчислення результату в калькуляторі
function calculate() {
  const numberSystem = calcNumberSystem.value;
  const firstNumber = calcFirstNumber.value;
  const action = calcAction.value;
  const secondNumber = calcSecondNumber.value;
  let result = "";
  let first_number_to_DEC = "";
  let second_number_to_DEC = "";

  let status = validation("calculate");
  if (status === "error") {
    return;
  }

  // Код який конвертує введені числа в десяткову систему числення для зменшення об'єму коду

  first_number_to_DEC = parseInt(firstNumber, numberSystem);
  second_number_to_DEC = parseInt(secondNumber, numberSystem);

  // Виконання дії на числами
  switch (action) {
    case "+":
      result = first_number_to_DEC + second_number_to_DEC;
      break;
    case "-":
      result = first_number_to_DEC - second_number_to_DEC;
      break;
    case "*":
      result = first_number_to_DEC * second_number_to_DEC;
      break;
    case "/":
      result = first_number_to_DEC / second_number_to_DEC;
      break;
  }

  // Конвертування відповідь в потрібну систему числення
  if (numberSystem == "16") {
    result =
      "Результат: " + Number(result).toString(numberSystem).toUpperCase();
  } else {
    result = "Результат: " + Number(result).toString(numberSystem);
  }

  // Виведення результату
  calcResult.textContent = result;
}

// Функція обчислення результату в конверторі
function convert() {
  const startSystem = convertStartSystem.value;
  const input = convertInput.value;
  const resultSystem = convertResultSystem.value;
  let result = convertResult.value;
  let input_to_DEC = "";

  let status = validation("convert");
  if (status === "error") {
    return;
  }

  // Код який конвертує введене число в десяткову систему числення для зменшення об'єму коду
  if (startSystem === "2") {
    input_to_DEC = parseInt(input, 2);
  } else if (startSystem === "8") {
    input_to_DEC = parseInt(input, 8);
  } else if (startSystem === "16") {
    input_to_DEC = parseInt(input, 16);
  } else {
    input_to_DEC = input;
  }

  //Код який переводить число з десяткової в потрібну користувачеві систему числення
  if (resultSystem == "16") {
    result = Number(input_to_DEC).toString(resultSystem).toUpperCase();
  } else {
    result = Number(input_to_DEC).toString(resultSystem);
  }

  // Виводимо значення
  convertResult.value = result;
}

// Валідація значень
function validation(typeValidation) {
  let status = "normal"; // За замовчуванням статус - нормальний

  switch (typeValidation) {
    case "calculate":
      if (!isValidField(calcNumberSystem.value)) {
        showAlert("Ви не вказали систему числення");
        status = "error";
      } else if (!isValidField(calcFirstNumber.value)) {
        showAlert("Ви не ввели перше число");
        status = "error";
      } else if (
        !isValidNumber(calcFirstNumber.value, calcNumberSystem.value)
      ) {
        showAlert("Перше число не відповідає обраній системі числення");
        status = "error";
      } else if (!isValidField(calcAction.value)) {
        showAlert("Ви не обрали дію");
        status = "error";
      } else if (!isValidField(calcSecondNumber.value)) {
        showAlert("Ви не ввели друге число");
        status = "error";
      } else if (
        !isValidNumber(calcSecondNumber.value, calcNumberSystem.value)
      ) {
        showAlert("Друге число не відповідає обраній системі числення");
        status = "error";
      }
      break;
    case "convert":
      if (!isValidField(convertStartSystem.value)) {
        showAlert("Ви не вказали систему числення для вводу");
        status = "error";
      } else if (!isValidField(convertResultSystem.value)) {
        showAlert("Ви не вказали систему числення для результату");
        status = "error";
      } else if (!isValidField(convertInput.value)) {
        showAlert("Ви не ввели число для конвертації");
        status = "error";
      } else if (!isValidNumber(convertInput.value, convertStartSystem.value)) {
        showAlert(
          "Введене число не відповідає обраній системі числення для вводу"
        );
        status = "error";
      }
      break;
  }

  return status;
}

// Перевіряє, чи не є введене значення порожнім
function isValidField(value) {
  return value.trim() !== "";
}

// Виводить повідомлення з переданим текстом на екран
function showAlert(message) {
  alert(message);
}

// Перевірка чи відповідає введене число системі числення
function isValidNumber(number, system) {
  const regex = getRegexForSystem(system);
  return regex.test(number);
}

// Повертає регулярний вираз для перевірки числа залежно від обраної системи числення
function getRegexForSystem(system) {
  switch (system) {
    case "2":
      return /^[01]+$/; // Двійкова система числення
    case "8":
      return /^[0-7]+$/; // Вісімкова система числення
    case "10":
      return /^\d+$/; // Десяткова система числення
    case "16":
      return /^[0-9A-Fa-f]+$/; // Шістнадцяткова система числення
    default:
      return /^\d+$/; // За замовчуванням перевіряємо на десяткове число
  }
}
