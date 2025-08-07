/* Description:
Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/

const smash = (words) => {
    str = '';
    let i = words.length;
    
        for (const element of words) {
            str += element;
            if(i != 1 )
            {
                str += " ";
            }
        
            i -= 1;
        }           
    
    return str;
}

console.log(smash(['hello', 'world', 'this', 'is', 'great']));
console.log(smash(['hello']));
console.log(smash(['hello', 'world']));
