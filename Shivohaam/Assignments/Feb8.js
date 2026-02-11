let display = document.getElementById("display");
let display1 = document.getElementById("display1");

let currentValue = "";
let previousValue = "";
let operator = null;
let rawInput = "";
let isInvalid = false;

let inputLength = 0;      
const max_len = 25;

function add(value) {
    if (isInvalid) return;

    if (inputLength >= max_len) {
        setInvalid();
        return;
    }

    currentValue += value;
    rawInput += value;
    inputLength++;

    display1.value = rawInput;
    updateDisplay();
}

function soperator(op) {
    if (isInvalid) return;
    if (currentValue === "") return;

    if (previousValue !== "") {
        calculate();
    }

    operator = op;
    previousValue = currentValue;
    currentValue = "";

    rawInput += " " + op + " ";
    display1.value = rawInput;

    updateDisplay();
}

function calculate() {
    if (isInvalid) return;
    if (previousValue === "" || currentValue === "" || operator === null) return;

    let num1 = Number(previousValue);
    let num2 = Number(currentValue);
    let result;

    switch (operator) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/":
            if (num2 === 0) {
                setInvalid();
                return;
            }
            result = num1 / num2;
            break;
        case "%": result = num1 % num2; break;
    }

    currentValue = result.toString();
    previousValue = "";
    operator = null;

    updateDisplay();
}

function updateDisplay() {
    display.value =
        previousValue +
        (operator ? " " + operator + " " : "") +
        currentValue;
}

function setInvalid() {
    display.value = "Invalid";
    display1.value = "Invalid";
    isInvalid = true;
}

function clearDisplay() {
    resetCalculator();
    display.value = "";
    display1.value = "";
    rawInput = "";
    inputLength = 0;
    isInvalid = false;
}

function resetCalculator() {
    currentValue = "";
    previousValue = "";
    operator = null;
}
function backspace() {
    if (isInvalid) return;
    if (rawInput.length === 0) return;

    let chars = rawInput.split("");
    let char =currentValue.split("");

    let newArr = [];
    for (let i = 0; i < chars.length - 1; i++) {
        newArr.unshift(chars[i]);
    }
    newArr.reverse();
    
    let newArr1 = [];
    for (let i = 0; i < chars.length - 1; i++) {
        newArr1.unshift(chars[i]);
    }
    

    rawInput = newArr.join("");
    currentValue=newArr.join("");
    display1.value = rawInput;
    display1.value=currentValue;

    updateDisplay();
}





