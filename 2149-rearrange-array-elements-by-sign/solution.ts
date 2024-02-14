// https://leetcode.com/problems/rearrange-array-elements-by-sign/
// 2149-rearrange-array-elements-by-sign

function rearrangeArray(nums: number[]): number[] {
  let positiveNumIndex = 0;
  let negativeNumIndex = 1;

  const res = Array(nums.length).fill(0);

  for(const num of nums) {
    if(num > 0) {
      res[positiveNumIndex] = num;
      positiveNumIndex += 2;
      continue;
    }
    res[negativeNumIndex] = num;
    negativeNumIndex += 2;
  }

  return res;
};
