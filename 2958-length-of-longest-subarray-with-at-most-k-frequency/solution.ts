// https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/
// 2958-length-of-longest-subarray-with-at-most-k-frequency
function maxSubarrayLength(nums: number[], k: number): number {
  let res = 0;
  let l = 0;
  const freq = {};
  for (let r = 0; r < nums.length; r++) {
    freq[nums[r]] = (freq[nums[r]] ?? 0) + 1;
    while (freq[nums[r]] > k) {
      freq[nums[l]]--;
      l++
    }
    res = Math.max(res, r - l + 1);
  }
  return res;
};
