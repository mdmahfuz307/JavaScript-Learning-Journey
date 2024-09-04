let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// Remove First Element
numbers.shift();

// Remove Last Element
numbers.pop();  //numbers.length = numbers.length-1; (Chaile ai vbe o krte pari)


// Remove Inside Elements - Splice using Index
numbers.splice(2,1);


// Remove Inside Elements - Splice using Value
const toBeDeleted = 5;
for(let i =0;i<numbers.length;i++)
{
    if(numbers[i] == toBeDeleted)
    {
        numbers.splice(i,1);
    }
}


// Filter Array
const toBeDeleted1 = 6;
numbers = numbers.filter((item) => item != toBeDeleted1);


// Reset whole array
let xx = [1,2,3];
let yy = xx;
xx.length = 0;
//console.log(xx, yy);


// Reset array using while loop
while(numbers.length) numbers.pop();
