let arr = [1, 2, 3, 4, 5];
let k = 3; // Number of positions to rotate

function rotateArray(arr, k) {
  k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, -k));
}

const rotated = rotateArray(arr, k);
console.log(rotated);
