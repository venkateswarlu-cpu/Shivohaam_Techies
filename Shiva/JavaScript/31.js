let csvData = "Shivohaam-25-Developer-India"; 
let splitData = csvData.split("-"); 
console.log(splitData);

let originalString = "Shivohaam"; 
let reversedString = originalString.split("").reverse().join(""); 
console.log(reversedString);

let joinedData = splitData.join("-"); 
console.log(joinedData);

let data = "My-Name-Is-Ambati"; 
let limitedSplit = data.split("-", 2); 
console.log(limitedSplit);

let std = "Ambati,Neelam,Shiva, sai"; 
let Name = std.split(","); 
console.log(Name);

let colors = ["Red", "Green", "Blue"]; 
let color = 
colors.join(", "); console.log(color);

let chars = ["Amba", "Ti"]; 
let word = chars.join(""); 
console.log(word);

let sentence = "JavaScript is fun to learn"; 
let words = sentence.split(" "); 
console.log(words);

let a="Ambati";
let count=0;
for (let char of a){
    if("aeiouAEIOU".includes(char)){
        count+=1;
    }
}
console.log(count);

console.log(a.toUpperCase());

let word1="ambati is creating js files";
let result=[];
word1.split(" ");
for (let i of word1){
    result.push(i.charAt(0).toUpperCase()+i.slice(1));
}

console.log(result.join(" "));



