// https://leetcode.com/problems/longest-common-subsequence/
// 1143-longest-common-subsequence

function longestCommonSubsequence(text1: string, text2: string): number {
  const r = text1.length;
  const c = text2.length;
  const dp = Array(r + 1).fill(null).map(() => Array(c + 1).fill(0));
  for(let i = 1; i <= r; i++) {
    for(let j = 1; j <= c; j++) {
      if(text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
        continue;
      } 
      dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }
  return dp[r][c];
};
