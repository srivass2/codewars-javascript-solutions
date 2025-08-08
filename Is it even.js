/* Description:
In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.
*/

const testEven = (n) => {
    if (n % 2 == 0 || n == 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(testEven(4));
console.log(testEven(-4));
console.log(testEven(11));
console.log(testEven(2.3));
console.log(testEven(4.4));
console.log(testEven(0));
