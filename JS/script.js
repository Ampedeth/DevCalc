// Функція для зміни теми
let mainBlock = document.querySelector('.calculator');
let body = document.body;
let selectLabelNumberSystem = document.getElementById('select-label-number-system');
let selectLabelAction = document.getElementById('select-label-action');
function toggleTheme() {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        mainBlock.style.backgroundColor = '#fff';
        body.style.background = '#f0f0f0';
        selectLabelNumberSystem.style.color = '#000';
        selectLabelAction.style.color = '#000';
    } else {
        body.classList.add('dark-theme');
        mainBlock.style.backgroundColor = '#333';
        body.style.background = '#adadad';
        selectLabelNumberSystem.style.color = '#adadad';
        selectLabelAction.style.color = '#adadad';
    }
}