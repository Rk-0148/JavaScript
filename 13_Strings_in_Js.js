// strings in JavaScript
// there are 3 different ways to define strings in js

// 1) using single quotes
let firstname = '      rohan         ';
console.log(firstname);

// 2) using double quotes
let surname = "kadam";
console.log(surname);

// 3) using template literals
let boy1 = "rk";
let boy2 = "ak";

let sentence = `boy1 and boy2 are friends`;
console.log(sentence);
console.log(`${boy1} and ${boy2} are friends`)

// escape sequence characters

// 1) \ - escape character
// 2) \n - add a new line
// 3) \t - add a tab in between
// 4) \r - carriage return

console.log("add\"abc");
console.log("addition\t\tsubtraction\t\tdivision\t\tmultiplication");
console.log("addition\n\nsubtraction\n\ndivision\n\nmultiplication");

console.log(sentence.length);
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
console.log(sentence.slice(2,20));

console.log(firstname);
console.log(firstname.trim());
console.log(sentence.replace("boy1","boyX"));