/*
Description:
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

const duplicateCount = (text) => {
    let temp = text.toLowerCase().split('');
    //console.log(temp);
    count = 0;
    let dup = new Set();
        for (let i = 0; i < temp.length; i++) {
                if(dup.has(temp[i])) continue;
                for (let j = i + 1; j < temp.length; j++) {
                    if(temp[i] == temp[j]) {                
                        count += 1;
                        dup.add(temp[i]);
                        break;
            }                     
            
        }
    }
    return count;
}
console.log(duplicateCount('aabbcd'));
console.log(duplicateCount('aAbbcd'));
console.log(duplicateCount('Aa11'));
console.log(duplicateCount('Aa15'));
console.log(duplicateCount('Aaa15'));
console.log(duplicateCount('indivisibility'));
