let firstNumber = 0,
    secondNumber = 0;

let operator = "",
    inputText = "",
    inputNumber = "";

let inputQueue = [],
    numberQueue = [],
    signQueue = [];

let buttons = document.querySelectorAll("#calculator-buttons button"),
    textArea = document.querySelector('#text-area'),
    backSpaceButton = document.querySelector('#back-space-button');

let firstLoop = true;

buttons.forEach(button => {
    if (button.id != 'back-space-button' 
    && button.id != 'result-button') {
        button.addEventListener('click', () => {
            inputText += button.textContent;
            updateTextArea(inputText);
            
            if (button.classList.contains('number')) {
                inputNumber += button.textContent;
            }
            
            else if (button.classList.contains('operator')){
                if(inputNumber != ""){
                    numberQueue.push(+inputNumber);
                    if(firstLoop) {
                        firstNumber = numberQueue[0]
                    }
                    firstLoop = false;

                    
                }
                signQueue.push(button.textContent);
                inputNumber = "";
            }
            inputQueue.push(button.textContent);
        });
    }

    else if (button.id == 'back-space-button') {
        button.addEventListener('click', backSpace);
    }

    else if (button.id == 'result-button') {
        button.addEventListener('click', showResult);
    }

})

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function operate(firstNum = firstNumber, operator, secondNum){
    let result = 0;
    switch(operator) {
        case "+":
            result = add(firstNum, secondNum);
            break;
        case "-":
            result = subtract(firstNum, secondNum);
            break;
        case "x":
            result = multiply(firstNum, secondNum);
            break;
        case "/":
            result = divide(firstNum, secondNum);
            break;
    }
    firstNumber = result;
    numberQueue.unshift(firstNumber);
}


function backSpace() {
    inputText = inputText.substring(0, inputText.length - 1);
    inputQueue.pop();
    updateTextArea(inputText);
}

function showResult() {
    if(inputNumber != ""){
        numberQueue.push(+inputNumber);
    }
    inputNumber = "";

    while(signQueue.length > 0){
        operate(numberQueue.shift(), signQueue.shift(), numberQueue.shift());
        updateTextArea(numberQueue[0]);
    }

}

function updateTextArea(value) {
    textArea.textContent = value;
    inputText = value.toString();

}
