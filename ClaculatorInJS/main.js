const currentNumber = document.querySelector('.currentNumber');

const previousNumber = document.querySelector('.previousNumber p');

const mathSymbol = document.querySelector('.mathSymbol');

const numbersButtons = document.querySelectorAll('.number');

const operatorButtons = document.querySelectorAll('.mathOperator');

const equalsButton = document.querySelector('.symbolEquals');

const clearButton = document.querySelector('.clear');

const calculatorHistory = document.querySelector('.history');

const historyBtn = document.querySelector('.clearHistory');

const rootButton = document.querySelector('.symbolRoot');


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

function showRoot() {
    if (currentNumber.innerHTML !== '') {
        let value = Number(currentNumber.innerHTML);
        if (value < 0) {
            result = 'Błąd';
        } else {
            result = Math.sqrt(value);
        }

        const newHistoryItem = document.createElement('li');
        newHistoryItem.innerHTML = `√${value} = ${result}`;
        newHistoryItem.classList.add('history-item');
        calculatorHistory.appendChild(newHistoryItem);

        historyBtn.classList.add('active');
        currentNumber.innerHTML = result;
        previousNumber.innerHTML = '';
        mathSymbol.innerHTML = '';
    }
}
function showResult() {


        if (previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return;

        let x = Number(currentNumber.innerHTML);
        let y = Number(previousNumber.innerHTML);
        let operator = mathSymbol.innerHTML;


        switch (operator) {
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
                if (x === 0) {
                    result = 'error';
                } else {
                    result = y / x;
                }
                break;
            case '%':
                result = y % x;
                break;
        }

        addToHistory();
        historyBtn.classList.add('active');
        currentNumber.innerHTML = result;
        previousNumber.innerHTML = '';
        mathSymbol.innerHTML = '';


    }

function addToHistory () {
    const newHistoryItem = document.createElement('li');
    if (mathSymbol.innerHTML === '√') {
        newHistoryItem.innerHTML = `√${previousNumber.innerHTML} = ${result}`;
    } else {
        newHistoryItem.innerHTML = `${previousNumber.innerHTML} ${mathSymbol.innerHTML} ${currentNumber.innerHTML} = ${result}`;
    }
    newHistoryItem.classList.add('history-item');
    calculatorHistory.prepend(newHistoryItem);
}

function clearScreen(){
    result = '';
    currentNumber.innerHTML = '';
    previousNumber.innerHTML = '';
    mathSymbol.innerHTML = '';
}

function clearHistory () {
    calculatorHistory.textContent = '';
    if(calculatorHistory.textContent === '') {
        historyBtn.classList.remove('active');
    }
}


operatorButtons.forEach((button) => button.addEventListener('click', operate))

equalsButton.addEventListener('click' , showResult);

clearButton.addEventListener('click', clearScreen);

numbersButtons.forEach((button) => {
    button.addEventListener('click', displayNumbers)
})

historyBtn.addEventListener('click', clearHistory);

rootButton.addEventListener('click' , showRoot);

