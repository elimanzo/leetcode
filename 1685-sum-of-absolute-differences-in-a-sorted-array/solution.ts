// https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/
// 1685-sum-of-absolute-differences-in-a-sorted-array

function getSumAbsoluteDifferences(nums: number[]): number[] {
  const n = nums.length;
  const res = [nums.reduce((a , b) => a + b) - nums[0] * n];
  for(let i = 1; i < n; i++) {
    res.push(res.at(-1) + (2 * i - n) * (nums[i] - nums[i - 1]));
  }
  return res;
};
