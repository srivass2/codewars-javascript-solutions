/* 
Description:
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

const removeUrlAnchor = (url) => {
    return url.split('#',1).join('');   // one liner appraoch
           
    // let i = 0;
    // while (i < url.length) {
    //     if(url[i] == '#') {
    //         return url.split('').splice(0,i).join('');
    //         i = temp.length
    //     }        
    //     i +=1;
    // }
    // if(i = url.length) {
    //     return url.split('').splice(0,i).join('');
    // }
}
console.log(removeUrlAnchor("www.abc.com#about"));
console.log(removeUrlAnchor("www.codewars.com#about"));
console.log(removeUrlAnchor("www.codewars.com?page=1"));
