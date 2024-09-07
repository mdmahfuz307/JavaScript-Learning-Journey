// Spread Operator

let arr = [1,2,3,4,5,6,7];

let arr2 = [...arr,8,9,10,11];

console.log(arr2);   // OutPut :- [1,2,3,4,5,6,7,8,9,10,11]




// Sum of Spread Operator
let ar = [5,6,7,8];

function sum(num1,num2,num3,num4){
    return num1 + num2 + num3 + num4;
}

console.log(sum(...ar));  // OutPut :- 26



// Max & MIn in Spread
let array = [6,7,4,3,2,8,9,10];

console.log(Math.max(...array));