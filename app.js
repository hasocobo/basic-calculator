let firstNumber = 0,
    secondNumber = 0;

let operator = "",
    inputText = "";

let inputQueue = [],
    numberQueue = [],
    signQueue = [];

let buttons = document.querySelectorAll("#calculator-buttons button"),
    textArea = document.querySelector('#text-area'),
    backSpaceButton = document.querySelector('#back-space-button');

buttons.forEach(button => {
    if (button.id != 'back-space-button' 
    && button.id != 'result-button') {
        button.addEventListener('click', () => {
            displayOnTheScreen(button);
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
            result = subtract(firstNum, secondNum);
            break;
    }
    firstNumber = result;
}

function displayOnTheScreen(button) {
    inputQueue.push(button.textContent);
    inputText += button.textContent;
    updateTextArea(inputText);
}

function backSpace() {
    inputText = inputText.substring(0, inputText.length - 1);
    inputQueue.pop();
    updateTextArea(inputText);
}

function showResult() {

}

function updateTextArea(inputText) {
    textArea.textContent = inputText;
}
