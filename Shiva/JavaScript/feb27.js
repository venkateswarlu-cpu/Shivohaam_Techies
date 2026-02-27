let mathran=Math.floor(Math.random()*1000000)
console.log(mathran)

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(num => num * num);

console.log(squares);

const numbers1 = [1, 2, 3, 4, 5];

const evens = numbers1.filter(num1 => num1 % 2 === 0);

console.log(evens); 


const sum = numbers.reduce((sum, currentValue) => sum + currentValue, 0);

console.log(sum);

const result=numbers.filter(num => num %2==0).map(num => num*num).reduce((sum, currentValue) => sum + currentValue, 0);
console.log(result);