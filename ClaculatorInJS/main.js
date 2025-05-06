const currentNumber = document.querySelector('.currentNumber');

const previousNumber = document.querySelector('.previousNumber p');

const mathSymbol = document.querySelector('.mathSymbol');

const numbersButtons = document.querySelectorAll('.number');

const operatorButtons = document.querySelectorAll('.mathOperator');

const equalsButton = document.querySelector('.symbolEquals');

const clearButton = document.querySelector('.clear');

const calculatorHistory = document.querySelector('.history');

const historyBtn = document.querySelector('.clearHistory');



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

    if(mathSymbol.innerHTML === '√'){

        let y = Number(previousNumber.innerHTML);
        result = Math.sqrt(y);

        addToHistory();
        historyBtn.classList.add('active');
        currentNumber.innerHTML = result;
        previousNumber.innerHTML = '';
        mathSymbol.innerHTML = '';
    }
    else {
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
                result = y / x;
                break;
            case '%':
                result = y % x;
                break;
            case '√':
                result = Math.sqrt(y);
                break;
        }

        addToHistory();
        historyBtn.classList.add('active');
        currentNumber.innerHTML = result;
        previousNumber.innerHTML = '';
        mathSymbol.innerHTML = '';


    }
    }

function addToHistory () {
    const newHistoryItem = document.createElement('li');
    newHistoryItem.innerHTML = `${previousNumber.innerHTML} ${mathSymbol.innerHTML} ${currentNumber.innerHTML} = ${result}`
    newHistoryItem.classList.add('history-item');
    calculatorHistory.appendChild(newHistoryItem);
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

