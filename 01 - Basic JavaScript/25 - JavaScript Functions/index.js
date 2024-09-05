
// Function Definition
function aboutMe(){
    console.log('Hi.');
    console.log('My name is Md Mahfuz Rahman Nirob.');
    console.log('I am Software Engineer.');
}

// Function Call
aboutMe();




// Perameter VS Argument
function printThis(para1,para2){   // (para1,pare2) --> Perameter
    console.log("Printing....",para1,para2);
}

printThis("js","MD Nirob");   // ("js","MD Nirob") --> Argument




// Returning from function
function sum(a, b){
    const add = (a+b);
    return add;
}
sum(3, 4);



// Default Parameter
function cale(a=0,b=0){       //(a=0,b=0) --> Ai khane amra valu er man dye desi atai Default Parameter
    return (2 * (a + b));
}

cale(3);




// Rest Parameter
function collectThis(x, ...y){    // ...y deyar karon amra jani na tikh koto gula parameter aca tai ata use krbo
    console.log(x);
    console.log(y);
}
collectThis(1,2,3,4,5,6,7,8,9);