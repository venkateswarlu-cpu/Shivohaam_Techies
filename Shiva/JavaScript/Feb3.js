let a=prompt("").toLowerCase();
let b=a.split("").reverse().join("");
if (a===b){
    console.log("True");
} else{
    console.log("Fslse");
}


let str=prompt("").toLowerCase();
let count=0;
for (let i of str) {
    if ("aeiou".includes(i)){
        count+=1;
    } 
}
console.log(`"Vowels": ${count}`);
console.log(`consonents : ${str.length - count}`);


let str1=prompt("");
let str2=prompt("");
console.log(str1 == str2);
console.log(str1===str2);

let str3=prompt("");
if (str3.length%2===0){
    console.log("Even");
}else{
    console.log("Odd")
}


let num1=prompt();
let num2=prompt();
let num3=prompt();
let largest=0;
if (num1>=num2 && num1>=num3){
    largest=num1;
} else if (num2>=num1 && num2>=num3){
    largest=num2;
} else{
    largest=num3;
}
console.log(largest);


let input=prompt("");
console.log(input.split(" ").join("-"));


let pass=prompt();
if (pass!=="" && pass.length>8){
     console.log(pass);
} else{
    console.log("Invalid pass");
}

let rever=prompt();
let ans=rever.split(" ").map(word=> word.split("").reverse().join("")).join(" ");
console.log(ans);