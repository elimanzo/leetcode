// https://leetcode.com/problems/longest-increasing-subsequence/
// 0300-longest-increasing-subsequence

function lengthOfLIS(nums: number[]): number {
  const mostExtensible = [-Infinity];
  let res = 0;
  for(const num of nums) {
    let possibleLengths = [];
    for(let i = 0; i < mostExtensible.length; i++) {
      if(num > mostExtensible[i]) {
        possibleLengths.push(i + 1);
      }
    }
    for(const curLen of possibleLengths) {
      if (mostExtensible[curLen] == null) {
        mostExtensible.push(num);
        continue;
      }
      mostExtensible[curLen] = Math.min(num, mostExtensible[curLen]);
    }
  }
  return mostExtensible.length - 1;
};

// function lengthOfLIS(nums: number[]): number {
//   const n = nums.length;
//   const dp = Array(n).fill(1);
//   for(let i = 0; i < n; i++) {
//     for(let j = 0; j < i; j++) {
//       if(nums[j] < nums[i]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//     }
//   }
//   return Math.max(...dp);
// };
