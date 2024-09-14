/* Object Cloning -->  Spread Operator
                  -->  Assign
                  -->  Iteration
*/



// Spread Operator
let src = {
    age : 12,
    wt:68,
    ht:180
};

let dest = {...src};

console.log("src: ",src);
console.log("dest: ",dest);



// Assign
let sr = {
    age : 12,
    wt:68,
    ht:180
};

let des =Object.assign({},sr);

console.log("sr: ",sr);
console.log("des: ",des);




// Iteration
for(let key in src){
    let newKey = key;
    let newValue = src[key];
    des[newKey] = newValue;
}

console.log("src: ",src);
console.log("des: ",des);