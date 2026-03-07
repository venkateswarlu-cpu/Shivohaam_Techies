/*
Objects in JavaScript =>

    An Object is a collection of properties, and a property is an association between a name (or key) and a value.

    Key Points:
    1. Objects are used to store data in key-value pairs.
    2. They can contain various types of data, including other objects, arrays, functions, etc.
    3. Objects are mutable, meaning their properties can be changed after they are created.
    4. They are fundamental to JavaScript and are used in many aspects of the language, including functions, arrays, and more.
    5. Objects are reference types, which means that when you assign an object to a variable, you are assigning a reference to that object, not the actual object itself.
    6. Objects stored in heap memory and accessed via reference.
    7. objects keys are always string type in JS, even if we use number as key it will be converted to string internally.

Basic Syntax:-
-> By direct variable (most commonly used)
varType varName assign Operator and values in curly braces {}
let obj = {
    key1: value1,
    key2: value2,
    key3: value3,
    ...
}
*/

const obj = {
  name: "Shiva", // key is name and value is "Shiva" and single key value pair is called property of object
  age: 25,
  myfun: function () {
    console.log("This is my function", this.name, "accessing name"); // this keyword is used to access the properties of object inside the function which is property of that object
  },
  arr: [1, 2, 3, 4], // object can also contain array as value
  obj2: {
    // object can also contain another object as value
    city: "Pune",
    country: "India",
  },
  23: "number key", // in JS we can also use number as key but it will be converted to string internally because all keys in JS are string type
};

const obj3 = obj; // obj3 is reference of obj so, if we change any value in obj3 then it will also reflect in obj because both are reference of same object
console.log("type of object in JS: ", typeof obj);

// real life example of object in JS with sub object and array as value of object
const product = {
  id: 1,
  name: "Laptop",
  description:
    "A high-performance laptop suitable for gaming and professional work.",
  price: 50000,
  features: ["16GB RAM", "512GB SSD", "Intel i7", "SSD", "Snep"], // array as value of object
  specifications: {
    // sub object as value of object
    weight: "1.5kg",
    dimensions: "30cm x 20cm x 2cm",
    battery: "10 hours",
  },
};

// Ways to declare an object in JS:-

// 1. Object Literal Syntax (most commonly used)
let obj1 = {
  key1: "value1",
  key2: "value2",
};

// 2. Using Object Constructor
let obj2 = new Object();
obj2.key1 = "value1";
obj2.key2 = "value2";

// 3. Using Object.create() method
let obj4 = Object.create(null);
obj4.key1 = "value1";
obj4.key2 = "value2";

// 4. Using ES6 Class Syntax
class MyClass {
  constructor(key1, key2) {
    this.key1 = key1;
    this.key2 = key2;
  }
}
let obj5 = new MyClass("value1", "value2");
const myage = "age"; // we can also use variable as key in bracket notation
// Accessing Object Properties
console.log(obj.name); // Accessing property using dot notation
console.log(obj["23"]); // Accessing property using bracket notation
console.log(obj[myage]); // Accessing property using variable as key

// Modifying Object Properties
obj.name = "Shivohaam"; // Modifying property using dot notation
obj["age"] = 26; // Modifying property using bracket notation

// methods of object
obj.myfun(); // calling function which is property of object
console.log(obj.myfun); // this will return the function definition because myfun is a property of object which is storing function as value

console.log("Original obj:", obj);
console.log("refered obj3:", obj3); // share the same reference so, both will reflect the change due to same memory reference

// Object Iteration:

for (let key in obj) {
  console.log("For loop Iteration", key, ":", obj[key]); // iterating over object properties using for...in loop
}

console.log("Object.keys() output:", Object.keys(obj));

Object.keys(obj).forEach((key) => {
  console.log("Object.keys Iteration", key, ":", obj[key]); // iterating over object properties using Object.keys() method
});

Object.values(obj).forEach((value) => {
  console.log("Object.values Iteration", value); // iterating over object values using Object.values() method
});

Object.entries(obj).forEach(([key, value]) => {
  console.log("Object.entries Iteration", key, ":", value); // iterating over object entries using Object.entries() method
});

Object.entries(obj).forEach((entry) => {
  const [key, value] = entry;
  console.log("Object.entries Iteration with destructuring", key, ":", value); // iterating over object entries using Object.entries() method with destructuring
});

console.log("Object.entries() output:", Object.entries(obj));

// Destructuring Objects
const { id, price } = product; // destructuring object to extract name and price properties into variables
console.log("Destructured id:", id);
console.log("Destructured price:", price);

// destructure the array which is value of features property of product object
const { features } = product;
console.log("Destructured features:", features);
const [feature1, feature2, feature3] = features; // destructuring array to extract individual features into variables
console.log("Destructured feature1:", feature1);
console.log("Destructured feature2:", feature2);
console.log("Destructured feature3:", feature3);

// spread operator with objects
const obj6 = { ...obj }; // creating a shallow copy of obj using spread operator
console.log("obj6 (shallow copy of obj):", obj6);

const obj7 = JSON.parse(JSON.stringify(obj)); // creating a deep copy of obj using JSON methods
console.log("obj7 (deep copy of obj):", obj7);

//Object Methods
const obj8 = {
  name: "Shiva",
  age: 25,
  greet: function () {
    console.log("Hello, my name is " + this.name); // method to greet using the name property of the object
  },
};
obj8.greet(); // calling the greet method of obj8

// Object.freeze(obj8); // freezing the object to prevent any modifications to its properties
obj8.name = "Shivohaam";
console.log("After freezing obj8:", obj8); // name property will not change due to freeze

Object.seal(obj8);
obj8.age = 26; // modifying existing property will work with seal
obj8.gender = " male"; // adding new property will not work with seal
console.log("After sealing obj8:", obj8); // age will change

// call , apply and bind
// deep copy and shallow copy of object
// assign method of object

// nested objects and how to access them
console.log("City from nested object:", product?.specifications?.city);

// Checking if a property exists in an object
console.log("name" in obj); // true
console.log("height" in obj); // false
// nested object
console.log("city" in product.specifications);
// by hasOwnProperty method
console.log(product.hasOwnProperty("tyy"));

// Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log("Returned Target:", returnedTarget);
