// https://leetcode.com/problems/power-of-two/description/
// 0231-power-of-two

function isPowerOfTwo(n: number): boolean {
  return n >= 0 && Number.isInteger(Math.log2(n));
};

// function isPowerOfTwo(n: number): boolean {
//   if(n <= 0) {
//     return false;
//   }

//   while (n % 2 === 0) {
//     n /= 2;
//   }
//   return n === 1;
// };
