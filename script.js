let previousOperand = '';
let currentOperand = '';
let operator = '';

document.addEventListener('DOMContentLoaded', function(){
    let numbers = document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.operator');
    let clear = document.querySelector('.clear');
    let backspace = document.querySelector('.backspace');
    let equals = document.querySelector('.equals');

    let currentScreen = document.querySelector('.lowerDisplay');
    let previousScreen = document.querySelector('.upperDisplay');

    numbers.forEach((number) => number.addEventListener('click', function(e){
        handleNumber(e.target.textContent);
        currentScreen.textContent = currentOperand;
    }))

    operators.forEach((op) => op.addEventListener('click', function(e){
        handleOperator(e.target.textContent);
        previousScreen.textContent = previousOperand + '' + operator;
    }))

    clear.addEventListener('click', function(){
        previousOperand = '';
        currentOperand = '';
        operator = '';
        currentScreen.textContent = '';
        previousScreen.textContent = '';
    })
})

function handleNumber(num){
    if(currentOperand.length <= 18){
        currentOperand += num;
    }
}

function handleOperator(op){
    operator = op;
    previousOperand = currentOperand;
    currentOperand = '';
}