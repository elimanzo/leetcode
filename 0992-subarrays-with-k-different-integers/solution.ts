// https://leetcode.com/problems/subarrays-with-k-different-integers/
// 0992-subarrays-with-k-different-integers

function subarraysWithKDistinct(nums: number[], k: number): number {
  return atMost(nums, k) - atMost(nums, k - 1); 
};

function atMost(nums: number[], k: number): number {
  const freq = new Map();
  let l = 0;
  let res = 0;
  for(let r = 0; r < nums.length; r++) {
    freq.set(nums[r], (freq.get(nums[r]) ?? 0) + 1);
    while(freq.size > k) {
      freq.set(nums[l], freq.get(nums[l]) - 1);
      if(freq.get(nums[l]) === 0) {
        freq.delete(nums[l]);
      }
      l++;
    }
    res += r - l + 1;
  }
  return res;
}
