let arr = [
  { name: "Alice", age: 30 },
  { name: "Bob1", age: 25 },
  { name: "Bob2", age: 25 },
  { name: "Bob3", age: 25 },
  { name: "Charlie", age: 30 },
];

function groupBy(arr, key) {
  return arr.reduce((result, currentValue) => {
    if (!result[currentValue[key]]) {
      result[currentValue[key]] = [];
    }
    result[currentValue[key]].push(currentValue);
    return result;
  }, {});
}

// function groupBy(arr, key) {
//   return arr.reduce((result, currentValue) => {
//     const groupKey = currentValue[key];
//     if (!result[groupKey]) {
//       result[groupKey] = [];
//     }
//     result[groupKey].push(currentValue);
//     return result;
//   }, {});
// }

const groupedByAge = groupBy(arr, "age");
console.log(groupedByAge);
