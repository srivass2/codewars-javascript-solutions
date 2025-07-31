/* Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1
695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :

a^p + b^(p+1) + c^(p+2) + d^(p+3) + ... = k * n

If it is the case we will return k, if not return -1.

Note: n and p will always be strictly positive integers.

Examples:
n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
*/


digPow = (n, p) => {
    let k = 0;
    let sum =0;
    let val = n.toString();
          
    let i = val.length;
    let a = 0;
    
    while (i > 0) {
        sum = sum + val[a] ** p;       
        p++;
        i--;
        a++        
    }
    if (sum % n == 0){
        k = sum / n;
        return k;
    }
    else {
        return -1;
    }   

}
value = digPow(89, 1);
console.log(value);
value = digPow(92, 1);
console.log(value);
value = digPow(695, 2);
console.log(value);
value = digPow(46288, 3);
console.log(value);

