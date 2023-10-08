// https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/
// 2894-divisible-and-non-divisible-sums-difference

function differenceOfSums(n: number, m: number): number {
  const totalSum = arithProg(n);
  const totalSumOfDivisible = m * arithProg(Math.floor(n / m));
  const notDivisible = totalSum - totalSumOfDivisible;
  return notDivisible - totalSumOfDivisible;
};

// n = 12 m = 3
// 3 6 9 12
// 4
// m 2m 3m 4m... km 
// m(1 + 2 + 3 + 4 + ...k)
// k = floor(n / m)

// arithP(100) - arithP(9)
// (100 * 101 / 2) - (9 * 10 / 2)
// 50 * 101 
// 5050 - 45
// 5005
// (b * (b + 1) / 2) - ((a - 1) * (a) / 2)
// (b^2 + b) / 2 - (a^2 - a) / 2
// (b^2 + b - a^2 + a)  / 2
// (b^2 - a^2 + a + b)  / 2

// number of numbers is (b - a + 1)
// average is (a + b) / 2
// sum = ((a + b) / 2) * (b - a + 1) 

// -a^2 - a + 2a
// (-a^2 + a) / 2
// -(a^2 - a) / 2
// -a(a - 1) / 2

function arithProg(n: number): number {
  return n * (n + 1) / 2; 
}
/*

#####
*####
**###
***##
****#
*****


######
######
***###
******
******

0
1 item
3 items
6 items
10 items
15 items ...

1/2 (b * h)
n = 5 rows
1/2 (5 * 5) 25 / 2 = 12.5

n = 5 rows base = n + 1 height = n
(5 * 6) / 2 = 15
n(n + 1) / 2

*/ 


// function differenceOfSums(n: number, m: number): number {
//   let res = 0;

//   for(let i = 1; i <= n; i++) {
//     if(i % m !== 0) {
//       res += i;
//     } else {
//       res -= i;
//     }
//   }

//   return res;
// };

