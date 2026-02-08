var calculationCount = 0;

function calculate(operator) {
    let input1 = document.getElementById("num1").value;
    let input2 = document.getElementById("num2").value;


    input1 = input1.trim().replace(/,/g, "");
    input2 = input2.trim().replace(/,/g, "");

    if (input1 === "" || input2 === "") {
        displayResult("Please enter both numbers.");
        return;
    }

    if (isNaN(input1) || isNaN(input2)) {
        displayResult("Invalid input. Enter numeric values only.");
        return;
    }

    const num1 = Number(input1);
    const num2 = Number(input2);

    let result;
    
    for (let i = 0; i < 1; i++) {
        switch (operator) {
            case "+":
                result = add(num1, num2);
                break;
            case "-":
                result = subtract(num1, num2);
                break;
            case "*":
                result = multiply(num1, num2);
                break;
            case "/":
                result = divide(num1, num2);
                break;
            case "%":
                result = remainder(num1, num2);
                break;
            case "**":
                result = power(num1, num2);
                break;
            case "percent":
                result = percentage(num1, num2);
                break;
            default:
                displayResult("Invalid operation.");
                return;
        }
    }

    calculationCount++;

    displayResult(
        "Result: " + result.toFixed(2) +
        " | Calculations performed: " + calculationCount
    );
}

function clearCalculator() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

    document.getElementById("result").textContent = "";
}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        displayResult("Error: Division by zero is not allowed.");
        throw new Error("Division by zero");
    }
    return a / b;
}

function remainder(a, b) {
    return a % b;
}

function power(a, b) {
    return a ** b;
}

function percentage(a, b) {
    return (a / 100) * b;
}

function displayResult(message) {
    message = message.toString().trim();
    document.getElementById("result").textContent = message;
}
