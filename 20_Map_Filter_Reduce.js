// map_function (value,index,array)

let arr = [0,1,2,3];
let new_arr = arr.map((value) => {
    console.log(value);
})

let a = arr.map((value,index,array)=>{
    console.log(value,index,array);
    return value+index;
})
console.log(a);

// filter method : filter the array against certain criteria

arr2 = [2,4,6,8,5];
console.log("arr2 = ",arr2);
let a2 = arr2.filter((value)=>{
    if(value%2==1){
        return value;
    }
})
console.log("filtering odd numbers",a2);

// reduce method : reduces the array by performing a certain function on each element of array
let arr3 = [1,2,3,4,5];
const add = ((a,b)=>{
    return a+b;
});

const multi = ((a,b)=>{
    return a*b;
})
let addArr = arr3.reduce((add));
console.log(addArr);

let multiArr = arr3.reduce((multi));
console.log(multiArr);