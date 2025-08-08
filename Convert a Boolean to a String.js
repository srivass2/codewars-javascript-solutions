/*
Description:
Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/

const booleanToString = (b) => {
    if(b == true) {
        return `true`;
    }
    if(b == false) {
        return `false`;
    }
}
console.log(booleanToString(true));
console.log(booleanToString(false));
