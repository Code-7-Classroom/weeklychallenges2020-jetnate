//MEDIUM: Write a function that takes in an array of numbers and outputs the average of all the numbers. 

const avg = (array) => array.reduce((x, y) => x + y) / array.length;
console.log(avg([1,4,7]));

console.log(avg([10,5]));

console.log(avg([1.5, 3, 2.5, 1]));