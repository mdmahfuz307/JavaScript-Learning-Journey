// Use push to insert at the end
const ar1 = [1,2,3];
const ar2 = [8,9];
ar1[ar1.length] = 4;
ar1.push(5);
ar1.push(6,7);

ar1.push(...ar2);  // nEW EKN Ai vbe lekha hy

// Array.prototype.push.apply(ar1,ar2);  // Old Model
console.log(ar1);


//Use unshift to insert at the beginning
const ar3 = [ 5,6,7];
ar3.unshift(4);
console.log(ar3);  // OutPut : 4,5,6,7 {Unshift use korle jeta insert krbo oita first e giye bosbe}



// Use Splice to insert at the given index
const arr = [1,2,3,5,9];
arr.splice(3,0,4);
console.log(arr);  // OutPut : 1,2,3,4,5,9