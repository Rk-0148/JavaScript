let num = [1,2,3,4,5];

// for loop
for(let i=0;i<num.length;i++){
    console.log(num[i]);
}

// forEach loop
num.forEach((element) => {
    console.log(element);
})

// array from : used to convert an object into array
let name1 = "ROHAN";
console.log(typeof name1);
let arr = Array.from(name1);
console.log(arr);
console.log(typeof arr);

// for of loop
for(let item of arr){
    console.log(item);
}

// for in loop : used to print indexes of the array elements
for(let x in arr){
    console.log(x);
    console.log(arr[x]);
}

