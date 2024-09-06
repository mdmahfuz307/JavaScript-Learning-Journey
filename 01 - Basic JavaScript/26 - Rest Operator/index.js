// Rest Operator (...number) 

function addToCart(...number){  //Ami toh jani na j user koto gula addto Card krbe tai unlimitted argument pass korar jrno amra ai rest operator use krbo
    return number;
}
console.log(addToCart(100,200,300,400,500));