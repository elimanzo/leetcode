// https://leetcode.com/problems/arithmetic-slices-ii-subsequence/description/
// 0446-arithmetic-slices-ii-subsequence
function numberOfArithmeticSlices(nums: number[]): number {
  const n = nums.length;
  let res = 0;
  const dp = Array(n);
  // dp[i][diff] -> of subseq ending at i, with diff
  for(let i = 0; i < n; i++) {
    dp[i] = {};
    for(let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];
      dp[i][diff] ??= 0;
      dp[j][diff] ??= 0;
      dp[i][diff] += 1 + dp[j][diff];
      res += 1 + dp[j][diff];
    }
  }

  return res - (n * (n - 1) / 2) // hand-shake formula
};
