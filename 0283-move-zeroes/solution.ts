// https://leetcode.com/problems/move-zeroes/
// 0283-move-zeroes

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let lo = 0;
  let hi = lo + 1;
  while(hi <= nums.length - 1) {
    if(nums[lo] !== 0) {
      lo++;
      hi++;
      continue;
    }
    if(nums[hi] !== 0) {
      [nums[lo], nums[hi]] = [nums[hi], nums[lo]];
      lo++;
      hi--;
    }
    hi++
  }
};
