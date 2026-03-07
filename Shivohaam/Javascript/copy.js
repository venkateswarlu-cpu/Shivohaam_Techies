/*

Javascript stores values in two types of memory: stack and heap. 
The stack is used for storing primitive values (like numbers, strings, booleans) 
and function calls, while the heap is used for storing objects and arrays.

 => Primitives Types (Value Copy):-
    1. Primitive values are stored directly in the stack, and when you assign a primitive value to a variable, it creates a copy of that value.
    2. When you assign a primitive value to another variable, it creates a new copy of that value in memory. So, if you change the value of one variable, it does not affect the other variable.
    3. Primitive values are immutable, which means that once a primitive value is created, it cannot be changed. If you want to change the value, you need to create a new primitive value.

    Ex:- string , number , boolean , null , undefined , symbol , bigint

 => Non-Primitive Types (Reference Copy):- 
    1. Objects are stored in the heap, and when you assign an object to a variable, it creates a reference to that object in memory.
    2. When you assign an object to another variable, it creates a new reference to the same object in memory. So, if you change the properties of the object using one variable, it will affect the other variable as well, since both variables are referencing the same object.
    3. Objects are mutable, which means that you can change the properties of an object after it has been created.
    4. When you copy an object, you are copying the reference to that object, not the actual object itself. This is known as a shallow copy. If you want to create a deep copy of an object, you need to use techniques like JSON.parse(JSON.stringify(obj)) or libraries like Lodash.

    Ex:- object , array , function, date , regex , map , set , weakmap , weakset
    */

let a = 10; // a is stored in stack memory and it holds the value 10 a -> 10 (value copy)
let b = a; // b is stored in stack memory and it holds the value of a which is 10 b -> 10 (value copy)
console.log("a: ", a); // 10
console.log("b: ", b);
a = 20;
console.log("a: ", a); // 20
console.log("b: ", b); // 10

// Now let's see the reference copy with objects

let obj1 = {
  name: "Shiva",
  age: 25,
  address: {
    city: "Pune",
    country: "India",
  },
};

let obj2 = obj1; // obj2 is reference of obj1 so, if we change any value in obj2 then it will also reflect in obj1 because both are reference of same object
console.log("obj1: ", obj1);
console.log("obj2: ", obj2);

obj2.name = "Shivohaam";
console.log("obj1: ", obj1); // { name: 'Shivohaam', age: 25 }
console.log("obj2: ", obj2); // { name: 'Shivohaam', age: 25 }

// Shallow copy of object:-
// shallow copy of object means that we are copying the reference of the object but not the actual object itself.
// So, if we change any value in the shallow copy then it will also reflect in the original object because both are reference of same object.
// shallow copy is the first level copy of the object but if the object contains another object as value then it will not copy that object and it will still reference to the original object.( nested object will not be copied in shallow copy)

// in example
// name and age are copied in shallow copy but address is not copied in shallow copy because it is an object and it is reference type so, if we change any value in address then it will also reflect in obj1 because both are reference of same object.
//  name , age -> obj1 -> obj3 (shallow copy)
// address -> obj1 -> obj3 (reference copy)

// Where to use shallow copy of object:-
// 1. When we want to create a new object with the same properties as the original object but we don't want to change the original object.
// 2. When we want to create a new object with the same properties as the original object but we want to change some properties of the new object without affecting the original object.
// 3. When we want to create a new object with the same properties as the original object but we want to change some properties of the new object and also want to change some properties of the original object without affecting each other.

// => Ways to create shallow copy of object in JS:-
// 1. Using Object.assign() method
let obj3 = Object.assign({}, obj1);

// 2. Using spread operator
let obj4 = { ...obj1 };

// 3. Using slice() method for array
let arr1 = [1, 2, 3, 4];
let arr2 = arr1.slice(); // arr2 is shallow copy of arr1

// 4. Using concat() method for array
let arr3 = arr1.concat(); // arr3 is shallow copy of arr1

obj4.name = "Shiva Reddy";
console.log("obj1: ", obj1);
console.log("obj4: ", obj4); // { name: 'Shiva Reddy', age: 25 }

obj3.name = "Shiva Kumar";
console.log("obj1: ", obj1); // { name: 'Shivohaam', age: 25 } because obj3 is shallow copy of obj1 so, if we change any value in obj3 then it will also reflect in obj1 because both are reference of same object.
console.log("obj3: ", obj3); // { name: 'Shiva Kumar', age: 25 }
obj3.address.city = "Mumbai"; // because address is also an object and it is reference type so, if we change any value in address then it will also reflect in obj1 because both are reference of same object.
console.log("obj1: ", obj1); // { name: 'Shivohaam', age: 25, address: { city: 'Mumbai', country: 'India' } }
console.log("obj3: ", obj3); // { name: 'Shiva Kumar', age: 25, address: { city: 'Mumbai', country: 'India' } }

// Deep copy of object:-
// deep copy of object means that we are copying the actual object itself but not the reference of the object.
// So, if we change any value in the deep copy then it will not reflect in the original object because both are different objects in memory.
// deep copy is the all level copy of the object but if the object contains another object as value then it will also copy that object and it will not reference to the original object.( nested object will also be copied in deep copy)

// in example
// name , age and address are copied in deep copy because all are primitive type and object type but in deep copy we are copying the actual object itself but not the reference of the object so, if we change any value in the deep copy then it will not reflect in the original object because both are different objects in memory.
//  name , age -> obj1 -> obj5 (deep copy)
// address -> obj1 -> obj5 (deep copy)

// => Ways to create deep copy of object in JS:-
// 1. Using JSON.parse() and JSON.stringify() method
let obj5 = JSON.parse(JSON.stringify(obj1)); // obj5 is deep copy of obj1

obj5.name = "Shiva Reddy Kumar";
console.log("obj1: ", obj1); // { name: 'Shivohaam', age: 25, address: { city: 'Mumbai', country: 'India' } }
console.log("obj5: ", obj5); // { name: 'Shiva Reddy Kumar', age: 25, address: { city: 'Mumbai', country: 'India' } }

// 2. Using structuredClone() method
let obj6 = structuredClone(obj1); // obj6 is deep copy of obj1

obj6.name = "Shiva Reddy Kumar";
console.log("obj1: ", obj1);

console.log("obj6: ", obj6); // { name: 'Shiva Reddy Kumar', age: 25, address: { city: 'Mumbai', country: 'India' } }

// 3. Using recursive function to create deep copy of object
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj; // return the value if obj is not an object
  }
  let copy = Array.isArray(obj) ? [] : {}; // create a new object or array based on the type of obj
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]); // recursively copy the properties of obj
    }
  }
  return copy; // return the deep copy of obj
}
let obj7 = deepCopy(obj1); // obj7 is deep copy of obj1

obj7.name = "Shiva Reddy Kumar";
console.log("obj1: ", obj1);

console.log("obj7: ", obj7); // { name: 'Shiva Reddy Kumar', age: 25, address: { city: 'Mumbai', country: 'India' } }

// 4. Using libraries like Lodash
// Lodash is a popular JavaScript library that provides utility functions for common programming tasks, including deep copying of objects. You can use the _.cloneDeep() method from Lodash to create a deep copy of an object.
