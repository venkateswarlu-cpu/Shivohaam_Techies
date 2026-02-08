/* 
Statement => 
Statement in JavaScript is a piece of code that performs a specific task. 
It can be a declaration, an expression, or a control flow statement. 
Here are some examples of different types of statements in JavaScript:

1.) If-Else Statement =>
An if-else statement is used to execute a block of code based on a condition. 
If the condition is true, the code inside the if block is executed; otherwise, the code inside the else block is executed.

2.) Switch Statement =>
A switch statement is used to perform different actions based on different conditions. 
It evaluates an expression and matches its value against multiple case clauses.

*/

// basic syntax of if-else statement is as follows:
// if (condition) {
//   // code to be executed if condition is true
// } else {
//   // code to be executed if condition is false
// }

let age = 18;
// If-Else Statement
if (age >= 18) {
  console.log("You are eligible to vote.");
} else if (age < 18 && age > 0) {
  console.log("You are not eligible to vote.");
} else if (age <= 0) {
  console.log("Invalid age.");
} else {
  console.log("Error in age input.");
}

// nested If-Else Statement
let num = 10;
if (num > 0) {
  if (num % 2 === 0) {
    console.log(num + " is a positive even number.");
  } else {
    console.log(num + " is a positive odd number.");
  }
} else {
  console.log(num + " is not a positive number.");
}

// Switch Statement = >
// The switch statement is used to perform different actions based on different conditions. It evaluates an expression and matches its value against multiple case clauses.

// basic syntax of switch statement is as follows:
// switch (expression) {
//   case value1:
//     // code to be executed if expression matches value1
//     break;
//     case value2:
//     // code to be executed if expression matches value2
//     break;
//   ...
//   default:
//     // code to be executed if expression doesn't match any case
// }

let day = 4;
let dayName;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}
console.log("Day Name: ", dayName);
// Note: Break statement is used to exit the switch case once a match is found. Without break, the code will continue to execute the next cases (fall-through behavior).

// You can explore more statements like loops (for, while, do-while), try-catch, etc. in JavaScript.

// Loop Statements =>
// why we use loops in JavaScript?
// Loops are used in JavaScript to execute a block of code repeatedly as long as a specified condition is true.
// This is useful for tasks that require repetition, such as iterating over arrays, processing data, or performing actions multiple times without having to write the same code repeatedly.

// for loop =>
// basic syntax of for loop is as follows:
// for (initialization; condition; increment/decrement) {
//   // code to be executed in each iteration
// }

// for...in loop =>
// basic syntax of for...in loop is as follows:
// for (variable in object) {
//   // code to be executed for each property in the object
// }

// for...of loop =>
// basic syntax of for...of loop is as follows:
// for (variable of iterable) {
//   // code to be executed for each element in the iterable
// }

// forEach loop =>
// basic syntax of forEach loop is as follows:
// array.forEach(function(element, index, array) {
//   // code to be executed for each element in the array
// });

// while loop =>
// basic syntax of while loop is as follows:
// while (condition) {
//   // code to be executed as long as the condition is true
//   // increment/decrement;
// }

// do-while loop =>
// basic syntax of do-while loop is as follows:
// do {
//   // code to be executed
//  // increment/decrement;
// } while (condition);

// continue and break statements =>
// continue statement is used to skip the current iteration of a loop and move to the next iteration.
// break statement is used to exit a loop or switch statement prematurely.

// Examples of continue and break statements in loops:

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; // Skip the iteration when i is 5
  }
  if (i === 8) {
    break; // Exit the loop when i is 8
  }
  console.log("Loop Iteration: ", i);
}

// for loop statement example
for (let i = 1; i <= 5; i++) {
  console.log("For Loop Iteration: ", i);
}

// for...in loop statement example
const person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// for...of loop statement example
const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
  console.log("Number: ", number);
}

// defference between for...in and for...of loops:
// for...in loop iterates over the enumerable properties of an object (keys).
// for...of loop iterates over the values of an iterable object (like arrays, strings, etc.).

// forEach loop statement example
numbers.forEach(function (number) {
  console.log("ForEach Number: ", number);
});

// defference between for loop and forEach loop:
// for loop gives more control over the iteration process (like breaking out of the loop).
// forEach loop is a method available on arrays and is used for iterating over array elements in a more functional programming style.

// while loop statement example
let j = 1;
while (j <= 5) {
  console.log("While Loop Iteration: ", j);
  j++; // Incrementing j to avoid infinite loop
}

// do-while loop statement example
let k = 1;
do {
  console.log("Do-While Loop Iteration: ", k);
  k++; // Incrementing k to avoid infinite loop
} while (k <= 5);

// try-catch statement example
try {
  let result = 10 / 0;
  if (!isFinite(result)) {
    throw new Error("Division by zero is not allowed.");
  }
  console.log("Result: ", result);
} catch (error) {
  console.log("Error: ", error.message);
}
