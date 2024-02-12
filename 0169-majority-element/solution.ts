// https://leetcode.com/problems/majority-element/
// 0169-majority-element

function majorityElement(nums: number[]): number {
  let res = nums[0];
  let count = 0;
  for(const num of nums) {
    if(res === num) {
      count++;
      continue;
    }
    if(count === 0) {
      res = num;
      continue;
    }
    count--;
  }
  return res;
};
