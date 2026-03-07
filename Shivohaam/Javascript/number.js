/* Number in javscript => 
    number is a primitive data type used to represent :

-> Integer - > 10
-> Floating point numbers -> 10.33
-> Negative numbers -> -20
-> Scientific notation -> 1e4 
-> Special numeric values -> Infinity , -Infinity , NaN 

*/

let a = 20; // Integer
let b = 3.5; // float
let c = -4; // Negative
let d = 1e3; // scientific

let hexaN = 0xff; // hexadecimal
let binaryN = 0b1010; // binary
let octalN = 0o12; // octal

let e = 34 / 0;
console.log("number is: ", e);

let f = -34 / 0;
console.log("number is: ", f);

let myName = "dev";
let result = myName * 34;

console.log("cal: ", result);
console.log("type of result: ", typeof result);

// Number Methods =>

let myNumber = 85;

// // Fixed
// let fixed = myNumber.toFixed(2); // return string (parameter define the length of decimal number)
// // specially using for converting any hexa, octal , bnary numbers
// console.log("fixed :", fixed, typeof fixed);

// // Precision
// let precision = myNumber.toPrecision(3); // return string (parameter define the length of string/numbers without include dot(.))
// console.log("precision: ", precision, typeof precision);

// // toString
// let str = myNumber.toString(); // return string (specaily use for convert number into string)
// console.log("str: ", str);
// let binaryStr = myNumber.toString(2); // return string (specaily use for convert number into binary string)
// console.log("binaryStr: ", binaryStr);
// let ocatlStr = myNumber.toString(8); // return string (specaily use for convert number into octal string)
// console.log("ocatlStr: ", ocatlStr);
// let hexaStr = myNumber.toString(16); // return string (specaily use for convert number into hexadecimal string)
// console.log("hexaStr: ", hexaStr);

// // valueOf

// let value = myNumber.valueOf(); // return number and check value for the variable
// console.log("value: ", value);

// // exponetial
// let expo = myNumber.toExponential(); // return string
// console.log("expo; ", expo);

// Properties of Number:

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);

// Number verification Function/Methods:-

let isNum = Number.isNaN(myNumber); // return boolean check the variable datatype is number
console.log("isNum: ", isNum);

let isFinNum = Number.isFinite(4561818); // return boolean check the variable number is fine number or not
console.log("isFinNum: ", isFinNum);

let isIntNum = Number.isInteger(myNumber); // return boolean check the variable value is correct integer or not
console.log("isIntNum: ", isIntNum);

let isSafeInt = Number.isSafeInteger(myNumber); // return boolean check the variable value is correct integer or not and also check the safe integer or not
console.log("isSafeInt: ", isSafeInt);

// Conversion Function/Methods:-
let strNum = "12";

let num = Number.parseInt(strNum); // return Number and convert any numerical data to correct number dataType form or if it's not an correct numerical data so gives NaN. only return Integer
console.log("converted num: ", num);

let floatNum = Number.parseFloat(strNum); // return Number and convert any numerical data to correct number dataType form or if it's not an correct numerical data so gives NaN. can we return float values if its passed as taken.
console.log("converted float num: ", floatNum);

let num2 = Number(strNum); // return Number convert into number ignore int or float only convert the dataType
console.log("num2: ", num2);

let num3 = +strNum; // return Number ('+' is unary operator) convert into number ignore int or float only convert the dataType
console.log("num3: ", num3);

// Boolean conversion:-

let trueValue = Number(true); // return 1
console.log("trueValue :", trueValue);
let falseValue = Number(false); // return 0
console.log("falseValue :", falseValue);

// Null conversion:-

let nullNum = Number(null);
console.log("nullNum :", nullNum); // return 0

// undefined conversion:-

let undefineNum = Number(undefined);
console.log("undefineNum: ", undefineNum); // return NaN
