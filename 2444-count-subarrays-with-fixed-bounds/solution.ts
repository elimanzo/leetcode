// https://leetcode.com/problems/count-subarrays-with-fixed-bounds
// 2444-count-subarrays-with-fixed-bounds

function countSubarrays(nums: number[], minK: number, maxK: number): number {
  let res = 0;
  let badIdx = -1;
  let left = -1;
  let right = -1;

  for(let i = 0; i < nums.length; i++) {
    if(minK > nums[i] || nums[i] > maxK) {
      badIdx = i;
    }
    if(nums[i] === minK) {
      left = i;
    }
    if(nums[i] === maxK) {
      right = i;
    }
    res += Math.max(0, Math.min(left, right) - badIdx);
  }
  return res;
};
