//Simple Traverse

let arr = [3,2,1,5,7,8];

for(let i = 0;i<arr.length;i++)
{
    console.log(arr[i]);
}


//Array Sum & Avg

let ar = [3,2,1,5,7,8];

sum = 0;
for(let i = 0;i<ar.length;i++)
{
    sum += ar[i];
}
console.log(sum);   // OutPut : 26

console.log(sum / ar.length); // OutPut : 4.33333333333333




// Find the Largest Number

let ai = [34,64,23,75,87,34,22,23,54];

let largestNumber = ai[0];
for(let i = 0;i<ai.length;i++)
{
    if(ai[i] > largestNumber)
    {
        largestNumber = ai[i];
    }
}
console.log(largestNumber);   // OutPut : 87