// https://leetcode.com/problems/power-of-four/
// 0342-power-of-four

function isPowerOfFour(n: number): boolean {
 return isPowerOfTwo && n % 3 === 1;
};

function isPowerOfTwo(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0;
}

// function isPowerOfFour(n: number): boolean {
//  return n > 0 && Number.isInteger(Math.log(n) / Math.log(4));
// };
