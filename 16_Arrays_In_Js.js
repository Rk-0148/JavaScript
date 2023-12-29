let arr = [1,2,3,4,5];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
arr[5] = 10;
console.log(arr);
arr[2]=40;
console.log(arr); // arrays are mutable we can change thier elements

// printing array using for loop

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}