const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';
let firstOperand = null;

buttons.forEach(button => {
button.addEventListener('click', () => {
const value = button.value;

        if (value === 'C') {
clear();
        } else if (value === '=') {
calculate();
        } else if (['+', '-', '*', '/', '%'].includes(value)) {
setOperator(value);
        } else {
appendToDisplay(value);
        }
    });
});

function appendToDisplay(value) {
currentInput += value;
display.value = currentInput;
}

function setOperator(value) {
    if (currentInput === '') return;
    if (firstOperand === null) {
firstOperand = parseFloat(currentInput);
    } else {
calculate();
    }
    operator = value;
currentInput = '';
}

function calculate() {
    if (firstOperand === null || currentInput === '' || operator === '') return;
const secondOperand = parseFloat(currentInput);
    let result;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        case '%':
            result = firstOperand % secondOperand;
            break;
    }

display.value = result;
firstOperand = result; // Allow chaining
currentInput = '';
    operator = '';
}

function clear() {
currentInput = '';
    operator = '';
firstOperand = null;
display.value = '';
}
