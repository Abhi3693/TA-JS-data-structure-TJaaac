// 1. Create an array named numbers and store 5 number values in it
let numbers = [10,23,32,42,50];
// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0;
for ( let number of numbers) {
    sum = sum + number;
}
console.log(sum);
// 3. Calculate the average of array items and print it to the console using console.log()

let average = sum / numbers.length;
console.log(average);

// 4. Find the highest number in the array and print it to the console using console.log()
let max = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i]
        console.log(max , "inside")
    }
} console.log(max ,"max")
// 5. Find the lowest number in the array and print it to the console using console.log()
let min = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i]
    }
} console.log(min ,"min")
// 6. Find the even numbers in the array and print them to the console using console.log()


let even = [], odd = [] ;
for (let number of numbers ) {
    if (number % 2 == 0 ) {
        even.push(number);
    } else {
        odd.push(number);
    }
}
console.log(even);
// 7. Find the odd numbers in the array and print them to the console using console.log()
console.log(odd);
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let specialNumber5 = [];
for (let number of numbers ) {
    if (number % 5 == 0 ) {
        specialNumber5.push(number);
    } 
}
console.log(specialNumber5);
// 9. Log all the element of the array one by one
for ( let i = 0; i < numbers.length; i++ ) {
    console.log(`${i} ${numbers[i]}`)
}
console.log(sum);

// 10. Find all the number in the array that is divisible by 3
let specialNumber3 = [];
for (let number of numbers ) {
    if (number % 3 == 0 ) {
        specialNumber3.push(number);
    } 
}
console.log(specialNumber3);