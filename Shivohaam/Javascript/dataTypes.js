/*
Data => 
In JavaScript, data refers to the values or information that can be stored and manipulated within a program.
JavaScript has several built-in data types that can be categorized into two main groups: 

-> 1) Primitive data types => the data types that store single values and have no additional properties or methods.
there are 7 primitive data types in JavaScript:

-> String
-> Number
-> BigInt
-> Boolean
-> Undefined
-> Null
-> Symbol

-> 2) Non-primitive (or reference) data types => the data types that can store collections of values or more complex entities.
 There are 3 non-primitive data types in JavaScript:
-> Object
-> Array
-> Function

Descriptions of Primitive Data Types:
String : A sequence of characters used to represent text.
Strings are enclosed in single quotes (' '), double quotes (" "), or backticks (` `).

single quotes : 'Hello, World!'
double quotes : "Hello, World!"
backticks : to create template literals, which allow for multi-line strings and embedded expressions.

Number : Represents both integer and floating-point numbers. 
JavaScript uses a single number type for all numeric values.

BigInt : A special numeric type that can represent integers with arbitrary precision, 
allowing for very large integers beyond the safe limit of the Number type.

Boolean : Represents a logical value, either true or false.

Undefined : A special value that indicates a variable has been declared but not assigned a value.

Null : A special value that represents the intentional absence of any object value.

Symbol : A unique identifier used to prevent accidental property name collisions.

*/

// Example of Primitive Data Types

// Strings
let firstName = "Shivohaam"; // String (single quotes)
let name = "Shivohaam"; // String (double quotes)
let intro = 'Hello, I am "Shivohaam"'; // String (double quotes inside single quotes)
// let introError = "Hello, I am "Shivohaam""; // This will cause an error
let intro2 = "Hello, I am 'Shivohaam'"; // String (single quotes inside double quotes)
// let introError = 'Hello, I am 'Shivohaam''; // This will cause an error
let intro3 = "Hello, I am 'Shivohaam'"; // String (escaping single quotes)
let intro4 = 'Hello, I am "Shivohaam"'; // String (escaping double quotes)
let mobileNumber = "9876543210"; // String
let phone = 1234567890; // Number

let data = `My name is ${firstName} my phone number is ${phone}`; // String (backticks)

console.log(data);

let age = 25; // Number
let bigIntNum = 9007199254741991n; // BigInt
let isStudent = false; // Boolean
let address; // Undefined
let phoneNumber = null; // Null
let uniqueId = Symbol("id"); // Symbol

// Example of Non-Primitive Data Types
let person = {
  // Object
  name: "Shivohaam",
  age: 25,
};

let numbers = [1, 2, 3, 4, 5, " dev", "sai "]; // Array

function greet() {
  // Function
  console.log("Hello, World!");
}
