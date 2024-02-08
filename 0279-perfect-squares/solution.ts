// https://leetcode.com/problems/perfect-squares/
// 0279-perfect-squares

function numSquares(n: number): number {
  const dp = Array(n + 1).fill(n);
  dp[0] = 0;

  for(let target = 1; target < n + 1; target++) {
    for(let s = 1; s ** 2 < target + 1; s++) {
      dp[target] = Math.min(dp[target], 1 + dp[target - s ** 2]);
    }
  }
  return dp[n]
};
