const numbers = [1,2,3,4,5];
numbers[2] = 3; // jei index er number tah update krbo
console.log(numbers);


//Array of Objects
const students = [
    { id:1, name:'Nayem'},
    { id:2, name:'Nirob'},
    { id:3, name:'Shoshi'},  // Ai name tah update hbe
    { id:4, name:'Masuma'},
    { id:5, name:'Mim'},
];

const givenID = 3;
const updateName = 'MD Mahfuz';

for(let i =0;i<students.length;i++)
{
    if(givenID == students[i].id)
    {
        students[i].name = updateName;
        break;
    }
}
console.log(students);  
/*
OutPut

[ 1, 2, 3, 4, 5 ]
[
    { id: 1, name: 'Nayem' },
    { id: 2, name: 'Nirob' },
    { id: 3, name: 'MD Mahfuz' },
    { id: 4, name: 'Masuma' },
    { id: 5, name: 'Mim' }
]
*/ 