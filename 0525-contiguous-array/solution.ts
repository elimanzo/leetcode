// https://leetcode.com/problems/contiguous-array/
// 0525-contiguous-array

function findMaxLength(nums: number[]): number {
  let zeros = 0;
  let ones = 0;
  let res = 0;

  const diffIndex = {} // count[1] - count[0] => index
  for(let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if(num === 1) {
      ones++;
    } else {
      zeros++;
    }
    diffIndex[ones - zeros] ??= i;
    if(ones === zeros) {
      res = ones + zeros;
    } else {
      const index = diffIndex[ones - zeros];
      res = Math.max(res, i - index);
    }
  }
  return res;
};
