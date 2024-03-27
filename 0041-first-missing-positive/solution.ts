// https://leetcode.com/problems/first-missing-positive/
// 0041-first-missing-positive
function firstMissingPositive(nums: number[]): number {
  nums.forEach((n, i) => {
    if(n < 0) {
      nums[i] = 0;
    }
  });
  for(let i = 0; i < nums.length; i++) {
    const val = Math.abs(nums[i]);
    if(1 > val || val > nums.length) {
      continue;
    }
    if(nums[val - 1] > 0) {
      nums[val - 1] *= -1;
    }
    if(nums[val - 1] === 0) {
      nums[val - 1] = -1 * (nums.length + 1);
    }
  }
  for(let i = 1; i < nums.length + 1; i++) {
    if(nums[i - 1] >= 0) {
      return i;
    }
  }
  return nums.length + 1;
};
