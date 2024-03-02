// https://leetcode.com/problems/squares-of-a-sorted-array/
// 0977-squares-of-a-sorted-array

function sortedSquares(nums: number[]): number[] {
  let lo = 0;
  let hi = nums.length - 1;
  const res = [];
  while(lo <= hi) {
    if(Math.abs(nums[lo]) > Math.abs(nums[hi])) {
      res.push(nums[lo] ** 2);
      lo++;
      continue;
    }
    res.push(nums[hi] ** 2);
    hi--;
  }
  return res.reverse();
};
