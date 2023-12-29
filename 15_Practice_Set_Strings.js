//Problem 1 : Escape sequence character
let str  = "har\"";
console.log(str.length);

// Problem 2 : Incudes, startsWith , endsWith
let sentence = "I love you";
let word = "I";
console.log(sentence.includes(word));
console.log(`The word "${word}" ${sentence.includes(word)? 'is':'is not'} in the sentence`);
console.log(sentence.startsWith(word));
console.log(`The sentence ${sentence.startsWith(word)? 'starts' : 'does not starts'} with ${word}`);
console.log(sentence.endsWith(word));
console.log(`The sentence ${sentence.endsWith(word)? 'ends' : 'does not ends'} with ${word}`);

// Problem 3 : lowercase and uppercase
let str1 = "Case";
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());

// Problem 4 : finding amount
let sentence1 = "I have Rs 1000";
console.log(sentence1.slice("I have Rs ".length));