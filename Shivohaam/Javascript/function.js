/* 

Functions => 
A function is a block of code designed to perform a particular task. It is executed when "something" invokes it (calls it). Functions are reusable pieces of code that can be called multiple times with different arguments to perform the same task.
In JavaScript, you can define a function using the function keyword, followed by the name of the function, parentheses for parameters, and curly braces for the function body. For example:
 
// General basic types of functions in JavaScript =>

=> Pre defined functions => JavaScript provides a number of built-in functions that you can use in your code. These functions are part of the JavaScript language and are available globally. Some examples of predefined functions include:

Example of predefined functions:
- console.log(): Used to print messages to the console.
- Math.random(): Generates a random number between 0 and 1.
- Array.prototype.push(): Adds one or more elements to the end of an array.
- String.prototype.toUpperCase(): Converts a string to uppercase letters.

=> User defined functions => In addition to the predefined functions, you can also create your own user-defined functions in JavaScript. These functions allow you to encapsulate reusable code and perform specific tasks based on your requirements. You can define a user-defined function using the function keyword or arrow function syntax, as mentioned earlier.

Basic syntax of a user-defined function:
 function functionName(parameters) {
    // function body
    // code to be executed
    return value; // optional
}   

here, functionName is the name of the function, 
parameters are the inputs to the function (optional), 
and the function body contains the code that will be executed when the function is called. 
The return statement is used to specify the value that the function should return (optional).


function greet(name) {
    return "Hello, " + name + "!";
}
In this example, we have defined a function called greet that takes a parameter name and returns a greeting message. You can call this function with different arguments to get different greetings:

console.log(greet("Alice"));
console.log(greet("Bob"));

This will output:   
Hello, Alice!
Hello, Bob!
Functions can also be defined using arrow function syntax, which is a more concise way to write functions in JavaScript. For example:
const greet = (name) => {
    return "Hello, " + name + "!";
}
Or even more concisely:
const greet = name => "Hello, " + name + "!";
In this case, the function greet takes a single parameter name and returns the greeting message directly without needing the return keyword or curly braces.

to summarize, functions in JavaScript are essential for structuring code, promoting reusability, and performing specific tasks when called. They can be defined in various ways, including traditional function declarations and arrow functions, allowing for flexibility in how you write your code.

Types of Functions in JavaScript Based on Syntax:

1. Function Declaration: A function declared using the function keyword. It is hoisted, meaning it can be called before its declaration in the code.

2. Function Expression: A function assigned to a variable. It is not hoisted, so it cannot be called before its declaration.

3. Arrow Function: A more concise syntax for writing functions, introduced in ES6. It does not have its own this context and is often used for shorter functions.

Types of Functions in JavaScript Based on Usage:

1. Pure Functions: A function that always produces the same output for the same input and has no side effects (does not modify any external state).
2. Impure Functions: A function that may produce different outputs for the same input or has side effects (modifies external state).

Types of Functions in JavaScript Based on Parameters:

1. Regular Functions: Functions that take a fixed number of parameters.
2. Variadic Functions: Functions that can take a variable number of parameters, often using the rest parameter syntax (...args) to handle them.

Types of Functions in JavaScript Based on Return Value:

1. Void Functions: Functions that do not return a value (return undefined).
2. Value-Returning Functions: Functions that return a specific value when called.

Types of Functions in JavaScript Based on Scope:

1. Global Functions: Functions that are defined in the global scope and can be accessed from anywhere in the code.
2. Local Functions: Functions that are defined within another function and can only be accessed within that function's scope.

Types of Functions in JavaScript Based on definition:

1. Anonymous Functions: Functions that do not have a name and are often used as arguments to other functions or assigned to variables.
2. Named Functions: Functions that have a name and can be called by that name.


IIFE (Immediately Invoked Function Expression) => An IIFE is a function that is defined and immediately executed. It is often used to create a new scope and avoid polluting the global namespace. The syntax for an IIFE typically looks like this:
(function() {
    // code to be executed immediately
})();
In this example, the function is defined and immediately invoked, allowing you to execute code without leaving any variables or functions in the global scope.

Recursive Functions => A recursive function is a function that calls itself in order to solve a problem. It typically has a base case that stops the recursion and a recursive case that breaks the problem into smaller subproblems. For example:
function factorial(n) {
    if (n === 0) {  
        return 1; // Base case: factorial of 0 is 1
    }
    return n * factorial(n - 1); // Recursive case: n! = n * (n-1)!
}
In this example, the factorial function calculates the factorial of a number n. It uses recursion by calling itself with a smaller value of n until it reaches the base case.

*/

// example of a function declaration
function add(a, b) {
  return a + b;
}

add(2, 3); // returns 5
add(5, 10); // returns 15
add(0, 0); // returns 0

// example of a function expression
const subtract = function (a, b) {
  return a - b;
};

subtract(5, 2); // returns 3
subtract(10, 4); // returns 6
subtract(0, 5); // returns -5

// example of an arrow function
const multiply = (a, b) => a * b;

multiply(3, 4); // returns 12
multiply(5, 6); // returns 30
multiply(0, 10); // returns 0

// Anonymous function example
setTimeout(function () {
  console.log("This is an anonymous function!");
}, 1000);

// example of an IIFE
(function () {
  console.log("This is an IIFE!");
})();

function substract() {
  return 3 - 2;
}

substract(); // returns 1

// Recursive function example
function fibonacci(n) {
  if (n <= 1) {
    return n; // Base case: fibonacci of 0 is 0, fibonacci of 1 is 1
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case: fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)
}

function factorial(n) {
  if (n === 0) {
    return 1; // Base case: factorial of 0 is 1
  }
  return n * factorial(n - 1); // Recursive case: n! = n * (n-1)!
}
