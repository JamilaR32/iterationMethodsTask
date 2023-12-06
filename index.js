//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
function greater25(x) {
  return x >= 25;
}
console.log(numbers.filter(greater25));

function divisible5(x) {
  return x % 5 == 0;
}
console.log(numbers.filter(divisible5));
/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
function squared(y) {
  return y * y;
}
console.log(numbers.map(squared));

function double(z) {
  return z * 2;
}
console.log(numbers.map(double));
/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
function greaterEqual20(o) {
  return o >= 20;
}
function greaterSquared(p) {
  return p * p;
}
console.log(numbers.filter(greaterEqual20).map(greaterSquared));

function times3(q) {
  return q * 3;
}
console.log(numbers.filter(divisible5).map(times3));
