// https://leetcode.com/problems/search-in-rotated-sorted-array/description/
// 0033-search-in-rotated-sorted-array

function search(nums: number[], target: number): number {
  const n = nums.length;

  let indexOfMin = 0;
  let lo = null;
  let hi = null;
  if(nums[0] > nums[n - 1]) {
    // nums[lo] <= indexOfMin < nums[hi]
    lo = 0;
    hi = n - 1;
    while(lo + 1 !== hi) {
      const mid = Math.floor((lo + hi) / 2);
      if(nums[mid] < nums[n - 1]) {
        hi = mid;
      } else {
        lo = mid;
      }
    }
    indexOfMin = hi;
  }
  // nums[(lo + indexOfMin) % n] <= target < nums[(hi + indexOfMin) % n]
  lo = -1;
  hi = n;
  while(lo + 1 !== hi) {
    const mid = Math.floor((lo + hi) / 2);
    if(target < nums[(mid + indexOfMin) % n]) {
      hi = mid;
    } else {
      lo = mid;
    }
  }
  return nums[(lo + indexOfMin) % n] === target ? (lo + indexOfMin) % n: -1;
};
