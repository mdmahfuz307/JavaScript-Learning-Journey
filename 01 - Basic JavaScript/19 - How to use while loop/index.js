// Task 6 write a program that will print sum of all the numbers that are divisible by 3 and 5 from 1-100

let i = 1;
let sum = 0;

while (i <= 100) {
    if (i % 3 == 0 && i % 5 == 0) {
        sum = sum + i;
    }
    i++;
}

console.log(sum);