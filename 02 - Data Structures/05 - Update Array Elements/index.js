// Array Fill Manual Way
const a1 = new Array(5);
for(let i = 0;i<a1.length;i++)
{
    a1[i] = false;
}
console.log(a1); //  OutPut : [ false, false, false, false, false ]


// Array Fill
const ar = new Array(10);
ar.fill(0);
// console.log(ar);         /* OutPut : [
//                             0, 0, 0, 0, 0,
//                             0, 0, 0, 0, 0
//                          ] */

const names = ['Nirob','Shipon','Shanto'];
names[0] = 'Hadan';
names[1] = 'Pagla';
names[2] = 'lol';
// console.log(names);


// Fill Array and Update

const response = new Array(9);
response.fill(false);
for(let i = 0;i<response.length;i++)
{
    const rand = Math.floor(Math.random() * 10 *1)
}
console.log(response);


// Array is mutable
function update(ar){
    for(let i =0;i<ar.length;i++)
    {
        ar[i] = 'S{i + 1}. ${ar[i]}';
    }
    return ar;
}

const updateNames = update(names);
console.log(names);
console.log(updateNames);