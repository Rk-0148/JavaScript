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

// Array methods

let num = [12,45,76,90,1000];
// 1 : toString()
let b = num.toString();
console.log(b,typeof b);

// 2 : join()
let c = num.join(">");
console.log(c,typeof c);

// 3 : pop() this will delete last element from the array and change original array
let ele = num.pop();
console.log(ele);
console.log(num);

// 4 : push(x) will add x to the array in the end and returns the size of new array it also changes the original array
let x = num.push(100);
console.log(x);
console.log(num);

// shift() : this will remove the first element from the array
let s = num.shift();
console.log(s);
console.log(num);

// unshift : this will add the given element at first position in the array and return the size of the array
let y = num.unshift(12345);
console.log(y);
console.log(num);

// delete : this will delete the array element and return the same size of the array with empty element
delete num[1];
console.log(num);

// concat : combine various arrays into single array , without changing original arrays
let ar1 = [1,2,3,4,5];
let ar2 = [11,12,13,14,15];
let ar3 = [21,22,23,24,25];

let newArr = ar1.concat(ar2,ar3);
console.log(newArr);

console.log(ar1.concat(ar2));
console.log(ar1);
console.log(ar2);

// sort : sort the array elements in alphabetical order and change the original array 
let arr_new = [12,3,45,65,2,34,65,100,1,2];
console.log(arr_new.sort());
console.log(arr_new);

// sorting array elements use compare parameter
let compareAscending = (a,b) =>{
    return a- b;  // to sort in ascending order
}

let comapareDescending = (a,b) =>{
    return b-a;
}
let s1 = [12,3,45,32,678,54,67890];
let asc = s1.sort(compareAscending);
console.log(asc);
let des = s1.sort(comapareDescending);
console.log(des);

// reverse : reverses the array elements
let array = [1,2,3,4,5];
let rev = array.reverse();
console.log(rev);

// Splice : used to add new elements in the array splice(start_index, no. of elements to delete, elements to be added) and return deleted elements from the array
let arr2 = [1,2,3,4,5,6];
console.log(arr2);
let deleted_values = arr2.splice(1,3,1001,1002,1003,1004,1005,1006);
console.log(deleted_values);
console.log(arr2);

// slice : slice out a piece of an array and create a new array
let arr3 = [1,2,3,4,5,6];
let sliced_array = arr3.slice(0,4);
console.log(arr3);
console.log(sliced_array);