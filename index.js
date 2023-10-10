let arr = ["a", "b", "c", "d", "e", "f"];
//slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
//splice

console.log(arr.splice(2));

//Reverse
const arr2 = ["a", "b", "c", "d", "e", "f", "g"];
console.log(arr2.reverse());
console.log(arr2);

//concat

const arr3 = ["a", "b", "c", "d", "e", "f", "g", "h"];
console.log(arr3.concat(arr2));

//join

console.log(arr3.join(" + git "));
