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
  let result = ''
  let first_number_to_DEC = '';
  let second_number_to_DEC = '';

  // Код який конвертує введені числа в десяткову систему числення для зменьшення об'єма коду
  
  first_number_to_DEC = parseInt(firstNumber, numberSystem)
  second_number_to_DEC = parseInt(secondNumber, numberSystem)
  

  // Виконання дії на числами
  switch (action) {
    case "+" :
      result = first_number_to_DEC + second_number_to_DEC;
      break;
    case '-':
      result = first_number_to_DEC - second_number_to_DEC;
      break;
    case '*':
      result = first_number_to_DEC * second_number_to_DEC;
      break;
    case '/':
      result = first_number_to_DEC / second_number_to_DEC;
      break;
  }

  // Конвертування відповідь в потрібну систему числення
  if (numberSystem == '16') {
    result = Number(result).toString(numberSystem).toUpperCase();
  } else { result = Number(result).toString(numberSystem) }
  
  // Виведення результату
  calcResult.textContent = result;
}

// Функція обчислення результату в конверторі
function convert() {
  const startSystem = convertStartSystem.value;
  const input = convertInput.value;
  const resultSystem = convertResultSystem.value;
  let result = convertResult.value;
  let input_to_DEC = '';

  // Код який конвертує введене число в десяткову систему числення для зменьшення об'єма коду
  if (startSystem === 'BIN') {
    input_to_DEC = parseInt(input, 2)
  } else if (startSystem === 'OCT') {
    input_to_DEC = parseInt(input, 8)
  } else if (startSystem === 'HEX'){
    input_to_DEC = parseInt(input, 16)
  } else {
    input_to_DEC = input
  };

  //Код який переводить число з десяткової в потрібну користувачеві систему ислення
  if (resultSystem == '16') {
    result = Number(input_to_DEC).toString(resultSystem).toUpperCase()
  } else {result = Number(input_to_DEC).toString(resultSystem)}
  
  // Виводимо значення
  convertResult.value = result;
  convertResult.style.fontWeight = "bold";
}