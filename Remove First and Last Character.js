/*Task
Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.

Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string. 
*/


function removeChar(str){
    //You got this!
     const len = str.length;
     //console.log(len);
     
    const newStr = str.slice(1,len-1);

    console.log(newStr); 
   
   
  return newStr;
   };