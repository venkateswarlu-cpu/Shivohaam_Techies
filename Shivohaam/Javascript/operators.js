/*  
Operators in JavaScript => It is an synbol that is used to perform operations on operands (values and variables).
Rules for writing operators in
-> every operator works with operands.
-> operators can be unary (works with single operand), binary (works with two operands), or ternary (works with three operands).
-> an operator is placed between or before or after its operands depending on its type.
-> an any group of or one single operator can be used not more than three times in a single expression.

basic format => operand1 operator operand2

let a = 10;
let b = 20;

Types of Operators in JavaScript:

1. Arithmetic Operators
    - Addition (+)
    - Subtraction (-)
    - Multiplication (*)
    - Division (/)  
    - Modulus (%) 
    - Exponentiation (**)
    - Increment (++)
    - Decrement (--)

2. Assignment Operators
    - Equal (=)
    - Add and Assign (+=)
    - Subtract and Assign (-=)
    - Multiply and Assign (*=)
    - Divide and Assign (/=)
    - Modulus and Assign (%=)

3. Comparison Operators
    - Equal to (==)
    - Not Equal to (!=)
    - Strict Equal to (===)
    - Strict Not Equal to (!==)
    - Greater than (>)
    - Less than (<)
    - Greater than or Equal to (>=)
    - Less than or Equal to (<=)

4. Logical Operators
    - AND (&&)
    - OR (||)
    - NOT (!)   

5. Bitwise Operators
    - AND (&)
    - OR (|)
    - NOT (~)
    - XOR (^)
    - Left Shift (<<)
    - Right Shift (>>)
    - Unsigned Right Shift (>>>)

6. Ternary Operator
    - condition ? expr1 : expr2

7. Type Operators
    - typeof
    - instanceof

8. Spread Operator
    - ...

*/

let x = 15;
let y = 4;
let xy = "15";

// Arithmetic Operators
console.log("Addition: ", x + y);
console.log("Subtraction: ", x - y);
console.log("Multiplication: ", x * y);
console.log("Division: ", x / y);
console.log("Modulus: ", x % y); // returns the remainder
console.log("Exponentiation: ", x ** y); // x raised to the power of y
console.log("Increment: ", ++x); //  returns x after incrementing (pre-increment)
console.log("Decrement: ", --y); // returns y after decrementing (pre-decrement)
console.log("Decrement: ", y--); // returns y before decrementing (post-decrement)
console.log("Value of y after post-decrement: ", y); // shows the decremented value of y
console.log("Increment: ", x++); // returns x before incrementing (post-increment)
console.log("Value of x after post-increment: ", x); // shows the incremented value of x

// Assignment Operators
let z = 10; // assignment operator
z += 5; // equivalent to z = z + 5
console.log("Add and Assign: ", z); // returns 15
z -= 3;
console.log("Subtract and Assign: ", z); // returns 12
z *= 2;
console.log("Multiply and Assign: ", z); // returns 24
z /= 4;
console.log("Divide and Assign: ", z); // returns 6
z %= 3;
console.log("Modulus and Assign: ", z); // returns 0

// Comparison Operators (returns boolean values)
console.log("Equal to: ", x == y); // return false  checks value only (compare after type coercion if types are different)
console.log("Not Equal to: ", x != y); // checks value only
console.log("Strict Equal to: ", x === y); // returns false checks value and type (compare without type coercion and both must be same type)
y = 15;
console.log("Equal to after changing y: ", x == y); // returns true
console.log("Not Equal to after changing y: ", x != y); // returns false
console.log("Strict Equal to: ", x === y); // checks value and type (compare without type coercion and both must be same type)
console.log("Strict Not Equal to: ", x !== y); // checks value and type
console.log("Greater than: ", x > y); // checks if x is greater than y
console.log("Less than: ", x < y); // checks if x is less than y
console.log("Greater than or Equal to: ", x >= y); // checks if x is greater than or equal to y
console.log("Less than or Equal to: ", x <= y); // checks if x is less than or equal to y

// Logical Operators (returns boolean values)
console.log("AND: ", x > 10 && y < 10); // both conditions must be true
// always takes the condition on left side first, if it is false then it will not check the right side condition (boolean short-circuit evaluation)
// left -> false && right -> true  = false
// left -> true && right -> false = false
// left -> false && right -> false = false
// left -> true && right -> true = true

console.log("OR: ", x > 10 || y > 10); // at least one condition must be true
// always takes the condition on left side first, if it is true then it will not check the right side condition (boolean short-circuit evaluation)
// left -> false || right -> true  = true
// left -> true || right -> false = true
// left -> false || right -> false = false
// left -> true || right -> true = true

console.log("NOT: ", !(x > 10)); // negates the condition
// !(true) = false
// !(false) = true

// Bitwise Operators
console.log("Bitwise AND: ", x & y); // performs AND operation on each bit
console.log("Bitwise OR: ", x | y); // performs OR operation on each bit
console.log("Bitwise NOT: ", ~x); // inverts the bits
console.log("Bitwise XOR: ", x ^ y); // performs XOR operation on each bit
console.log("Left Shift: ", x << 2); // shifts bits to the left
console.log("Right Shift: ", x >> 2); // shifts bits to the right

// Ternary Operator (shorthand for if-else statement) always takes three operands
// syntax: condition ? expr1 : expr2
let result = x > y ? "x is greater" : "y is greater";
console.log("Ternary Operator: ", result);

// without using ternary operator
if (x > y) result = "x is greater";
else result = "y is greater";

console.log("Without Ternary Operator: ", result);

// Type Operators
console.log("Type of x: ", typeof x); // returns 'number' (knowing the data type of x)
console.log("Is x an instance of Number: ", x instanceof Number); // returns false (checking if x is an instance of Number)
// Note: x is a primitive, so instanceof will return false

let a = { name: "Alice", age: 25 };
console.log("Type of a: ", typeof a); // returns 'object'

a = "sai";
console.log("Type of a: ", typeof a); // returns 'string'

a = 45.67;
console.log("Type of a: ", typeof a); // returns 'number'

a = true;
console.log("Type of a: ", typeof a); // returns 'boolean'

a = null;
console.log("Type of a: ", typeof a); // returns 'object' (this is a known quirk in JavaScript)

a = undefined;
console.log("Type of a: ", typeof a); // returns 'undefined'

// undefined , not defined and null are different
// undefined => a variable that has been declared but not assigned a value
let b;
console.log("Type of b: ", typeof b); // returns 'undefined'

// not defined => a variable that has not been declared at all
console.log("Type of c: ", typeof c); // returns 'undefined' (c is not defined)

// null => a special value that represents "no value" or "empty value"
let n = null;
console.log("Type of n: ", typeof n); // returns 'object' (this is a known quirk in JavaScript)
n = "Hello";
console.log("Type of n after assigning string: ", typeof n); // returns 'string'

// Spread Operator
// used to expand elements of an iterable (like array, objects) into individual elements
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
console.log("Spread Operator: ", arr2); // returns [1, 2, 3, 4, 5, 6]

// rest operator is also represented by ... but it is used to collect multiple elements into a single array
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log("Rest Operator: ", sum(1, 2, 3, 4, 5)); // returns 15

// without spread operator
let arr3 = [1, 2, 3];
let arr4 = arr3.concat([4, 5, 6]);
console.log("Without Spread Operator: ", arr4); // returns [1, 2, 3, 4, 5, 6]

// without rest operator
function sumWithoutRest() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log("Without Rest Operator: ", sumWithoutRest(1, 2, 3, 4, 5)); // returns 15
