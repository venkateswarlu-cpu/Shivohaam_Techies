let display = document.getElementById("display");

let currentValue = "";
let previousValue = "";
let operator = null;

function add(value) {
    if (value === "." && currentValue.includes(".")) return;

    currentValue += value;
    updateDisplay();
}

function soperator(op) {
    if (currentValue === "") return;

    if (previousValue !== "") {
        calculate();
    }

    operator = op;
    previousValue = currentValue;
    currentValue = "";

    updateDisplay();
}

function calculate() {
    if (previousValue === "" || currentValue === "" || operator === null) return;

    let num1 = Number(previousValue);
    let num2 = Number(currentValue);
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                display.value = "Error";
                resetCalculator();
                return;
            }
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
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

function clearDisplay() {
    resetCalculator();
    display.value = "";
}

function resetCalculator() {
    currentValue = "";
    previousValue = "";
    operator = null;
}
