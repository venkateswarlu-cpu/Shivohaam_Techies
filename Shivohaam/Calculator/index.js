// Advanced Calculator Application
// Demonstrates all JavaScript concepts: variables, scopes, string methods, loops, and arithmetic operations

// Global variables for calculator state
let currentInput = "0";
let previousInput = "";
let currentOperator = null;
let shouldResetInput = false;
let calculationHistory = [];

// Constants for calculator configuration
const MAX_DISPLAY_LENGTH = 15;
const HISTORY_LIMIT = 50;

// DOM element references - using const for immutable references
const dialElement = document.getElementById("dial");
const historyElement = document.getElementById("history");
const historyListElement = document.getElementById("historyList");

/**
 * Input validation and cleaning using string methods
 * @param {string} input - Raw input string
 * @returns {string} - Cleaned and validated input
 */
function cleanAndValidateInput(input) {
  // Remove whitespace and convert to string
  let cleanedInput = input.toString().trim(); // De c v
  // Decv

  // Remove leading zeros (but keep single zero)
  cleanedInput = cleanedInput.replace(/^0+(?=\d)/, "");

  // Ensure we have at least '0'
  if (cleanedInput === "" || cleanedInput === ".") {
    cleanedInput = "0";
  }

  // Limit decimal places
  if (cleanedInput.includes(".")) {
    const parts = cleanedInput.split(".");
    if (parts[1] && parts[1].length > 8) {
      cleanedInput = parts[0] + "." + parts[1].substring(0, 8);
    }
  }

  return cleanedInput;
}

/**
 * Update the display with current input and history
 */
function updateDisplay() {
  // Clean and format the current input
  const displayValue = cleanAndValidateInput(currentInput);

  // Format large numbers with commas
  let formattedValue = displayValue;
  if (!displayValue.includes(".") && displayValue.length > 3) {
    formattedValue = parseFloat(displayValue).toLocaleString();
  }

  dialElement.textContent = formattedValue;

  // Update history display
  if (previousInput && currentOperator) {
    const operatorSymbol = getOperatorSymbol(currentOperator);
    historyElement.textContent = `${previousInput} ${operatorSymbol}`;
  } else {
    historyElement.textContent = "";
  }
}

/**
 * Get display symbol for operators
 * @param {string} operator - Operator character
 * @returns {string} - Display symbol
 */
function getOperatorSymbol(operator) {
  const operatorSymbols = {
    "+": "+",
    "-": "−",
    "*": "×",
    "/": "÷",
    "%": "%",
    "^": "^",
  };
  return operatorSymbols[operator] || operator;
}

/**
 * Append number to current input
 * @param {string} number - Number to append
 */
function appendNumber(number) {
  // Use let for variables that will be reassigned
  let newInput = currentInput;

  if (shouldResetInput) {
    newInput = "0";
    shouldResetInput = false;
  }

  // Handle input length limit
  if (newInput.length >= MAX_DISPLAY_LENGTH) {
    return;
  }

  // Append number using string methods
  if (newInput === "0") {
    newInput = number;
  } else {
    newInput += number;
  }

  currentInput = cleanAndValidateInput(newInput);
  updateDisplay();
}

/**
 * Append decimal point
 */
function appendDecimal() {
  if (shouldResetInput) {
    currentInput = "0";
    shouldResetInput = false;
  }

  // Check if decimal already exists using string method
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
}

/**
 * Append operator
 * @param {string} operator - Operator to append
 */
function appendOperator(operator) {
  // Handle percentage as immediate calculation
  if (operator === "%") {
    calculatePercentage();
    return;
  }

  // If we have a pending calculation, perform it first
  if (previousInput && currentOperator && !shouldResetInput) {
    calculate();
  }

  previousInput = currentInput;
  currentOperator = operator;
  shouldResetInput = true;
  updateDisplay();
}

/**
 * Calculate percentage
 */
function calculatePercentage() {
  const num = parseFloat(currentInput);
  if (!isNaN(num)) {
    currentInput = (num / 100).toString();
    updateDisplay();
    addToHistory(`${num}%`, currentInput);
  }
}

/**
 * Square function
 */
function square() {
  const num = parseFloat(currentInput);
  if (!isNaN(num)) {
    const result = num * num;
    addToHistory(`${num}²`, result.toString());
    currentInput = result.toString();
    shouldResetInput = true;
    updateDisplay();
  }
}

/**
 * Square root function
 */
function sqrt() {
  const num = parseFloat(currentInput);
  if (!isNaN(num)) {
    if (num < 0) {
      showError("Cannot calculate square root of negative number");
      return;
    }
    const result = Math.sqrt(num);
    addToHistory(`√${num}`, result.toString());
    currentInput = result.toString();
    shouldResetInput = true;
    updateDisplay();
  }
}

/**
 * Reciprocal function (1/x)
 */
function reciprocal() {
  const num = parseFloat(currentInput);
  if (!isNaN(num)) {
    if (num === 0) {
      showError("Cannot divide by zero");
      return;
    }
    const result = 1 / num;
    addToHistory(`1/${num}`, result.toString());
    currentInput = result.toString();
    shouldResetInput = true;
    updateDisplay();
  }
}

/**
 * Perform calculation based on current operator
 */
function calculate() {
  if (!previousInput || !currentOperator) {
    return;
  }

  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) {
    showError("Invalid input");
    return;
  }

  let result;
  const operatorSymbol = getOperatorSymbol(currentOperator);

  // Switch statement for different operations
  switch (currentOperator) {
    case "+":
      result = addition(prev, current);
      break;
    case "-":
      result = subtraction(prev, current);
      break;
    case "*":
      result = multiplication(prev, current);
      break;
    case "/":
      result = division(prev, current);
      break;
    case "%":
      result = modulus(prev, current);
      break;
    case "^":
      result = exponentiation(prev, current);
      break;
    default:
      showError("Unknown operator");
      return;
  }

  // Add to history
  const calculation = `${previousInput} ${operatorSymbol} ${currentInput}`;
  addToHistory(calculation, result.toString());

  // Update state
  currentInput = result.toString();
  previousInput = "";
  currentOperator = null;
  shouldResetInput = true;
  updateDisplay();
}

/**
 * Addition function
 * @param {number} a - First operand
 * @param {number} b - Second operand
 * @returns {number} - Sum
 */
function addition(a, b) {
  return a + b;
}

/**
 * Subtraction function
 * @param {number} a - First operand
 * @param {number} b - Second operand
 * @returns {number} - Difference
 */
function subtraction(a, b) {
  return a - b;
}

/**
 * Multiplication function
 * @param {number} a - First operand
 * @param {number} b - Second operand
 * @returns {number} - Product
 */
function multiplication(a, b) {
  return a * b;
}

/**
 * Division function with error handling
 * @param {number} a - First operand
 * @param {number} b - Second operand
 * @returns {number} - Quotient
 */
function division(a, b) {
  if (b === 0) {
    showError("Cannot divide by zero");
    return a;
  }
  return a / b;
}

/**
 * Modulus (remainder) function
 * @param {number} a - First operand
 * @param {number} b - Second operand
 * @returns {number} - Remainder
 */
function modulus(a, b) {
  if (b === 0) {
    showError("Cannot divide by zero");
    return a;
  }
  return a % b;
}

/**
 * Exponentiation function
 * @param {number} a - Base
 * @param {number} b - Exponent
 * @returns {number} - Result
 */
function exponentiation(a, b) {
  return Math.pow(a, b);
}

/**
 * Clear all calculator state
 */
function clearAll() {
  // Reset all variables to initial state
  currentInput = "0";
  previousInput = "";
  currentOperator = null;
  shouldResetInput = false;
  updateDisplay();
}

/**
 * Backspace function - remove last character
 */
function backspace() {
  if (shouldResetInput || currentInput === "0") {
    return;
  }

  // Use string method to remove last character
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = "0";
  }

  updateDisplay();
}

/**
 * Add calculation to history
 * @param {string} calculation - Calculation string
 * @param {string} result - Result string
 */
function addToHistory(calculation, result) {
  // Create history item object
  const historyItem = {
    calculation: calculation,
    result: result,
    timestamp: new Date().toLocaleTimeString(),
  };

  // Add to beginning of array
  calculationHistory.unshift(historyItem);

  // Limit history size using a loop
  if (calculationHistory.length > HISTORY_LIMIT) {
    // Remove oldest items
    for (let i = calculationHistory.length - 1; i >= HISTORY_LIMIT; i--) {
      calculationHistory.pop();
    }
  }

  updateHistoryDisplay();
}

/**
 * Update history display
 */
function updateHistoryDisplay() {
  // Clear existing history
  historyListElement.innerHTML = "";

  // Loop through history and create elements
  for (let i = 0; i < calculationHistory.length; i++) {
    const item = calculationHistory[i];

    // Create history item element
    const historyItemDiv = document.createElement("div");
    historyItemDiv.className = "history-item";

    // Format history text using string methods
    const historyText = `${item.calculation} = ${item.result}`;
    historyItemDiv.textContent = historyText;

    // Add click handler to reuse calculation
    historyItemDiv.addEventListener("click", function () {
      currentInput = item.result;
      shouldResetInput = true;
      updateDisplay();
    });

    historyListElement.appendChild(historyItemDiv);
  }
}

/**
 * Clear calculation history
 */
function clearHistory() {
  // Use array method to clear history
  calculationHistory.length = 0;
  updateHistoryDisplay();
}

/**
 * Show error message
 * @param {string} message - Error message to display
 */
function showError(message) {
  // Display error in dial
  dialElement.textContent = message;

  // Reset after delay
  setTimeout(() => {
    currentInput = "0";
    updateDisplay();
  }, 2000);
}

/**
 * Keyboard support
 */
document.addEventListener("keydown", function (event) {
  const key = event.key;

  // Prevent default for calculator keys
  if ("0123456789+-*/.%^".includes(key)) {
    event.preventDefault();
  }

  // Handle different key types
  if (key >= "0" && key <= "9") {
    appendNumber(key);
  } else if (key === ".") {
    appendDecimal();
  } else if (key === "+") {
    appendOperator("+");
  } else if (key === "-") {
    appendOperator("-");
  } else if (key === "*") {
    appendOperator("*");
  } else if (key === "/") {
    event.preventDefault();
    appendOperator("/");
  } else if (key === "%") {
    appendOperator("%");
  } else if (key === "^") {
    appendOperator("^");
  } else if (key === "Enter" || key === "=") {
    event.preventDefault();
    calculate();
  } else if (key === "Escape" || key === "c" || key === "C") {
    clearAll();
  } else if (key === "Backspace") {
    backspace();
  }
});

/**
 * Initialize calculator on page load
 */
function initializeCalculator() {
  // Set initial state
  clearAll();
  updateHistoryDisplay();

  // Demonstrate variable scopes
  demonstrateVariableScopes();

  console.log("Calculator initialized successfully!");
}

/**
 * Demonstrate different variable scopes
 */
function demonstrateVariableScopes() {
  // Global scope variables (already defined above)

  // Function scope variables
  var functionScopedVar = "I am function scoped (var)";
  let blockScopedLet = "I am block scoped (let)";
  const blockScopedConst = "I am block scoped and constant (const)";

  // Block scope demonstration
  {
    var stillFunctionScoped = "Still function scoped even in block";
    let onlyBlockScoped = "Only available in this block";
    const alsoBlockScoped = "Also only available in this block";

    console.log("Inside block:", {
      functionScopedVar,
      blockScopedLet,
      blockScopedConst,
      stillFunctionScoped,
      onlyBlockScoped,
      alsoBlockScoped,
    });
  }

  // This would cause an error - uncomment to test
  // console.log(onlyBlockScoped); // ReferenceError

  console.log("Function scope demo completed");
}

// Initialize calculator when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeCalculator);
