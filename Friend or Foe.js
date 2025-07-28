/* Task 
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Input = ["Ryan", "Kieran", "Jason", "Yous", "1234"]
Output = ["Ryan", "Yous"]

*/

const arr = ["Ryan", "Kieran", "Jason", "Yous", "1234"];
function friend(friends){
    //your code here
    //let newArr = []
    
        const newArr = friends.filter((val) => isNaN(val)).filter((val) => val.length <=4);
        
    console.log(newArr);
    return newArr;

  }
  friend(arr);