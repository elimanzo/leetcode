// https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/
// 2529-maximum-count-of-positive-integer-and-negative-integer

function maximumCount(nums: number[]): number {
  const lo = binSearch(nums, -0.5);
  const hi = binSearch(nums, 0.5);
  return Math.max(lo, nums.length - hi);
};

function binSearch(nums: number[], target: number): number {
  // nums[lo] < 0 <= nums[hi]
  let lo = -1;
  let hi = nums.length;
  while(lo + 1 !== hi) {
    const mid = Math.floor((lo + hi) / 2);
    if(nums[mid] < target) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return hi;
}
