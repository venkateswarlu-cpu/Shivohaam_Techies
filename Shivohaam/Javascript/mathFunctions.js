/* 

Math Functions => 
Math in Javascript is using for all the calculation, 
mathematical area such like cube, root, square, so on.. 
and also for trignometric mathematics like this ..

Math is a predefined class in JS and has multiple predefined methods on it. 

*/
// Properties Of Math class:-

let valueOfE = Math.E;
console.log("valueOfE: ", valueOfE);

let valueOfPI = Math.PI;
console.log("valueOfPI: ", valueOfPI);

let valueOfLog = Math.LN10;
console.log("valueOfLog: ", valueOfLog);

let valueOfLog2E = Math.LOG2E;
console.log("valueOfLog2E: ", valueOfLog2E);

console.log("Math.LN2: ", Math.LN2);
console.log("Math.LOG10E: ", Math.LOG10E);
console.log("Math.SQRT1_2: ", Math.SQRT1_2);
console.log("Math.SQRT2: ", Math.SQRT2);

// Methods or functions of Math Class in JS:-

let myNumber = 1.1;
// using for float values
console.log("RoundedNum: ", Math.round(myNumber)); // return rounded Integer Num (means possible nearest integer)
console.log("floorNum: ", Math.floor(myNumber)); // return Integer Num (means only integer and remove or ignore all the points value)
console.log("ceilNum: ", Math.ceil(myNumber)); // return highest Integer Num (means possible highest integer)

let mNum = 23.34;
console.log("absoluteNum: ", Math.abs(mNum)); // return postive number
console.log("sqareRootNum: ", Math.sqrt(mNum)); // return square root
console.log("cubeRootNum: ", Math.cbrt(mNum)); // return cube root

console.log("PowerOfNum :", Math.pow(2, 4)); // return power of first parameter as passed in second parameter

console.log("MaxNumInList: ", Math.max(1, 3, 5, 2, 6, 4)); // return maximum number from the all parameter values
// (# always take multiple parameter values , no work for Array, object or any other datTypes so, it's always return NaN )

console.log("MinNumInList: ", Math.min(1, 3, 5, 2, 6, 4)); // return minimum number from the all parameter values
// (# always take multiple parameter values , no work for Array, object or any other datTypes so, it's always return NaN )

console.log("RandomNum: ", Math.random()); // return the random number between 0 to 1
