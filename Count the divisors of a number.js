/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000, but fixed tests go higher.

Examples (input --> output)
4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
*/

function getDivisorCnt(n) {
    if (n === 1) return 1;

    let cnt = 0;
    for (let i = 1; i * i <= n; i++) {
      if (n % i === 0) {
        cnt += (i * i === n) ? 1 : 2;
    }
  }
    return cnt;
}

console.log(getDivisorCnt(4));
console.log(getDivisorCnt(5));
console.log(getDivisorCnt(12));
console.log(getDivisorCnt(30));
console.log(getDivisorCnt(500000));


/* Explanation: 
For n = 12:
i = 1 → getDivisorCnt (1, 12) → add 2
i = 2 → getDivisorCnt (2, 6) → add 2
i = 3 → getDivisorCnt (3, 4) → add 2
stop at i = 4 (since 4*4 > 12)
Total = 6 divisors.

For n = 36:
i = 1 → getDivisorCnt(1, 36) → add 2
i = 2 →getDivisorCnt (2, 18) → add 2
i = 3 → getDivisorCnt(3, 12) → add 2
i = 4 → getDivisorCnt(4, 9) → add 2
i = 5 → not a divisor
i = 6 → getDivisorCnt(6, 6) → add 1 (special case)
Total = 9 divisors.

*/