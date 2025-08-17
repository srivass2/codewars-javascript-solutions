/*
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
*/

function divisibleBy(numbers, divisor) {
    let arr = [];
    
    for (let index = 0; index < numbers.length; index++) {
        if(numbers[index] % divisor == 0) {
            arr.push(numbers[index]);
            
        }
        
    }
    return arr;
    
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
