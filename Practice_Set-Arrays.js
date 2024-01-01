const prompt = require('prompt-sync')();

// // Problem 1 create the array of numbers and take user input to add array input in the array and
// let arr = [1,2,3,45];
// let new_input = prompt("enter the number : ");
// new_input = Number.parseInt(new_input);
// arr.push(new_input);
// console.log(arr);

// Problem 2 : keep adding numbers in the array until new_input is 0

// let arr = [1,2,3,45];
// let new_input;
// do{
//     new_input = prompt("enter the number : ");
//     new_input = Number.parseInt(new_input);
//     arr.push(new_input);
// }while(new_input!=0);
// console.log(arr);

// Problem 3 : use filter method to filter elements divisible by 10 from given array
// let arr=[1,-20,3,4,50,67,90,100,-230];
// let new_arr = arr.filter((x) =>{
//     return x%10==0;
// })
// console.log(new_arr);

// Problem 4 : create a array of Squares of given numbers
let arr = [1,2,3,4,5];
let new_arr = arr.map((x) =>{
    return x*x;
})
console.log(new_arr);

// problem 5 : use reduce method to calculate factorial of first n natural numbers
let arr1 = [1,2,3,4,5,6];
let fact = arr.reduce((x1,x2) =>{
    return x1*x2;
})
console.log(fact);