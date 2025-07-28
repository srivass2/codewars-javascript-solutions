/* Task 
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

const input = "My name is Shashank";
function getCount(str) {
    const strArr = str;
    let count = 0;
    for (const element of strArr) {

        if (element == 'a' || element == 'e' || element == 'i' || element == 'o' || element == 'u') {
            count++;
            
        }      
    }
    return count;
  }
  const number = getCount(input);
  console.log(number);
  
  