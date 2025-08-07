/* Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

// const rev = (str) => {    
//     let output = '';
//     for (let i = str.length - 1; i >= 0 ; i--) {
//          output += str[i];
        
//     } 
//     console.log(output);
    
    
// }
// rev("world");

const rev = (str) => {

    console.log(str.split('').reverse().join(''));

}
rev("hello");