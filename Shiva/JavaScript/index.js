let name1= "Shiva";
console.log("Hello, " + name1 + "!");

let name = "Ambati Venkateswarlu  ";
let email = "ambativenkateswarlu0@gmail.com";

let course = "javascript development";

let trimmedName = name.trim();
let upperName = trimmedName.toUpperCase();

console.log(trimmedName);
console.log(upperName);

let ind=name.indexOf("Venkateswarlu");
let lowerEmail = email.toLowerCase();

let UpperEmail = email.toUpperCase();
let inc=course.includes("javascript");

console.log(lowerEmail);
console.log(ind);
console.log(inc);
console.log(UpperEmail);

let validEmail = lowerEmail.includes("@") && lowerEmail.endsWith(".com");

let courseTitle = course.charAt(0).toUpperCase() + course.slice(1);

let nameLength = trimmedName.length;

let shortName = trimmedName.substring(0, 6);
let sliceName=name.split("/");


console.log(validEmail);
console.log(courseTitle);
console.log(nameLength);
console.log(shortName);
console.log(sliceName);


let a="Ambati";
let b=a.split("").reverse().join("");
console.log(b);