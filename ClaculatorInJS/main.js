const currentNumber = document.querySelector('.currentNumber');

const previousNumber = document.querySelector('.previousNumber p');

const mathSymbol = document.querySelector('.mathSymbol');

const numbersButtons = document.querySelectorAll('.number');

const operatorButtons = document.querySelectorAll('.mathOperator');

const equalsButton = document.querySelector('.symbolEquals');

const clearButton = document.querySelector('.clear');

const resetHistoryButton = document.querySelector('.resetHistory');



let result = '';


function displayNumbers() {
    if (this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
    if (this.textContent === '.' && currentNumber.innerHTML === '') return currentNumber.innerHTML = '.0'
    currentNumber.innerHTML += this.textContent;
}

function operate() {
    if(currentNumber.innerHTML === '' && this.textContent === '-'){
        currentNumber.innerHTML = '-';
    }

    else if (currentNumber.innerHTML === ''){
        return;
    }

    if(mathSymbol.innerHTML !== ''){
        showResult();
    }
    previousNumber.innerHTML = currentNumber.innerHTML;
    mathSymbol.innerHTML = this.textContent;
    currentNumber.innerHTML= '';
}

function showResult() {
    if(previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return;

    let x = Number(currentNumber.innerHTML);
    let y = Number(previousNumber.innerHTML);
    let operator = mathSymbol.innerHTML;

    switch(operator) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = y - x;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = y / x;
            break;
        case '%':
            result = y % x;
            break;
        case '√':
            result = x + y;
            break;
    }

    currentNumber.innerHTML = result;
    previousNumber.innerHTML = '';
    mathSymbol.innerHTML = '';




    }

function clearScreen(){

}






































operatorButtons.forEach((button) => button.addEventListener('click', operate))

equalsButton.addEventListener('click' , showResult);

clearButton.addEventListener('click', clearScreen);

numbersButtons.forEach((button) => {
    button.addEventListener('click', displayNumbers)
})

