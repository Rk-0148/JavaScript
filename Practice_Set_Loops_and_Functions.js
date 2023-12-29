const prompt = require('prompt-sync')();

// problem 1 : create object and disply its content using for loop

let marks = {
    rk : 100,
    ak : 80,
    mk : 90,
    hk : 70
};

for(let i=0;i<Object.keys(marks).length;i++) {
    console.log("The marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]]);
}

// problem 2 : above problem using for in loop
console.log("\n")

for(let key in marks){
    console.log("The marks of "+key+" are "+marks[key]);
}

// problem 3 : write a while loop to input numbers until we get correct number which is defined previously 

let cn = prompt("Please enter a correct number: ");
console.log(cn);
let number = 0;
while(number!=cn){
    console.log("try again");
    number = prompt("Enter a number : ");
}
console.log("you have entered correct number");

// problem 5 : write a function to find a mean of given numbers

function mean(a,b,c,d,e){
    return (a+b+c+d+e)/5;
}
console.log("mean of 1,2,3,4,5 is "+ mean(1,2,3,4,5));