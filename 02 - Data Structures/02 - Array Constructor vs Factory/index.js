// Initialize Array - Constructor vs Factory


// Constructor Pattern
const a = new Array(); // []
console.log(a,a.length);

const b = new Array(5);
console.log(b,b.length);

const c = new Array(1,2,3,4,5);
console.log.apply(c,c.length);



// Factory Pattern

const a1 = Array(); // []
console.log(a1,a1.length);

const a2 = Array(5);
console.log(a2,a2.length);

const a3 = Array(1,2,3,4,5);
console.log.apply(a3,a3.length);