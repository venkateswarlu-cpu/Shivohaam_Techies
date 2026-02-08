/*
String : A sequence of characters used to represent text.
Strings are enclosed in single quotes (' '), double quotes (" "), or backticks (` `).

String are immutable : Once a string is created, it cannot be changed. 
Any operation that modifies a string actually creates a new string.

single quotes : 'Hello, World!'
double quotes : "Hello, World!"
backticks : to create template literals, which allow for multi-line strings and embedded expressions.
*/

// Strings
let firstName = "Shivohaam"; // String (single quotes)
let name = "Shivohaam"; // String (double quotes)
let intro = 'Hello, I am "Shivohaam"'; // String (double quotes inside single quotes)
// let introError = "Hello, I am "Shivohaam""; // This will cause an error
let intro2 = "Hello, I am 'Shivohaam'"; // String (single quotes inside double quotes)
// let introError = 'Hello, I am 'Shivohaam''; // This will cause an error
let intro3 = "Hello, I am 'Shivohaam'"; // String (escaping single quotes)
let intro4 = 'Hello, I am "Shivohaam"'; // String (escaping double quotes)

// escaping both single and double quotes
let escapingStr = 'Hello, I am "Shivohaam". I\'m learning JavaScript.'; // String (escaping both quotes)
console.log("quotes escaping:", escapingStr);
// next line string
let nextLineStr = "Hello, I am Shivohaam.\nI am learning JavaScript."; // String (new line character)
console.log("next line string:", nextLineStr);

let mobileNumber = "9876543210"; // String
let phone = 1234567890; // Number
let data = `My name is ${firstName} my phone number is ${phone}`; // String (backticks)

console.log(data);

let myName = "ShiVohAam"; // String with spaces (spaces are also characters)

let myNameTrimmed = myName.trim(); // Using trim() method to remove leading and trailing spaces
console.log("Trimmed myName:", myNameTrimmed);

// Converting case of strings
// -> toUpperCase() method
// -> toLowerCase() method

let myNameUpper = myName.toUpperCase(); // Using toUpperCase() method to convert string to uppercase
console.log("Uppercase myName:", myNameUpper);

let myNameLower = myName.toLowerCase(); // Using toLowerCase() method to convert string to lowercase
console.log("Lowercase myName:", myNameLower);

let stringLength = myName.length; // length property to get the length of the string
console.log("Length of myName:", stringLength);

// Accessing characters in a string
// -> Indexing (using square brackets)
// -> charAt() method

let stringIndex = myName[4]; // Accessing character at index 4 of the string (indexing always zero-based index)
console.log("Character at index 4:", stringIndex);

let stringChar = myName.charAt(4); // Accessing character at index 4 using charAt() method
console.log("Character at index 4 using charAt():", stringChar);

// Extracting part of the string:-
// -> Slice Method (accepts negative indices)
// -> Substring Method (does not accept negative indices)
// -> Substr Method (deprecated) // Not recommended to use Avoid using this method

// let stringSlice = yourString.slice(startIndex, endIndex);
let stringSlice = myName.slice(2, 7); // Using slice() method to extract a part of the string (last index is not included)
console.log("Sliced string (2,7):", stringSlice);

let stringSliceFromIndex = myName.slice(3); // Using slice() method with only start index to extract till end of the string
console.log("Sliced string from index 3:", stringSliceFromIndex);

let negativeIndex = myName.slice(-4); // Using slice() method with negative index to extract last 4 characters
console.log("Sliced string with negative index (-4):", negativeIndex);

let stringSliceNegative = myName.slice(-7, -2); // Using slice() method with negative indices and extract a part of the string from reverse index
console.log(
  "Sliced string with negative indices (-7,-2):",
  stringSliceNegative,
);

let stringSubstring = myName.substring(2, 7); // Using substring() method to extract a part of the string
console.log("Substring (2,7):", stringSubstring);

// Removing parts of a string/Replace operations:-
// -> replace() method (replaces only first occurrence)
// -> replaceAll() method (replaces all occurrences)

// let replacedString = yourString.replace(searchValue, newValue);

let replaceString = myName.replace("oh", "aa"); // Using replace() method to replace part of the string (only first occurrence)
console.log("Replaced string (replace):", replaceString);

let replaceAllString = myName.replaceAll("a", "A"); // Using replaceAll() method to replace all occurrences of a character
console.log("Replaced string (replaceAll):", replaceAllString);

let a = "Sairam Sairam Sairam Sairam";
let b = "Omkar Omkar Omkar";

// Concatenating strings:-
// -> Using + operator
// -> Using concat() method
let concatString = a + " " + b; // Using + operator to concatenate strings
console.log("Concatenated string using + operator:", concatString);

let concatAB = a.concat(" Dev ", b); // Using concat() method to concatenate two strings
console.log("Concatenated string:", concatAB);

let replaceA = a.replace("Sairam", "Omkar"); // Using replace() method to replace only first occurrence
console.log("Replace only first occurrence:", replaceA);

let replaceAllA = a.replaceAll("Sairam", "Omkar"); // Using replaceAll() method to replace all occurrences
console.log("Replace all occurrences:", replaceAllA);

// Searching within a string:-
// -> indexOf() method
// -> lastIndexOf() method
// -> includes() method
// -> startsWith() method
// -> endsWith() method

let indexOfA = a.indexOf("Sairam"); // Using indexOf() method to find the index of first occurrence
console.log("Index of first occurrence of 'Sairam':", indexOfA);

let lastIndexOfA = a.lastIndexOf("Sairam"); // Using lastIndexOf() method to find the index of last occurrence
console.log("Index of last occurrence of 'Sairam':", lastIndexOfA);

let includesSairam = a.includes("Sairam"); // Using includes() method to check if string contains a substring
console.log("Does a include 'Sairam'?:", includesSairam);

let includesOmkar = b.includes("Sairam"); // Using includes() method to check if string contains a substring
console.log("Does b include 'Sairam'?:", includesOmkar);

let startsWithOmkar = b.startsWith("Omkar"); // Using startsWith() method to check if string starts with a substring
console.log("Does b start with 'Omkar'?:", startsWithOmkar);

let endsWithOmkar = b.endsWith("Sairam"); // Using endsWith() method to check if string ends with a substring
console.log("Does b end with 'Sairam'?:", endsWithOmkar);

// Splitting and Joining strings:-
// -> split() method
// -> join() method (used with arrays)

// Split is used to split a string into an array of substrings based on a specified separator
// -> split is a string method and return an array

// basic format : let arrayName = yourString.split(separator , limit);

let csvData = "Shivohaam-25-Developer-India"; // Comma-separated values
let splitData = csvData.split("-"); // Using split() method to split string into an array
console.log("Split data array:", splitData);

// Join is used to join all elements of an array into a single string, with a specified separator

// Join is an array method and return a string
// basic format : let joinedString = yourArray.join(separator);

let joinedData = splitData.join("-"); // Using join() method to join array elements into a string
console.log("Joined data string:", joinedData);

// reverse a string

let originalString = "Shivohaam";

let splitstr = originalString.split(""); // Split string into array of characters
let reversedArray = splitstr.reverse(); // Reverse the array of characters
let reversedString = reversedArray.join(""); // Join the reversed array back into a string

console.log("Reversed string:", reversedString);
