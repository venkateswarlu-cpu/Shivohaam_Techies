/*

Array in JS =>
    An Array is an special type of object used to store multiple values in a single variable.

Basic Syntax:-

-> By direct varibale(mostly used)
 varType varName assign Operator and values in sqare bracket []
 let array = [1,2,"dev", "shiva", 6, 5] 

-> Using Constructor
varType varName assign Operator new keyWord Array(values)
let array = new Array(1,2,"dev", "shiva", 6, 5)

Characteristics of Array:-

-> Stored multile values 
-> can store different data types
-> dynamic in nature (dynamic size)
-> indexed (starts from 0)
-> Ordered collection/list
-> Stored in Heap memory
-> refernce type (non primitives data type) 

Array internally working:-
let arr = [1,3,5,7]

Internally array saved as object that's why the type of array is Object 
Ex:- 
let arr = {
  0: 1,
  1: 3,
  2: 5,
  3: 7,
  length: 4,
};

*/

const arr = [1, 2, "dev", "shiva", 6, 50, true, null, undefined];
let arr1 = new Array(1, 2, "dev", "shiva", 6, 5);

console.log("type of array in JS: ", typeof arr);

// Indexing
console.log(arr[50]); // by using index number we can get directly value for that index if no index is available so it's always return undefined

// length
console.log("length of array", arr.length); // Length of array is not a method/function in JS, this is a simple property or single key for that particular array object

// Basic Methods of an array:-
// Methods which are affecting the original array , no creating new array:-
let upt = arr.push(400); // return the updated length of array so, not creating a new array but update the original array
console.log("array on Push: ", arr, upt);

let upt1 = arr.pop(); // Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log("array on Pop: ", arr, upt1);

let upt2 = arr.shift(); // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log("array shift: ", arr, upt2);

let upt3 = arr.unshift("shiva"); //Elements to insert at the start of the array. Inserts new elements at the start of an array, and returns the new length of the array.
console.log("array unshift: ", arr, upt3);

// let upt6 = arr.splice(2, 3);
// console.log("array splice: ", arr, upt6);

let upt6 = arr.splice(2, 3, "new1 , new2", "new3");
/*
updating the original array , and return the updated values array for referece 
basic syntax : - let varName = array.splice(startIndex , deleteCount , newItems) third param is optional
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

@param start — The zero-based location in the array from which to start removing elements.
@param deleteCount
The number of elements to remove. If value of this argument is either a negative number, zero, undefined, or a type that cannot be converted to an integer, the function will evaluate the argument as zero and not remove any elements.
@param items — Elements to insert into the array in place of the deleted elements.
@returns — An array containing the elements that were deleted.
*/
console.log("array splice: ", arr, upt6);

// creating new array methods:-

let upt4 = arr.concat(...arr1, 45, 78); // Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log("array concate: ", arr, upt4);

let upt5 = arr.slice(1, 6);
/*
basic syntax:- 
varType varName = arrayName.slice(startIndex, endIndex)
startIndex is included but endIndex is not included in new array and return new array

Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
@param start
The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
@param end
The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.
*/
console.log("array slice: ", arr, upt5);

// find and checking arrays methods:-

let newArr = [1, 4, 8, 6, 7, 45, 67, 89, 1, 0, 4, 1];

let upt7 = newArr.find((num) => num < 4);
// return the first occurance of matched arguments and if it's not matched so return undefined
// take a function as a arguments
console.log("array find: ", newArr, upt7);

let upt8 = newArr.findIndex((num) => num < 2);
// return the first occurance index number of matched arguments and if it's not matched so return -1.
// take a function as a arguments
console.log("array findIndex: ", newArr, upt8);

let upt9 = newArr.some((num) => num < 4);
// return boolean value if it's matched the any one condition/ as passed in arguments so return true if no one if matched so, returns false
// take a function as a arguments
console.log("array some: ", newArr, upt9);

let upt10 = newArr.every((num) => num < 4);
// return boolean value if it's matched the all elements values as passed in arguments condition so return true if not matched so, returns false
// take a function as a arguments
console.log("array every: ", newArr, upt10);

let upt11 = newArr.fill(50, 1, 6);
// return the updated filled values array and also update the original array
// basic syntax:-
// varType varName = arrayName.fill(value, startIndex, endIndex) start and end are optional
console.log("array fill: ", newArr, upt11);

// Higher order functions (map, filter, reduce) // mostly
// when an function is taking another function as an argument so, that function is called Higher order function and the argument function is known as callback fun ction for that higher order function.

let arr2 = [];
for (let i = 0; i < newArr.length; i++) {
  newArr[i] = newArr[i] * 2;
  arr2.push(newArr[i]);
}

console.log("newArr without map: ", arr2);

// map method:-
let arrMap = newArr.map((num) => num * 2);
console.log("higher order function Map: ", newArr, arrMap);
// this function is higher order function.
// return always an new array or create an new array without updating or affecting the original array.
// this function or method is only for arrays data type.

let arr3 = [];
for (let i = 0; i < newArr.length; i++) {
  if (newArr[i] < 10) {
    arr3.push(newArr[i]);
  }
}

console.log("newArr without filter: ", newArr, arr3);

// filter method:-
// this is a higher order function

let myArr = [1, 4, 8, 6, 7, 45, 67, 6, 89, 1, 0, 4, 1, 6, 6];

let arrFilter = myArr.filter((num) => num == 6);
let arrmap = arrFilter.map((num) => num * 2);
console.log("array with filter: ", myArr, arrFilter, arrmap);

// reduce method:-
// this is a higher order function
// this method is used to reduce the array into single value or single output by doing some operations on array elements as passed in arguments function.
// take two parameters: a function as an arguments and that function take two parameters one is accumulator and another is current value and return single value as output.
// return single value as output and also update the original array but not return the updated array but return the output value as per the operation done in arguments function.

// without reduce method:-
let sum = 0;
for (let i = 0; i < myArr.length; i++) {
  sum = sum + myArr[i];
}
console.log("array without reduce: ", myArr, sum);

let arrReduce = myArr.reduce((acc, curr) => acc + curr, 0);
console.log("array with reduce: ", myArr, arrReduce);

let parodyucts = [
  { name: "laptop", price: 50000 },
  { name: "mobile", price: 20000 },
  { name: "tv", price: 30000 },
];

let totalPrice = parodyucts.reduce((acc, curr) => acc + curr.price, 0);
console.log("total price of products: ", totalPrice);
