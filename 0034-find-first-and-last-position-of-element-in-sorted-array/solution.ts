// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// 0034-find-first-and-last-position-of-element-in-sorted-array

function searchRange(nums: number[], target: number): number[] {
  const lo = findInsertPosition(nums, target - 0.5);
  const hi = findInsertPosition(nums, target + 0.5);
  return lo === hi ? [-1, -1] : [lo, hi - 1];
};

function findInsertPosition(nums: number[], target: number): number {
  // nums[lo] < target < nums[hi]
  let lo = -1;
  let hi = nums.length;
  while(lo + 1 !== hi) {
    const mid = Math.floor((lo + hi) / 2);
    if(target < nums[mid]) {
      hi = mid
    } else {
      lo = mid;
    }
  }
  return hi;
}

