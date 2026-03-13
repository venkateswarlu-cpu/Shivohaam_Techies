// reverse array
let arr = [1,2,3,4];
let rev = [];

for(let i = arr.length-1; i>=0;i--){
  rev.push(arr[i]);
}

console.log(rev);
// max of an Array
let arr1 = [5,10,20,3];
let max = arr[0];

for(let i=1;i<arr1.length;i++){
  if(arr1[i] > max){
    max = arr1[i];
  }
}

console.log(max);
//unique elements in an array
let arr2 = [1,2,2,3,4,4];

let unique = [...new Set(arr2)];

console.log(unique);

let arr3 = [1,2,2,3,4,4];
let unique1 = [];

for(let i = 0; i < arr.length; i++){
  if(!unique1.includes(arr3[i])){
    unique1.push(arr3[i]);
  }
}

console.log(unique);

//count the occurences of an element in an array
let arr4 = [1,2,2,3,3,3];
let count = {};

for(let i = 0; i < arr4.length; i++){
  let num = arr4[i];

  if(count[num]){
    count[num]++;
  } else {
    count[num] = 1;
  }
}

console.log(count);

let arr5 = [1,2,2,3,3,3]; 
let count2 = {}; 
for(let num of arr5){ 
    count2[num] = (count2[num] || 0) + 1;
}
console.log(count2);
//flat the array
let arr6 = [1,[2,3],[4,5]];
let result = [];

for(let i = 0; i < arr6.length; i++){
  if(Array.isArray(arr6[i])){
    for(let j = 0; j < arr6[i].length; j++){
      result.push(arr[i][j]);
    }
  } else {
    result.push(arr[i]);
  }
}

console.log(result);
//group objects
let data = [
  {name:"A", dept:"IT"},
  {name:"B", dept:"HR"},
  {name:"C", dept:"IT"}
];

let result1 = {};

data.forEach(item=>{
  if(!result1[item.dept]){
    result1[item.dept] = [];
  }
  result1[item.dept].push(item);
});

console.log(result);

//pair sum
let arr7 = [2,7,11,15];
let target = 9;

for(let i=0;i<arr7.length;i++){
  for(let j=i+1;j<arr7.length;j++){
    if(arr7[i]+arr7[j] === target){
      console.log(arr7[i], arr7[j]);
    }
  }
}
//first unique element
let arr8 = [1,2,2,3,3,4];

for(let i=0;i<arr8.length;i++){
  if(arr8.indexOf(arr8[i]) === arr8.lastIndexOf(arr8[i])){
    console.log(arr8[i]);
    break;
  }
}
//reverse a string
let str = "hello";
let rev1 = "";

for(let i=str.length-1;i>=0;i--){
  rev1 += str[i];
}

console.log(rev1);

//palindrome
function isPalindrome(str){
  let rev = "";

  for(let i=str.length-1;i>=0;i--){
    rev += str[i];
  }

  return str === rev;
}

console.log(isPalindrome("madam"));

//second largest element
let arr9 = [10,20,5,8,30];

let max1 = -Infinity;
let second = -Infinity;

for(let num of arr9){
  if(num > max1){
    second = max1;
    max1 = num;
  } else if(num > second && num !== max1){
    second = num;
  }
}

console.log(second);
//count the number of vowels in a string
let str2 = "javascript";
let count3 = 0;

for(let ch of str2){
  if("aeiou".includes(ch)){
    count3++;
  }
}

console.log(count3);


//largest word in a sentence
let str4 = "I love javascript programming";

let words = str4.split(" ");
let largest = "";

for(let word of words){
  if(word.length > largest.length){
    largest = word;
  }
}

console.log(largest);

// rotate an array by k positions
let arr10 = [1,2,3,4,5];
let k = 2;

let result5 = arr10.slice(-k).concat(arr10.slice(0,-k));

console.log(result5);

//find misiing number in array
let arr11 = [1,2,3,5];
let n = 5;

let sum = n*(n+1)/2;

let arrSum = arr11.reduce((a,b)=>a+b,0);

console.log(sum - arrSum);
