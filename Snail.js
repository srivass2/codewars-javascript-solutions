/*
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
*/

const snail = (array) => {
    const result = [];
    while (array.length) {
        // Take the first row
        result.push(...array.shift());
        // Take the last element of each remaining row
        for (let i = 0; i < array.length; i++) {
            if (array[i].length) result.push(array[i].pop());
        }
        // Take the last row in reverse
        if (array.length) {
            result.push(...(array.pop().reverse()));
        }
        // Take the first element of each remaining row (from bottom to top)
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i].length) result.push(array[i].shift());
        }
    }
    return result;
}

console.log(snail([[1,2,3],
         [4,5,6],
         [7,8,9]])); // [1,2,3,6,9,8,7,4,5]
console.log(snail([[1,2,3],
         [8,9,4],
         [7,6,5]])); // [1,2,3,4,5,6,7,8,9]
