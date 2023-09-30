// https://leetcode.com/problems/monotonic-array/
// 0896-monotonic-array

function isMonotonic(nums: number[]): boolean {
  if(nums.length === 1) {
    return true;
  }
  let prev = 0;
  let cur = 1;
  const isIncreasing = nums.at(-1) > nums.at(0);
  while(cur < nums.length) {
    if(nums[cur] < nums[prev] && isIncreasing) {
      return false;
    } else if(nums[cur] > nums[prev] && !isIncreasing) {
      return false;
    }
    cur++;
    prev++;
  }
  return true;
};
