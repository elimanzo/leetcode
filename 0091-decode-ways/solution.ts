// https://leetcode.com/problems/decode-ways/
// 0091-decode-ways
function numDecodings(s: string): number {
  let dp = [1, 0];
  for (let i = s.length - 1; i >= 0; i--) {
    const usingTwo = s.substring(i, i + 2) < '27' ? dp[1] : 0;
    dp[1] = dp[0];
    dp[0] = '0' !== s[i] ? dp[0] + usingTwo : 0;
  }
  return dp[0];
};
