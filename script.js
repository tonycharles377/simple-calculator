let previousOperand = '';
let currentOperand = '';
let operator = '';
let result = '';

document.addEventListener('DOMContentLoaded', function(){
    let numbers = document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.operator');
    let clear = document.querySelector('.clear');
    let backspace = document.querySelector('.backspace');
    let equals = document.querySelector('.equals');

    let currentScreen = document.querySelector('.lowerDisplay');
    let previousScreen = document.querySelector('.upperDisplay');

    alert('Developement in progress!');

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
        result = '';
        operator = '';
        currentScreen.textContent = '0';
        previousScreen.textContent = '';
    })

    backspace.addEventListener('click', function(){
        currentOperand = currentOperand.slice(0, -1);
        currentScreen.textContent = currentOperand;
    })

    equals.addEventListener('click', function(){
        calculate();
        if(previousOperand === '' || currentOperand === '' || operator === '' || result === NaN){
            previousOperand = '';
            currentOperand = '';
            result = '';
            operator = '';
            currentScreen.textContent = '0';
            previousScreen.textContent = '';
        }else{
            previousScreen.textContent = previousOperand + '' + operator + '' + currentOperand + '' + '=';
            currentScreen.textContent = result;
        }
        
    })
})

function handleNumber(num){
    if(currentOperand.length <= 18){
        currentOperand += num;
    }
}

function handleOperator(op){
    operator = op;
    if(result){
        previousOperand = result;
        currentOperand = '';
    }else{
        previousOperand = currentOperand;
        currentOperand = '';
    }
}

function calculate(){
    previousOperand = Number(previousOperand);
    currentOperand = Number(currentOperand);

    if(operator === '+'){
        result = previousOperand + currentOperand;
    }else if(operator === 'x'){
        result = previousOperand * currentOperand;
    }else if(operator === '-'){
        result = previousOperand - currentOperand;
    }else {
        result = previousOperand / currentOperand;
    }

    previousOperand = previousOperand.toString();
    currentOperand = currentOperand.toString();
    result = result.toString();
}