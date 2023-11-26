// https://leetcode.com/problems/left-and-right-sum-differences/
// 2574-left-and-right-sum-differences

function leftRightDifference(nums: number[]): number[] {
  let left = 0;
  let right = nums.reduce((a, b) => a + b);
  const res = [];
  for (const n of nums) {
    left += n;
    res.push(Math.abs(left - right));
    right -= n;
  }
  return res;
};
