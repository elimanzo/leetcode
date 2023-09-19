// https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/
// 2441-largest-positive-integer-that-exists-with-its-negative

// function findMaxK(nums: number[]): number {
//   const numSet = new Set(nums);
//   let res = -1;
//   for (const n of numSet) {
//     if(n > 0 && numSet.has(-n)) {
//       res = Math.max(res, n);
//     }
//   }
//   return res;
// };

function findMaxK(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let lo = 0;
  let hi = nums.length - 1;
  while (lo < hi) {
    if(nums[lo] < -nums[hi]) {
      lo++;
      continue;
    }
    if(nums[lo] > -nums[hi]) {
      hi--;
      continue;
    }
    if(nums[lo] === -nums[hi]) {
      return nums[hi];
    }
  }
  return -1;
};
