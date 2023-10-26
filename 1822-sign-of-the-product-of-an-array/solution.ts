// https://leetcode.com/problems/sign-of-the-product-of-an-array/
// 1822-sign-of-the-product-of-an-array

function arraySign(nums: number[]): number {
  let exponent = 0;
  for(const n of nums) {
    if(n === 0) {
      return 0;
    }
    exponent ^= n >> 31;
  }
  return (-1) ** exponent;
};

// function arraySign(nums: number[]): number {
//   let oddNegativeCounter = 1;
//   for(const n of nums) {
//     if(n === 0) {
//       return 0;
//     }
//     if(n & (2 ** 31)) {
//       oddNegativeCounter = -oddNegativeCounter;
//     }
//   }
//   return oddNegativeCounter;
// };

// function arraySign(nums: number[]): number {
//   const prod = nums.reduce((a, b) => a * b);
//   if(prod > 0) {
//     return 1;
//   }
//   if(prod < 0) {
//     return -1;
//   }
//   return 0;
// };
