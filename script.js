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
        if(previousOperand == 0){
            previousScreen.textContent = '0' + '' + operator;
        }else{
            previousScreen.textContent = previousOperand + '' + operator;
        }
    }))

    clear.addEventListener('click', function(){
        previousOperand = '';
        currentOperand = '';
        operator = '';
        currentScreen.textContent = '0';
        previousScreen.textContent = '';
    })

    backspace.addEventListener('click', function(){
        currentOperand = currentOperand.slice(0, -1);
        currentScreen.textContent = currentOperand;
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